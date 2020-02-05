(function($){
  $('.ccn-bg-img').each(function(){
    var $ccn_bg_img = $(this).find('img').attr('src');
    $(this).parent().attr('style', 'background:url(' + $ccn_bg_img + ')');
    $(this).remove();
  });
  $('.js-target-scroll-container').each(function(){
    $(this).find('a').addClass('js-scroller');
  });
  $('form .form-text, form .form-textarea, form .form-email').addClass('form-control');
  $('.modal-body .button').addClass('btn');
  $('.modal-body form > div').each(function(){
    var $placeholder = $(this).find('label').text();
    $(this).find('input').attr('placeholder', $placeholder);
    $(this).find('textarea').attr('placeholder', $placeholder);
    $(this).find('label').remove();
  });
  $('.modal').each(function(){
    $(this).find('h2').addClass('modal-title').appendTo('.modal-header');
  });
  $('.ccn-percentage-bar').each(function(){
    var $percentage = $(this).find('.progress-bar').attr('data-percentage');
    $(this).find('.progress-bar').attr('style', 'width:' + $percentage);
  });
  $('.col-price.Featured .btn').removeClass('btn-light-gray');
  if ($('.force-affix').length ){
    $('.brand.js-scroller').removeClass('js-scroller');
  }
  /*if ($('#block-sitebranding').length ){
    $('#block-sitebranding').insertAfter('navbar-toggle');
    $('.brand').remove();
  }*/
 
}(jQuery));