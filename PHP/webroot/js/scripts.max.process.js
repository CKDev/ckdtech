/*
=========================================================================================
 CKD Scripts - Process Animations
=========================================================================================
*/

// Project Exploration ----------------------------------------------
function clickexploration1Handler(event) {
	var component = document.querySelector('.exploration');
	if (isCurrentState(component, 'keyframe1')) {
		try {
			//  console.log('Listener for event: click triggered. State: keyframe1');
			setTimeout(function() {
				var component = document.querySelector('.exploration');
				component.addEventListener(transitionEvent, transitionexplorationkeyframe1tokeyframe2EndedHandler);
				removeAllClassesButFirst(component, 'keyframe1-to-keyframe2');
				addClass(component, 'keyframe2');
				addClass(component, 'keyframe1-to-keyframe2');
			}, 0);
		} catch (e) {
			console.log(e)
		}
	}
}
function transitionexplorationkeyframe1tokeyframe2EndedHandler(event) {
	if (event.target.className.trim() == 'stroke4' || event.target.className.startsWith('stroke4 ')) {
		var component = document.querySelector('.exploration');
		component.removeEventListener(transitionEvent, transitionexplorationkeyframe1tokeyframe2EndedHandler);
		//console.log('transitionexplorationkeyframe1tokeyframe2EndedHandler()');
		// animationend
		setTimeout(function() {
			var component = document.querySelector('.exploration');
			component.addEventListener(transitionEvent, transitionexplorationkeyframe2tokeyframe3EndedHandler);
			removeAllClassesButFirst(component, 'keyframe2-to-keyframe3');
			addClass(component, 'keyframe3');
			addClass(component, 'keyframe2-to-keyframe3');
		}, 0);
	}
}

var component_A = document.querySelector('.exploration');
component_A.addEventListener('click', clickexploration1Handler);
function resetexploration() {
	//console.log('reset');
	var component = document.querySelector('.exploration');
	if (!component) {
		return;
	}
	component.addEventListener(transitionEvent, transitionexplorationkeyframe1tokeyframe2EndedHandler);
	removeAllClassesButFirst(component, 'keyframe1-to-keyframe2');
	addClass(component, 'keyframe2');
	addClass(component, 'keyframe1-to-keyframe2');
}
function transitionexplorationkeyframe2tokeyframe3EndedHandler(event) {
	if (event.target.className.trim() == 'stroke4' || event.target.className.startsWith('stroke4 ')) {
		var component = document.querySelector('.exploration');
		component.removeEventListener(transitionEvent, transitionexplorationkeyframe2tokeyframe3EndedHandler);
		//console.log('transitionexplorationkeyframe2tokeyframe3EndedHandler()');
		// animationend
		setTimeout(function() {
			var component = document.querySelector('.exploration');
			component.addEventListener(transitionEvent, transitionexplorationkeyframe3tokeyframe4EndedHandler);
			removeAllClassesButFirst(component, 'keyframe3-to-keyframe4');
			addClass(component, 'keyframe4');
			addClass(component, 'keyframe3-to-keyframe4');
		}, 0);
	}
}
function transitionexplorationkeyframe3tokeyframe4EndedHandler(event) {
	if (event.target.className.trim() == 'stroke4' || event.target.className.startsWith('stroke4 ')) {
		var component = document.querySelector('.exploration');
		component.removeEventListener(transitionEvent, transitionexplorationkeyframe3tokeyframe4EndedHandler);
		//console.log('transitionexplorationkeyframe3tokeyframe4EndedHandler()');
		// animationend
		setTimeout(function() {
			var component = document.querySelector('.exploration');
			component.addEventListener(transitionEvent, transitionexplorationkeyframe4tokeyframe5EndedHandler);
			removeAllClassesButFirst(component, 'keyframe4-to-keyframe5');
			addClass(component, 'keyframe5');
			addClass(component, 'keyframe4-to-keyframe5');
		}, 0);
	}
}
function transitionexplorationkeyframe4tokeyframe5EndedHandler(event) {
	if (event.target.className.trim() == 'stroke4' || event.target.className.startsWith('stroke4 ')) {
		var component = document.querySelector('.exploration');
		component.removeEventListener(transitionEvent, transitionexplorationkeyframe4tokeyframe5EndedHandler);
		//console.log('transitionexplorationkeyframe4tokeyframe5EndedHandler()');
	}
}
/*
(function() {
	var component = document.querySelector('.exploration');
	var event = new Event('click');
	component.dispatchEvent(event);
})();
*/

