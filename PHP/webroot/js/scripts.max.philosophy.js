/*
=========================================================================================
 CKD Scripts - Philosophy Animations
=========================================================================================
*/

// Company Background -----------------------------------------------
function clickcompanybackground1Handler(event) {
	var component = document.querySelector('.company-background');
	if (isCurrentState(component, 'keyframe1')) {
		try {
			//  console.log('Listener for event: click triggered. State: keyframe1');
			setTimeout(function() {
				var component = document.querySelector('.company-background');
				component.addEventListener(transitionEvent, transitioncompanybackgroundkeyframe1tokeyframe2EndedHandler);
				removeAllClassesButFirst(component, 'keyframe1-to-keyframe2');
				addClass(component, 'keyframe2');
				addClass(component, 'keyframe1-to-keyframe2');
			}, 0);
		} catch (e) {
			console.log(e)
		}
	}
}
function transitioncompanybackgroundkeyframe1tokeyframe2EndedHandler(event) {
	if (event.target.className.trim() == 'group' || event.target.className.startsWith('group ')) {
		var component = document.querySelector('.company-background');
		component.removeEventListener(transitionEvent, transitioncompanybackgroundkeyframe1tokeyframe2EndedHandler);
		//console.log('transitioncompanybackgroundkeyframe1tokeyframe2EndedHandler()');
		// animationend
		setTimeout(function() {
			var component = document.querySelector('.company-background');
			component.addEventListener(transitionEvent, transitioncompanybackgroundkeyframe2tokeyframe3EndedHandler);
			removeAllClassesButFirst(component, 'keyframe2-to-keyframe3');
			addClass(component, 'keyframe3');
			addClass(component, 'keyframe2-to-keyframe3');
		}, 0);
	}
}

var component_A = document.querySelector('.company-background');
component_A.addEventListener('click', clickcompanybackground1Handler);
function resetcompanybackground() {
	//console.log('reset');
	var component = document.querySelector('.company-background');
	if (!component) {
		return;
	}
	component.addEventListener(transitionEvent, transitioncompanybackgroundkeyframe1tokeyframe2EndedHandler);
	removeAllClassesButFirst(component, 'keyframe1-to-keyframe2');
	addClass(component, 'keyframe2');
	addClass(component, 'keyframe1-to-keyframe2');
}
function transitioncompanybackgroundkeyframe2tokeyframe3EndedHandler(event) {
	if (event.target.className.trim() == 'stroke11copy3' || event.target.className.startsWith('stroke11copy3 ')) {
		var component = document.querySelector('.company-background');
		component.removeEventListener(transitionEvent, transitioncompanybackgroundkeyframe2tokeyframe3EndedHandler);
		//console.log('transitioncompanybackgroundkeyframe2tokeyframe3EndedHandler()');
//		lastTransitioncompanybackgroundEndedHandler(event);
	}
}
function lastTransitioncompanybackgroundEndedHandler(event) {
	//console.log('lastTransitioncompanybackgroundEndedHandler()');
	var component = document.querySelector('.company-background');
	removeAllClassesButFirst(component, 'keyframe1');
	addClass(component, 'keyframe1');
	var event = new Event('click');
	setTimeout(function() {
		component.dispatchEvent(event);
	}, 0);
}
/*
(function() {
	var component = document.querySelector('.company-background');
	var event = new Event('click');
	component.dispatchEvent(event);
})();
*/

// How We Work ------------------------------------------------------
function clickhowwework1Handler(event) {
	var component = document.querySelector('.how-we-work');
	if (isCurrentState(component, 'keyframe2')) {
		try {
			//  console.log('Listener for event: click triggered. State: keyframe2');
			setTimeout(function() {
				var component = document.querySelector('.how-we-work');
				component.addEventListener(transitionEvent, transitionhowweworkkeyframe2tokeyframe1EndedHandler);
				removeAllClassesButFirst(component, 'keyframe2-to-keyframe1');
				addClass(component, 'keyframe1');
				addClass(component, 'keyframe2-to-keyframe1');
			}, 0);
		} catch (e) {
			console.log(e)
		}
	}
}
function transitionhowweworkkeyframe2tokeyframe1EndedHandler(event) {
	if (event.target.className.trim() == 'stroke13copy' || event.target.className.startsWith('stroke13copy ')) {
		var component = document.querySelector('.how-we-work');
		component.removeEventListener(transitionEvent, transitionhowweworkkeyframe2tokeyframe1EndedHandler);
		//console.log('transitionhowweworkkeyframe2tokeyframe1EndedHandler()');
	}
}

