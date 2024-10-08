const canvas = document.querySelector("canvas");

const ctx = canvas.getContext('2d');



var DB_Seconds;
const startTime_2 = Math.floor(Date.now() / 250);


function startTimeCounter_2() {
  var now = Math.floor(Date.now() / 250);

  var diff = now - startTime_2;

  DB_Seconds = Math.floor(diff % 10000);

  DB_Seconds = checkTime_2(DB_Seconds);
  // console.log(DB_Seconds)



  var the_loop_key = setTimeout(startTimeCounter_2, 250);
}

function checkTime_2(i) {
  return i;
}

startTimeCounter_2();


//  Big Daddy Code
var BIG_DADDY_LIST = []
var test_break = true

var DOMEvents = {
  // UIEvent: "abort DOMActivate error load resize scroll select unload",
  ProgressEvent: "abort error load loadend loadstart progress progress timeout",
  Event: "abort afterprint beforeprint cached canplay canplaythrough change chargingchange chargingtimechange checking close dischargingtimechange DOMContentLoaded downloading durationchange emptied ended ended error error error error fullscreenchange fullscreenerror input invalid languagechange levelchange loadeddata loadedmetadata noupdate obsolete offline online open open orientationchange pause pointerlockchange pointerlockerror play playing ratechange readystatechange reset seeked seeking stalled submit success suspend timeupdate updateready visibilitychange volumechange waiting",
  // AnimationEvent: "animationend animationiteration animationstart",
  AudioProcessingEvent: "audioprocess",
  BeforeUnloadEvent: "beforeunload",
  TimeEvent: "beginEvent endEvent repeatEvent",
  OtherEvent: "blocked complete upgradeneeded versionchange",
  FocusEvent: "blur DOMFocusIn  Unimplemented DOMFocusOut  Unimplemented focus focusin focusout",
  MouseEvent: "click contextmenu dblclick mousedown mouseleave mousemove mouseout mouseup show mouseover",
  SensorEvent: "compassneedscalibration Unimplemented userproximity",
  OfflineAudioCompletionEvent: "complete",
  CompositionEvent: "compositionend compositionstart compositionupdate",
  ClipboardEvent: "copy cut paste",
  // DeviceLightEvent: "devicelight",
  // DeviceMotionEvent: "devicemotion",
  DeviceOrientationEvent: "deviceorientation",
  DeviceProximityEvent: "deviceproximity",
  MutationNameEvent: "DOMAttributeNameChanged DOMElementNameChanged",
  // MutationEvent: "DOMAttrModified DOMCharacterDataModified DOMNodeInserted DOMNodeInsertedIntoDocument DOMNodeRemoved DOMNodeRemovedFromDocument DOMSubtreeModified",
  DragEvent: "drag dragend dragenter dragleave dragover dragstart drop",
  // GamepadEvent: "gamepadconnected gamepaddisconnected",
  HashChangeEvent: "hashchange",
  KeyboardEvent: "keydown keypress keyup",
  MessageEvent: "message message message message",
  PageTransitionEvent: "pagehide pageshow",
  PopStateEvent: "popstate",
  StorageEvent: "storage",
  SVGEvent: "SVGAbort SVGError SVGLoad SVGResize SVGScroll SVGUnload",
  SVGZoomEvent: "SVGZoom",
  TouchEvent: "touchcancel touchend touchenter touchleave touchmove touchstart",
  TransitionEvent: "transitionend",
  WheelEvent: "wheel"
}

var RecentlyLoggedDOMEventTypes = {};

for (DOMEvent in DOMEvents) {

  var DOMEventTypes = DOMEvents[DOMEvent].split(' ');
  DOMEventTypes.filter(function (DOMEventType) {
    var DOMEventCategory = DOMEvent + ' ' + DOMEventType;


    document.addEventListener(DOMEventType, function (e) {
      if (test_break) {

        if (RecentlyLoggedDOMEventTypes[DOMEventCategory]) return;
        RecentlyLoggedDOMEventTypes[DOMEventCategory] = true;
        setTimeout(function () { RecentlyLoggedDOMEventTypes[DOMEventCategory] = false }, 1000);
        var isActive = e.target == document.activeElement;

        if (isActive) {
          BIG_DADDY_LIST.push([DOMEventCategory, ['target= ', e.target], [' active= ', document.activeElement], "key= " + e.key, "\n"]);
          // BIG_DADDY_LIST.push(DOMEventCategory, ['target= ', e.target], [' active= ' , document.activeElement], ' isActive= ' + true, "key= " + e.key, "\n");
          if (e.key == "Enter") {
            console.log(BIG_DADDY_LIST)
          }
        }


        // BIG_DADDY_LIST.push(DOMEventCategory, ['target= ', e.target], [' active= ' , document.activeElement], ' isActive= ' + false,  "key= " + e.key, "\n");
        else {
          BIG_DADDY_LIST.push([DOMEventCategory, ['target= ', e.target], [' active= ', document.activeElement], "key= " + e.key, "\n"]);
        }


        if (BIG_DADDY_LIST.length > 20000) {


          BIG_DADDY_LIST.splice(0, 1000)

          // console.log(BIG_DADDY_LIST)
        }
      }
    }, true);
  });
}







