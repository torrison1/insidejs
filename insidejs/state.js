insideJS.state = Object();

console.log('State loading!');

insideJS.state.init = function ()
{
    let data = localStorage.getItem('inside_js_state_json');
    if (data) {
        insideJS.state.stateData = JSON.parse(data);
    } else {
        insideJS.state.stateData = {
            "page" : "index",
            "has_template_system" : true,
            "template" : "base_template",
            "redirect" : false
        };
        localStorage.setItem('inside_js_state_json', JSON.stringify(insideJS.state.stateData));
    }
    console.log(insideJS.state.stateData);

    insideJS_loader.loadScript('insidejs/router.js');
};

insideJS.state.reset = function ()
{
    localStorage.setItem('inside_js_state_json', '');
};

insideJS.state.init();
