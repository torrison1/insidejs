console.log('JS Tools Adding...');

let insideJS_tools = Object ();


insideJS_tools.forceSWupdate = function () {
    if ('serviceWorker' in navigator) {
        caches.keys().then(function(cacheNames) {
            cacheNames.forEach(function(cacheName) {
                caches.delete(cacheName);
            });
        });
    }
    setTimeout(function(){
        alert('App Updated!');
        localStorage.removeItem('ttexts_data');
        window.location.reload(true);
    }, 700);
};

// Debug Function
insideJS_tools.dump_alert = function (obj) {
    let out = "";
    if(obj && typeof(obj) == "object"){
        for (var i in obj) {
            out += i + ": " + obj[i] + "\n";
        }
    } else {
        out = obj;
    }
    alert(out);
};

insideJS_tools.dump_log = function (obj) {
    let out = "";
    if(obj && typeof(obj) == "object"){
        for (var i in obj) {
            out += i + ": " + obj[i] + "\n";
        }
    } else {
        out = obj;
    }
    console.log(out);
};

insideJS_tools.getFile = function (U) {
    var X = new XMLHttpRequest();
    X.open('GET', U, false);
    X.send();
    return X.responseText;
};