//internet connection status checker using js. it will check connection status connected or disconnected.
//it will also show ip address and network strength.

//navigator.online to check if internet is connected or not.
//navigator.connection.downlink to check network speed.

//code

//function to check if user is online or not. check after every second.
function statusChecker() {
    if (navigator.onLine) {
        document.getElementById('status').innerHTML = "Connected";
        
    } else {
        document.getElementById('status').innerHTML = "Disconnected";
        
    }
}
setInterval(statusChecker, 1000);
statusChecker();

//get ip address using api json data
function getIpAddress() {
    fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
      document.getElementById('ip').innerHTML = data.ip;
    })
    .catch(error => {
      document.getElementById('ip').innerHTML = error;
    });
    }
    setInterval(getIpAddress, 1000);
    getIpAddress();

    //check network strength.
    function checkNetworkStrength() {
        if (navigator.onLine) {
            var internetSpeed = navigator.connection.downlink;
            document.getElementById('strength').innerHTML = `${internetSpeed} mb/s`;
        } else {
            document.getElementById('strength').innerHTML = "No internet";   
        }
      
        /* if (navigator.connection.downlink < 5) {
            document.getElementById('strength').innerHTML = 'bad connection';
        } else {
            document.getElementById('strength').innerHTML = 'good connection';
        }*/

        }
        setInterval(checkNetworkStrength, 1000);
        checkNetworkStrength();



        // we can also get ip address using the following ipify api method. gotoipify.org and copy 
        // code in first box (ipv4). 
        // fetch('https://api.ipify.org?format=json')
        // .then(response => response.json())
        // .then(data => {
            //   document.getElementById('ip').innerHTML = data.ip;
            // })
            // .catch(error => {
                //   document.getElementById('ip').innerHTML = error;
                // });
                // setInterval(() => {
                    //   fetch('https://api.ipify.org?format=json')
                    //   .then(response => response.json())
                    //   .then(data => {
                        //     document.getElementById('ip').innerHTML = data.ip;
                        // })
                        // .catch(error => {
                            //     document.getElementById('ip').innerHTML = error;
                            // });
                            // }, 1000);
                            // }
                            // function getIpAddress() {
                            //   fetch('https://api.ipify.org?format=json')
                            //   .then(response => response.json())
                            //   .then(data => {
                                //     document.getElementById('ip').innerHTML = data.ip;
                                // })
                                // .catch(error => {
                                    //     document.getElementById('ip').innerHTML = error;
                                    // });
                                    // }
                                    // setInterval(getIpAddress, 1000);
                                    // getIpAddress();


