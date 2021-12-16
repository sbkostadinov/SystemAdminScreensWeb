var AdminScreen = window.AdminScreen || {};

(function uploadFirmwareScopeWrapper($) {
    var authToken;

    AdminScreen.authToken.then(function setAuthToken(token) {
        if (token) {
            authToken = token;
        } else {
            window.alert("Please sign in");
            window.location.href = '/sign-in.html';
        }
    }).catch(function handleTokenError(error) {
        alert(error);
        window.location.href = '/sign-in.html';
    });
    function uploadFirmware(lv_FormData) {
        
        $.ajax({
            type: 'POST',
            url: "https://kccd03v2sc.execute-api.eu-west-2.amazonaws.com/Dev" + "/uploadFirmware", //"https://2dcklhm4rj.execute-api.eu-west-1.amazonaws.com/prod" + "/uploadFirmware",
            // "https://kccd03v2sc.execute-api.eu-west-2.amazonaws.com/Dev/SystemAdmin"
            headers: {
                Authorization: authToken
            },
            dataType: 'json',
            contentType: 'application/json',
            success: completeRequest,
            error: function ajaxError(jqXHR, textStatus, errorThrown) {
                console.error('Error posting firmware: ', textStatus, ', Details: ', errorThrown);
                console.error('Response: ', jqXHR.responseText);
                alert('An error occured when calling the API:\n' + jqXHR.responseText);
            },
            data: JSON.stringify(lv_FormData)
        });

    }
    function uploadS3Bucket(lv_BucketInput) {
        $.ajax({
            type: 'POST',
            url: "https://kccd03v2sc.execute-api.eu-west-2.amazonaws.com/Dev" + "/uploadFirmwareS3", //"https://2dcklhm4rj.execute-api.eu-west-1.amazonaws.com/prod" + "/uploadFirmwareS3",
            headers: {
                Authorization: authToken
            },
            processData: false,
            contentType: 'application/json',
            success: completeFileUpload,
            error: function ajaxError(jqXHR, textStatus, errorThrown) {
                console.error('Error posting firmware to s3 bucket: ', textStatus, ', Details: ', errorThrown);
                console.error('Response: ', jqXHR.responseText);
                alert('An error occured when calling the API:\n' + jqXHR.responseText);
            },
            data: JSON.stringify(lv_BucketInput)
        });
    }
    function completeFileUpload(result){
        console.log("File Uploaded to s3 Bucket Successfully");
    }
    function completeRequest(result){
        console.log("Completed back office request");
        //window.location.href = '/new-firmware.html';
    }
    $(function onDocReady() {
        $('#request').click(handleRequestClick);
        
    });
    function handleRequestClick(event) {
        
        event.preventDefault();
        var lv_FirmwareFile = $('#S3BucketLocation')[0].files[0];

        var fileReader = new FileReader();
        fileReader.onload = function (e) {
            var data = fileReader.result;
            var lv_BucketInput = {
                "FileName": lv_FirmwareFile.name,
                "FileContent": btoa(data)
            }
            uploadS3Bucket(lv_BucketInput);

        };
        fileReader.readAsBinaryString($('#S3BucketLocation').prop('files')[0]);
        

        //Get Form data for DB Fields 
        var lv_formData = {
            CutitronicsBrandID:$('#CutitronicsBrandID').val(),
            DeviceModel:$('#DeviceModel').val(),
            CutitronicsFirmwareID:$('#CutitronicsFirmwareID').val(),
            DeviceHardwareVersion:$('#DeviceHardWareVersion').val(),
            DeviceFirmwareVersion:$('#DeviceFirmwareVersion').val(),
            DeviceVersion:$('#DeviceVersion').val(),
            S3BucketLocation:lv_FirmwareFile.name
        }

        //Insert data into DB & Flag Available Update
        //uploadFirmware(lv_formData);
    }
}(jQuery));