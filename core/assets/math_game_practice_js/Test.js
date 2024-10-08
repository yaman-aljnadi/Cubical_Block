// const minutes = document.getElementById('m')
// const Sec = document.getElementById('s')
// const form = document.getElementById('p-form')

// const name = document.getElementById('id_user')
// const points = document.getElementById('id_points')

// const csrf = document.getElementsByName('csrfmiddlewaretoken')
// const url = 'http://127.0.0.1:8000/math_game/'
 

// function getCookie(name) {
//     let cookieValue = null;
//     if (document.cookie && document.cookie !== '') {
//         const cookies = document.cookie.split(';');
//         for (let i = 0; i < cookies.length; i++) {
//             const cookie = cookies[i].trim();
//             // Does this cookie string begin with the name we want?
//             if (cookie.substring(0, name.length + 1) === (name + '=')) {
//                 cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
//                 break;
//             }
//         }
//     }
//     return cookieValue;
// }
// const csrftoken = getCookie('csrftoken');

// var csrfmiddlewaretoken_pass = csrf[0].value

// console.log(csrfmiddlewaretoken_pass)
// console.log(csrftoken)

// form.addEventListener('submit', e =>{
//     e.preventDefault()

//     // const fd = new FormData()
//     // fd.append('csrfmiddlewaretoken', csrf[0].value)
//     // fd.append('name', name.value)
//     // fd.append('points', points.value)

//     // console.log(points.value)
//     // console.log(csrfmiddlewaretoken_pass)
//     // console.log(csrftoken)

//     $.ajax({
//         type: "POST",
//         url: url,
//         enctype: 'multipart/form-data',
//         data: {
//             csrfmiddlewaretoken : csrftoken,
//             'points': points.value,
//         },
//         success: function(resposne){
//             console.log("success")
//         },
//         error: function(error){
//             console.log(error);
//         },

//     })
// })


// console.log(form)
// console.log(csrf)