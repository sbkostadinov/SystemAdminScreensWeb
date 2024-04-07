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


        $('#createCartIDs').click(function (e) { 
            e.preventDefault();

            var lv_Payload = {};

            lv_Payload.CutitronicsBrandID = $('#CutitronicsBrandID').val();
            lv_Payload.NumOfCartridges = $('#NumOfCarts').val();

            console.log("");
            console.log("Calling fn_createNewDeviceIDs with the following payload");
            console.log(lv_Payload);
            console.log("Successfully read the Payload");

            fn_createNewCartIDs(lv_Payload);

        });
        


    })

    function fn_createNewCartIDs(lv_Payload) {
        $.ajax({
            method: 'POST',
            url: 'https://kccd03v2sc.execute-api.eu-west-2.amazonaws.com/Dev/SystemAdmin/BrandCartridges/createCartridgeIDs', //'https://kccd03v2sc.execute-api.eu-west-2.amazonaws.com/Dev/SystemAdmin/BrandCartridges/createCartridgeIDs', //"https://ptp5i8n271.execute-api.eu-west-1.amazonaws.com/Dev/SystemAdmin/BrandCartridges/createCartridgeIDs",
            // url: window._config.api.invokeUrl + 'BrandCartidges/createCartridgeIDs',
            headers: {
                Authorization: authToken
            },
            dataType: "json",
            contentType: 'application/json',
            success: fn_showNewIDs,
            error: function ajaxError(jqXHR, textStatus, errorThrown) {
                window.alert("Failed to create Cartridge ID's");
                console.error("Error when calling createCartIDs with url:  " + window._config.api.invokeUrl + 'BrandCartidges/createCartridgeIDs')
                console.log(jqXHR.responseText);
                console.error('Error creating cartridge IDs: ', textStatus, ', Details: ', errorThrown);
              
            },
            data: JSON.stringify(lv_Payload)
        });
    }


    function fn_showNewIDs(result) {

        //Hide ID form
        $('#CartIDForm').fadeOut();
        $('#NewCartIDs').fadeIn();

        //Get new ID's from API response and cache new ID table body
        var lv_CartIDTbl = $('#CartIDTable');
        var lv_NewCartIDs = result.ServiceOutput.CutitronicsCartIDs;
        var lv_BrandID = result.ServiceOutput.CutitronicsBrandID;


        //Log API Response
        console.log("")
        console.log("Device ID's from API Response:")
        console.log(JSON.stringify(lv_NewCartIDs))

        //Display new ID's (option to assign a product?)
        for(let lv_CartID of lv_NewCartIDs) {

            lv_CartIDRow = "<tr>" +
                                "<td>" + lv_CartID + "</td>" +
                                "<td>" + lv_BrandID + "</td>" +
                            "</tr>";
            lv_CartIDTbl.append(lv_CartIDRow);
        }


        // Populate Firmware Select with Available FirmwareID's
    }


}(jQuery));