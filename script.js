$ (document).ready (function () {
  var bgMusic = new Audio ('./img/sound.mp3');
  $ ('.start .btn').click (function () {
    $ ('.start').hide ();

    bgMusic.play ();
    let timerId = setTimeout (function tick () {
      let counter = parseInt (document.getElementById ('timer').textContent);
      document.getElementById ('timer').textContent = counter - 1;
      if (counter > 1) timerId = setTimeout (tick, 1000);
      $ ('.firstCard').fadeOut (10000, function () {
        $ ('.secondCard').fadeIn (3000, function () {
          $ ('.find').html ('The card you chose has disappeared');
          $ ('.restart').fadeIn ();
          $ ('.restart').click (function () {
            window.location.reload (true);
          });
        });
      });
    }, 1000);
  });
});
