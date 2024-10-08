const canvas = document.querySelector("canvas");

const ctx = canvas.getContext('2d');

var container = document.querySelector("#container")


// var BIG_DADDY_LIST = []
// var test_break = true

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
//                 BIG_DADDY_LIST.push([DOMEventCategory, ['target= ', e.target], [' active= ' , document.activeElement], "key= " + e.key, "\n"]);
//                 // BIG_DADDY_LIST.push(DOMEventCategory, ['target= ', e.target], [' active= ' , document.activeElement], ' isActive= ' + true, "key= " + e.key, "\n");
//                 if (e.key == "Enter") {
//                     console.log(BIG_DADDY_LIST)
//                 }
//             }


//             // BIG_DADDY_LIST.push(DOMEventCategory, ['target= ', e.target], [' active= ' , document.activeElement], ' isActive= ' + false,  "key= " + e.key, "\n");
//             else {
//                 BIG_DADDY_LIST.push([DOMEventCategory, ['target= ', e.target], [' active= ' , document.activeElement],  "key= " + e.key, "\n"]);
//             }

            
//             if(BIG_DADDY_LIST.length > 20000){


//                 BIG_DADDY_LIST.splice(0, 1000)

//                 // console.log(BIG_DADDY_LIST)
//             }
//         }
//         }, true);
//     });
// }


var active = false;
var currentX;
var currentY;
var initialX;
var initialY;
var xOffset = 0;
var yOffset = 0;

var GLOBAL_COUNTER = 0
var PICS_NUM = 24
var PIC_CONTAINER_NUM_OUSTIDE = 4
var PIC_CONTAINER_NUM_INSIDE = 6
var Value_check_loop = 8

let ORDERING_LIST = []
var PICS_LIST = []
var RESULT_BOX_SIZES = []
var PICS_ID = []
var PICS_PLACING_ORDER = []

var CORRECT_ANSWERS = []
var AUDIO_COUNTER = [0, 0, 0, 0]

var OFFSET_LIST = [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]]
var OFFSET_LIST_temp = [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]]

var One_answer_correct = new Audio("/static/pictures_game_practice_js/correct.mp3")
var All_answer_correct = new Audio("/static/pictures_game_practice_js/final_correct.mp3")
var pick_up_audio = new Audio("/static/pictures_game_practice_js/let_go.mp3")
var let_go = new Audio("/static/pictures_game_practice_js/pick_up.mp3")



var xOffset_temp
var yOffset_temp



for (i = 0; i < PICS_NUM; i++) {
  ORDERING_LIST[i] = [i, NaN, NaN]
}

// console.log(ORDERING_LIST)

function assigning_pics() {
  counter_24 = 0
  var pic_element_holder
  for (i = 0; i < PICS_NUM; i++) {

    // document.getElementById("container" + i + "_picutre" + j).id = "container" + i + "_picutre" + picture_counter;
    pic_element_holder = document.getElementById(i)
    PICS_LIST[i] = pic_element_holder

  }
  // console.log(PICS_LIST)
}

function assigning_item_sizes() {
  var holder_list = []
  var size_element_holder
  var pic_element_holder
  for (i = 0; i < PICS_NUM; i++) {

    pic_element_holder = document.getElementById(i)
    size_element_holder = pic_element_holder.getBoundingClientRect();
    size_element_holder = [size_element_holder.top, size_element_holder.bottom, size_element_holder.right, size_element_holder.left]
    holder_list.push(size_element_holder)

  }
  // console.log(holder_list)
  return holder_list
}


function findDuplicates(List) {

  let sorted_arr = List.slice().sort();
  let results = [];
  for (let i = 0; i < sorted_arr.length - 1; i++) {
    if (sorted_arr[i + 1] == sorted_arr[i]) {
      results.push(sorted_arr[i]);
    }
  }
  return results;
}


function assigning_result_sizes() {
  result_boxes = []
  for (i = 1; i < PICS_NUM + 1; i++) {
    var result_box = document.getElementById("result_answer_" + i)
    var size_box = result_box.getBoundingClientRect();
    result_boxes = [size_box.top, size_box.bottom, size_box.right, size_box.left]
    RESULT_BOX_SIZES[i - 1] = result_boxes
  }
  // console.log(RESULT_BOX_SIZES)
}

function shuffleArray(array) {
  var temp_array = array
  for (var i = temp_array.length - 1; i > 0; i--) {

    // Generate random number
    var j = Math.floor(Math.random() * (i + 1));

    var temp = temp_array[i];
    temp_array[i] = temp_array[j];
    temp_array[j] = temp;
  }

  return temp_array;
}



