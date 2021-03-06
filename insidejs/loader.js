let insideJS_loader = Object ();

insideJS_loader.isScriptLoaded = function (src)
{
    return document.querySelector('script[src="' + src + '"]') ? true : false;
};

insideJS_loader.loadScript = function(url, callback = function(){}){

    if (!insideJS_loader.isScriptLoaded(url)) {
        var script = document.createElement("script")
        script.type = "text/javascript";

        if (script.readyState){  //IE
            script.onreadystatechange = function(){
                if (script.readyState == "loaded" ||
                    script.readyState == "complete"){
                    script.onreadystatechange = null;
                    callback();
                }
            };
        } else {  //Others
            script.onload = function(){
                callback();
            };
        }

        script.src = url;
        document.getElementsByTagName("head")[0].appendChild(script);
    }

};

insideJS_loader.safe_load = function (obj_name, path) {
    if (typeof insideJS.myApp[obj_name] === 'undefined') {
        insideJS_loader.loadScript(path);
    } else {
        insideJS.myApp[obj_name].init();
    }
};

console.log('Loading...');

insideJS_loader.loadScript('insidejs/init.js');