var component_B = document.querySelector('.how-we-work');
component_B.addEventListener('click', clickhowwework1Handler);
function resethowwework() {
	//console.log('reset');
	var component = document.querySelector('.how-we-work');
	if (!component) {
		return;
	}
	component.addEventListener(transitionEvent, transitionhowweworkkeyframe2tokeyframe1EndedHandler);
	removeAllClassesButFirst(component, 'keyframe2-to-keyframe1');
	addClass(component, 'keyframe1');
	addClass(component, 'keyframe2-to-keyframe1');
}
/*
(function() {
	var component = document.querySelector('.how-we-work');
	var event = new Event('click');
	component.dispatchEvent(event);
})();
*/

// The Benefits -----------------------------------------------------
function clickthebenefits1Handler(event) {
	var component = document.querySelector('.the-benefits');
	if (isCurrentState(component, 'keyframe1')) {
		try {
			//  console.log('Listener for event: click triggered. State: keyframe1');
			setTimeout(function() {
				var component = document.querySelector('.the-benefits');
				component.addEventListener(transitionEvent, transitionthebenefitskeyframe1tokeyframe2EndedHandler);
				removeAllClassesButFirst(component, 'keyframe1-to-keyframe2');
				addClass(component, 'keyframe2');
				addClass(component, 'keyframe1-to-keyframe2');
			}, 0);
		} catch (e) {
			console.log(e)
		}
	}
}
function transitionthebenefitskeyframe1tokeyframe2EndedHandler(event) {
	if (event.target.className.trim() == 'stroke3' || event.target.className.startsWith('stroke3 ')) {
		var component = document.querySelector('.the-benefits');
		component.removeEventListener(transitionEvent, transitionthebenefitskeyframe1tokeyframe2EndedHandler);
		//console.log('transitionthebenefitskeyframe1tokeyframe2EndedHandler()');
		// animationend
		setTimeout(function() {
			var component = document.querySelector('.the-benefits');
			component.addEventListener(transitionEvent, transitionthebenefitskeyframe2tokeyframe3EndedHandler);
			removeAllClassesButFirst(component, 'keyframe2-to-keyframe3');
			addClass(component, 'keyframe3');
			addClass(component, 'keyframe2-to-keyframe3');
		}, 0);
	}
}

var component_C = document.querySelector('.the-benefits');
component_C.addEventListener('click', clickthebenefits1Handler);
function resetthebenefits() {
	//console.log('reset');
	var component = document.querySelector('.the-benefits');
	if (!component) {
		return;
	}
	component.addEventListener(transitionEvent, transitionthebenefitskeyframe1tokeyframe2EndedHandler);
	removeAllClassesButFirst(component, 'keyframe1-to-keyframe2');
	addClass(component, 'keyframe2');
	addClass(component, 'keyframe1-to-keyframe2');
}
function transitionthebenefitskeyframe2tokeyframe3EndedHandler(event) {
	if (event.target.className.trim() == 'group3' || event.target.className.startsWith('group3 ')) {
		var component = document.querySelector('.the-benefits');
		component.removeEventListener(transitionEvent, transitionthebenefitskeyframe2tokeyframe3EndedHandler);
		//console.log('transitionthebenefitskeyframe2tokeyframe3EndedHandler()');
	}
}
/*
(function() {
	var component = document.querySelector('.the-benefits');
	var event = new Event('click');
	component.dispatchEvent(event);
})();
*/