function place_random_pics() {
  var activate = true
  var container_counter = 1

  var last_y_value = []
  var images_list = []

  var counter = 0;



  X = Math.random() * 7
  Y = Math.random() * 19
  Z = Math.random() * 6

  X = Math.round(X)
  Y = Math.round(Y)
  Z = Math.round(Z)


  while (activate) {
    // console.log('im active')
    if (Y == last_y_value[0] || Y == last_y_value[1] || Y == last_y_value[2]) {
      Y = Math.random() * 8
      Y = Math.round(Y)
      // console.log("stuck", last_y_value, Y)
    }

    else {
      // console.log(Z, X, Y)
      var Artif_I = 0

      if (Z == 0) {
        images_list.push([["pictures/set_" + Z + "/" + X + "/" + Y + "/nskuaiBlkuIobLICKUIsjaKFDLKBAHSDHJALSNDMAKLHISsdsdadlasndhaiosdoublkMNABSUODBHIPJOAKSLMNKDBasjklbnNFAKHSJDBKNlkjbhakslnfkmlanskhLKNDAASFJKDJLkjanBKHVDBLANJFMNBklio.png"], X, Y, Artif_I, counter])
        counter = counter + 1
        Artif_I = Artif_I + 1
        images_list.push([["pictures/set_" + Z + "/" + X + "/" + Y + "/nskuaiBlkuIobLICKUIsjaKFDLKBAHSDHJALSNDMAKLHISsdsdadlasndhaiosdoublkMNABSUODHHIPJOAKSLMNKDBasjklbnNFAKHSJDBKNlkjbhakslnfkmlanskhLKNDAASFJKDJLkjanBKHVDBLANJFMNBklio.png"], X, Y, Artif_I, counter])
        Artif_I = Artif_I + 1
        counter = counter + 1
        images_list.push([["pictures/set_" + Z + "/" + X + "/" + Y + "/nskuaiBlkuIobLICKUIsjaKFDLKBAHSDHJALSNDMAKLHISsdsdadlasndhaiosdoublkMNABSUODMHIPJOAKSLMNKDBasjklbnNFAKHSJDBKNlkjbhakslnfkmlanskhLKNDAASFJKDJLkjanBKHVDBLANJFMNBklio.png"], X, Y, Artif_I, counter])
        Artif_I = Artif_I + 1
        counter = counter + 1
        images_list.push([["pictures/set_" + Z + "/" + X + "/" + Y + "/nskuaiBlkuIobLICKUIsjaKFDLKBAHSDHJALSNDMAKLHISsdsdadlasndhaiosdoublkMNABSUODQHIPJOAKSLMNKDBasjklbnNFAKHSJDBKNlkjbhakslnfkmlanskhLKNDAASFJKDJLkjanBKHVDBLANJFMNBklio.png"], X, Y, Artif_I, counter])
        Artif_I = Artif_I + 1
        counter = counter + 1
        images_list.push([["pictures/set_" + Z + "/" + X + "/" + Y + "/nskuaiBlkuIobLICKUIsjaKFDLKBAHSDHJALSNDMAKLHISsdsdadlasndhaiosdoublkMNABSUODTHIPJOAKSLMNKDBasjklbnNFAKHSJDBKNlkjbhakslnfkmlanskhLKNDAASFJKDJLkjanBKHVDBLANJFMNBklio.png"], X, Y, Artif_I,counter])
        Artif_I = Artif_I + 1
        counter = counter + 1
        images_list.push([["pictures/set_" + Z + "/" + X + "/" + Y + "/nskuaiBlkuIobLICKUIsjaKFDLKBAHSDHJALSNDMAKLHISsdsdadlasndhaiosdoublkMNABSUODVHIPJOAKSLMNKDBasjklbnNFAKHSJDBKNlkjbhakslnfkmlanskhLKNDAASFJKDJLkjanBKHVDBLANJFMNBklio.png"], X, Y, Artif_I, counter])
        counter = counter 
        shuffled_random_images_list = shuffleArray(images_list)
      }
      else if (Z == 1) {
        images_list.push([["pictures/set_" + Z + "/" + X + "/" + Y + "/fnaadknadbaDNaCBaajbsajkflnbjhjkapaJBaJFKaAaLNaBSHJFKPaJNBSaDOPFLASaaFDLBSaHFPaOaJaanbvaaDalidaaolnbKaaDNaSBaVaHFHJkpjbfvbasohiSnbvoalidaoalnbpadjoafanabavHHJaaNKBaaJSDNaFaNCaKBa.png"], X, Y, Artif_I, counter])
        Artif_I = Artif_I + 1
        counter = counter + 1
        images_list.push([["pictures/set_" + Z + "/" + X + "/" + Y + "/fnaadknadbaDNaCBaajbsajkflnbjhjkapaJBaJFKaAaLNaBSHJFKPaJNBSaDOPFLASaaFDLBSaHFPaOaJaanbvaaGalidaaolnbKaaDNaSBaVaHFHJkpjbfvbasohiSnbvoalidaoalnbpadjoafanabavHHJaaNKBaaJSDNaFaNCaKBa.png"], X, Y, Artif_I, counter])
        Artif_I = Artif_I + 1
        counter = counter + 1
        images_list.push([["pictures/set_" + Z + "/" + X + "/" + Y + "/fnaadknadbaDNaCBaajbsajkflnbjhjkapaJBaJFKaAaLNaBSHJFKPaJNBSaDOPFLASaaFDLBSaHFPaOaJaanbvaaLalidaaolnbKaaDNaSBaVaHFHJkpjbfvbasohiSnbvoalidaoalnbpadjoafanabavHHJaaNKBaaJSDNaFaNCaKBa.png"], X, Y, Artif_I, counter])
        Artif_I = Artif_I + 1
        counter = counter + 1
        images_list.push([["pictures/set_" + Z + "/" + X + "/" + Y + "/fnaadknadbaDNaCBaajbsajkflnbjhjkapaJBaJFKaAaLNaBSHJFKPaJNBSaDOPFLASaaFDLBSaHFPaOaJaanbvaaPalidaaolnbKaaDNaSBaVaHFHJkpjbfvbasohiSnbvoalidaoalnbpadjoafanabavHHJaaNKBaaJSDNaFaNCaKBa.png"], X, Y, Artif_I, counter])
        Artif_I = Artif_I + 1
        counter = counter + 1
        images_list.push([["pictures/set_" + Z + "/" + X + "/" + Y + "/fnaadknadbaDNaCBaajbsajkflnbjhjkapaJBaJFKaAaLNaBSHJFKPaJNBSaDOPFLASaaFDLBSaHFPaOaJaanbvaaUalidaaolnbKaaDNaSBaVaHFHJkpjbfvbasohiSnbvoalidaoalnbpadjoafanabavHHJaaNKBaaJSDNaFaNCaKBa.png"], X, Y, Artif_I, counter])
        Artif_I = Artif_I + 1
        counter = counter + 1
        images_list.push([["pictures/set_" + Z + "/" + X + "/" + Y + "/fnaadknadbaDNaCBaajbsajkflnbjhjkapaJBaJFKaAaLNaBSHJFKPaJNBSaDOPFLASaaFDLBSaHFPaOaJaanbvaaZalidaaolnbKaaDNaSBaVaHFHJkpjbfvbasohiSnbvoalidaoalnbpadjoafanabavHHJaaNKBaaJSDNaFaNCaKBa.png"], X, Y, Artif_I, counter])
        Artif_I = Artif_I + 1
        counter = counter + 1
        shuffled_random_images_list = shuffleArray(images_list)
      }

      else if (Z == 2) {
        images_list.push([["pictures/set_" + Z + "/" + X + "/" + Y + "/sjldfkbOLIAHBFAKDLKSFJDKbulijasdbfulaihskfbvkulhIJHBFVSKKALIHSFHKABSVULIHojhbfvaulihsjBVIFUGLIAOSJDBuopjhiladbsgofiojHUOADGLSIOJHIDGUOSFLIHADOJFBAU.png"], X, Y, Artif_I, counter])
        Artif_I = Artif_I + 1
        counter = counter + 1
        images_list.push([["pictures/set_" + Z + "/" + X + "/" + Y + "/sjldfkbOLIAHBFAKDLKSFJDKbulijasdbfulaihskfbvkulhIJHBFVSKKALIHSFHLABSVULIHojhbfvaulihsjBVIFUGLIAOSJDBuopjhiladbsgofiojHUOADGLSIOJHIDGUOSFLIHADOJFBAU.png"], X, Y, Artif_I, counter])
        Artif_I = Artif_I + 1
        counter = counter + 1
        images_list.push([["pictures/set_" + Z + "/" + X + "/" + Y + "/sjldfkbOLIAHBFAKDLKSFJDKbulijasdbfulaihskfbvkulhIJHBFVSKKALIHSFHMABSVULIHojhbfvaulihsjBVIFUGLIAOSJDBuopjhiladbsgofiojHUOADGLSIOJHIDGUOSFLIHADOJFBAU.png"], X, Y, Artif_I, counter])
        Artif_I = Artif_I + 1
        counter = counter + 1
        images_list.push([["pictures/set_" + Z + "/" + X + "/" + Y + "/sjldfkbOLIAHBFAKDLKSFJDKbulijasdbfulaihskfbvkulhIJHBFVSKKALIHSFHRABSVULIHojhbfvaulihsjBVIFUGLIAOSJDBuopjhiladbsgofiojHUOADGLSIOJHIDGUOSFLIHADOJFBAU.png"], X, Y, Artif_I, counter])
        Artif_I = Artif_I + 1
        counter = counter + 1
        images_list.push([["pictures/set_" + Z + "/" + X + "/" + Y + "/sjldfkbOLIAHBFAKDLKSFJDKbulijasdbfulaihskfbvkulhIJHBFVSKKALIHSFHYABSVULIHojhbfvaulihsjBVIFUGLIAOSJDBuopjhiladbsgofiojHUOADGLSIOJHIDGUOSFLIHADOJFBAU.png"], X, Y, Artif_I, counter])
        Artif_I = Artif_I + 1
        counter = counter + 1
        images_list.push([["pictures/set_" + Z + "/" + X + "/" + Y + "/sjldfkbOLIAHBFAKDLKSFJDKbulijasdbfulaihskfbvkulhIJHBFVSKKALIHSFHZABSVULIHojhbfvaulihsjBVIFUGLIAOSJDBuopjhiladbsgofiojHUOADGLSIOJHIDGUOSFLIHADOJFBAU.png"], X, Y, Artif_I, counter])
        Artif_I = Artif_I + 1
        counter = counter + 1
        shuffled_random_images_list = shuffleArray(images_list)
      }

      else if (Z == 3) {
        images_list.push([["pictures/set_" + Z + "/" + X + "/" + Y + "/nbakdufhksjbhvKLIALknsbdkalhijoABVSISJZKVFIUHSJDKCCOHIJknbakdufhksjbhvKLIALknsbdkalhijoABVSISJZKVFIUHSJDKCUOHIJkbhvajkljodkljsnbvhckulgihsdkjbsjkulADJKFVJKDFVKJBDF.png"], X, Y, Artif_I, counter])
        Artif_I = Artif_I + 1
        counter = counter + 1
        images_list.push([["pictures/set_" + Z + "/" + X + "/" + Y + "/nbakdufhksjbhvKLIALknsbdkalhijoABVSISJZKVFIUHSJDKCCOHIJknbakdufhksjbhvKLIALknsbdkalhijoABVSISJZKVFIUHSJDKFUOHIJkbhvajkljodkljsnbvhckulgihsdkjbsjkulADJKFVJKDFVKJBDF.png"], X, Y, Artif_I, counter])
        Artif_I = Artif_I + 1
        counter = counter + 1
        images_list.push([["pictures/set_" + Z + "/" + X + "/" + Y + "/nbakdufhksjbhvKLIALknsbdkalhijoABVSISJZKVFIUHSJDKCCOHIJknbakdufhksjbhvKLIALknsbdkalhijoABVSISJZKVFIUHSJDKIUOHIJkbhvajkljodkljsnbvhckulgihsdkjbsjkulADJKFVJKDFVKJBDF.png"], X, Y, Artif_I, counter])
        Artif_I = Artif_I + 1
        counter = counter + 1
        images_list.push([["pictures/set_" + Z + "/" + X + "/" + Y + "/nbakdufhksjbhvKLIALknsbdkalhijoABVSISJZKVFIUHSJDKCCOHIJknbakdufhksjbhvKLIALknsbdkalhijoABVSISJZKVFIUHSJDKNUOHIJkbhvajkljodkljsnbvhckulgihsdkjbsjkulADJKFVJKDFVKJBDF.png"], X, Y, Artif_I, counter])
        Artif_I = Artif_I + 1
        counter = counter + 1
        images_list.push([["pictures/set_" + Z + "/" + X + "/" + Y + "/nbakdufhksjbhvKLIALknsbdkalhijoABVSISJZKVFIUHSJDKCCOHIJknbakdufhksjbhvKLIALknsbdkalhijoABVSISJZKVFIUHSJDKRUOHIJkbhvajkljodkljsnbvhckulgihsdkjbsjkulADJKFVJKDFVKJBDF.png"], X, Y, Artif_I, counter])
        Artif_I = Artif_I + 1
        counter = counter + 1
        images_list.push([["pictures/set_" + Z + "/" + X + "/" + Y + "/nbakdufhksjbhvKLIALknsbdkalhijoABVSISJZKVFIUHSJDKCCOHIJknbakdufhksjbhvKLIALknsbdkalhijoABVSISJZKVFIUHSJDKWUOHIJkbhvajkljodkljsnbvhckulgihsdkjbsjkulADJKFVJKDFVKJBDF.png"], X, Y, Artif_I, counter])
        Artif_I = Artif_I + 1
        counter = counter + 1
        shuffled_random_images_list = shuffleArray(images_list)
      }
      else if (Z == 4) {
        images_list.push([["pictures/set_" + Z + "/" + X + "/" + Y + "/laidhfbsidkdhaaBISKDLFKJNSBDHFKLJSNDBFUIYVULHIJNbisnbdiAhijosnbdviJKFJKFMVDFNJKVSDMLNSDKLFGFUYGHAGSFFFfohijaosdnvfyiHVUSKDLKCUAYILIaSJDNBAYISGUHDAKSHDGUISAHBDCI0JH.png"], X, Y, Artif_I, counter])
        Artif_I = Artif_I + 1
        counter = counter + 1
        images_list.push([["pictures/set_" + Z + "/" + X + "/" + Y + "/laidhfbsidkdhaaBISKDLFKJNSBDHFKLJSNDBFUIYVULHIJNbisnbdiAhijosnbdviJKFJKFMVDFNJKVSDMLNSDKLFGFUYGHEGSFFFfohijaosdnvfyiHVUSKDLKCUAYILIaSJDNBAYISGUHDAKSHDGUISAHBDCI0JH.png"], X, Y, Artif_I, counter])
        Artif_I = Artif_I + 1
        counter = counter + 1
        images_list.push([["pictures/set_" + Z + "/" + X + "/" + Y + "/laidhfbsidkdhaaBISKDLFKJNSBDHFKLJSNDBFUIYVULHIJNbisnbdiAhijosnbdviJKFJKFMVDFNJKVSDMLNSDKLFGFUYGHFGSFFFfohijaosdnvfyiHVUSKDLKCUAYILIaSJDNBAYISGUHDAKSHDGUISAHBDCI0JH.png"], X, Y, Artif_I, counter])
        Artif_I = Artif_I + 1
        counter = counter + 1
        images_list.push([["pictures/set_" + Z + "/" + X + "/" + Y + "/laidhfbsidkdhaaBISKDLFKJNSBDHFKLJSNDBFUIYVULHIJNbisnbdiAhijosnbdviJKFJKFMVDFNJKVSDMLNSDKLFGFUYGHIGSFFFfohijaosdnvfyiHVUSKDLKCUAYILIaSJDNBAYISGUHDAKSHDGUISAHBDCI0JH.png"], X, Y, Artif_I, counter])
        Artif_I = Artif_I + 1
        counter = counter + 1
        images_list.push([["pictures/set_" + Z + "/" + X + "/" + Y + "/laidhfbsidkdhaaBISKDLFKJNSBDHFKLJSNDBFUIYVULHIJNbisnbdiAhijosnbdviJKFJKFMVDFNJKVSDMLNSDKLFGFUYGHNGSFFFfohijaosdnvfyiHVUSKDLKCUAYILIaSJDNBAYISGUHDAKSHDGUISAHBDCI0JH.png"], X, Y, Artif_I, counter])
        Artif_I = Artif_I + 1
        counter = counter + 1
        images_list.push([["pictures/set_" + Z + "/" + X + "/" + Y + "/laidhfbsidkdhaaBISKDLFKJNSBDHFKLJSNDBFUIYVULHIJNbisnbdiAhijosnbdviJKFJKFMVDFNJKVSDMLNSDKLFGFUYGHVGSFFFfohijaosdnvfyiHVUSKDLKCUAYILIaSJDNBAYISGUHDAKSHDGUISAHBDCI0JH.png"], X, Y, Artif_I, counter])
        Artif_I = Artif_I + 1
        counter = counter + 1
        shuffled_random_images_list = shuffleArray(images_list)
      }
      else if (Z == 5) {
        images_list.push([["pictures/set_" + Z + "/" + X + "/" + Y + "/SDOUFLIJSNDBIFKULIHbisfliaefbvislijsbVJFNSKHDVLHFIJlbvGuohijfsodnbvfiohjskGmndbjuhiajosdknbgsacfxerzswxdtcfdrzeasrxdezasRXDTREZSDXTREZSDXTERZS.png"], X, Y, Artif_I, counter])
        Artif_I = Artif_I + 1
        counter = counter + 1
        images_list.push([["pictures/set_" + Z + "/" + X + "/" + Y + "/SDOUFLIJSNDBIFKULIHbisfliaefbvislijsbVJFNSKHDVLHFIJlbvJuohijfsodnbvfiohjskGmndbjuhiajosdknbgsacfxerzswxdtcfdrzeasrxdezasRXDTREZSDXTREZSDXTERZS.png"], X, Y, Artif_I, counter])
        Artif_I = Artif_I + 1
        counter = counter + 1
        images_list.push([["pictures/set_" + Z + "/" + X + "/" + Y + "/SDOUFLIJSNDBIFKULIHbisfliaefbvislijsbVJFNSKHDVLHFIJlbvMuohijfsodnbvfiohjskGmndbjuhiajosdknbgsacfxerzswxdtcfdrzeasrxdezasRXDTREZSDXTREZSDXTERZS.png"], X, Y, Artif_I, counter])
        Artif_I = Artif_I + 1
        counter = counter + 1
        images_list.push([["pictures/set_" + Z + "/" + X + "/" + Y + "/SDOUFLIJSNDBIFKULIHbisfliaefbvislijsbVJFNSKHDVLHFIJlbvQuohijfsodnbvfiohjskGmndbjuhiajosdknbgsacfxerzswxdtcfdrzeasrxdezasRXDTREZSDXTREZSDXTERZS.png"], X, Y, Artif_I, counter])
        Artif_I = Artif_I + 1
        counter = counter + 1
        images_list.push([["pictures/set_" + Z + "/" + X + "/" + Y + "/SDOUFLIJSNDBIFKULIHbisfliaefbvislijsbVJFNSKHDVLHFIJlbvUuohijfsodnbvfiohjskGmndbjuhiajosdknbgsacfxerzswxdtcfdrzeasrxdezasRXDTREZSDXTREZSDXTERZS.png"], X, Y, Artif_I, counter])
        Artif_I = Artif_I + 1
        counter = counter + 1
        images_list.push([["pictures/set_" + Z + "/" + X + "/" + Y + "/SDOUFLIJSNDBIFKULIHbisfliaefbvislijsbVJFNSKHDVLHFIJlbvZuohijfsodnbvfiohjskGmndbjuhiajosdknbgsacfxerzswxdtcfdrzeasrxdezasRXDTREZSDXTREZSDXTERZS.png"], X, Y, Artif_I, counter])
        Artif_I = Artif_I + 1
        counter = counter + 1
        shuffled_random_images_list = shuffleArray(images_list)
      }
      else if (Z == 6) {
        images_list.push([["pictures/set_" + Z + "/" + X + "/" + Y + "/ASDASDAHUKGSCYJGUAYSKUVblksdshboalsknHnbhkasluhdbvyauslhdbvauyisudlbavsuidbljahsAdyiAlabjshdviyaulsbjdhvaugohisldbvyiGUOHIBUVYAIGUOHISLDBKAVYAIGUOSHILDBJKVAY.png"], X, Y, Artif_I, counter])
        Artif_I = Artif_I + 1
        counter = counter + 1
        images_list.push([["pictures/set_" + Z + "/" + X + "/" + Y + "/ASDASDAHUKGSCYJGUAYSKUVblksdshboalsknHnbhkasluhdbvyauslhdbvauyisudlbavsuidbljahsHdyiAlabjshdviyaulsbjdhvaugohisldbvyiGUOHIBUVYAIGUOHISLDBKAVYAIGUOSHILDBJKVAY.png"], X, Y, Artif_I, counter])
        Artif_I = Artif_I + 1
        counter = counter + 1
        images_list.push([["pictures/set_" + Z + "/" + X + "/" + Y + "/ASDASDAHUKGSCYJGUAYSKUVblksdshboalsknHnbhkasluhdbvyauslhdbvauyisudlbavsuidbljahsJdyiAlabjshdviyaulsbjdhvaugohisldbvyiGUOHIBUVYAIGUOHISLDBKAVYAIGUOSHILDBJKVAY.png"], X, Y, Artif_I, counter])
        Artif_I = Artif_I + 1
        counter = counter + 1
        images_list.push([["pictures/set_" + Z + "/" + X + "/" + Y + "/ASDASDAHUKGSCYJGUAYSKUVblksdshboalsknHnbhkasluhdbvyauslhdbvauyisudlbavsuidbljahsNdyiAlabjshdviyaulsbjdhvaugohisldbvyiGUOHIBUVYAIGUOHISLDBKAVYAIGUOSHILDBJKVAY.png"], X, Y, Artif_I, counter])
        Artif_I = Artif_I + 1
        counter = counter + 1
        images_list.push([["pictures/set_" + Z + "/" + X + "/" + Y + "/ASDASDAHUKGSCYJGUAYSKUVblksdshboalsknHnbhkasluhdbvyauslhdbvauyisudlbavsuidbljahsSdyiAlabjshdviyaulsbjdhvaugohisldbvyiGUOHIBUVYAIGUOHISLDBKAVYAIGUOSHILDBJKVAY.png"], X, Y, Artif_I, counter])
        Artif_I = Artif_I + 1
        counter = counter + 1
        images_list.push([["pictures/set_" + Z + "/" + X + "/" + Y + "/ASDASDAHUKGSCYJGUAYSKUVblksdshboalsknHnbhkasluhdbvyauslhdbvauyisudlbavsuidbljahsWdyiAlabjshdviyaulsbjdhvaugohisldbvyiGUOHIBUVYAIGUOHISLDBKAVYAIGUOSHILDBJKVAY.png"], X, Y, Artif_I, counter])
        Artif_I = Artif_I + 1
        counter = counter + 1
        shuffled_random_images_list = shuffleArray(images_list)
      }



      container_counter = container_counter + 1
      last_y_value[container_counter - 2] = Y

      // console.log(shuffled_random_images_list)
      // console.log(random_images_list)

      if (container_counter == 5) {
        activate = false
      }
    }
  }

  // console.log(PICS_ID)
  images_counter = 0
  // console.log(images_list)
  for (j = 0; j < PICS_NUM; j++) {
    // console.log(shuffled_random_images_list[images_counter][0])
    document.getElementById(j).src = "/static/pictures_game_practice_css/" + shuffled_random_images_list[images_counter][0]

    images_counter = images_counter + 1

  }
  // console.log(PICS_ID, shuffled_random_images_list)

  PICS_ID = shuffled_random_images_list
}

