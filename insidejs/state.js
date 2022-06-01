let insideJS_state = Object ();

console.log('State loading!');

insideJS_state.init = function ()
{
    let data = localStorage.getItem('inside_js_state_json');
    if (data) {
        insideJS_state.stateData = JSON.parse(data);
    } else {
        insideJS_state.stateData = {
            "page" : "index",
            "redirect" : false
        };
        localStorage.setItem('inside_js_state_json', JSON.stringify(insideJS_state.stateData));
    }
    console.log(insideJS_state.stateData);

    insideJS_loader.loadScript('insidejs/router.js');
};

insideJS_state.reset = function ()
{
    localStorage.setItem('inside_js_state_json', '');
};

insideJS_state.init();
