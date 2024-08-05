//your JS code here. If required.

let angle = 0;

let line = document.getElementById("line");

 let intervalId = setInterval(() =>{
	angle += 2;
    line.style.transform = `rotate(${angle}deg)`;
},20);


