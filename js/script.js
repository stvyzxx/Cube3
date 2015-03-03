
function switcher(val){
	var pinoplast = document.getElementById('pinoplast');
	var eksPinoplast = document.getElementById('eksPinoplast');
	var gazobeton = document.getElementById('gazobeton');
	var brick = document.getElementById('brick');
	var pinLink = document.getElementById('pinLink');
	var eksPinLink = document.getElementById('eksPinLink');
	var brickLink = document.getElementById('brickLink');
	var gasLink = document.getElementById('gasLink');
	
	if(val == 'pin'){
		pinoplast.style.display ='block';
		eksPinoplast.style.display ='none';
		gazobeton.style.display ='none';
		brick.style.display ='none';
		
		pinLink.classList.add('activeTab');
		eksPinLink.classList.remove('activeTab');
		brickLink.classList.remove('activeTab');
		gasLink.classList.remove('activeTab');

	}else if(val == 'eksPin'){
		pinoplast.style.display ='none';
		eksPinoplast.style.display ='block';
		gazobeton.style.display ='none';
		brick.style.display ='none';
		
		pinLink.classList.remove('activeTab');
		eksPinLink.classList.add('activeTab');
		brickLink.classList.remove('activeTab');
		gasLink.classList.remove('activeTab');
		
	}else if(val == 'gas'){
		pinoplast.style.display ='none';
		eksPinoplast.style.display ='none';
		gazobeton.style.display ='block';
		brick.style.display ='none';
		
		pinLink.classList.remove('activeTab');
		eksPinLink.classList.remove('activeTab');
		brickLink.classList.remove('activeTab');
		gasLink.classList.add('activeTab');
		
	}else if(val == 'brick'){
		pinoplast.style.display ='none';
		eksPinoplast.style.display ='none';
		gazobeton.style.display ='none';
		brick.style.display ='block';
		
		pinLink.classList.remove('activeTab');
		eksPinLink.classList.remove('activeTab');
		brickLink.classList.add('activeTab');
		gasLink.classList.remove('activeTab');
		
	}
}

function resetForm(){
	document.getElementById('innerDisplay').innerHTML = 'Форма очищена!';

}

function onResetClick(){
	$(".reset").click();
}

function radio(val){
			var cubeBlock = 	document.getElementsByClassName('cubeForm');
			var areaBlock = 	document.getElementsByClassName('areaForm');
	if(val == 'cubeForm'){
		for(var i=0; i<cubeBlock.length; i++){
			cubeBlock[i].style.display = 'block';
			areaBlock[i].style.display = 'none';
		}
	}else if(val == 'areaForm'){		
		for(var k=0; k<areaBlock.length; k++){
			cubeBlock[k].style.display = 'none';
			areaBlock[k].style.display = 'block';
		}
	}
}


$("h1,h2,h3,h4,p,span,label,li, #innerDisplay").bind('selectstart mousedown',function(){return false;});
		$("h1,h2,h3,h4,p,span,label,li, #innerDisplay").on('mousemove',function(){
			if (window.getSelection) {
				window.getSelection().removeAllRanges();
			} else { 
				document.selection.empty();
			}
		});