let DB_breaker = 0
const minutes = document.getElementById('m')
const Sec = document.getElementById('s')
const form = document.getElementById('p-form')
// const points = 999
const csrf = document.getElementsByName('csrfmiddlewaretoken')
const url = 'http://127.0.0.1:8000/math_game/'




var active = false;
var currentX;
var currentY;
var initialX;
var initialY;
var xOffset = 0;
var yOffset = 0;


// for the loop operations
var RESULT_NUM = 18;
var RESULT_NUM_X2_IN_DRAG_END = 19;
var ITEM_NUM = 18;
var NUM_OF_ITERATION_First = 6
var NUM_OF_ITERATION_Secound = 4
var BOTTONS_COUNT = 8
var RESEAT_BUTTONS_NUM = 6
var BTN_NUM = 12

// Audio Files
var Let_Go_Audio = new Audio("/static/math_game_js/let_go.mp3")
var Pick_Up_Audio = new Audio("/static/math_game_js/pick_up.mp3")
var Remove_All_Answers_Audio = new Audio("/static/math_game_js/remove_answers.mp3")


// +---x detection
VALUES = ["", "", "", "", "", "", ""]

// where the numbers and results get stored
var NUMBERS_LIST = []
var RESULTS_LIST = []
var RESEAT_BUTTONS_LIST = []
var BTN = []
// var NUMBER_ID = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
var NUMBER_ID = [[NaN, NaN], [NaN, NaN], [NaN, NaN], [NaN, NaN], [NaN, NaN], [NaN, NaN], [NaN, NaN], [NaN, NaN], [NaN, NaN], [NaN, NaN], [NaN, NaN], [NaN, NaN], [NaN, NaN], [NaN, NaN], [NaN, NaN], [NaN, NaN], [NaN, NaN], [NaN, NaN]]
var NUMBER_PLACING_ORDER = []
var PLACING_COUNTER = 0
//

//for saving the results indexes on the right order
var RESULTS_INDEXES = []

var correct_results = []
// for fitting the items inside the result block
var ITEM_LIST = [item0, item1, item2, item3, item4, item5, item6, item7, item8, item9, item10, item11, item12, item13, item14, item15, item16, item17]
var OFFSET_LIST = [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]]

// full game class

function Math_Addition_Substraction() {
  LOCAL_MAX_NUM = 20

  x = Math.random() * LOCAL_MAX_NUM
  y = Math.random() * LOCAL_MAX_NUM
  z = Math.random() * LOCAL_MAX_NUM


  result = Math.round(x) //36
  first_num = Math.round(y) //54 50%
  secound_num = Math.round(z)

  if (result == 0) {
    result = result + 1
  }

  percentage_first_num = (first_num / result) * 100
  percentage_secound_num = (secound_num / result) * 100
  total_percentage = percentage_first_num + percentage_secound_num

  //percentage of the two numbers from the result
  //more than a 100
  if (total_percentage > 100) {
    // first if statment
    if (percentage_first_num > percentage_secound_num) {
      percentage_left = percentage_first_num - percentage_secound_num;

      if (percentage_left > 100) {
        percentage_left = percentage_left - 100

        third_num = (percentage_left / 100) * result
        third_num = Math.round(third_num)

        third_num = -third_num
        secound_num = -secound_num
      }
      else {
        percentage_left = 100 - percentage_left
        third_num = (percentage_left / 100) * result
        third_num = Math.round(third_num)

        secound_num = -secound_num
      }
    }

    // end of the whole if statment
    else {
      percentage_left = percentage_secound_num - percentage_first_num

      if (percentage_left > 100) {
        percentage_left = percentage_left - 100

        third_num = (percentage_left / 100) * result
        third_num = Math.round(third_num)

        third_num = -third_num
        first_num = -first_num
      }
      else {
        percentage_left = 100 - percentage_left
        third_num = (percentage_left / 100) * result
        third_num = Math.round(third_num)

        first_num = -first_num
      }

    }
  }
  else {
    percentage_left = 100 - total_percentage
    third_num = (percentage_left / 100) * result
    third_num = Math.round(third_num)
  }

  return [first_num, secound_num, third_num, result]
}

