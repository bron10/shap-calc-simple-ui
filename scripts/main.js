const shape = {
	rectangle(shapeInputs){
		return shapeInputs[0].value * shapeInputs[1].value;
	},
	circle(shapeInputs){
		let radius = (shapeInputs[0].value)/2; 
		return Math.PI*(radius*radius);
	},
	square(shapeInputs){
		return shapeInputs[0].value*shapeInputs[0].value;
	},
	ellipse(inputs){
		return Math.PI*this.rectangle(inputs);
	}
}

function showTab(n) {
  // This function will display the specified tab of the form ...
  const tabElements = document.getElementsByClassName('tab');
  	
  const tabLength = tabElements.length;

  //console.log("tabs", tabs);
  for(let index=0;index<tabLength;index++){
  	if(index==n)
  		tabElements.item(index).style.display = "block";
  	else
  		tabElements.item(index).style.display = "none";
  }

	let shapes = document.getElementsByName('shape');
	//console.log("shapes.elements", shapes);
	let selectedShape = null;
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

}showTab(0)


function startOver(){
	showTab(0);
}


