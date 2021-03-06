console.log('Base Template Loading...');

insideJS.myApp.App_base_template = Object ();

insideJS.myApp.App_base_template.init = function () {

    insideJS_loader.loadScript('app/navigation/init.js');

    let head_code = insideJS.tools.getFile('app/templates/base_template/head.html');
    document.getElementsByTagName('head')[0].innerHTML = head_code;

    let body_template = insideJS.tools.getFile('app/templates/base_template/body_template.html');
    document.getElementsByTagName('body')[0].innerHTML = body_template;

    insideJS.myApp.App_base_template.route();

};

insideJS.myApp.App_base_template.route = function () {

    if (insideJS.state.stateData.page == 'index') {

        insideJS_loader.safe_load('App_main_page', 'app/main_page/init.js');
    }

    if (insideJS.state.stateData.page == 'auth') {

        insideJS_loader.safe_load('App_auth_page', 'app/auth_page/init.js');
    }
};

insideJS.myApp.App_base_template.init();

