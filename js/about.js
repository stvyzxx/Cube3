
function About(){
	this.element = document.createElement('div');
	this.element.className = 'about';
}

About.prototype.show = function(){
	document.body.appendChild(this.element);
}


About.prototype.hide = function(){
	document.body.removeChild(this.element);
}

About.prototype.setContent = function(html) {
  this.element.innerHTML = html;
}

var about = new About();

var html =  '<div id="modal"><div id="closeIcon"><a href="#" onclick="about.hide()"><img id="imgClose" src="images/close-icon30px.png" alt="closeIcon" border="0"></a></div><h3><img src="images/logo.png" alt="logo"></h3><p class="modalP">Програма "Cube3" створена для обчислень необхідної кількості будівельних матеріалів \(\цегла, газоблоки, пінопласт і т.д.\)\, за вказаними параметрами, а також їхій об\'\єм</p><div class="copyrightAbout">"Cube3" v2.0 - 2015</div></div>';
about.setContent(html);