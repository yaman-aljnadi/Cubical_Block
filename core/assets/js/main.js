document.addEventListener('DOMContentLoaded', () => {
  const play = document.querySelector('#play');
  const practice = document.querySelector('#practice');
  const party = document.querySelector('#party');
  const scoreboard = document.querySelector('#scoreboard');

  const start_playing = document.querySelector('#start_playing');
  
  start_playing.addEventListener('mouseover', (e) => {
    e.preventDefault();

    document.getElementById('start_playing_p').style.color = 'rgb(226, 226, 255)';

  });

  start_playing.addEventListener('mouseout', (e) => {
    e.preventDefault();

    document.getElementById('start_playing_p').style.color = 'rgb(7, 7, 139)';

  });

  // this code will run as soon as the page is opened 

  document.getElementById('math_game').style.transition = '0s';
  document.getElementById('pictures_game').style.transition = '0s';
  document.getElementById('maze_game').style.transition = '0s';

  document.getElementById('play').style.width = '25vw';

  document.getElementById('just_play').style.color = 'black';

  if(document.getElementById('user_display_p') != null){
    document.getElementById('user_display_p').style.color = 'rgb(0, 168, 168)';
  }
  
  beta.classList.remove('on_off');
  This_weeks_game_tital.classList.remove('on_off');
  This_weeks_game.classList.remove('on_off');
  prize.classList.remove('on_off');
  your_rank.classList.remove('on_off');
  start_playing.classList.remove('on_off');

  document.getElementById("body").style.backgroundColor = "rgb(217, 217, 255)";

  document.getElementById("body1").style.top = "0%";
  document.getElementById("body1").style.left = "0%";

  document.getElementById("body2").style.top = "110%";
  document.getElementById("body2").style.left = "-110%";

  document.getElementById("body3").style.top = "220%";
  document.getElementById("body3").style.left = "-220%";

  document.getElementById("body4").style.top = "330%";
  document.getElementById("body4").style.left = "-330%";

  document.getElementById("inner_background").style.backgroundColor = "rgba(127, 150, 255, 0.603)";

  document.getElementById("logo").style.backgroundColor = "rgba(127, 150, 255, 0.603)";
  // ends here 

  play.addEventListener('mouseover', (e) => {     start_playing
    e.preventDefault();

    document.getElementById('start_playing').style.transition = '0.4s';
    document.getElementById('math_game').style.transition = '0s';
    document.getElementById('pictures_game').style.transition = '0s';
    document.getElementById('maze_game').style.transition = '0s';

    document.getElementById('play').style.width = '25vw';
    document.getElementById('practice').style.width = '20vw';
    document.getElementById('party').style.width = '20vw';
    document.getElementById('scoreboard').style.width = '20vw';

    document.getElementById('just_play').style.color = 'black';
    document.getElementById('just_practice').style.color = 'rgb(82, 82, 82)';
    document.getElementById('just_party').style.color = 'rgb(82, 82, 82)';
    document.getElementById('just_scoreboard').style.color = 'rgb(82, 82, 82)';

    if(document.getElementById('user_display_p') != null){
      document.getElementById('user_display_p').style.color = 'rgb(0, 168, 168)';
    }

    beta.classList.remove('on_off');
    This_weeks_game_tital.classList.remove('on_off');
    This_weeks_game.classList.remove('on_off');
    prize.classList.remove('on_off');
    your_rank.classList.remove('on_off');
    start_playing.classList.remove('on_off');

    math_game.classList.add('on_off');
    pictures_game.classList.add('on_off');
    maze_game.classList.add('on_off');
    // coming_soon1.classList.add('on_off');
    // coming_soon2.classList.add('on_off');
    // coming_soon3.classList.add('on_off');

    host_a_lobby_button.classList.add('on_off');
    party_explanation.classList.add('on_off');

    // current_competition.classList.add('on_off');
    // your_score.classList.add('on_off');
    // your_time.classList.add('on_off');
    scoreboard_table.classList.add('on_off');
    descriptions.classList.add('on_off');

    document.getElementById("inner_background").style.backgroundColor = "rgba(127, 150, 255, 0.603)";

    document.getElementById("logo").style.backgroundColor = "rgba(127, 150, 255, 0.603)";

    document.getElementById("body").style.backgroundColor = "rgb(217, 217, 255)";

    document.getElementById("body1").style.top = "0%";
    document.getElementById("body1").style.left = "0%";

    document.getElementById("body2").style.top = "110%";
    document.getElementById("body2").style.left = "-110%";

    document.getElementById("body3").style.top = "220%";
    document.getElementById("body3").style.left = "-220%";

    document.getElementById("body4").style.top = "330%";
    document.getElementById("body4").style.left = "-330%";

  });

  practice.addEventListener('mouseover', (e) => {
    e.preventDefault();

    document.getElementById('start_playing').style.transition = '0s';
    document.getElementById('math_game').style.transition = '0.4s';
    document.getElementById('pictures_game').style.transition = '0.4s';
    document.getElementById('maze_game').style.transition = '0.4s';

    document.getElementById('play').style.width = '20vw';
    document.getElementById('practice').style.width = '25vw';
    document.getElementById('party').style.width = '20vw';
    document.getElementById('scoreboard').style.width = '20vw';

    document.getElementById('just_play').style.color = 'rgb(82, 82, 82)';
    document.getElementById('just_practice').style.color = 'black';
    document.getElementById('just_party').style.color = 'rgb(82, 82, 82)';
    document.getElementById('just_scoreboard').style.color = 'rgb(82, 82, 82)';

    if(document.getElementById('user_display_p') != null){
      document.getElementById('user_display_p').style.color = 'rgb(153, 10, 0)';
    }

    beta.classList.add('on_off');
    This_weeks_game_tital.classList.add('on_off');
    This_weeks_game.classList.add('on_off');
    prize.classList.add('on_off');
    your_rank.classList.add('on_off');
    start_playing.classList.add('on_off');

    math_game.classList.remove('on_off');
    pictures_game.classList.remove('on_off');
    maze_game.classList.remove('on_off');
    // coming_soon1.classList.remove('on_off');
    // coming_soon2.classList.remove('on_off');
    // coming_soon3.classList.remove('on_off');

    host_a_lobby_button.classList.add('on_off');
    party_explanation.classList.add('on_off');

    // current_competition.classList.add('on_off');
    // your_score.classList.add('on_off');
    // your_time.classList.add('on_off');
    scoreboard_table.classList.add('on_off');
    descriptions.classList.add('on_off');

    document.getElementById("inner_background").style.backgroundColor = "rgba(255, 127, 127, 0.603)";

    document.getElementById("logo").style.backgroundColor = "rgba(255, 127, 127, 0.603)";

    document.getElementById("body").style.backgroundColor = "rgb(255, 217, 217)";

    document.getElementById("body1").style.top = "-110%";
    document.getElementById("body1").style.left = "110%";

    document.getElementById("body2").style.top = "0%";
    document.getElementById("body2").style.left = "0%";

    document.getElementById("body3").style.top = "110%";
    document.getElementById("body3").style.left = "-110%";

    document.getElementById("body4").style.top = "220%";
    document.getElementById("body4").style.left = "-220%";

  });

  party.addEventListener('mouseover', (e) => {
    e.preventDefault();

    document.getElementById('start_playing').style.transition = '0s';
    document.getElementById('math_game').style.transition = '0s';
    document.getElementById('pictures_game').style.transition = '0s';
    document.getElementById('maze_game').style.transition = '0s';

    document.getElementById('play').style.width = '20vw';
    document.getElementById('practice').style.width = '20vw';
    document.getElementById('party').style.width = '25vw';
    document.getElementById('scoreboard').style.width = '20vw';

    document.getElementById('just_play').style.color = 'rgb(82, 82, 82)';
    document.getElementById('just_practice').style.color = 'rgb(82, 82, 82)';
    document.getElementById('just_party').style.color = 'black';
    document.getElementById('just_scoreboard').style.color = 'rgb(82, 82, 82)';

    if(document.getElementById('user_display_p') != null){
      document.getElementById('user_display_p').style.color = 'rgb(38, 134, 0)';
    }

    beta.classList.add('on_off');
    This_weeks_game_tital.classList.add('on_off');
    This_weeks_game.classList.add('on_off');
    prize.classList.add('on_off');
    your_rank.classList.add('on_off');
    start_playing.classList.add('on_off');


    math_game.classList.add('on_off');
    pictures_game.classList.add('on_off');
    maze_game.classList.add('on_off');
    // coming_soon1.classList.add('on_off');
    // coming_soon2.classList.add('on_off');
    // coming_soon3.classList.add('on_off');

    host_a_lobby_button.classList.remove('on_off');
    party_explanation.classList.remove('on_off');

    // current_competition.classList.add('on_off');
    // your_score.classList.add('on_off');
    // your_time.classList.add('on_off');
    scoreboard_table.classList.add('on_off');
    descriptions.classList.add('on_off');

    document.getElementById("inner_background").style.backgroundColor = "rgba(138, 255, 127, 0.603)";

    document.getElementById("logo").style.backgroundColor = "rgba(138, 255, 127, 0.603)";

    document.getElementById("body").style.backgroundColor = "rgb(217, 255, 220)";

    document.getElementById("body1").style.top = "-220%";
    document.getElementById("body1").style.left = "220%";

    document.getElementById("body2").style.top = "-110%";
    document.getElementById("body2").style.left = "110%";

    document.getElementById("body3").style.top = "0%";
    document.getElementById("body3").style.left = "0%";

    document.getElementById("body4").style.top = "110%";
    document.getElementById("body4").style.left = "-110%";

  });

  scoreboard.addEventListener('mouseover', (e) => {
    e.preventDefault();

    document.getElementById('start_playing').style.transition = '0s';
    document.getElementById('math_game').style.transition = '0s';
    document.getElementById('pictures_game').style.transition = '0s';
    document.getElementById('maze_game').style.transition = '0s';

    document.getElementById('play').style.width = '20vw';
    document.getElementById('practice').style.width = '20vw';
    document.getElementById('party').style.width = '20vw';
    document.getElementById('scoreboard').style.width = '25vw';

    document.getElementById('just_play').style.color = 'rgb(82, 82, 82)';
    document.getElementById('just_practice').style.color = 'rgb(82, 82, 82)';
    document.getElementById('just_party').style.color = 'rgb(82, 82, 82)';
    document.getElementById('just_scoreboard').style.color = 'black';

    if(document.getElementById('user_display_p') != null){
      document.getElementById('user_display_p').style.color = 'rgb(255, 0, 212)';
    }

    beta.classList.add('on_off');
    This_weeks_game_tital.classList.add('on_off');
    This_weeks_game.classList.add('on_off');
    prize.classList.add('on_off');
    your_rank.classList.add('on_off');
    start_playing.classList.add('on_off');

    math_game.classList.add('on_off');
    pictures_game.classList.add('on_off');
    maze_game.classList.add('on_off');
    // coming_soon1.classList.add('on_off');
    // coming_soon2.classList.add('on_off');
    // coming_soon3.classList.add('on_off');

    host_a_lobby_button.classList.add('on_off');
    party_explanation.classList.add('on_off');

    // current_competition.classList.remove('on_off');
    // your_score.classList.remove('on_off');
    // your_time.classList.remove('on_off');
    scoreboard_table.classList.remove('on_off');
    descriptions.classList.remove('on_off');

    document.getElementById("inner_background").style.backgroundColor = "rgba(214, 127, 255, 0.603)";

    document.getElementById("logo").style.backgroundColor = "rgba(214, 127, 255, 0.603)";

    document.getElementById("body").style.backgroundColor = "rgb(222, 193, 255)";

    document.getElementById("body1").style.top = "-330%";
    document.getElementById("body1").style.left = "330%";

    document.getElementById("body2").style.top = "-220%";
    document.getElementById("body2").style.left = "220%";

    document.getElementById("body3").style.top = "-110%";
    document.getElementById("body3").style.left = "110%";

    document.getElementById("body4").style.top = "0%";
    document.getElementById("body4").style.left = "0%";

  });

});