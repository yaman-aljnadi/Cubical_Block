document.addEventListener('DOMContentLoaded', () => {
  const play = document.querySelector('#play');
  const practice = document.querySelector('#practice');
  const party = document.querySelector('#party');
  const scoreboard = document.querySelector('#scoreboard');

  document.getElementById('play').style.width = '25vw';

  document.getElementById('just_play').style.color = 'black';

  This_weeks_game.classList.remove('on_off');
  start_playing.classList.remove('on_off');

  play.addEventListener('mouseover', (e) => {
    e.preventDefault();

    document.getElementById('play').style.width = '25vw';
    document.getElementById('practice').style.width = '20vw';
    document.getElementById('party').style.width = '20vw';
    document.getElementById('scoreboard').style.width = '20vw';

    document.getElementById('just_play').style.color = 'black';
    document.getElementById('just_practice').style.color = 'rgb(75, 75, 75)';
    document.getElementById('just_party').style.color = 'rgb(75, 75, 75)';
    document.getElementById('just_scoreboard').style.color = 'rgb(75, 75, 75)';

    This_weeks_game.classList.remove('on_off');
    start_playing.classList.remove('on_off');

    math_game.classList.add('on_off');
    maze_game.classList.add('on_off');
    pictures_game.classList.add('on_off');
    coming_soon1.classList.add('on_off');
    coming_soon2.classList.add('on_off');
    coming_soon3.classList.add('on_off');

    join_a_lobby.classList.add('on_off');
    join_a_lobby_code.classList.add('on_off');
    join_a_lobby_button.classList.add('on_off');
    create_a_lobby.classList.add('on_off');
    host_a_lobby_button.classList.add('on_off');

    current_competition.classList.add('on_off');
    your_score.classList.add('on_off');
    your_time.classList.add('on_off');
    download_full_scoreboard.classList.add('on_off');
    scoreboard_table.classList.add('on_off');
  });

  practice.addEventListener('mouseover', (e) => {
    e.preventDefault();

    document.getElementById('play').style.width = '20vw';
    document.getElementById('practice').style.width = '25vw';
    document.getElementById('party').style.width = '20vw';
    document.getElementById('scoreboard').style.width = '20vw';

    document.getElementById('just_play').style.color = 'rgb(75, 75, 75)';
    document.getElementById('just_practice').style.color = 'black';
    document.getElementById('just_party').style.color = 'rgb(75, 75, 75)';
    document.getElementById('just_scoreboard').style.color = 'rgb(75, 75, 75)';

    This_weeks_game.classList.add('on_off');
    start_playing.classList.add('on_off');

    math_game.classList.remove('on_off');
    maze_game.classList.remove('on_off');
    pictures_game.classList.remove('on_off');
    coming_soon1.classList.remove('on_off');
    coming_soon2.classList.remove('on_off');
    coming_soon3.classList.remove('on_off');

    join_a_lobby.classList.add('on_off');
    join_a_lobby_code.classList.add('on_off');
    join_a_lobby_button.classList.add('on_off');
    create_a_lobby.classList.add('on_off');
    host_a_lobby_button.classList.add('on_off');

    current_competition.classList.add('on_off');
    your_score.classList.add('on_off');
    your_time.classList.add('on_off');
    download_full_scoreboard.classList.add('on_off');
    scoreboard_table.classList.add('on_off');
  });

  party.addEventListener('mouseover', (e) => {
    e.preventDefault();

    document.getElementById('play').style.width = '20vw';
    document.getElementById('practice').style.width = '20vw';
    document.getElementById('party').style.width = '25vw';
    document.getElementById('scoreboard').style.width = '20vw';

    document.getElementById('just_play').style.color = 'rgb(75, 75, 75)';
    document.getElementById('just_practice').style.color = 'rgb(75, 75, 75)';
    document.getElementById('just_party').style.color = 'black';
    document.getElementById('just_scoreboard').style.color = 'rgb(75, 75, 75)';

    This_weeks_game.classList.add('on_off');
    start_playing.classList.add('on_off');

    math_game.classList.add('on_off');
    maze_game.classList.add('on_off');
    pictures_game.classList.add('on_off');
    coming_soon1.classList.add('on_off');
    coming_soon2.classList.add('on_off');
    coming_soon3.classList.add('on_off');

    join_a_lobby.classList.remove('on_off');
    join_a_lobby_code.classList.remove('on_off');
    join_a_lobby_button.classList.remove('on_off');
    create_a_lobby.classList.remove('on_off');
    host_a_lobby_button.classList.remove('on_off');

    current_competition.classList.add('on_off');
    your_score.classList.add('on_off');
    your_time.classList.add('on_off');
    download_full_scoreboard.classList.add('on_off');
    scoreboard_table.classList.add('on_off');
  });

  scoreboard.addEventListener('mouseover', (e) => {
    e.preventDefault();

    document.getElementById('play').style.width = '20vw';
    document.getElementById('practice').style.width = '20vw';
    document.getElementById('party').style.width = '20vw';
    document.getElementById('scoreboard').style.width = '25vw';

    document.getElementById('just_play').style.color = 'rgb(75, 75, 75)';
    document.getElementById('just_practice').style.color = 'rgb(75, 75, 75)';
    document.getElementById('just_party').style.color = 'rgb(75, 75, 75)';
    document.getElementById('just_scoreboard').style.color = 'black';

    This_weeks_game.classList.add('on_off');
    start_playing.classList.add('on_off');

    math_game.classList.add('on_off');
    maze_game.classList.add('on_off');
    pictures_game.classList.add('on_off');
    coming_soon1.classList.add('on_off');
    coming_soon2.classList.add('on_off');
    coming_soon3.classList.add('on_off');

    join_a_lobby.classList.add('on_off');
    join_a_lobby_code.classList.add('on_off');
    join_a_lobby_button.classList.add('on_off');
    create_a_lobby.classList.add('on_off');
    host_a_lobby_button.classList.add('on_off');

    current_competition.classList.remove('on_off');
    your_score.classList.remove('on_off');
    your_time.classList.remove('on_off');
    download_full_scoreboard.classList.remove('on_off');
    scoreboard_table.classList.remove('on_off');
  });
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
