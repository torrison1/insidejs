console.log('Main Page Loading...');

insideJS.myApp.App_main_page = Object ();

insideJS.myApp.App_main_page.init = function () {

    let main_content = insideJS.tools.getFile('app/main_page/index.html');
    document.getElementById('main_content').innerHTML = main_content;

};

insideJS.myApp.App_main_page.init();