function Math_Multiplication() {
  LOCAL_MAX_NUM = 20
  LOCAL_MUL_MAX = 20

  x = Math.random() * LOCAL_MAX_NUM
  y = Math.random() * LOCAL_MUL_MAX
  z = Math.random() * LOCAL_MUL_MAX

  result = Math.round(x)
  first_num = Math.round(y)
  secound_num = Math.round(z)

  if (result == 0) {
    result = result + 1
  }


  total_percentage = ((first_num * secound_num) / result) * 100

  if (total_percentage > 100) {
    percentage = 100 - total_percentage

    if (percentage > 100) {
      third_num = (percentage / 100) * result
      third_num = Math.round(third_num)
      third_num = -third_num
    }
    else {
      third_num = (percentage / 100) * result
      third_num = Math.round(third_num)
    }

  }
  else {
    percentage = 100 - total_percentage
    third_num = (percentage / 100) * result
    third_num = Math.round(third_num)
  }
  return [first_num, secound_num, third_num, result]
}

// shuffle the items and answers function
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {

    // Generate random number
    var j = Math.floor(Math.random() * (i + 1));

    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
}



// putting the result and item VALUES
function setting_the_numbers() {
  // setting the items VALUES
  for (i = 0; i < NUM_OF_ITERATION_First; i++) {
    if (i % 2 == 0) {
      Addition_and_substraction = Math_Addition_Substraction()
      // console.log("here")
    }
    else {
      Multiplication = Math_Multiplication()
      // console.log("second_hehe")
    }

    for (j = 0; j < NUM_OF_ITERATION_Secound; j++) {
      if (i % 2 == 0) {
        if (j == 3) {
          RESULTS_LIST.push(Addition_and_substraction[j])
        }
        else {
          NUMBERS_LIST.push(Addition_and_substraction[j])
        }
        // console.log("first_loop")
      }
      else {
        if (j == 3) {
          RESULTS_LIST.push(Multiplication[j])
        }
        else {
          NUMBERS_LIST.push(Multiplication[j])
        }
      }
    }
  }

  // setting the results VALUES
  // this console.log is for showing the results before the shuffle
  // console.log(NUMBERS_LIST, RESULTS_LIST)

  NUMBERS_LIST = shuffleArray(NUMBERS_LIST)
  RESULTS_LIST = shuffleArray(RESULTS_LIST)

  for (i = 0; i < ITEM_NUM; i++) {
    document.getElementById("item" + i).innerHTML = NUMBERS_LIST[i];
  }
  for (j = 0; j < NUM_OF_ITERATION_First; j++) {
    document.getElementById("result_" + j).innerHTML = RESULTS_LIST[j]
  }
}


function Set_Element_Back(NUMBER_ID) {
  let NEW_NUMBER_ID = []
  let counter = 0
  let element_id_holder = 0

  for (i = 0; i < RESULT_NUM; i++) {
    NEW_NUMBER_ID.push(NUMBER_ID[i][0])
  }

  let sorted_arr = NEW_NUMBER_ID.slice().sort();

  for (let i = 0; i < sorted_arr.length - 1; i++) {
    // console.log(sorted_arr)
    if (sorted_arr[i + 1] == sorted_arr[i]) {
      // console.log("here", sorted_arr[i])
      for (j = 0; j < RESULT_NUM; j++) {
        if (sorted_arr[i] < 18) {
          if (sorted_arr[i] == NEW_NUMBER_ID[j]) {

            for (k = 0; k < RESULT_NUM; k++) {
              document.getElementById("item" + k).className = "test_id Item_boxes"
            }

            if (counter == 0) {
              counter = 1

              element_id_holder = j
            }

            else {
              if (NUMBER_PLACING_ORDER[j][0] > NUMBER_PLACING_ORDER[element_id_holder][0]) {

                NUMBER_ID[element_id_holder][0] = NaN

                OFFSET_LIST[element_id_holder][0] = 0
                OFFSET_LIST[element_id_holder][1] = 0
                // console.log(NUMBER_PLACING_ORDER[j][0], NUMBER_PLACING_ORDER[element_id_holder][0])
                // console.log("this is the first statment", element_id_holder)
                setTranslate_outside(OFFSET_LIST[element_id_holder][0], OFFSET_LIST[element_id_holder][1], ITEM_LIST[element_id_holder])
                counter = 0
                break
              }

              else {
                NUMBER_ID[j][0] = NaN

                OFFSET_LIST[j][0] = 0
                OFFSET_LIST[j][1] = 0
                // console.log(NUMBER_PLACING_ORDER[j][0], NUMBER_PLACING_ORDER[element_id_holder][0])
                // console.log("this is the secound statement", j)
                setTranslate_outside(OFFSET_LIST[j][0], OFFSET_LIST[j][1], ITEM_LIST[j])
                counter = 0
                break
              }
            }
          }
        }
      }
    }
  }
  for (k = 0; k < RESULT_NUM; k++) {
    document.getElementById("item" + k).className = "test_id Item_boxes"
  }
  // console.log(NEW_NUMBER_ID, i)
}



