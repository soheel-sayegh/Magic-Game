$ (document).ready (function () {
  $ ('.start .btn').click (function () {
    $ ('.start').hide ();
    let timerId = setTimeout (function tick () {
      let counter = parseInt (document.getElementById ('timer').textContent);
      document.getElementById ('timer').textContent = counter - 1;
      if (counter > 1) timerId = setTimeout (tick, 1000);
      $ ('.firstCard').fadeOut (9000, function () {
        $ ('.secondCard').fadeIn (function () {
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
