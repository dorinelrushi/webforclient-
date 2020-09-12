$(function(){
    $("#bars").click(function(){
        $("#menu").slideToggle("slow")
    })
})

var flex = document.getElementById("flex");
var menu = document.getElementById("menu")

window.onscroll = function(){function12()}
function function12(){
     if(document.body.scrollTop > 30 || document.documentElement.scrollTop > 30){
         flex.classList.add("addheader")
         menu.classList.add("addheader")
     }else{
         flex.classList.remove("addheader")
         menu.classList.remove("addheader")
     }
}

gsap.to(".item1",{y:"-100vh",delay:.5});
gsap.to(".item2",{y:"-100vh",delay:.7});
gsap.to(".item3",{y:"-100vh",delay:.9});
gsap.to(".flex-item",{y:"-100vh",delay:1.5});

gsap.fromTo('.text-big',{x:-290,opacity:0,duration:5,delay:2},{
    x: 0, opacity :1,duration :2
})
gsap.fromTo('.solution',{x:290,opacity:0,duration:5,delay:2},{
    x: 0, opacity :1,duration :2
})
gsap.fromTo('.free',{x:290,opacity:0,duration:5,delay:2},{
    x: 0, opacity :1,duration :4
})