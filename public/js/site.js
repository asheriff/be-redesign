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
    
    //
    // Superfish Dropdown Menu
    //
    $('ul.sf-menu LI:first-child, ul.sf-menu LI:first-child>A').addClass("first");
    $('ul.sf-menu LI:last-child, ul.sf-menu LI:last-child>A').addClass("last");
    $("UL.sf-menu").superfish();
    
    // 
    // Kwicks Slider Menu
    //
    
    // TODO: Move this to a function or plugin that wraps kwicks.
    // IMPROVE: The jquery.kwicks.js lib would be better if it used hoverIntent.
    
    // Some stuff needed later.
    var $menu = $('.kwicks-menu');
    var $menu_items = $menu.find(">LI");
    var ul_width = $menu.width();
    var count = $menu_items.length;
    
    $menu_items.find(">A").wrapInner( "<EM/>" );
    
    
    // Add some classes so we can apply the bottom border-radius to the next+prev
    // elems to fake the tab look in decent browsers.
    $menu.find(">LI.selected").prev().addClass("before_selected");
    $menu.find(">LI.selected").next().addClass("after_selected");
    
    
    // Find the total width of all the LIs.  If less than the parent UL's width
    // just quit.
    var total_li_width = 0;
    for(var i=0; i<count; i++){
      total_li_width += $menu_items.eq(i).width();
    }
    if( total_li_width <= ul_width ){ return; }
    
    $menu_items.css( "width", ul_width/count );
    
    
    // Find the widest text within the LI elems.  We'll use the decendent EM elem
    // so that...
    var max_item_width = 0;
    var widest_item = null;
    for( var i=0; i<count; i++){
      var item_width = $menu_items.eq(i).find("EM").width();
      if( item_width > max_item_width ){
        max_item_width = item_width;
        widest_item = $menu_items.eq(i);
      }
    }
    
    // Now add the parent border+padding.  There's likely a better way to do this.
    max_item_width +=
      parseInt( widest_item.find("A").css("border-right-width") ) +
      parseInt( widest_item.find("EM").css("padding-left") ) +
      parseInt( widest_item.find("EM").css("padding-right") )
    ;
    
    // Init the kwicks plugin.
    $menu.kwicks({
      max: max_item_width,
      spacing: 0
    });
    
  });
})(jQuery);