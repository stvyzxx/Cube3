function gasCube(){

var value = +(document.getElementById('Gselect').value);
	var quantity = +(document.getElementById('Gquantity').value);		
	var	area = (0.59 * 0.24 * value).toFixed(3);
	var solo = (area/1).toFixed(3);
	var	cube = (area * quantity).toFixed(3);
	cube = cutZero(cube);
	if(isNaN(cube)){
	document.getElementById('innerDisplay').innerHTML ='Допускаються тільки числові значення!';
	}else if(cube == 0){
	document.getElementById('innerDisplay').innerHTML ='Форма не заповнена або введені некоректні дані!';
	}else{
	document.getElementById('innerDisplay').innerHTML ='1 блок газобетону - '+ solo +' м<sup>3</sup>,</br>Об\'\єм '+quantity + ' блоків - '+ cube +' м<sup>3</sup>';
	}
}


function gasArea(){
	var Gwidth = +(document.getElementById('Gwidth').value);
	var Gheight = +(document.getElementById('Gheight').value);
	var Gaperture = +(document.getElementById('Gaperture').value);
	var gasArea = (0.59 * 0.24).toFixed(2); 
	var area =  (Math.ceil(((Gwidth * Gheight) - Gaperture )/ gasArea)).toFixed(0);
	var area2 =  ((Gwidth * Gheight) - Gaperture).toFixed(2);
	area2 = cutZero(area2);
	if(isNaN(area)){
	document.getElementById('innerDisplay').innerHTML ='Допускаються тільки числові значення!';
	}else if(area == 0){
	document.getElementById('innerDisplay').innerHTML ='Форма не заповнена або введені некоректні дані!';
	}else{
	document.getElementById('innerDisplay').innerHTML ='На стіну площею '+ area2 +' м<sup>2</sup> потрібно '+ area +' блоків.';
	}
}

function brickCube(){
	var value = +(document.getElementById('Bselect').value);
	var quantity = +(document.getElementById('Bquantity').value);	
	var	area = (0.25* 0.12 * value).toFixed(3);
	var solo = (area/1).toFixed(3);
	var	cube = (area * quantity).toFixed(3);
	cube = cutZero(cube);
	if(isNaN(cube)){
	document.getElementById('innerDisplay').innerHTML ='Допускаються тільки числові значення!';
	}else if(cube == 0){
	document.getElementById('innerDisplay').innerHTML ='Форма не заповнена або введені некоректні дані!';	
	}else{
	document.getElementById('innerDisplay').innerHTML ='1 цеглина  - '+ solo +' м<sup>3</sup>,</br>Об\'\єм '+quantity + ' шт. - '+ cube +' м<sup>3</sup>';
	}
}


function brickArea(){
	var Bwidth = +(document.getElementById('Bwidth').value);
	var Bheight = +(document.getElementById('Bheight').value);
	var Baperture = +(document.getElementById('Baperture').value);
	var brickArea = (0.25 * 0.12).toFixed(2); 
	var area =  (Math.ceil(((Bwidth * Bheight) - Baperture )/ brickArea)).toFixed(0);
	var area2 =  ((Bwidth * Bheight) - Baperture).toFixed(2);
	area2 = cutZero(area2);
	if(isNaN(area)){
	document.getElementById('innerDisplay').innerHTML ='Допускаються тільки числові значення!';
	}else if(area == 0){
	document.getElementById('innerDisplay').innerHTML ='Форма не заповнена або введені некоректні дані!';	
	}else{
	document.getElementById('innerDisplay').innerHTML ='На стіну площею '+ area2 +' м<sup>2</sup> потрібно '+ area +' цеглин.';
	}
}


function pinoplastCube(){

var value = +(document.getElementById('Pselect').value);
	var quantity = +(document.getElementById('Pquantity').value);	
	var	area = 1 * 0.5 * (value/100);
	var solo = area/1;
	var	cube = (area * quantity).toFixed(3);
	cube = cutZero(cube);
	if(isNaN(cube)){
	document.getElementById('innerDisplay').innerHTML ='Допускаються тільки числові значення!';
	}else if(cube == 0){
	document.getElementById('innerDisplay').innerHTML ='Форма не заповнена або введені некоректні дані!';	
	}else{
	document.getElementById('innerDisplay').innerHTML ='1 лист пінопласту - '+ solo +' м<sup>3</sup></br>Об\'\єм '+quantity + ' листів - '+ cube +' м<sup>3</sup>';
	}
}


function pinoplastArea(){
	var Pwidth = +(document.getElementById('Pwidth').value);
	var Pheight = +(document.getElementById('Pheight').value);
	var Paperture = +(document.getElementById('Paperture').value);
	var pinArea = 0.5;
	var area =  (Math.ceil(((Pwidth * Pheight)- Paperture)/pinArea)).toFixed(0);
	var area2 =  ((Pwidth * Pheight) - Paperture).toFixed(2);
	area2 = cutZero(area2);
	if(isNaN(area)){
	document.getElementById('innerDisplay').innerHTML ='Допускаються тільки числові значення!';
	}else if(area == 0){
	document.getElementById('innerDisplay').innerHTML ='Форма не заповнена або введені некоректні дані!';	
	}else{
	document.getElementById('innerDisplay').innerHTML ='На стіну площею '+ area2 +' м<sup>2</sup> потрібно '+ area +' листів пінопласту.';
	}
}




function eksCube(){

var value = +(document.getElementById('Eselect').value);
	var quantity = +(document.getElementById('Equantity').value);	

	var	area = (0.68 * (value/100)).toFixed(3);
	var solo = area/1;
	var	cube = (area * quantity).toFixed(3);
	cube = cutZero(cube);
	if(isNaN(cube)){
	document.getElementById('innerDisplay').innerHTML ='Допускаються тільки числові значення!';
	}else if(cube == 0){
	document.getElementById('innerDisplay').innerHTML ='Форма не заповнена або введені некоректні дані!';
	}else{
	document.getElementById('innerDisplay').innerHTML ='1 лист пінопласту - '+ solo +'м<sup>3</sup></br>Об\'\єм '+quantity + ' листів - '+ cube +' м<sup>3</sup>';
	}
}


function eksArea(){
	var Ewidth = +(document.getElementById('Ewidth').value);
	var Eheight = +(document.getElementById('Eheight').value);
	var Eaperture = +(document.getElementById('Eaperture').value);
	var EArea = 0.68;
	var area =  (Math.ceil(((Ewidth * Eheight)- Eaperture)/EArea)).toFixed(0);
	var area2 =  ((Ewidth * Eheight) - Eaperture).toFixed(2);
	area2 = cutZero(area2);
	if(isNaN(area)){
	document.getElementById('innerDisplay').innerHTML ='Допускаються тільки числові значення!';
	}else if(area == 0){
	document.getElementById('innerDisplay').innerHTML ='Форма не заповнена або введені некоректні дані!';	
	}else{
	document.getElementById('innerDisplay').innerHTML ='На стіну площею '+ area2 +' м<sup>2</sup> потрібно '+ area +' листів пінопласту.';
	}
}

function cutZero(num){
	var cubeInt = num.toString();
	var done;
	if(cubeInt[cubeInt.length-1] == "0"){
		 done = cubeInt.substring(0, cubeInt.length-1);
		 done = +(done);
		 return done;
	}else{
		return num;
	}
	
}


