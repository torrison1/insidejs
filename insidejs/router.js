let insideJS_router = Object ();

console.log('Routing...');

insideJS_router.route = function ()
{
    if (insideJS_state.stateData.has_template_system) {
        insideJS_loader.loadScript('app/templates/base_template/init.js');
    }
    else if (insideJS_state.stateData.page == "index") {
        // ???
    }
};

insideJS_router.route();