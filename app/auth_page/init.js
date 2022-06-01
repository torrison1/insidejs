console.log('Auth Page Loading...');

let App_auth_page = Object ();

App_auth_page.init = function () {

    let main_content = insideJS_tools.getFile('app/auth_page/auth_login.html');
    document.getElementById('main_content').innerHTML = main_content;

};

App_auth_page.init();