function Value_check() {
  for (i = 0; i < PICS_NUM; i++) {
    if (i % 6 == 0) {

      if (PICS_ID[i][3] == 0) {

        // console.log("first " + i + " starts with 0")

        if ((PICS_ID[i][3] == 0 && PICS_ID[i + 1][3] == 1 && PICS_ID[i + 2][3] == 2 && PICS_ID[i + 3][3] == 3 && PICS_ID[i + 4][3] == 4 && PICS_ID[i + 5][3] == 5) && (PICS_ID[i][2] == PICS_ID[i][2] && PICS_ID[i + 1][2] == PICS_ID[i][2] && PICS_ID[i + 2][2] == PICS_ID[i][2] && PICS_ID[i + 3][2] == PICS_ID[i][2] && PICS_ID[i + 4][2] == PICS_ID[i][2] && PICS_ID[i + 5][2] == PICS_ID[i][2])) {
          // if answer is true 

          // first box
          if (i == 0) {
            // console.log("first box has a true answer")
            document.getElementById("behind1").style.backgroundColor = "rgb(92, 255, 119) "

            CORRECT_ANSWERS[0] = true

            if (AUDIO_COUNTER[0] == 0) {
              One_answer_correct.play()
              AUDIO_COUNTER[0] = 1
            }
          }
          // secound box
          else if (i == 6) {
            // console.log("secound box has a true answer")
            document.getElementById("behind2").style.backgroundColor = "rgb(92, 255, 119) "

            CORRECT_ANSWERS[1] = true

            if (AUDIO_COUNTER[1] == 0) {
              One_answer_correct.play()
              AUDIO_COUNTER[1] = 1
            }
          }
          //third box
          else if (i == 12) {
            // console.log("third box has a true answer")
            document.getElementById("behind3").style.backgroundColor = "rgb(92, 255, 119) "

            CORRECT_ANSWERS[2] = true

            if (AUDIO_COUNTER[2] == 0) {
              One_answer_correct.play()
              AUDIO_COUNTER[2] = 1
            }
          }
          //fourth box
          else if (i == 18) {
            // console.log("fourth box has a true answer")
            document.getElementById("behind4").style.backgroundColor = "rgb(92, 255, 119) "

            CORRECT_ANSWERS[3] = true

            if (AUDIO_COUNTER[3] == 0) {
              One_answer_correct.play()
              AUDIO_COUNTER[3] = 1
            }
          }


        }
        else {
          if (i == 0) {
            // console.log("first box has a flase answer")
            document.getElementById("behind1").style.backgroundColor = "rgb(255, 52, 52) "

            CORRECT_ANSWERS[0] = false
            AUDIO_COUNTER[0] = 0
          }
          // secound box
          else if (i == 6) {
            // console.log("secound box has a false answer")
            document.getElementById("behind2").style.backgroundColor = "rgb(255, 52, 52) "

            AUDIO_COUNTER[1] = 0
            CORRECT_ANSWERS[1] = false
          }
          //third box
          else if (i == 12) {
            // console.log("third box has a false answer")
            document.getElementById("behind3").style.backgroundColor = "rgb(255, 52, 52) "

            AUDIO_COUNTER[2] = 0
            CORRECT_ANSWERS[2] = false
          }
          //fourth box
          else if (i == 18) {
            // console.log("fourth box has a flase answer")
            document.getElementById("behind4").style.backgroundColor = "rgb(255, 52, 52) "

            AUDIO_COUNTER[3] = 0
            CORRECT_ANSWERS[3] = false
          }
        }



      }
      else {
        // if answer is false
        if (i == 0) {
          // console.log("first box has a flase answer")
          document.getElementById("behind1").style.backgroundColor = "rgb(255, 52, 52) "

          AUDIO_COUNTER[0] = 0
          CORRECT_ANSWERS[0] = false
        }
        // secound box
        else if (i == 6) {
          // console.log("secound box has a false answer")
          document.getElementById("behind2").style.backgroundColor = "rgb(255, 52, 52) "

          AUDIO_COUNTER[1] = 0
          CORRECT_ANSWERS[1] = false
        }
        //third box
        else if (i == 12) {
          // console.log("third box has a false answer")
          document.getElementById("behind3").style.backgroundColor = "rgb(255, 52, 52)"

          AUDIO_COUNTER[2] = 0
          CORRECT_ANSWERS[2] = false
        }
        //fourth box
        else if (i == 18) {
          // console.log("fourth box has a flase answer")
          document.getElementById("behind4").style.backgroundColor = "rgb(255, 52, 52)"

          AUDIO_COUNTER[3] = 0
          CORRECT_ANSWERS[3] = false
        }
      }
    }
  }

  if (CORRECT_ANSWERS[0] == true && CORRECT_ANSWERS[1] == true && CORRECT_ANSWERS[2] == true && CORRECT_ANSWERS[3] == true) {
    All_answer_correct.play()
    document.getElementById("side_panel_tab").style.backgroundColor = "rgb(92, 255, 119)";
    document.getElementById("tab").innerHTML = "✓";
  }
  else {
    document.getElementById("side_panel_tab").style.backgroundColor = "rgb(255, 52, 52)";
    document.getElementById("tab").innerHTML = "✗";

  }

}


