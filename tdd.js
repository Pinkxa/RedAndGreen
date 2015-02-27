var assert = {
	i:0,
	pass:0,

	equals:function (message, results, newmsg) {

		var Pretza = document.createElement("div");
		Pretza.id = "Pretza" + this.i;
		Pretza.style.height = "300px";
		Pretza.style.width = "300px";
		Pretza.style.border = "5px solid black";
		Pretza.style.display = "inline-block";

		document.body.appendChild(Pretza);

        var rg = new RedOrGreen(Pretza.id);

        if (message === results) {
	    Pretza.innerHTML = newmsg;
	    rg.makeGreen();
	    this.pass ++;
     }
        else {
	    Pretza.innerHTML = newmsg;
	    rg.makeRed();
     }

        this.i ++;
     }
  }

     var TestMyCode = {
	    run: function(name, assertTest) {
	    this.name = name;
	    assertTest(assert);
     }
 }

function results () {
	var pree = document.createElement("p");
	document.body.appendChild(pree);
	pree.innerHTML = "Number of passed tests is " + assert.pass + " out of " + assert.i;
}