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

    function uploadS3Bucket(lv_BucketInput) {
        $.ajax({
            type: 'POST',
            url: "https://kccd03v2sc.execute-api.eu-west-2.amazonaws.com/Dev" + "/uploadFirmwareS3",
            //"https://2dcklhm4rj.execute-api.eu-west-1.amazonaws.com/prod" + "/uploadFirmwareS3",
            //"https://kccd03v2sc.execute-api.eu-west-2.amazonaws.com/Dev/SystemAdmin"
            headers: {
                Authorization: authToken
            },
            processData: false,
            contentType: 'application/json',
            success: completeFileUpload,
            error: handleAPIError,
            data: JSON.stringify(lv_BucketInput)
        });
    }

    function completeFileUpload(result){
        console.log("File Uploaded to s3 Bucket Successfully");
        window.alert("New firmware file successfully uploaded");
        console.log(result);
        window.location.href = '/index.html';

    }

    function handleAPIError(jqXHR, textStatus, errorThrown){

        lv_APIResponse = jQuery.parseJSON(jqXHR.responseText);

        console.error('Error posting firmware to s3 bucket: ', textStatus, ', Details: ', errorThrown);
        console.error('Response: ', lv_APIResponse);
        
        alert("Error calling the API: " + lv_APIResponse.ErrorDesc);
        //redirect to firmware-upload page
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

            //Strip up until first ','
            var splitData = data.split(',');

            console.log("DeviceHardwareVersion: " + $('#DeviceHardwareVersion').val());
            console.log("DeviceFirmwareVersion: " + $('#DeviceFirmwareVersion').val());

            var lv_BucketInput = {
                CutitronicsBrandID:$('#CutitronicsBrandID').val(),
                DeviceModel:$('#DeviceModel').val(),
                CutitronicsFirmwareID:$('#CutitronicsFirmwareID').val(),
                DeviceHardwareVersion:$('#DeviceHardwareVersion').val(),
                DeviceFirmwareVersion:$('#DeviceFirmwareVersion').val(),
                DeviceVersion:$('#DeviceVersion').val(),
                BucketLocation:lv_FirmwareFile.name,
                FileContent: splitData[1]
            }

            uploadS3Bucket(lv_BucketInput);

        };
        fileReader.readAsDataURL($('#S3BucketLocation').prop('files')[0]);
    }
}(jQuery));

