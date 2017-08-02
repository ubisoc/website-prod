;(function ($) {

  function close(e) {
    $('.overlay').hide();
    $('.modal-active').removeClass('modal-active').hide();
  }

  $('[data-modal-target]').on('click', function (e) {
    e.preventDefault();

    var $el = $(e.target);
    var idTarget = $el.data('modal-target');

    $('.overlay').show();
    $('#' + idTarget).addClass('modal-active').show();
  });

  $('.overlay').on('click', close);
  $('.modal-close').on('click', close);
  $(document).keyup(function (e) {
     if (e.keyCode == 27) {
       close(e);
    }
});

})(jQuery);
