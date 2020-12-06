var mainProcedure = function () {
				console.log("Working!");
				var nameText = document.getElementById("name").value;
				document.getElementById("nameBox").innerHTML = nameText;
				document.getElementById("cake").style.display = "block";
				document.body.style.backgroundColor = "yellow";		
				document.getElementById("clickAway").innerHTML = "Click away!";	
				document.getElementById("pageTitle").style.fontStyle = "italic";
				document.getElementById("list").style.fontWeight = "bold";
				document.getElementById("pageTitle").style.fontSize = 40 + "px";

				}

			//This isn't my code. I was confused so I looked on the internet. I have read it so I can 
			//understand it better.
			var cookies = 0;
				var addCookies = 100;
				function Add() {
				cookies = cookies + addCookies;
				document.getElementById("scoreID").innerHTML = cookies;
				console.log("cookieWorking!");
				var val = (parseInt(document.getElementById('cake').style.left, 10) || 0) + 50;
    			document.getElementById('cake').style.left = val + 'px';
				}

			//INPUT
				document.getElementById("startButton").onclick = mainProcedure;
				document.getElementById("name").onchange = mainProcedure;