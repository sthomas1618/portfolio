!function ($) {

  $(function(){

    var $window = $(window);

    // Disable certain links in docs
    $('section [href^=#]').click(function (e) {
      e.preventDefault();
    });

    // side bar
    setTimeout(function () {
      $('.bs-projects-sidenav').affix({
        offset: {
          top: function () { return $window.width() <= 980 ? 290 : 210; },
          bottom: 270
        }
      });
    }, 100);

    // make code pretty
    window.prettyPrint && prettyPrint();

  });

}(window.jQuery);