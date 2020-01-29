function statusChangeCallback(response) {  // Called with the results from FB.getLoginStatus().
    console.log('statusChangeCallback');
    console.log(response);                   // The current login status of the person.
    if (response.status === 'connected') {   // Logged into your webpage and Facebook.
        var uid = response.authResponse.userID;
        var accessToken = response.authResponse.accessToken;
        testAPI();  
    } else {                                 // Not logged into your webpage or we are unable to tell.
        console.log("No hay cuentas vinculadas");
    }
}


function checkLoginState() {               // Called when a person is finished with the Login Button.
    FB.getLoginStatus(function(response) {   // See the onlogin handler
        statusChangeCallback(response);
    });
}

function log_in(){
    FB.login((response) => {
        statusChangeCallback(response);
    });
}

function borrar(){
    FB.logout(function(response) {
        FB.Auth.setAuthResponse(null, 'unknown');
        statusChangeCallback(response);
    });
}



window.fbAsyncInit = function() {
    FB.init({
        appId      : '154658055955741',
        cookie     : true,                     // Enable cookies to allow the server to access the session.
        xfbml      : true,                     // Parse social plugins on this webpage.
        version    : 'v5.0'           // Use this Graph API version for this call.
    });


    FB.getLoginStatus(function(response) {   // Called after the JS SDK has been initialized.
        statusChangeCallback(response);        // Returns the login status.
    });

};


(function(d, s, id) {                      // Load the SDK asynchronously
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));



function testAPI() {

    function img(id){    
        FB.api(
            '/'+ id +'/picture',
            'GET',
            {"redirect":"false"},
            (response) => {
                document.getElementById('img_user').src = response.data.url;
            }
        );
    }


    FB.api('/me', {'fields': 'email, id, first_name, last_name, gender'} ,  function(response) {
        console.log(response);
        let mensaje = "<h4>Nombre: " + response.first_name + "</h4><br>" +
                    "<h4>Apellido: " + response.last_name + "</h4><br>" +
                    "<h4>id: " + response.id + "</h4><br>" +
                    "<h4>email: " + response.email + "</h4><br>";
        document.getElementById('user_info').innerHTML = mensaje;
        img(response.id);
    });
}