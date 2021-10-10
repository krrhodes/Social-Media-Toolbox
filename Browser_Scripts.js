// Follow all of an account's followers
setInterval(
    function(){
        var arr = document.getElementsByClassName("sqdOP  L3NKy   y3zKF     ");

        for (var i = 1, len = arr.length; i < len; i++) {
            arr[i].click();
        }

        var scroll_stuff = document.getElementsByClassName("isgrP")[0];
        scroll_stuff.scrollTop = scroll_stuff.scrollTop + 200; 
    }
, 600000);
