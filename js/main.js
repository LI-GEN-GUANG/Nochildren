$(function () {


  $("#Monster-introduce-btn").on("click", function () {

    $(".item.all").addClass("open")
    $(".nav-btn-group").animate({ "top": 0 }, 100)
    $("#Monster-introduce-btn").addClass("hide")

    if ($(".item.bodyheight").hasClass("open")) {
      $(".item.bodyheight").removeClass("open");
      $(".item.ability").removeClass("open");

    } else if ($(".item.feature").hasClass("open")) {
      $(".item.bodyheight").removeClass("open");
      $(".item.ability").removeClass("open");

    } else if ($(".item.ability").hasClass("open")) {
      $(".item.bodyheight").removeClass("open");
      $(".item.ability").removeClass("open");

    }

  })

  $("#Monster-introduce-btn-close").on("click", function () {

    $(".item.open").removeClass("open")
    $("#Monster-introduce-btn.hide").removeClass("hide")

  })


  $(".nav-btn-group").on("click", function () {
    $(".nav-btn-group").animate({ "top": -350 }, 100)

    $(".item.bodyheight").animate({ "top": -270 }, 0)
    $(".item.ability").animate({ "top": -270 }, 0)
    $(".item.all.open").removeClass("open")
    $("#Monster-introduce-btn.hide").removeClass("hide")

    if ($(".item.bodyheight").hasClass("open")) {
    }
    else if
      ($(".item.ability").hasClass("open")) {
    }
    else {
      $(".nav-btn-group").animate({ "top": 0 }, 100)
    }
  })



  $(".nav-btn.Bodyheight").on("click", function () {

    if ($(".item.bodyheight").hasClass("open")) {

      $(".item.bodyheight").removeClass("open");

    } else if ($(".item.feature").hasClass("open")) {


      $(".item.ability").removeClass("open");
      $(".item.bodyheight").addClass("open");

    } else if ($(".item.ability").hasClass("open")) {


      $(".item.ability").removeClass("open");
      $(".item.bodyheight").addClass("open");

    }
    else {
      $(".item.bodyheight").addClass("open");
    }


  })



  $(".nav-btn.Ability").on("click", function () {

    if ($(".item.bodyheight").hasClass("open")) {

      $(".item.bodyheight").removeClass("open");
      $(".item.ability").addClass("open");

    } else if ($(".item.feature").hasClass("open")) {

      $(".item.bodyheight").removeClass("open");
      $(".item.ability").addClass("open");

    } else if ($(".item.ability").hasClass("open")) {

      $(".item.ability").removeClass("open");

    } else {

      $(".item.ability").addClass("open");
    }
  })

  //----------------------pages-------------------


  $("#Lesschildren-open").on("click", function () {

    $("#Lesschildren").fadeIn("");
  })

  $("#Lesschildren-x-btn").on("click", function () {

    $("#Lesschildren").fadeOut("");
  })




  $("#Spread-open").on("click", function () {

    $("#Spread").fadeIn("");
  })

  $("#Spread-x-btn").on("click", function () {

    $("#Spread").fadeOut("");
  })









  $("#EDU-01-seal").hover(function () {
    $("#EDU-01-signs").fadeIn("")
  }

    , function () {
      $("#EDU-01-signs").fadeOut("")
    })




  $('#myDivId').attr('id', 'myDivId_new');



})


function click_scroll() {

  document.getElementById("anchor_scroll").click();

}
var element = document.getElementById("monster-name-Change");
var chee = 777; 