// Strategic Blueprint ----------------------------------------------
function clickstrategicblueprint1Handler(event) {
	var component = document.querySelector('.strategic-blueprint');
	if (isCurrentState(component, 'keyframe4')) {
		try {
			//  console.log('Listener for event: click triggered. State: keyframe4');
			setTimeout(function() {
				var component = document.querySelector('.strategic-blueprint');
				component.addEventListener(transitionEvent, transitionstrategicblueprintkeyframe4tokeyframe1EndedHandler);
				removeAllClassesButFirst(component, 'keyframe4-to-keyframe1');
				addClass(component, 'keyframe1');
				addClass(component, 'keyframe4-to-keyframe1');
			}, 0);
		} catch (e) {
			console.log(e)
		}
	}
}
function transitionstrategicblueprintkeyframe4tokeyframe1EndedHandler(event) {
	if (event.target.className.trim() == 'stroke11' || event.target.className.startsWith('stroke11 ')) {
		var component = document.querySelector('.strategic-blueprint');
		component.removeEventListener(transitionEvent, transitionstrategicblueprintkeyframe4tokeyframe1EndedHandler);
		//console.log('transitionstrategicblueprintkeyframe4tokeyframe1EndedHandler()');
		// animationend
		setTimeout(function() {
			var component = document.querySelector('.strategic-blueprint');
			component.addEventListener(transitionEvent, transitionstrategicblueprintkeyframe1tokeyframe2EndedHandler);
			removeAllClassesButFirst(component, 'keyframe1-to-keyframe2');
			addClass(component, 'keyframe2');
			addClass(component, 'keyframe1-to-keyframe2');
		}, 0);
	}
}

var component_B = document.querySelector('.strategic-blueprint');
component_B.addEventListener('click', clickstrategicblueprint1Handler);
function resetstrategicblueprint() {
	//console.log('reset');
	var component = document.querySelector('.strategic-blueprint');
	if (!component) {
		return;
	}
	component.addEventListener(transitionEvent, transitionstrategicblueprintkeyframe4tokeyframe1EndedHandler);
	removeAllClassesButFirst(component, 'keyframe4-to-keyframe1');
	addClass(component, 'keyframe1');
	addClass(component, 'keyframe4-to-keyframe1');
}
function transitionstrategicblueprintkeyframe1tokeyframe2EndedHandler(event) {
	if (event.target.className.trim() == 'stroke11' || event.target.className.startsWith('stroke11 ')) {
		var component = document.querySelector('.strategic-blueprint');
		component.removeEventListener(transitionEvent, transitionstrategicblueprintkeyframe1tokeyframe2EndedHandler);
		//console.log('transitionstrategicblueprintkeyframe1tokeyframe2EndedHandler()');
//--		lastTransitionstrategicblueprintEndedHandler(event);
	}
}
function lastTransitionstrategicblueprintEndedHandler(event) {
	//console.log('lastTransitionstrategicblueprintEndedHandler()');
	var component = document.querySelector('.strategic-blueprint');
	removeAllClassesButFirst(component, 'keyframe4');
	addClass(component, 'keyframe4');
	var event = new Event('click');
	setTimeout(function() {
		component.dispatchEvent(event);
	}, 0);
}
/*
(function() {
	var component = document.querySelector('.strategic-blueprint');
	var event = new Event('click');
	component.dispatchEvent(event);
})();
*/

// Collborative Build -----------------------------------------------
function clickGears1Handler(event) {
	var component = document.querySelector('.gears');
	if (isCurrentState(component, 'keyframe1')) {
		try {
			//  console.log('Listener for event: click triggered. State: keyframe1');
			setTimeout(function() {
				var component = document.querySelector('.gears');
				component.addEventListener(transitionEvent, transitionGearskeyframe1tokeyframe2EndedHandler);
				removeAllClassesButFirst(component, 'keyframe1-to-keyframe2');
				addClass(component, 'keyframe2');
				addClass(component, 'keyframe1-to-keyframe2');
			}, 0);
		} catch (e) {
			console.log(e)
		}
	}
}
function transitionGearskeyframe1tokeyframe2EndedHandler(event) {
	if (event.target.className.trim() == 'fill11' || event.target.className.startsWith('fill11 ')) {
		var component = document.querySelector('.gears');
		component.removeEventListener(transitionEvent, transitionGearskeyframe1tokeyframe2EndedHandler);
		//console.log('transitionGearskeyframe1tokeyframe2EndedHandler()');
		lastTransitionGearsEndedHandler(event);
	}
}
function lastTransitionGearsEndedHandler(event) {
	//console.log('lastTransitionGearsEndedHandler()');
	var component = document.querySelector('.gears');
	removeAllClassesButFirst(component, 'keyframe1');
	addClass(component, 'keyframe1');
	var event = new Event('click');
	setTimeout(function() {
		component.dispatchEvent(event);
	}, 0);
}

