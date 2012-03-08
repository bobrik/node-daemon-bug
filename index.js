(function() {
	var daemon = require("daemon");
	var http   = require("http");

	function appStarter() {
		http.createServer(function(req, res) {
    		res.end("hello there!");
        }).listen(57000, "localhost", function() {
        	console.log("listening..");
        });
	}

	if (process.argv[2] == "run") {
		return appStarter();
	}

    daemon.daemonize("bug.log", "bug.pid", function() {
        appStarter();
    })
})();