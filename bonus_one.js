// The anonymous function below will fire on page load

// Some things to consider
// $.ajax(); to make your requests a little easier. Or the vanilla js way, it's up to you.
// $.on(); for event handling
// Remember, selecting elements in jQuery is like selecting them in CSS
// You'll probably have to manipulate some strings
// some jQuery functions to help display results
// $.show(), $.hide(), $.slideup(), $.slidedown(), $.fadein(), $.fadeout()
// Add content from requests with something like
// $.html(), $.text(), etc.
// keyup events could be helpful to get value of field as the user types
// href: "https://www.google.com/?gws_rd=ssl#q={{display}}",

(function() {
	//var b = "Green Lantern,9Board Games,9Card Games,9".replace(/[^a-zA-Z]+/g,",");
	//document.getElementById("demo2").innerHTML = b;
	// Magic!
	//get data from API
	/*
	var xhr = new XMLHttpRequest();
	xhr.open('GET', encodeURI('http://www.mattbowytz.com/simple_api.json?data=all'));
	xhr.onload = function() {
    	if (xhr.status === 200) {
        	$("#result-container").html(xhr.responseText);
    	}
    	else {
    	    alert('Request failed.  Returned status of ' + xhr.status);
    	}
	};
	xhr.send();
	//return: {"code":8,"status":200,"data":{"interests":["Comic Books","Collecting","Painting","Art","Illustration","Video Games","Playstation 4","Fallout 4","Transformers","Legos","Green Lantern","Board Games","Card Games"],"programming":["PHP","Javascript","HTML","node.js","CSS","SASS","jQuery","MySQL","Git","GitHub","Command Line","Heroku","Atom","Sublime Text","Angular","Ember","MongoDB"]},"info":{"hint":"This is all of the data, you can request \"interests\" or \"programming\" as well."}}
	*/
	
	var xhr = new XMLHttpRequest();
	var arr=[];
	xhr.open('GET', encodeURI('http://www.mattbowytz.com/simple_api.json?data=all'));
	xhr.onload = function() {
    	if (xhr.status === 200) {
        	var a = xhr.responseText;
			a = a.replace(/[^a-zA-Z]+/g, ",");
			arr = a.split(',');
			arr.splice(0,4);
			var num = arr.indexOf("info");
			var lengthleft = arr.length-num;
			arr.splice(num,lengthleft);
    		/*
			var i;
    		for(i = 0; i < arr.length; i++) {
        		$("#demo1").append( arr[i] + '<br/>');
   			}
			*/
			//while(true){
			var lastentry = "";
			$('#inputarea').keyup(function(event) {
				$("#demo1").html("");
				var currentInput = $('#inputarea').val();
   				if( currentInput!= lastentry && currentInput != "") {       
     				var i;
    				for(i = 0; i < arr.length; i++) {
						var temp1=arr[i].toLowerCase();
						var temp2=currentInput.toLowerCase();
						if(temp1.indexOf(temp2) > -1)
        					$("#demo1").append( '<a href="https://www.google.com/?gws_rd=ssl#q=' + arr[i] + '" target="_blank" >'+arr[i]+'</a><br/><br/>');
   					}
   				}
   				lastentry = currentInput;
			});//}
    	}
    	else {
    	    alert('Request failed.  Returned status of ' + xhr.status);
    	}
	};
	xhr.send();
	
	
 //$("#result-container").html(result);
 	/*
	var out = "";
    var i;
    for(i = 0; i < arr.length; i++) {
        $("#demo").append(arr[i] + '<br/>');
    }
	var xhr = new XMLHttpRequest();
	//var arr=[];
	var txt = "";
	var i;
	xhr.open('GET', 'http://www.mattbowytz.com/simple_api.json?data=all',true);
	xhr.onload = function() {
    	if (xhr.status === 200) {
        	var xmlDoc = xhr.responseXML;		
			var x = xmlDoc.getElementsByTagName("data");
			document.getElementById("demo").innerHTML = x.length;
			for (i = 0; i < x.length; i++) {
 				 txt += x[i].childNodes[0].nodeValue + "<br>";
  			}
			//document.getElementById("demo").innerHTML = txt;
    	}
    	else {
    	    alert('Request failed.  Returned status of ' + xhr.status);
    	}
	};
	xhr.send();
	
	var out = "";
    var i;
    for(i = 0; i < arr.length; i++) {
        $("#result-container").append( '<a href="' + arr[i] + '">' + '</a><br>');
    }
	*/
	
	
	console.log('Keepin\'n it clean with an external script!');
})();

function submitCurrent(){
	window.open("https://www.google.com/?gws_rd=ssl#q=" + $('#inputarea').val(), '_blank');
}