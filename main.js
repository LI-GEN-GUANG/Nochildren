$(function(){


  $("#Monster-introduce-btn").on("click",function(){
  
      $(".item.all").addClass("open")
      $(".nav-btn-group").animate({"top":0},100)
      $("#Monster-introduce-btn").addClass("hide")
  
      if($(".item.bodyheight").hasClass("open")){
  
      $(".item.bodyheight").removeClass("open");
      // $(".item.feature").removeClass("open");
      $(".item.ability").removeClass("open");
  
      }else if($(".item.feature").hasClass("open")){
    
      $(".item.bodyheight").removeClass("open");
      // $(".item.feature").removeClass("open");
      $(".item.ability").removeClass("open");
  
      }else if($(".item.ability").hasClass("open")){
    
      $(".item.bodyheight").removeClass("open");
      // $(".item.feature").removeClass("open");
      $(".item.ability").removeClass("open");
  
      }
  
  })
  
  $("#Monster-introduce-btn-close").on("click",function(){
  
      $(".item.open").removeClass("open")
      $("#Monster-introduce-btn.hide").removeClass("hide")
  
  })
  
  
    $(".nav-btn-group").on("click",function(){
      $(".nav-btn-group").animate({"top":-270},100)
  
      $(".item.bodyheight").animate({"top":-200},0)
  
      $(".item.ability").animate({"top":-200},0)
      $(".item.all.open").removeClass("open")
      $("#Monster-introduce-btn.hide").removeClass("hide")
  
      if($(".item.bodyheight").hasClass("open")){
      }
      else if
      ($(".item.ability").hasClass("open")){
      }
      else{
        $(".nav-btn-group").animate({"top":0},100 )
      }
    })
  
  
  
    $(".nav-btn.Bodyheight").on("click",function(){
  
      if($(".item.bodyheight").hasClass("open")){
  
      $(".item.bodyheight").removeClass("open");
  
      }else if($(".item.feature").hasClass("open")){
        
  
      $(".item.ability").removeClass("open");
      $(".item.bodyheight").addClass("open");
  
      }else if($(".item.ability").hasClass("open")){
        
   
      $(".item.ability").removeClass("open");
      $(".item.bodyheight").addClass("open");
      
      }
      else{
      $(".item.bodyheight").addClass("open");
      }    
  
  
      })
  
    
  
      $(".nav-btn.Ability").on("click",function(){
        
        if($(".item.bodyheight").hasClass("open")){
  
        $(".item.bodyheight").removeClass("open");
        $(".item.ability").addClass("open");
  
        }else if($(".item.feature").hasClass("open")){
          
        $(".item.bodyheight").removeClass("open");
        $(".item.ability").addClass("open");
  
        }else if($(".item.ability").hasClass("open")){
          
        $(".item.ability").removeClass("open");
  
        }else{
  
        $(".item.ability").addClass("open");
        }    
      })
  
  //----------------------pages-------------------
  
  
  $("#Lesschildren-open").on("click",function(){
        
        $(".page-background").fadeIn("");
      })
  
  
  
  $("#Lesschildren-x-btn").on("click",function(){
        
      $(".page-background").fadeOut("");
     })
  })