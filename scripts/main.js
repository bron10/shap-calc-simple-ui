
function Shapes(){
	this.selectedShape;
	this.selectedShapeElement;
	this.initTabs(0);
}

Shapes.prototype.initTabs = function(n){
	// This function will display the specified tab of the form ...
  	const tabElements 			= document.getElementsByClassName('tab');
  	const tabLength 			= tabElements.length;
	if(!n){
		this.selectedShape  		= null;
		this.selectedShapeElement 	= null; 
	}

	// Select tab
	for(let index=0;index<tabLength;index++){
		if(index==n)
			tabElements.item(index).style.display = "block";
		else
			tabElements.item(index).style.display = "none";
	}		
}

Shapes.prototype.getShape = function(){
	this.initTabs(1);
	let shapes = document.getElementsByName('shape');
	
	let shapeInputs 			= document.getElementsByClassName('shapeInputs');
	let shapeInputslength 		= shapeInputs.length;

	for (let i = 0; i < shapes.length; i++) {
		let shape = shapes[i];
		if(shape.checked){
			this.selectedShape = shape.value;
		}
	}
	
	this.selectedShapeElement 	= document.getElementById(this.selectedShape);
	let shapeParameters = this.selectedShapeElement.getElementsByTagName('input');
	
	for (let i = 0; i < shapeInputslength; i++) {
		let shapeInput = shapeInputs[i];
		//console.log("shapeInputs==selectedShapeElement", shapeInputs, selectedShapeElement)
		if(shapeInput==this.selectedShapeElement){
			shapeInput.style.display = "block";
		}else{
			shapeInput.style.display = "none";
		}
	}
	this.shapePlaceHolders();
}

Shapes.prototype.getShapeInputs = function(){
	//selectedShapeElement 	= document.getElementById(this.selectedShape);
	let shapeParameters = this.selectedShapeElement.getElementsByTagName('input');
	//console.log("selectedShape", this.selectedShape);
	if(_M[this.selectedShape]){
		result = _M[this.selectedShape](shapeParameters);
	}
	document.getElementById('set-result').innerHTML = result;
	this.initTabs(2);
	//this.shapePlaceHolders();
}

Shapes.prototype.shapePlaceHolders = function(){
	const placeholders = document.getElementsByClassName('placeholder');
	for (var i = 0; i < placeholders.length; i++) {
		let placeholder = placeholders[i];
		placeholder.innerHTML = this.selectedShape; 
	}
}

Shapes.prototype.startOver = function(){
	console.log("this.selectedShapeElement", this.selectedShapeElement);
	if(this.selectedShapeElement){
		let shapeParameters = this.selectedShapeElement.getElementsByTagName('input');
		console.log("shapeParameters", shapeParameters);
		for (var i = 0; i < shapeParameters.length; i++) {
			let shapeParameter = shapeParameters[i];
			shapeParameter.value = ""; 
		}		
	}
	this.initTabs(0);
}

window._S = new Shapes();


function showTab(n) {
  // This function will display the specified tab of the form ...
  const tabElements = document.getElementsByClassName('tab');
  	
  const tabLength = tabElements.length;

  /**
   * Select tab
   */
  for(let index=0;index<tabLength;index++){
  	if(index==n)
  		tabElements.item(index).style.display = "block";
  	else
  		tabElements.item(index).style.display = "none";
  }

	let shapes = document.getElementsByName('shape');
	//console.log("shapes.elements", shapes);
	let selectedShape = null;

	/**
	 * Select shape
	 */
	for (let i = 0; i < shapes.length; i++) {
		let shape = shapes[i];
		if(shape.checked){
			selectedShape = shape.value;
		}
	}

	/**
	 * Second tab shape input parameters logic
	 */
	let shapeInputs 			= document.getElementsByClassName('shapeInputs');
	let selectedShapeElement 	= document.getElementById(selectedShape);
	let shapeInputslength 		= shapeInputs.length;
	for (let i = 0; i < shapeInputslength; i++) {
		let shapeInput = shapeInputs[i];
		//console.log("shapeInputs==selectedShapeElement", shapeInputs, selectedShapeElement)
		if(shapeInput==selectedShapeElement){
			shapeInput.style.display = "block";
		}else{
			shapeInput.style.display = "none";
		}
	}

	/**
	 * Setting placeholder for shapes
	 */
	const placeholders = document.getElementsByClassName('placeholder');
	 //= selectedShape;
	for (var i = 0; i < placeholders.length; i++) {
		let placeholder = placeholders[i];
		placeholder.innerHTML = selectedShape; 
	}

	//console.log("document.getElementsByClassName('placeholder')", document.getElementsByClassName('placeholder'))

	/**
	 * Setting result
	 */
	let shapeParameters = selectedShapeElement.getElementsByTagName('input');


	console.log("selectedShape", selectedShape);
	if(shape[selectedShape]){
		console.log("got shaped")
		result = shape[selectedShape](shapeParameters);
	}
	document.getElementById('set-result').innerHTML =result;
	console.log("result", result);

}
//showTab(0)


function startOver(){
	showTab(0);
}


