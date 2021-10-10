// Lock computer from going to sleep
let wakeLock = null;
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
requestWakeLock()

// Instagram: Follow all of an account's followers
function followFollowers() {
        var arr = document.getElementsByClassName("sqdOP  L3NKy   y3zKF     ");
        var count = 0;
        while (count <= 160) {
          for (var i = 1, len = arr.length; i < len; i++) {
            arr[i].click();
            count = count + 1;
          }

          var scroll_stuff = document.getElementsByClassName("isgrP")[0];
          scroll_stuff.scrollTop = scroll_stuff.scrollTop + 200; 
        }
    }
followFollowers()
setInterval(followFollowers, 360000);
