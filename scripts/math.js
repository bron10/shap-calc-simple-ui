

const _M = (function(){
	function Calculate(){
		this.rectangle = function(){
			let shapeInputs = arguments[0];
			return shapeInputs[0].value * shapeInputs[1].value;
		}

		this.circle = function(){
			let shapeInputs = arguments[0];
			let radius = (shapeInputs[0].value)/2; 
			return Math.PI*(radius*radius);
		}

		this.square = function(){
			let shapeInputs = arguments[0];
			return shapeInputs[0].value*shapeInputs[0].value;
		}
		
		this.ellipse = function(){
			let shapeInputs = arguments[0];
			return Math.PI*this.rectangle(shapeInputs);
		}
	}
	return new Calculate();
})()