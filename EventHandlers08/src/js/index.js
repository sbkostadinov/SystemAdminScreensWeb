var AdminScreen = window.AdminScreen || {};

(function indexScopeWraper($) {
    var authToken;
    var lv_authAlert = document.getElementById('sign-in-alert');
    AdminScreen.authToken.then(function setAuthToken(token) {
        if (token) {
            lv_authAlert.style.display = "none"
            authToken = token;
        } else {
            window.alert("Please Sign in")
            lv_authAlert.style.display = "block"
            window.location.href = '/sign-in.html';
        }
    }).catch(function handleTokenError(error) {
        alert(error);
        window.location.href = '/sign-in.html';
    });
}(jQuery));