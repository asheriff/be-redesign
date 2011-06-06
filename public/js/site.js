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
    $('ul.sf-menu LI:FIRST-CHILD, ul.sf-menu LI:FIRST-CHILD>A').addClass("first");
    $('ul.sf-menu LI:LAST-CHILD, ul.sf-menu LI:LAST-CHILD>A').addClass("last");
    $("UL.sf-menu").superfish();
  });
})(jQuery);