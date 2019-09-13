export function throttle (callback) {
    var IoNow = 0;
    return ()=> {
        var lastIoNow = new Date().getTime();
        if(lastIoNow - IoNow >300){
            callback();
            IoNow = new Date().getTime();
        }
    }
}


