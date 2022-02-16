
$(document).ready(function(){

    $("#Monster-introduce-btn").on("click",function(){
    
        $(".item").addClass("open")
        $("#Monster-introduce-btn").addClass("hide")
        $(".item.feature").hide()
        $(".item.ability").hide()
        $(".item.ability").hide()
    
    })
    
    $("#Monster-introduce-btn-close").on("click",function(){
    
        $(".item.open").removeClass("open")
        $("#Monster-introduce-btn.hide").removeClass("hide")
    })
    
    
      $(".nav-btn-group").on("click",function(){
        $(".nav-btn-group").animate({"top":-150},0)
    
        $(".item.bodyheight").animate({"top":-70},0)
        $(".item.feature").animate({"top":-70},0)
        $(".item.ability").animate({"top":-70},0)
        
    
      })
    
    
        $(".nav-btn.Bodyheight").on("click",function(){
          $(".item.bodyheight").show()
          $(".item.feature").hide()
          $(".item.ability").hide()
        })
    
        $(".nav-btn.Feature").on("click",function(){
          $(".item.bodyheight").hide()
          $(".item.feature").show()
          $(".item.ability").hide()
        })
    
        $(".nav-btn.Ability").on("click",function(){
          $(".item.bodyheight").hide()
          $(".item.feature").hide()
          $(".item.ability").show()
        })
    
    
    
    
    })