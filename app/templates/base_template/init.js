console.log('Base Template Loading...');

let App_base_template = Object ();

App_base_template.init = function () {

    insideJS_loader.loadScript('app/navigation/init.js');

    let head_code = insideJS_tools.getFile('app/templates/base_template/head.html');
    document.getElementsByTagName('head')[0].innerHTML = head_code;

    let body_template = insideJS_tools.getFile('app/templates/base_template/body_template.html');
    document.getElementsByTagName('body')[0].innerHTML = body_template;

    App_base_template.route();

};

App_base_template.route = function () {

    if (insideJS_state.stateData.page == 'index') {

        if (typeof App_main_page === 'undefined') {
            insideJS_loader.loadScript('app/main_page/init.js');
        } else {
            App_main_page.init();
        }

    }

    if (insideJS_state.stateData.page == 'auth') {

        if (typeof App_auth_page === 'undefined') {
            insideJS_loader.loadScript('app/auth_page/init.js');
        } else {
            App_auth_page.init();
        }

    }
};

App_base_template.init();