// check if the VALUES are correct
function value_check() {
  // var ROW_LIST = [NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN]
  var results = []
  var j = 0
  var results_list_counter = 0

  for (i = 0; i < ITEM_NUM; i = i + 3) {
    if (VALUES[j] == "+" && VALUES[j + 1] == "+") {
      results[i] = RESULTS_INDEXES[i] + RESULTS_INDEXES[i + 1] + RESULTS_INDEXES[i + 2]
    }
    else if (VALUES[j] == "+" && VALUES[j + 1] == "-") {
      results[i] = RESULTS_INDEXES[i] + RESULTS_INDEXES[i + 1] - RESULTS_INDEXES[i + 2]
    }
    else if (VALUES[j] == "+" && VALUES[j + 1] == "x") {
      results[i] = RESULTS_INDEXES[i] + RESULTS_INDEXES[i + 1] * RESULTS_INDEXES[i + 2]
    }
    else if (VALUES[j] == "-" && VALUES[j + 1] == "+") {
      results[i] = RESULTS_INDEXES[i] - RESULTS_INDEXES[i + 1] + RESULTS_INDEXES[i + 2]
    }
    else if (VALUES[j] == "-" && VALUES[j + 1] == "-") {
      results[i] = RESULTS_INDEXES[i] - RESULTS_INDEXES[i + 1] - RESULTS_INDEXES[i + 2]
    }
    else if (VALUES[j] == "-" && VALUES[j + 1] == "x") {
      results[i] = RESULTS_INDEXES[i] - RESULTS_INDEXES[i + 1] * RESULTS_INDEXES[i + 2]
    }
    else if (VALUES[j] == "x" && VALUES[j + 1] == "+") {
      results[i] = RESULTS_INDEXES[i] * RESULTS_INDEXES[i + 1] + RESULTS_INDEXES[i + 2]
    }
    else if (VALUES[j] == "x" && VALUES[j + 1] == "-") {
      results[i] = RESULTS_INDEXES[i] * RESULTS_INDEXES[i + 1] - RESULTS_INDEXES[i + 2]
    }
    else if (VALUES[j] == "x" && VALUES[j + 1] == "x") {
      results[i] = RESULTS_INDEXES[i] * RESULTS_INDEXES[i + 1] * RESULTS_INDEXES[i + 2]
    }
    // console.log(j)
    j = j + 2
  }


  for (i = 0; i < ITEM_NUM; i++) {
    if (i % 3 == 0) {
      if (results[i] == RESULTS_LIST[results_list_counter]) {
        document.getElementById("behind" + results_list_counter).style.backgroundColor = "rgba(188, 255, 188, 0.83)"
        document.getElementById("Reset_button" + results_list_counter).style.backgroundColor = "rgb(94, 255, 94)"
        document.getElementById("Reset_button" + results_list_counter).innerHTML = "✓"


        correct_results[results_list_counter] = true
        results_list_counter = results_list_counter + 1

      }



      else {
        document.getElementById("behind" + results_list_counter).style.backgroundColor = "rgba(209, 209, 209, 0.83)"
        document.getElementById("Reset_button" + results_list_counter).style.backgroundColor = "rgb(255, 138, 138)"
        document.getElementById("Reset_button" + results_list_counter).innerHTML = "✗"


        correct_results[results_list_counter] = false
        results_list_counter = results_list_counter + 1
      }
    }
  }

  if (DB_breaker == 0) {
    if (correct_results[0] == true && correct_results[1] == true && correct_results[2] == true && correct_results[3] == true && correct_results[4] == true && correct_results[5] == true) {

      DB_ponits_view = (DB_Seconds / 4)
      DB_ponits_view = (DB_ponits_view / 60)

      DB_ponits_view_before_the_deceimal = parseInt(DB_ponits_view.toString().split('.')[0]);
      DB_ponits_view_after_the_deceimal = parseInt(DB_ponits_view.toString().split('.')[1]);

      DB_ponits_view_after_the_deceimal = (DB_ponits_view_after_the_deceimal * 60)

      while (DB_ponits_view_after_the_deceimal > 999) {
        // while "more than 4 digits", "throw out last digit"
        DB_ponits_view_after_the_deceimal = DB_ponits_view_after_the_deceimal / 10;
      }
      DB_ponits_view_after_the_deceimal = Math.round(DB_ponits_view_after_the_deceimal)

      DB_combined = DB_ponits_view_before_the_deceimal + ":" + DB_ponits_view_after_the_deceimal


      // console.log(DB_ponits_view)
      // console.log(DB_combined)
      // console.log(DB_ponits_view_before_the_deceimal)
      // console.log(DB_ponits_view_after_the_deceimal)











      function getCookie(name) {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
          const cookies = document.cookie.split(';');
          for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
              cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
              break;
            }
          }
        }
        return cookieValue;
      }
      const csrftoken = getCookie('csrftoken');

      var csrfmiddlewaretoken_pass = csrf[0].value

      // console.log(csrfmiddlewaretoken_pass)
      // console.log(csrftoken)
      // console.log(DB_Seconds)
      var BIG_DADDY_LIST_test = JSON.stringify(BIG_DADDY_LIST)
      form.addEventListener('submit', e => {
        e.preventDefault()
      })
      // const fd = new FormData()
      // fd.append('csrfmiddlewaretoken', csrf[0].value)
      // fd.append('name', name.value)
      // fd.append('points', points.value)

      // console.log(points.value)
      // console.log(csrfmiddlewaretoken_pass)
      // console.log(csrftoken)

      $.ajax({
        type: "POST",
        url: url,
        enctype: 'multipart/form-data',
        data: {
          csrfmiddlewaretoken: csrftoken,
          'points': DB_Seconds,
          'DB_combined': DB_combined,
          'Big_list': BIG_DADDY_LIST_test,
        },
        success: function (resposne) {
          console.log("success")
        },
        error: function (error) {
          console.log(error);
        },
      })
      DB_breaker = 1
      //Display the current time for the user
      document.getElementById("current_time").innerHTML = 'Your current time is:' + DB_combined
      document.getElementById("success_message").style.zIndex = "100";
      document.getElementById("success_message").style.opacity = "1";
      document.getElementById("success_message").style.pointerEvents = "unset";
      Best_score = document.getElementById('Best_score').innerHTML

      Best_score = parseInt(Best_score)

      if (Best_score > DB_Seconds || isNaN(Best_score)) {
        document.getElementById('Try_Again_Or_Success').innerHTML = 'congrats you have a new high score.'
      }
      else {
        document.getElementById('Try_Again_Or_Success').innerHTML = 'your previos score was better.'
      }



    }
  }
}

