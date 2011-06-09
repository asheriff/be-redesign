////////////////////////////////////////////////////////////////////////////////
// Config
////////////////////////////////////////////////////////////////////////////////
(function($){
  "use strict";
  
  $.fn.superfish.defaults.autoArrows = false;
})(jQuery);

////////////////////////////////////////////////////////////////////////////////
// Initialization
////////////////////////////////////////////////////////////////////////////////
(function($){
  "use strict";
  
  $(document).ready(function(){
    
    // Superfish Dropdown Menu
    //
    $('ul.sf-menu LI:first-child, ul.sf-menu LI:first-child>A').addClass("first");
    $('ul.sf-menu LI:last-child, ul.sf-menu LI:last-child>A').addClass("last");
    $("UL.sf-menu").superfish();
    
    // Kwicks Slider Menu
    //
    var $menu = $('.kwicks-menu');
    var width = $menu.width();
    var count = $menu.find(">LI").length;
    
    $menu.find(">LI").css( "width", width/count );
    
    $menu.find(">LI.selected").prev().addClass("before_selected");
    $menu.find(">LI.selected").next().addClass("after_selected");
    
    // TODO: Don't bother to init this if text on all tabs is 100%visible.
    // TODO: This lib only allows a single config.max for every item.  Probably
    //       the best thing to do is set max to max content width of all items.
    // IMPROVE: The jquery.kwicks.js lib would be better if it used hoverIntent.
    
    // return;
    
    $menu.kwicks({
      max : 150,
      spacing : 0
    });
    
  });
})(jQuery);