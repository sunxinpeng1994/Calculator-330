var zero=0;
var decimal=false;
var hasnumber=false;
var neg=true;
var firstnum=false;
var pl=false;
var mu=false;
var di=false;
var mi=false;
var isOp = false;

var first=0;
var second=0;
var result=0;

var op=document.getElementById("operend");
var C1=document.getElementById("C");
var num=document.getElementById("number");
var dec=document.getElementById("decimal");
var pm=document.getElementById("pm");
var plus=document.getElementById("+");
var minus=document.getElementById("-");
var mul=document.getElementById("*");
var div=document.getElementById("/")	;
var equal=document.getElementById("e");


C1.onclick=function(event){
	num.innerHTML=zero;
	hasnumber=false;
	decimal=false;
	op.innerHTML="";
	firstnum=false;
	neg=false;
}; 

for(var i = 0; i < 10; i++){
	document.getElementById("n" + i).onclick = function(event){
		
		isOp = false;

		if(hasnumber == false && event.target.id.substring(1) != "0") {
			num.innerHTML = "";
			hasnumber = true;
		}
		if(hasnumber == true) {
			num.innerHTML += event.target.id.substring(1);
		}
	};
}

dec.onclick=function(event){
	if(!decimal){
		num.innerHTML+=".";
		decimal=true;
	}
}

pm.onclick=function(event){
	if(hasnumber){
		if(neg)
		num.innerHTML=num.innerHTML.substring(1);
		else
		num.innerHTML="-"+num.innerHTML;
		neg = !neg;
	}
}

function calc(a, b) {
	switch(op.innerHTML) {
		case "+":
			return a + b;
		case "-":
			return a - b;
		case "*":
			return a * b;
		case "/":
			return a / b;
	}
}


plus.onclick=function(event){
	if(!isOp) {
		isOp = true;
	
		if(!firstnum){
			first=parseFloat(num.innerHTML);
			firstnum=true;
			hasnumber=false;
		}
		else{
			second=parseFloat(num.innerHTML);
			result = calc(first, second);
			num.innerHTML=result;
			hasnumber=false;
			first=result;
		}
	}
	op.innerHTML="+";
	pl=true;
}

minus.onclick=function(event){
	if(!isOp) {
		isOp = true;
	
		if(!firstnum){
			first=parseFloat(num.innerHTML);
			firstnum=true;
			hasnumber=false;
		}
		else{
			second=parseFloat(num.innerHTML);
			result = calc(first, second);
			num.innerHTML=result;
			hasnumber=false;
			first=result;
		}
	}
	mi=true;
	op.innerHTML="-";
}

mul.onclick=function(event){
	if(!isOp) {
		isOp = true;
		if(!firstnum){
			first=parseFloat(num.innerHTML);
			firstnum=true;
			hasnumber=false;
		}
		else{
			second=parseFloat(num.innerHTML);
			result = calc(first, second);
			num.innerHTML=result;
			hasnumber=false;
			first=result;
		}
	}
	mu=true;
	op.innerHTML="x";
}

div.onclick=function(event){

	if(!isOp) {
		isOp = true;
		if(!firstnum){
			first=parseFloat(num.innerHTML);
			firstnum=true;
			hasnumber=false;
		}
		else{
			second=parseFloat(num.innerHTML);
			result = calc(first, second);
			num.innerHTML=result;
			hasnumber=false;
			first=result;
		}
	}

	di=true;
	op.innerHTML= "/";
}

equal.onclick=function(event){
		isOp = false;

		second=parseFloat(num.innerHTML);
		if(pl){
			num.innerHTML=first+second;
			pl=false;
		}
		else if(mu){
			num.innerHTML=first*second;
			mu=false;
		}
		else if(di){
			if(second==0)
				num.innerHTML="not a number";
			else
			num.innerHTML=first/second;
			di=false;
		}
		else if(mi){
			num.innerHTML=first-second;
			mi=false;
		}
		op.innerHTML="";
		hasnumber=false;	
		firstnum=false;	
		decimal=false;
}