for (i = 0; i < RESEAT_BUTTONS_NUM; i++) {
  Reset_button = document.querySelector("#Reset_button" + i)
  RESEAT_BUTTONS_LIST.push(Reset_button)
}

function mouseover(e) {
  for (i = 0; i < RESEAT_BUTTONS_NUM; i++) {
    if (e.target == RESEAT_BUTTONS_LIST[i]) {

      if (correct_results[i] == true) {
        document.getElementById("Reset_button" + i).style.backgroundColor = "rgb(44, 237, 44)"
      }

      else {
        document.getElementById("Reset_button" + i).style.backgroundColor = "rgb(255, 100, 100)"
      }
    }
  }
}

function mouseout(e) {
  for (i = 0; i < RESEAT_BUTTONS_NUM; i++) {
    if (e.target == RESEAT_BUTTONS_LIST[i]) {
      if (correct_results[i] == true) {
        document.getElementById("Reset_button" + i).style.backgroundColor = "rgb(105, 255, 105)"
      }

      else {
        document.getElementById("Reset_button" + i).style.backgroundColor = "rgb(255, 138, 138)"
      }
    }
  }
}


var container = document.querySelector("#Outer_container")


container.addEventListener("touchstart", dragStart, false);
container.addEventListener("touchend", dragEnd, false);
container.addEventListener("touchmove", drag, false);

container.addEventListener("mouseover", mouseover, false);
container.addEventListener("mouseout", mouseout, false);


container.addEventListener("mousedown", dragStart, false);
container.addEventListener("mouseup", dragEnd, false);
container.addEventListener("mousemove", drag, false);

container.addEventListener("click", BTN_Click);


function Result_box_size() {
  result_box_sizes = []
  for (i = 0; i < RESULT_NUM; i++) {
    var result_box = document.getElementById("result_answer_" + i)
    var size_box = result_box.getBoundingClientRect();
    result_box_size = [size_box.top, size_box.bottom, size_box.right, size_box.left]
    result_box_sizes.push(result_box_size)
  }
  // console.log(result_box_sizes)
  return result_box_sizes;
}


function Items_box_sizes() {
  box_sizes = []

  for (i = 0; i < ITEM_NUM; i++) {
    var result_box = document.getElementById("item" + i)
    var size_box = result_box.getBoundingClientRect();
    box_size = [size_box.top, size_box.bottom, size_box.right, size_box.left]
    box_sizes.push(box_size)
  }
  // console.log(box_sizes)

  return box_sizes;
}

Item_size = Items_box_sizes()




