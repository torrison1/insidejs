console.log('Auth Page Loading...');

insideJS.myApp.App_auth_page = Object ();

insideJS.myApp.App_auth_page.init = function () {

    let main_content = insideJS.tools.getFile('app/auth_page/auth_login.html');
    document.getElementById('main_content').innerHTML = main_content;

};

insideJS.myApp.App_auth_page.init();
