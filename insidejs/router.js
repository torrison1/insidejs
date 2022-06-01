let insideJS_router = Object ();

console.log('Routing...');

insideJS_router.route = function ()
{
    if (insideJS_state.stateData.page == "index") {
        insideJS_loader.loadScript('app/main_page/init.js');
    }
};

insideJS_router.route();