container.addEventListener("touchstart", dragStart, false);
container.addEventListener("touchend", dragEnd, false);
container.addEventListener("touchmove", drag, false);

container.addEventListener("mousedown", dragStart, false);
container.addEventListener("mouseup", dragEnd, false);
container.addEventListener("mousemove", drag, false);


function dragStart(e) {
  for (i = 0; i < PICS_NUM; i++) {
    if (e.target === PICS_LIST[i]) {
      active = true;
      drag_num = i
      choosen_pic = PICS_LIST[i]

      pick_up_audio.play()
      // console.log(choosen_pic, i, drag_num)


      for(Z_index = 0; Z_index < 24; Z_index++){
        if(drag_num == Z_index){
          document.getElementById(Z_index).style.zIndex = "7";
        }
        else{
          document.getElementById(Z_index).style.zIndex = "6"
        }
        console.log(Z_index)
      }


      if (drag_num < 6) {
        document.getElementById("container1").style.zIndex = "7";
        document.getElementById("container2").style.zIndex = "6";
        document.getElementById("container3").style.zIndex = "6";
        document.getElementById("container4").style.zIndex = "6";

        // console.log("container _ 1")
      }
      else if (5 < drag_num && drag_num < 12) {
        document.getElementById("container2").style.zIndex = "7";
        document.getElementById("container1").style.zIndex = "6";
        document.getElementById("container3").style.zIndex = "6";
        document.getElementById("container4").style.zIndex = "6";
        // console.log("container _ 2")

      }
      else if (11 < drag_num && drag_num < 18) {
        document.getElementById("container3").style.zIndex = "7";
        document.getElementById("container1").style.zIndex = "6";
        document.getElementById("container2").style.zIndex = "6";
        document.getElementById("container4").style.zIndex = "6";

        // console.log("container _3")

      }
      else if (17 < drag_num && drag_num < 24) {
        document.getElementById("container4").style.zIndex = "7";
        document.getElementById("container1").style.zIndex = "6";
        document.getElementById("container2").style.zIndex = "6";
        document.getElementById("container3").style.zIndex = "6";
        // console.log("container _ 4")
      }


    }
  }

  // console.log(PICS_ID)
  if (e.type === "touchstart") {
    // console.log("im here")
    initialX = e.touches[0].clientX - xOffset;
    initialY = e.touches[0].clientY - yOffset;
  }

  else {
    // console.log("here babe")
    initialX = e.clientX - OFFSET_LIST[drag_num][0];
    initialY = e.clientY - OFFSET_LIST[drag_num][1];

    // console.log(initialX, initialY, e.clientX, e.clientY)

    temp_initialX = e.clientX
    temp_initialY = e.clientY
  }
}



