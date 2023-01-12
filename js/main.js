(function($){

	// data = [
    //     { 
    //         title: 'titre 1',
    //         chapeau: 'chapeau 1'
    //     },
    //     { 
    //         title: 'titre 2',
    //         chapeau: 'chapeau 2'
    //     }	
	// ];
	// console.log(data);

    // buildCards(data);
    // function buildCards(data){
    //     var source   = $("#card-template").html();
    //     var template = Handlebars.compile(source);
    //     var html = template({'card':data});
    //     $(".authors").prepend(html); 
    // }
    setTimeout(function() { 
        $('body').addClass('is-visible');
    }, 1000);

    setTimeout(function() { 
        $('.scroller').addClass('is-visible');
    }, 6000);
    
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'vertical',
        loop: true,
        effect: "fade",
        speed: 200,
      
        // If we need pagination
        // pagination: {
        //   el: '.swiper-pagination',
        // },
      
        // Navigation arrows
        navigation: {
          nextEl: '.apres',
          prevEl: '.avant',
        },
      
        // And if we need scrollbar
        // scrollbar: {
        //   el: '.swiper-scrollbar',
        // },
      });
    
      var arrTriggers = ['1', '2', '3'];
      arrTriggers = $('.triggersimg').toArray();
      //console.log(arrTriggers);
      // init controller
	  var controller = new ScrollMagic.Controller({globalSceneOptions: {duration: 100}});
      // build scenes
    //   new ScrollMagic.Scene({triggerElement: ".trigger"})
    //     .setClassToggle(".container", "active") // add class toggle
    //     .addIndicators() // add indicators (requires plugin)
    //     .addTo(controller);

   

    new ScrollMagic.Scene({triggerElement: ".trigger1"})
        .on("enter", function (event) {
            //alert(event.scrollDirection);
            if(event.scrollDirection == 'FORWARD')
            {
                //alert('nextImage')
                nextImage();
                $('.scroller').removeClass('is-visible');
            }
            else
            {
                //alert('previousImage');
            } 
        })
        .on("leave", function (event) {
            //alert(event.scrollDirection);
            if(event.scrollDirection == 'FORWARD')
            {}
            else
            {

                //alert('previousImage');
                previousImage();
                $('.scroller').addClass('is-visible');
            } 
        })
        .setClassToggle(".container", "active") // add class toggle
        .triggerHook(0.8)
        .addIndicators() // add indicators (requires plugin)
        .addTo(controller);

        new ScrollMagic.Scene({triggerElement: ".trigger2"})
        .on("enter", function (event) {
            //alert(event.scrollDirection);
            if(event.scrollDirection == 'FORWARD')
            {
                //alert('nextImage')
                nextImage();
            }
            else
            {
                //alert('previousImage');
            } 
        })
        .on("leave", function (event) {
            //alert(event.scrollDirection);
            if(event.scrollDirection == 'FORWARD')
            {}
            else
            {

                //alert('previousImage');
                previousImage();
            } 
        })
        .setClassToggle(".container", "active") // add class toggle
        .triggerHook(0.8)
        .addIndicators() // add indicators (requires plugin)
        .addTo(controller);

        new ScrollMagic.Scene({triggerElement: ".trigger3"})
        .on("enter", function (event) {
            //alert(event.scrollDirection);
            if(event.scrollDirection == 'FORWARD')
            {
                //alert('nextImage')
                nextImage();
            }
            else
            {
                //alert('previousImage');
            } 
        })
        .on("leave", function (event) {
            //alert(event.scrollDirection);
            if(event.scrollDirection == 'FORWARD')
            {}
            else
            {

                //alert('previousImage');
                previousImage();
            } 
        })
        .setClassToggle(".container", "active") // add class toggle
        .triggerHook(0.8)
        .addIndicators() // add indicators (requires plugin)
        .addTo(controller);

        new ScrollMagic.Scene({triggerElement: ".trigger4"})
        .on("enter", function (event) {
            //alert(event.scrollDirection);
            if(event.scrollDirection == 'FORWARD')
            {
                //alert('nextImage')
                nextImage();
            }
            else
            {
                //alert('previousImage');
            } 
        })
        .on("leave", function (event) {
            //alert(event.scrollDirection);
            if(event.scrollDirection == 'FORWARD')
            {}
            else
            {

                //alert('previousImage');
                previousImage();
            } 
        })
        .setClassToggle(".container", "active") // add class toggle
        .triggerHook(0.8)
        .addIndicators() // add indicators (requires plugin)
        .addTo(controller);
       
        new ScrollMagic.Scene({triggerElement: ".trigger5"})
        .on("enter", function (event) {
            //alert(event.scrollDirection);
            if(event.scrollDirection == 'FORWARD')
            {
                //alert('nextImage')
                nextImage();
            }
            else
            {
                //alert('previousImage');
            } 
        })
        .on("leave", function (event) {
            //alert(event.scrollDirection);
            if(event.scrollDirection == 'FORWARD')
            {}
            else
            {

                //alert('previousImage');
                previousImage();
            } 
        })
        .setClassToggle(".container", "active") // add class toggle
        .triggerHook(0.8)
        .addIndicators() // add indicators (requires plugin)
        .addTo(controller);

        new ScrollMagic.Scene({triggerElement: ".trigger6"})
        .on("enter", function (event) {
            //alert(event.scrollDirection);
            if(event.scrollDirection == 'FORWARD')
            {
                //alert('nextImage')
                nextImage();
            }
            else
            {
                //alert('previousImage');
            } 
        })
        .on("leave", function (event) {
            //alert(event.scrollDirection);
            if(event.scrollDirection == 'FORWARD')
            {}
            else
            {

                //alert('previousImage');
                previousImage();
            } 
        })
        .setClassToggle(".container", "active") // add class toggle
        .triggerHook(0.8)
        .addIndicators() // add indicators (requires plugin)
        .addTo(controller);
        

        function previousImage(){
            //alert($('.trigger:in-viewport').parent().attr('id').slice(-1));
            //swiper.slideTo(2);
            //swiper.slideTo($('.textbox:in-viewport').prev().parent().attr('id').slice(-1));
            var i = parseInt($('.trigger:in-viewport').parent().attr('id').slice(-1));
            console.log(i);
            swiper.slideTo(i);
        }
        function nextImage(){
            ////alert($('.trigger:in-viewport').parent().attr('id').slice(-1));
            ////swiper.slideTo(2);
            //swiper.slideTo($('.textbox:in-viewport').parent().attr('id').slice(-1));
            //alert(parseInt($('.textbox:in-viewport').parent().attr('id').slice(-1))+1);
            var i = parseInt($('.trigger:in-viewport').parent().attr('id').slice(-1))+1;
            console.log(i);
            swiper.slideTo(i);
            //console.log(arrTriggers[i]);
            //swiper.slideTo(arrTriggers[i]);
            //alert('IMAGE' + ($('.textbox:in-viewport').parent().attr('id').slice(-1)));
            //console.log(arrTriggers[1]);
        }

})(jQuery);