function dragStart(e) {
  last_moved_element = NaN
  for (i = 0; i < ITEM_NUM; i++) {
    if (e.target === ITEM_LIST[i]) {
      // console.log(i)
      active = true
      drag_num = i
      moving_item = ITEM_LIST[i]
      Pick_Up_Audio.play();
    }
  }


  if (e.type === "touchstart") {
    initialX = e.touches[0].clientX - OFFSET_LIST[drag_num][0];
    initialY = e.touches[0].clientY - OFFSET_LIST[drag_num][1];

    //Audio play
    // Pick_Up_Audio.play();
  }
  else {
    initialX = e.clientX - OFFSET_LIST[drag_num][0];
    initialY = e.clientY - OFFSET_LIST[drag_num][1]
    //Audio play
    // console.log("offset_list", OFFSET_LIST)
    // console.log(OFFSET_LIST[drag_num][1])

  }
  for (i = 0; i < RESULT_NUM; i++) {
    document.getElementById("item" + i).className = "Item_boxes"
  }
}


function dragEnd(e) {
  result_size = Result_box_size()
  item_size_after = Items_box_sizes()


  active = false;

  for (i = 0; i < ITEM_NUM; i++) {
    if (drag_num == i) {
      for (j = 0; j < RESULT_NUM_X2_IN_DRAG_END; j++) {

        OFFSET_LIST[drag_num] = [xOffset, yOffset]

        release_box_x = xOffset
        release_box_y = yOffset

        release_box_x = release_box_x + Item_size[drag_num][3]
        release_box_y = release_box_y + Item_size[drag_num][0]


        NUMBER_ID[j, i] = [j, NUMBERS_LIST[i]]


        if (j < 18) {
          Fit_box_x = result_size[j][3] - Item_size[drag_num][3]
          Fit_box_y = result_size[j][0] - Item_size[drag_num][0]


          // delete from here is the offset get broken

          // console.log(OFFSET_LIST)
          // console.log(j)
          if ((release_box_x + 70 > result_size[j][3] && release_box_x - 70 < result_size[j][3]) && (release_box_y + 70 > result_size[j][0] && release_box_y - 70 < result_size[j][0])) {
            setTranslate_inside(Fit_box_x, Fit_box_y, moving_item)

            // elemnet stored in place 

            NUMBER_PLACING_ORDER[i] = [PLACING_COUNTER, NUMBER_ID[i][1]]
            PLACING_COUNTER = PLACING_COUNTER + 1

            // console.log(NUMBER_PLACING_ORDER, PLACING_COUNTER)


            // console.log(NUMBER_ID)

            // if (j % 3 == 0 || j == 0) {
            //   for (k = 0; k < 3; k++) {

            //     if (RESULTS_INDEXES[j + k] == NUMBERS_LIST[drag_num] && RESULTS_INDEXES[j + k] in Duplictae_Result_Number) {
            //       RESULTS_INDEXES[j + k] = NUMBERS_LIST[drag_num]
            //     }
            //     console.log("new " + (j + k))

            //   }
            // }
            drag_num = NaN
            // console.log(OFFSET_LIST)
            Let_Go_Audio.play();

            break
          }
        }


        else {

          setTranslate_outside(xOffset, yOffset, moving_item)


        }

      }
    }
  }


  Set_Element_Back(NUMBER_ID)


  for (k = 0; k < ITEM_NUM; k++) { // 0 - 18
    for (z = 0; z < ITEM_NUM; z++) {

      if (k == NUMBER_ID[z][0]) { // hold the j values

        RESULTS_INDEXES[k] = NUMBER_ID[z][1]
        // console.log(RESULTS_INDEXES, k, z)
        break
      }

      else {
        RESULTS_INDEXES[k] = NaN
      }
    }
  }

  // new_test = []
  // for(i = 0; i < RESULT_NUM_X2_IN_DRAG_END-1; i++){
  //   new_test.push(NUMBER_ID[i][0])
  // }

  // new_test_2 = new_test.slice().sort()
  // console.log(new_test_2)

  // console.log(OFFSET_LIST)
  // console.log(RESULTS_INDEXES)
  // console.log(NUMBER_ID)
  // console.log(NUMBER_ID, RESULTS_INDEXES)

  value_check()
}


function drag(e) {
  if (active) {

    e.preventDefault();

    if (e.type === "touchmove") {
      if (OFFSET_LIST[drag_num][0] + OFFSET_LIST[drag_num][1] == 0) {
        xOffset = e.touches[0].clientX - initialX;
        yOffset = e.touches[0].clientY - initialY;
      }
      else {
        xOffset = e.touches[0].clientX - initialX
        yOffset = e.touches[0].clientY - initialY
      }


      setTranslate_outside(xOffset, yOffset, moving_item);
    }
    else {

      if (OFFSET_LIST[drag_num][0] + OFFSET_LIST[drag_num][1] == 0) {
        xOffset = e.clientX - initialX;
        yOffset = e.clientY - initialY;
      }
      else {
        xOffset = e.clientX - initialX
        yOffset = e.clientY - initialY
      }


      // console.log(e.clientX, e.clientY, initialX, initialY)
      // console.log(drag_num)
      // xOffset = OFFSET_LIST[drag_num][0]
      // yOffset = OFFSET_LIST[drag_num][1]


      setTranslate_outside(xOffset, yOffset, moving_item);
    }
  }
}

