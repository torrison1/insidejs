console.log('Main Page Loading...');

let App_main_page = Object ();

console.log('State loading!');

App_main_page.init = function () {

    let head_code = insideJS_tools.getFile('app/main_page/head.html');
    document.getElementsByTagName('head')[0].innerHTML = head_code;

    let body_template = insideJS_tools.getFile('app/main_page/body_template.html');
    document.getElementsByTagName('body')[0].innerHTML = body_template;

    let main_content = insideJS_tools.getFile('app/main_page/index.html');
    document.getElementById('main_content').innerHTML = main_content;

};

App_main_page.init();

