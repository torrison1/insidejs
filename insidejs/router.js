insideJS.router = Object ();

console.log('Routing...');

insideJS.router.route = function ()
{
    if (insideJS.state.stateData.has_template_system) {
        insideJS_loader.loadScript('app/templates/base_template/init.js');
    }
    else if (insideJS.state.stateData.page == "index") {
        // ???
    }
};

insideJS.router.route();