function setTranslate_outside(xPos, yPos, el) {
  el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";

}

function setTranslate_inside(xPos, yPos, el) {
  el.style.webkitTransform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
}


// main code area
setting_the_numbers()



// function Demon_Idea_+_-_Mul Stupid
counter = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

for (i = 0; i < BTN_NUM; i++) {
  BTN_holder = document.querySelector("#Btn" + i)
  BTN.push(BTN_holder)
}
// console.log(BTN)

function BTN_Click(e) {
  for (i = 0; i < BTN_NUM; i++) {
    if (e.target == BTN[i]) {

      if (counter[i] == 0) {
        VALUES[i] = "+"
        document.getElementById("Btn" + i).innerHTML = VALUES[i]
        counter[i] = counter[i] + 1
      }

      else if (counter[i] == 1) {
        VALUES[i] = "-"
        document.getElementById("Btn" + i).innerHTML = VALUES[i]
        counter[i] = counter[i] + 1
      }

      else {
        VALUES[i] = "x"
        document.getElementById("Btn" + i).innerHTML = VALUES[i]
        counter[i] = 0
      }
    }
  }
  value_check()
}


//***************************
document.getElementById("Reset_button").addEventListener("click", function () {

  for (i = 0; i < RESULT_NUM; i++) {
    document.getElementById("item" + i).className = "test_id Item_boxes"
  }

  for (i = 0; i < RESULT_NUM; i++) {
    OFFSET_LIST[i] = [0, 0]


    // document.getElementById("item0").className = "test_id Item_boxes";

    setTranslate_outside(OFFSET_LIST[i][0], OFFSET_LIST[i][1], ITEM_LIST[i])

    Remove_All_Answers_Audio.play()
    NUMBER_ID[i][0] = NaN
    RESULTS_INDEXES[i] = NaN
  }

  value_check()
})
// ************************



document.getElementById("Reset_button0").addEventListener("click", function () {

  for (i = 0; i < RESULT_NUM; i++) {
    document.getElementById("item" + i).className = "Item_boxes test_id"
  }

  for (i = 0; i < RESULT_NUM; i++) {
    // console.log(NUMBER_ID[i][0])
    if (NUMBER_ID[i][0] < 3) {
      OFFSET_LIST[i] = [0, 0]

      setTranslate_outside(OFFSET_LIST[i][0], OFFSET_LIST[i][1], ITEM_LIST[i])

      NUMBER_ID[i][0] = NaN
      Remove_All_Answers_Audio.play()

      RESULTS_INDEXES[0] = NaN
      RESULTS_INDEXES[1] = NaN
      RESULTS_INDEXES[2] = NaN

      console.log(i)
    }
  }
  console.log(NUMBER_ID, RESULTS_INDEXES)

  value_check()
})

document.getElementById("Reset_button1").addEventListener("click", function () {
  for (i = 0; i < RESULT_NUM; i++) {
    document.getElementById("item" + i).className = "Item_boxes test_id"
  }

  for (i = 0; i < RESULT_NUM; i++) {
    // console.log(NUMBER_ID[i][0])
    if (NUMBER_ID[i][0] < 6 && NUMBER_ID[i][0] > 2) {
      OFFSET_LIST[i] = [0, 0]

      setTranslate_outside(OFFSET_LIST[i][0], OFFSET_LIST[i][1], ITEM_LIST[i])

      NUMBER_ID[i][0] = NaN
      Remove_All_Answers_Audio.play()

      RESULTS_INDEXES[3] = NaN
      RESULTS_INDEXES[4] = NaN
      RESULTS_INDEXES[5] = NaN
      // console.log(OFFSET_LIST)
      console.log(i)

    }
  }
  console.log(NUMBER_ID, RESULTS_INDEXES)

  value_check()
})

document.getElementById("Reset_button2").addEventListener("click", function () {
  for (i = 0; i < RESULT_NUM; i++) {
    document.getElementById("item" + i).className = "Item_boxes test_id"
  }

  for (i = 0; i < RESULT_NUM; i++) {
    // console.log(NUMBER_ID[i][0])
    if (NUMBER_ID[i][0] < 9 && NUMBER_ID[i][0] > 5) {
      OFFSET_LIST[i] = [0, 0]

      setTranslate_outside(OFFSET_LIST[i][0], OFFSET_LIST[i][1], ITEM_LIST[i])

      NUMBER_ID[i][0] = NaN
      Remove_All_Answers_Audio.play()
      RESULTS_INDEXES[6] = NaN
      RESULTS_INDEXES[7] = NaN
      RESULTS_INDEXES[8] = NaN

      console.log(i)

    }
  }
  console.log(NUMBER_ID, RESULTS_INDEXES)

  value_check()

})