// function remove_transalte(){
//   for(i = 0; i < PICS_NUM; i++){
//     var elemnt = document.getElementById(i);
//     elemnt.classList.add("unwanted")
//     console.log("unwanted", elemnt)
//   }
// }

function dragEnd(e) {

  active = false;
  assigning_result_sizes()
  pics_item_sizes = assigning_item_sizes()

  let_go.play()

  // console.log("PICS_LIST = FALSE")
  for (i = 0; i < PICS_NUM; i++) {
    for (j = 0; j < PICS_NUM; j++) {
      // if (drag_num != i) {

      Fit_box_x = RESULT_BOX_SIZES[j][3] - RESULT_BOX_SIZES[drag_num][3]
      Fit_box_y = RESULT_BOX_SIZES[j][0] - RESULT_BOX_SIZES[drag_num][0]

      if ((xOffset_temp + 500 > Fit_box_x && xOffset_temp - 500 < Fit_box_x) && (yOffset_temp + 50 > Fit_box_y && yOffset_temp - 50 < Fit_box_y)) {

        break
      }
      // }

    }
  }

  // console.log("this is j", j, "this is drag num", drag_num)

  setTranslate_inside(0, 0, PICS_LIST[drag_num])
  setTranslate_inside(0, 0, PICS_LIST[j])

  main_j = document.getElementById(j)
  main_drag_num = document.getElementById(drag_num)

  // copy_j = document.getElementById(j)
  // copy_drag_num = document.getElementById(drag_num)

  // console.log(main_drag_num)
  // console.log(main_j)

  clone_drag_num = main_j.cloneNode(true);
  clone_j = main_drag_num.cloneNode(true);

  main_drag_num.replaceWith(clone_drag_num);
  main_j.replaceWith(clone_j);

  if (j < drag_num) {
    document.getElementById(j).id = drag_num
    document.getElementById(drag_num).id = j
  }

  else {
    document.getElementById(drag_num).id = j
    document.getElementById(j).id = drag_num
  }

  PICS_ID_holder = PICS_ID[drag_num]
  PICS_ID[drag_num] = PICS_ID[j]
  PICS_ID[j] = PICS_ID_holder


  // console.log(PICS_ID)
  PICS_ID[drag_num]
  assigning_pics()
  Value_check()

  // console.log(CORRECT_ANSWERS)
}




