console.log('Navigation Loading...');

let App_navigation = Object ();

App_navigation.go_auth_page = function () {

    insideJS.state.stateData.page = 'auth';
    insideJS.myApp.App_base_template.route();

};

App_navigation.go_main_page = function () {

    insideJS.state.stateData.page = 'index';
    insideJS.myApp.App_base_template.route();

};


