var AdminScreen = window.AdminScreen || {};
var Globals = {};

(function getCutitronicsBrandsWrapper($) {
    var authToken;
    AdminScreen.authToken.then(function setAuthToken(token) {
        if (token) {
            authToken = token;
        } else {
            window.alert("Please sign in")
            window.location.href = '/sign-in.html';
        }
    }).catch(function handleTokenError(error) {
        alert(error);
        window.location.href = '/sign-in.html';
    });

    function fn_DisplayBrands(result){

        //Get cutitronics brands from result
        var lv_CutitronicsBrands = result.ServiceOutput.CutitronicsBrands

        var lv_BrandSelectObj = $('#CutitronicsBrandID')

        for(let lv_Brand of lv_CutitronicsBrands) {
            //FIXME Testing only
            console.log(lv_Brand)

            lv_BrandSelectHTML = "<option value='" + lv_Brand.CutitronicsBrandID + "'> " + lv_Brand.BrandName +"  </option>"
            lv_BrandSelectObj.append(lv_BrandSelectHTML);
        }
    }
    
    $(function onDocReady() {

        //Get Brand Details
        $.ajax({
            type: 'GET',
            url: "https://kccd03v2sc.execute-api.eu-west-2.amazonaws.com/Dev/SystemAdmin/getCutitronicsBrands", //"https://ptp5i8n271.execute-api.eu-west-1.amazonaws.com/Dev/SystemAdmin/getCutitronicsBrands",
            headers: {
                Authorization: authToken
            },
            success: fn_DisplayBrands,
            error: function ajaxError(jqXHR, textStatus, errorThrown) {
                console.error('Error getting cutitronics brands: ', textStatus, ', Details: ', errorThrown);
                console.error('Response: ', jqXHR.responseText);
            }
        })
        
    })

    

}(jQuery));