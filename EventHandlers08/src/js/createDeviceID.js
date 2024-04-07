var AdminScreen = window.AdminScreen || {};

(function createDeviceIDScopeWrapper($) {
    var authToken;
    AdminScreen.authToken.then(function setAuthToken(token) {
        if (token) {
            authToken = token;
        } else {
            window.alert("Please Sign in")
            window.location.href = '/sign-in.html';
        }
    }).catch(function handleTokenError(error) {
        alert(error);
        window.location.href = '/sign-in.html';
    });

    $(function onDocReady() {


        $('#createDeviceIDs').click(function (e) { 
            e.preventDefault();

            var lv_Payload = {};

            lv_Payload.CutitronicsBrandID = $('#CutitronicsBrandID').val();
            lv_Payload.DeviceType = $('#DeviceType').val();
            lv_Payload.NumOfDevices = $('#NumOfDevices').val();

            console.log("");
            console.log("Calling fn_createNewDeviceIDs with the following payload");
            console.log(lv_Payload);
            console.log("Successfully read the Payload");

            fn_createNewDeviceIDs(lv_Payload);

        });
        


    })

    function fn_createNewDeviceIDs(lv_Payload) {
        $.ajax({
            method: 'POST',
            url: window._config.api.invokeUrl + 'BrandDevices/createDeviceIDs',
            headers: {
                Authorization: authToken
            },
            dataType: "json",
            contentType: 'application/json',
            success: fn_showNewIDs,
            error: function ajaxError(jqXHR, textStatus, errorThrown) {
                window.alert("Failed to create Device ID's");
                console.error('Error creating device IDs: ', textStatus, ', Details: ', errorThrown);
                console.error('Error calling createDeviceIDs with url: ' + window._config.api.invokeUrl + 'BrandDevices/createDeviceIDs')
            },
            data: JSON.stringify(lv_Payload)
        });
    }


    function fn_showNewIDs(result) {

        //Hide ID form
        $('#DeviceIDForm').fadeOut();
        $('#NewDeviceIDs').fadeIn();

        //Get new ID's from API response and cache new ID table body
        var lv_DeviceIDTbl = $('#DeviceIDTable');
        var lv_NewDeviceIDs = result.ServiceOutput.DeviceIDs;
        var lv_BrandID = result.ServiceOutput.CutitronicsBrandID;


        //Log API Response
        console.log("")
        console.log("Device ID's from API Response:")
        console.log(JSON.stringify(lv_NewDeviceIDs))

        //Display new ID's (option to assign a product?)
        for(let lv_DeviceID of lv_NewDeviceIDs) {

            lv_DeviceIDRow = "<tr>" +
                                "<td>" + lv_DeviceID + "</td>" +
                                "<td>" + lv_BrandID + "</td>" +
                            "</tr>";
            lv_DeviceIDTbl.append(lv_DeviceIDRow);
        }


        // Populate Firmware Select with Available FirmwareID's
    }


}(jQuery));