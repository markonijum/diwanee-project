import $ from 'jquery';
window.$ = window.jQuery = $;

import responsiveNav from 'responsive-nav';
import SmoothScroll from 'smooth-scroll';
import './plugins/wow';
import './plugins/loadmore';
import './plugins/parallax';

(function($){

    
    //Using Wow.js plugin
    //Animation of elements when scroling------------------------------------------------
    new WOW().init();
    //-----------------------------------------------------------------------------------

     
    //Adding shadow class to header element on certain point of scroll--------------------
    var mainHeader = $('.main-header');
    var jmbtronOffsetTop = $('.jumbotron h1').offset().top;
     $(document).on('scroll',function(e){
        var docTop = $(this).scrollTop();
        if (jmbtronOffsetTop <= docTop - 25){
            mainHeader.addClass('shadow');
        }else {
            mainHeader.removeClass('shadow');
        }
     })
    //------------------------------------------------------------------------------------


     //Load more button for displaying more job posts-------------------------------------
     $("#joblist").loadMore({
            selector: '.job-position',
            loadBtn: '#loadmore',
            limit: 3,
            load: 3,
            animate: true,
            animateIn: 'fadeInUp'
        });
    //------------------------------------------------------------------------------------


    //Responsive navigation functionality with responsive-nav.js plugin-------------------
    var navigation = responsiveNav(".nav-collapse", {
        animate: true,                    // Boolean: Use CSS3 transitions, true or false
        transition: 284,                  // Integer: Speed of the transition, in milliseconds
        label: 'Menu',                    // String: Label for  navigation toggle
        insert: "before",                  // String: Insert the toggle before or after the navigation
        customToggle: "",                 // Selector: Specify the ID of a custom toggle
        closeOnNavClick: true,           // Boolean: Close the navigation when one of the links are clicked
        openPos: "relative",              // String: Position of the opened nav, relative or static
        navClass: "nav-collapse",         // String: Default CSS class. If changed, you need to edit the CSS too!
        navActiveClass: "js-nav-active",  // String: Class that is added to <html> element when nav is active
        jsClass: "js",                    // String: 'JS enabled' class which is added to <html> element
        init: function(){},               // Function: Init callback
        open: function(){},               // Function: Open callback
        close: function(){}               // Function: Close callback
      });
    //------------------------------------------------------------------------------------


    //Adding scrolling effect to main navigation links
    //Using smoothscroll.js plugin -------------------------------------------------------
    var scroll = new SmoothScroll('.nav-main a', {
        speed: 2000 
    });
    //------------------------------------------------------------------------------------


})(jQuery);
