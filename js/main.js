$(document).ready(function () {
    $('.item-food').click( function() {
        let catgry=$(this).attr("catgry");
        alert(catgry);
        
        if($(this).hasClass("active-item"))
        {
            $(this).removeClass("active-item");
        }
        else{
            $(this).addClass("active-item");

        }
    });

    $(".item-notification").click(function(){
        $("#notification").hide();
        $("#offers-item").css({display:"flex"});
    })
    $("#offers-item").mouseup(function(e) {
        var container9 = $(".box-offers");
        if (!container9.is(e.target) && container9.has(e.target).length ===0) {
        $("#offers-item").hide();
        }
    });
    $("#close-mop").click(function(){
        $("#nav-social").hide();
    })
    $("#close-estranut-details").click(function(){
        $("#popup-details").hide();
    })
    $("#close-notification").click(function(){
        $("#notification").hide();

    })
    $("#loading-page").fadeOut(1000, function () {
        $("body").css({ overflow: "auto" })
    });
$(".phone-now").click(function(){
    $("#popup-details").css({display:"flex"})
})

$("#popup-details").mouseup(function(e) {
    var container6 = $("#restranut-details");
    if (!container6.is(e.target) && container6.has(e.target).length === 0) {
    $("#popup-details").hide();
    }
});
    $("#notification").mouseup(function(e) {
        var container5 = $(".box-notification");
        if (!container5.is(e.target) && container5.has(e.target).length ===0) {
        $("#notification").hide();
        }
    });
    $(".alarm").click(function(){
        $("#notification").show();

    })
    
    $("#nav-social").mouseup(function(e) {
        var container6 = $(".mop-nav");
        if (!container6.is(e.target) && container6.has(e.target).length === 0) {
        $("#nav-social").hide();
        }
    });
    $("#bar").click(function(){
        $("#nav-social").show();
    });



    $("#searchInput").keypress(function(){
        $(".icon-search").hide();
    });
    $("#searchInput").blur(function(){
        let values=$(this).val();
        if(values==""){
            $(".icon-search").show();
        }
    });
    let owlDirection = true;
    $('#one .owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots:true,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        rtl: owlDirection,
        responsive: {
            0: {
                items: 1
            },
            500: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });

      var width = $(window).width();
      if(width > 700 )
      {
        $('.multiple-items').slick({
            rtl: true,
            dots: false,
            arrows: false,
            loop:false,
            slidesToShow: 5.5,
            slidesToScroll: 3,
          })}else if(width < 700){
            $('.multiple-items').slick({
                rtl: true,
                dots: false,
                arrows: false,
                loop:false,
                slidesToShow: 5.5,
                slidesToScroll: 3,
              })
      }
    
    $('.item-food input[type="checkbox"]').click(function(){
        if($(this).prop("checked") == true){
            $(this).addClass("active-item");
        }
        else if($(this).prop("checked") == false){
            $(this).removeClass("active-item");
        }})
  $('select').niceSelect();
  $('#select-restranut').on('change', function()
  {
      $(".numbers-restranut").hide();
      let valChange=this.value;
      $("."+valChange+"-number").show();
  });
  if(width > 769  )
      {
  $('#all .owl-carousel').slick({
            rtl: true,
            dots: false,
            arrows: false,
            loop:false,
            slidesToShow: 5.5,
            slidesToScroll: 3,
            infinite: false,

});
      }else  if(width == 768  )
      {
  $('#all .owl-carousel').slick({
    rtl: true,
    dots: false,
    arrows: false,
    loop:false,
    slidesToShow: 3.5,
    slidesToScroll: 2,
    infinite: false,

});}
      else if(width < 700 ){
        $('#all .owl-carousel').slick({
            rtl: true,
            dots: false,
            arrows: false,
            loop:false,
            slidesToShow: 2.3,
            slidesToScroll: 2,
            infinite: false,

        });
      }
});