console.log('Main Page Loading...');

let App_main_page = Object ();

App_main_page.init = function () {

    let main_content = insideJS_tools.getFile('app/main_page/index.html');
    document.getElementById('main_content').innerHTML = main_content;

};

App_main_page.init();