var component_C = document.querySelector('.gears');
component_C.addEventListener('click', clickGears1Handler);
function resetGears() {
	//console.log('reset');
	var component = document.querySelector('.gears');
	if (!component) {
		return;
	}
	component.addEventListener(transitionEvent, transitionGearskeyframe1tokeyframe2EndedHandler);
	removeAllClassesButFirst(component, 'keyframe1-to-keyframe2');
	addClass(component, 'keyframe2');
	addClass(component, 'keyframe1-to-keyframe2');
}
/*
(function() {
	var component = document.querySelector('.gears');
	var event = new Event('click');
	component.dispatchEvent(event);
})();
*/

// Launch & Evolve ----------------------------------------------
function clickGroup111Handler(event) {
	var component = document.querySelector('.group-11');
	if (isCurrentState(component, 'keyframe1')) {
		try {
			//  console.log('Listener for event: click triggered. State: keyframe1');
			setTimeout(function() {
				var component = document.querySelector('.group-11');
				component.addEventListener(transitionEvent, transitionGroup11keyframe1tokeyframe2EndedHandler);
				removeAllClassesButFirst(component, 'keyframe1-to-keyframe2');
				addClass(component, 'keyframe2');
				addClass(component, 'keyframe1-to-keyframe2');
			}, 0);
		} catch (e) {
			console.log(e)
		}
	}
}
function transitionGroup11keyframe1tokeyframe2EndedHandler(event) {
	if (event.target.className.trim() == 'stroke3' || event.target.className.startsWith('stroke3 ')) {
		var component = document.querySelector('.group-11');
		component.removeEventListener(transitionEvent, transitionGroup11keyframe1tokeyframe2EndedHandler);
		//console.log('transitionGroup11keyframe1tokeyframe2EndedHandler()');
//--		lastTransitionGroup11EndedHandler(event);
	}
}
function lastTransitionGroup11EndedHandler(event) {
	//console.log('lastTransitionGroup11EndedHandler()');
	var component = document.querySelector('.group-11');
	removeAllClassesButFirst(component, 'keyframe1');
	addClass(component, 'keyframe1');
	var event = new Event('click');
	setTimeout(function() {
		component.dispatchEvent(event);
	}, 0);
}

var component_D = document.querySelector('.group-11');
component_D.addEventListener('click', clickGroup111Handler);
function resetGroup11() {
	//console.log('reset');
	var component = document.querySelector('.group-11');
	if (!component) {
		return;
	}
	component.addEventListener(transitionEvent, transitionGroup11keyframe1tokeyframe2EndedHandler);
	removeAllClassesButFirst(component, 'keyframe1-to-keyframe2');
	addClass(component, 'keyframe2');
	addClass(component, 'keyframe1-to-keyframe2');
}
/*
(function() {
	var component = document.querySelector('.group-11');
	var event = new Event('click');
	component.dispatchEvent(event);
})(); < /script> < /html>
*/

// Connect ----------------------------------------------------------
function clickConnect1Handler(event) {
	var component = document.querySelector('.connect');
	if (isCurrentState(component, 'keyframe1')) {
		try {
			//  console.log('Listener for event: click triggered. State: keyframe1');
			setTimeout(function() {
				var component = document.querySelector('.connect');
				component.addEventListener(transitionEvent, transitionConnectkeyframe1tokeyframe2EndedHandler);
				removeAllClassesButFirst(component, 'keyframe1-to-keyframe2');
				addClass(component, 'keyframe2');
				addClass(component, 'keyframe1-to-keyframe2');
			}, 0);
		} catch (e) {
			console.log(e)
		}
	}
}
function transitionConnectkeyframe1tokeyframe2EndedHandler(event) {
	if (event.target.className.trim() == 'stroke3' || event.target.className.startsWith('stroke3 ')) {
		var component = document.querySelector('.connect');
		component.removeEventListener(transitionEvent, transitionConnectkeyframe1tokeyframe2EndedHandler);
		//console.log('transitionConnectkeyframe1tokeyframe2EndedHandler()');
//--		lastTransitionConnectEndedHandler(event);
	}
}
function lastTransitionConnectEndedHandler(event) {
	//console.log('lastTransitionConnectEndedHandler()');
	var component = document.querySelector('.connect');
	removeAllClassesButFirst(component, 'keyframe1');
	addClass(component, 'keyframe1');
	var event = new Event('click');
	setTimeout(function() {
		component.dispatchEvent(event);
	}, 0);
}

var component_E = document.querySelector('.connect');
component_E.addEventListener('click', clickConnect1Handler);
function resetConnect() {
	//console.log('reset');
	var component = document.querySelector('.connect');
	if (!component) {
		return;
	}
	component.addEventListener(transitionEvent, transitionConnectkeyframe1tokeyframe2EndedHandler);
	removeAllClassesButFirst(component, 'keyframe1-to-keyframe2');
	addClass(component, 'keyframe2');
	addClass(component, 'keyframe1-to-keyframe2');
}
/*
(function() {
	var component = document.querySelector('.connect');
	var event = new Event('click');
	component.dispatchEvent(event);
})();
*/