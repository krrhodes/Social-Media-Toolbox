// Follow all of an account's followers

// The wake lock sentinel.
let wakeLock = null;

// Function that attempts to request a wake lock.
const requestWakeLock = async () => {
  try {
    wakeLock = await navigator.wakeLock.request('screen');
    wakeLock.addEventListener('release', () => {
      console.log('Wake Lock was released');
    });
    console.log('Wake Lock is active');
  } catch (err) {
    console.error(`${err.name}, ${err.message}`);
  }
};
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
