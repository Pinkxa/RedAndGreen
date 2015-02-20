(function () {
var count = 1;

document.getElementById("button1").addEventListener('click',function() {
	count++;
	if(count%2 === 0) {
		document.getElementById("sqr").style.backgroundColor = "red";
		document.getElementById("button1").innerHTML = "Make Green";
	}

	  else {
	  	document.getElementById("sqr").style.backgroundColor = "green";
		document.getElementById("button1").innerHTML = "Make red";
	  }
  });
})();