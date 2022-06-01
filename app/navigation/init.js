console.log('Navigation Loading...');

let App_navigation = Object ();

App_navigation.go_auth_page = function () {

    insideJS_state.stateData.page = 'auth';
    App_base_template.route();

};

App_navigation.go_main_page = function () {

    insideJS_state.stateData.page = 'index';
    App_base_template.route();

};