document.getElementById("Reset_button3").addEventListener("click", function () {
  for (i = 0; i < RESULT_NUM; i++) {
    document.getElementById("item" + i).className = "Item_boxes test_id"
  }

  for (i = 0; i < RESULT_NUM; i++) {
    // console.log(NUMBER_ID[i][0])
    if (NUMBER_ID[i][0] < 12 && NUMBER_ID[i][0] > 8) {
      OFFSET_LIST[i] = [0, 0]

      setTranslate_outside(OFFSET_LIST[i][0], OFFSET_LIST[i][1], ITEM_LIST[i])

      NUMBER_ID[i][0] = NaN
      Remove_All_Answers_Audio.play()
      RESULTS_INDEXES[9] = NaN
      RESULTS_INDEXES[10] = NaN
      RESULTS_INDEXES[11] = NaN

      console.log(i)

    }
  }
  console.log(NUMBER_ID, RESULTS_INDEXES)

  value_check()

})
document.getElementById("Reset_button4").addEventListener("click", function () {
  for (i = 0; i < RESULT_NUM; i++) {
    document.getElementById("item" + i).className = "Item_boxes test_id"
  }

  for (i = 0; i < RESULT_NUM; i++) {
    // console.log(NUMBER_ID[i][0])
    if (NUMBER_ID[i][0] < 15 && NUMBER_ID[i][0] > 11) {
      OFFSET_LIST[i] = [0, 0]

      setTranslate_outside(OFFSET_LIST[i][0], OFFSET_LIST[i][1], ITEM_LIST[i])

      NUMBER_ID[i][0] = NaN
      Remove_All_Answers_Audio.play()
      RESULTS_INDEXES[12] = NaN
      RESULTS_INDEXES[13] = NaN
      RESULTS_INDEXES[14] = NaN

      console.log(i)

    }
  }
  console.log(NUMBER_ID, RESULTS_INDEXES)

  value_check()

})

document.getElementById("Reset_button5").addEventListener("click", function () {
  for (i = 0; i < RESULT_NUM; i++) {
    document.getElementById("item" + i).className = "Item_boxes test_id"
  }

  for (i = 0; i < RESULT_NUM; i++) {
    // console.log(NUMBER_ID[i][0])
    if (NUMBER_ID[i][0] > 14 && NUMBER_ID[i][0] < 18) {
      OFFSET_LIST[i] = [0, 0]

      setTranslate_outside(OFFSET_LIST[i][0], OFFSET_LIST[i][1], ITEM_LIST[i])

      NUMBER_ID[i][0] = NaN
      Remove_All_Answers_Audio.play()

      RESULTS_INDEXES[15] = NaN
      RESULTS_INDEXES[16] = NaN
      RESULTS_INDEXES[17] = NaN

      console.log(i)

    }
  }
  value_check()

})


// console.log(NUMBER_ID)


// function findDuplicates(List) {

//   let sorted_arr = List.slice().sort();

//   let results = [];
//   for (let i = 0; i < sorted_arr.length - 1; i++) {
//     if (sorted_arr[i + 1] == sorted_arr[i]) {
//       results.push(sorted_arr[i]);
//     }
//   }
//   return results;
// }

// Duplictae_Result_Number = findDuplicates(NUMBERS_LIST)

// console.log(Duplictae_Result_Number)


// for making them slowmotion from the start
for (k = 0; k < RESULT_NUM; k++) {
  document.getElementById("item" + k).className = "test_id Item_boxes"
}



document.addEventListener('DOMContentLoaded', () => {
  const homepage = document.querySelector('#homepage');
  const math_game_try_again = document.querySelector('#math_game');

  homepage.addEventListener('mouseover', (e) => {
    e.preventDefault();

    document.getElementById("homepage").style.backgroundColor = "rgb(39, 63, 197)";
    document.getElementById("homepage_p").style.color = "black";

  });

  homepage.addEventListener('mouseout', (e) => {
    e.preventDefault();

    document.getElementById("homepage").style.backgroundColor = "white";
    document.getElementById("homepage_p").style.color = "rgb(39, 63, 197)";
  });

  math_game_try_again.addEventListener('mouseover', (e) => {
    e.preventDefault();

    document.getElementById("math_game").style.backgroundColor = "rgb(39, 197, 65)";
    document.getElementById("math_game_p").style.color = "black";

  });

  math_game_try_again.addEventListener('mouseout', (e) => {
    e.preventDefault();

    document.getElementById("math_game").style.backgroundColor = "white";
    document.getElementById("math_game_p").style.color = "rgb(39, 197, 65)";
  });
});