function drag(e) {
  if (active) {

    e.preventDefault();

    if (e.type === "touchmove") {
      currentX = e.touches[0].clientX - initialX;
      currentY = e.touches[0].clientY - initialY;
    }
    else {
      if (OFFSET_LIST[drag_num][0] + OFFSET_LIST[drag_num][1] == 0) {
        // console.log("here at drag function {if}")
        // console.log(initialX, initialY, e.clientX, e.clientY)
        // console.log(e.clientX, e.clientY)

        xOffset = e.clientX - initialX;
        yOffset = e.clientY - initialY;

        xOffset_temp = e.clientX - temp_initialX
        yOffset_temp = e.clientY - temp_initialY
        // console.log(xOffset_temp, yOffset_temp, xOffset, yOffset)

      }

      else {
        // console.log("here at drag function {else}")
        // console.log(initialX, initialY, e.clientX, e.clientY)
        xOffset = e.clientX - initialX;
        yOffset = e.clientY - initialY;

        xOffset_temp = e.clientX - temp_initialX
        yOffset_temp = e.clientY - temp_initialY
        // console.log(xOffset_temp, yOffset_temp, xOffset, yOffset)
      }
    }

    setTranslate_outside(xOffset_temp, yOffset_temp, choosen_pic);
  }
}