// Work With Us -----------------------------------------------------
function clickworkwithus1Handler(event) {
  var component = document.querySelector('.workwithus');
  if (isCurrentState(component, 'keyframe1')) {
    try {
    //  console.log('Listener for event: click triggered. State: keyframe1');
      setTimeout(function() {
        var component = document.querySelector('.workwithus');
        component.addEventListener(transitionEvent, transitionworkwithuskeyframe1tokeyframe2EndedHandler);
        removeAllClassesButFirst(component, 'keyframe1-to-keyframe2');
        addClass(component, 'keyframe2');
        addClass(component, 'keyframe1-to-keyframe2');
      }, 0);
    }
    catch (e) {
      console.log(e)
    }
  }
}
function transitionworkwithuskeyframe1tokeyframe2EndedHandler(event) {
  
  if (event.target.className.trim() == 'group5' ||
      event.target.className.startsWith('group5 ')) {
    var component = document.querySelector('.workwithus');
    component.removeEventListener(transitionEvent, transitionworkwithuskeyframe1tokeyframe2EndedHandler);
    //console.log('transitionworkwithuskeyframe1tokeyframe2EndedHandler()');
    // animationend
    setTimeout(function () {
      var component = document.querySelector('.workwithus');
      component.addEventListener(transitionEvent, transitionworkwithuskeyframe2tokeyframe3EndedHandler);
      removeAllClassesButFirst(component, 'keyframe2-to-keyframe3');
      addClass(component, 'keyframe3');
      addClass(component, 'keyframe2-to-keyframe3');
    }, 0);
  }
}

var component_D = document.querySelector('.workwithus');
component_D.addEventListener('click', clickworkwithus1Handler);
function resetworkwithus() {
    //console.log('reset');
    var component = document.querySelector('.workwithus');
    if (!component) { return; }
    component.addEventListener(transitionEvent, transitionworkwithuskeyframe1tokeyframe2EndedHandler);

    removeAllClassesButFirst(component, 'keyframe1-to-keyframe2');
    addClass(component, 'keyframe2');
    addClass(component, 'keyframe1-to-keyframe2');
}
function transitionworkwithuskeyframe2tokeyframe3EndedHandler(event) {
  
  if (event.target.className.trim() == 'rectanglecopy2' ||
      event.target.className.startsWith('rectanglecopy2 ')) {
    var component = document.querySelector('.workwithus');
    component.removeEventListener(transitionEvent, transitionworkwithuskeyframe2tokeyframe3EndedHandler);
    //console.log('transitionworkwithuskeyframe2tokeyframe3EndedHandler()');
    // animationend
    setTimeout(function () {
      var component = document.querySelector('.workwithus');
      component.addEventListener(transitionEvent, transitionworkwithuskeyframe3tokeyframe4EndedHandler);
      removeAllClassesButFirst(component, 'keyframe3-to-keyframe4');
      addClass(component, 'keyframe4');
      addClass(component, 'keyframe3-to-keyframe4');
    }, 0);
  }
}
function transitionworkwithuskeyframe3tokeyframe4EndedHandler(event) {
  
  if (event.target.className.trim() == 'stroke3' ||
      event.target.className.startsWith('stroke3 ')) {
    var component = document.querySelector('.workwithus');
    component.removeEventListener(transitionEvent, transitionworkwithuskeyframe3tokeyframe4EndedHandler);
    //console.log('transitionworkwithuskeyframe3tokeyframe4EndedHandler()');
//--    lastTransitionworkwithusEndedHandler(event);
  }
}
function lastTransitionworkwithusEndedHandler(event) {
  //console.log('lastTransitionworkwithusEndedHandler()');
  var component = document.querySelector('.workwithus');
  removeAllClassesButFirst(component, 'keyframe1');
  addClass(component, 'keyframe1');
  var event = new Event('click');
  setTimeout(function() {
    component.dispatchEvent(event);
  }, 0);
}
/*
(function() {
    var component = document.querySelector('.workwithus');
    var event = new Event('click');
    component.dispatchEvent(event);
})();
*/


