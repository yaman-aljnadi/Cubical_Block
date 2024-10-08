// var BIG_DADDY_LIST = []
// var test_break = true

// // var start_Time_minutes_generator_2 = Math.floor(Date.now() / 1000);

// // function startTimeCounter_2() {
// //     var now_2 = Math.floor(Date.now() / 1000);

// //     var diff_minutes_generator_2 = now_2 - start_Time_minutes_generator_2;
// //     var m = Math.floor(diff_minutes_generator_2 / 60);
// //     if(m == 5){
// //         test_break = false
// //     }
// //     var the_loop_key_2 = setTimeout(startTimeCounter_2, 5000);
// // }

// // startTimeCounter_2()



// var DOMEvents = {
//     // UIEvent: "abort DOMActivate error load resize scroll select unload",
//     ProgressEvent: "abort error load loadend loadstart progress progress timeout",
//     Event: "abort afterprint beforeprint cached canplay canplaythrough change chargingchange chargingtimechange checking close dischargingtimechange DOMContentLoaded downloading durationchange emptied ended ended error error error error fullscreenchange fullscreenerror input invalid languagechange levelchange loadeddata loadedmetadata noupdate obsolete offline online open open orientationchange pause pointerlockchange pointerlockerror play playing ratechange readystatechange reset seeked seeking stalled submit success suspend timeupdate updateready visibilitychange volumechange waiting",
//     // AnimationEvent: "animationend animationiteration animationstart",
//     AudioProcessingEvent: "audioprocess",
//     BeforeUnloadEvent: "beforeunload",
//     TimeEvent: "beginEvent endEvent repeatEvent",
//     OtherEvent: "blocked complete upgradeneeded versionchange",
//     FocusEvent: "blur DOMFocusIn  Unimplemented DOMFocusOut  Unimplemented focus focusin focusout",
//     MouseEvent: "click contextmenu dblclick mousedown mouseleave mousemove mouseout mouseup show mouseover",
//     SensorEvent: "compassneedscalibration Unimplemented userproximity",
//     OfflineAudioCompletionEvent: "complete",
//     CompositionEvent: "compositionend compositionstart compositionupdate",
//     ClipboardEvent: "copy cut paste",
//     // DeviceLightEvent: "devicelight",
//     // DeviceMotionEvent: "devicemotion",
//     DeviceOrientationEvent: "deviceorientation",
//     DeviceProximityEvent: "deviceproximity",
//     MutationNameEvent: "DOMAttributeNameChanged DOMElementNameChanged",
//     // MutationEvent: "DOMAttrModified DOMCharacterDataModified DOMNodeInserted DOMNodeInsertedIntoDocument DOMNodeRemoved DOMNodeRemovedFromDocument DOMSubtreeModified",
//     DragEvent: "drag dragend dragenter dragleave dragover dragstart drop",
//     // GamepadEvent: "gamepadconnected gamepaddisconnected",
//     HashChangeEvent: "hashchange",
//     KeyboardEvent: "keydown keypress keyup",
//     MessageEvent: "message message message message",
//     PageTransitionEvent: "pagehide pageshow",
//     PopStateEvent: "popstate",
//     StorageEvent: "storage",
//     SVGEvent: "SVGAbort SVGError SVGLoad SVGResize SVGScroll SVGUnload",
//     SVGZoomEvent: "SVGZoom",
//     TouchEvent: "touchcancel touchend touchenter touchleave touchmove touchstart",
//     TransitionEvent: "transitionend",
//     WheelEvent: "wheel"
// }

// var RecentlyLoggedDOMEventTypes = {};

// for (DOMEvent in DOMEvents) {

//     var DOMEventTypes = DOMEvents[DOMEvent].split(' ');
//     DOMEventTypes.filter(function (DOMEventType) {
//         var DOMEventCategory = DOMEvent + ' ' + DOMEventType;


//         document.addEventListener(DOMEventType, function (e) {
//         if(test_break){

//             if (RecentlyLoggedDOMEventTypes[DOMEventCategory]) return;
//             RecentlyLoggedDOMEventTypes[DOMEventCategory] = true;
//             setTimeout(function () { RecentlyLoggedDOMEventTypes[DOMEventCategory] = false }, 1000);
//             var isActive = e.target == document.activeElement;

//             if (isActive) {
//                 BIG_DADDY_LIST.push(DOMEventCategory, ['target= ', e.target], [' active= ' , document.activeElement], "key= " + e.key, "\n");
//                 // BIG_DADDY_LIST.push(DOMEventCategory, ['target= ', e.target], [' active= ' , document.activeElement], ' isActive= ' + true, "key= " + e.key, "\n");
//                 if (e.key == "Enter") {
//                     console.log(BIG_DADDY_LIST)
//                 }
//             }


//             // BIG_DADDY_LIST.push(DOMEventCategory, ['target= ', e.target], [' active= ' , document.activeElement], ' isActive= ' + false,  "key= " + e.key, "\n");
//             else {
//                 BIG_DADDY_LIST.push(DOMEventCategory, ['target= ', e.target], [' active= ' , document.activeElement],  "key= " + e.key, "\n");
//             }

            
//             if(BIG_DADDY_LIST.length > 20000){


//                 BIG_DADDY_LIST.splice(0, 1000)

//                 console.log(BIG_DADDY_LIST)
//             }
//         }
//         }, true);
//     });
// }



window.onresize = function(){
    if ((window.outerHeight - window.innerHeight) > 50) {
        alert("Sneaky Sneaky")
    }
}

!function() {
    function detectDevTool(allow) {
      if(isNaN(+allow)) allow = 100;
      var start = +new Date(); // Validation of built-in Object tamper prevention.
      debugger;
      var end = +new Date(); // Validates too.
      if(isNaN(start) || isNaN(end) || end - start > allow) {
  
        console.log("detected that the console is open")
        alert("i see you trying to cheat asshole ")
        // input your code here when devtools detected.
      }


    }
    if(window.attachEvent) {
      if (document.readyState === "complete" || document.readyState === "interactive") {
          detectDevTool();
        window.attachEvent('onresize', detectDevTool);
        window.attachEvent('onmousemove', detectDevTool);
        window.attachEvent('onfocus', detectDevTool);
        window.attachEvent('onblur', detectDevTool);
      } else {
          setTimeout(argument.callee, 0);
      }
    } else {
      window.addEventListener('load', detectDevTool);
      window.addEventListener('resize', detectDevTool);
      window.addEventListener('mousemove', detectDevTool);
      window.addEventListener('focus', detectDevTool);
      window.addEventListener('blur', detectDevTool);
    }
  }();



// disable all keyboard inputs
document.onkeydown = function(e){
  return false
}