function setTranslate_inside(xPos, yPos, el) {
  el.style.webkitTransform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
}

function setTranslate_outside(xPos, yPos, el) {
  el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
}

// for assigning the PICS list PICS_LIST
assigning_pics()
assigning_result_sizes()
place_random_pics()

document.addEventListener("DOMContentLoaded", () => {
  const side_panel_tab = document.querySelector("#side_panel_tab");
  const side_panel = document.querySelector("#side_panel");

  side_panel_tab.addEventListener("mouseover", e => {
    e.preventDefault();

    document.getElementById("side_panel_tab").style.right = "12.5vw"
    document.getElementById("side_panel").style.width = "15vw"
  });
  side_panel.addEventListener("mouseover", e => {
    e.preventDefault();

    document.getElementById("side_panel_tab").style.right = "12.5vw"
    document.getElementById("side_panel").style.width = "15vw"
  });

  side_panel_tab.addEventListener("mouseout", e => {
    e.preventDefault();

    document.getElementById("side_panel_tab").style.right = "0vw"
    document.getElementById("side_panel").style.width = "0vw"
  });
  side_panel.addEventListener("mouseout", e => {
    e.preventDefault();

    document.getElementById("side_panel_tab").style.right = "0vw"
    document.getElementById("side_panel").style.width = "0vw"
  });
});
