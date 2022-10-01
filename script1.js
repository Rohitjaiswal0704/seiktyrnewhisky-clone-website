var  menu_icon_select=document.querySelector(".menubar");
var  manubar_list=document.querySelector(".manubar_list");
var  menubar_image=document.querySelector(".imagemenubar");
var  cross_menu=document.querySelector(".ri-close-line")


menu_icon_select.addEventListener("click",function(){
     manubar_list.style.right="0%";
     manubar_list.style.transition="all 2s";
})
menu_icon_select.addEventListener("click",function(){
    setTimeout(function(){
        menubar_image.style.left="0%"
        menubar_image.style.transition="all 2s";

    }, 1000);
  
})


// ---cross
cross_menu.addEventListener("click",function(){
    manubar_list.style.right="-100%";
    manubar_list.style.transition="all 3s";
    menubar_image.style.left="100%"
    menubar_image.style.transition="all 3s";
})





  //  ------locomotive-------------/// 

//   gsap.registerPlugin(ScrollTrigger);

//   // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  
//   const locoScroll = new LocomotiveScroll({
//     el: document.querySelector(".main"),
//     smooth: true
//   });
//   // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
//   locoScroll.on("scroll", ScrollTrigger.update);
  
//   // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
//   ScrollTrigger.scrollerProxy(".main", {
//     scrollTop(value) {
//       return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//     }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//     getBoundingClientRect() {
//       return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//     },
//     // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
//     pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
//   });
  
  
  
  
//   // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
//   ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
//   // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
//   ScrollTrigger.refresh();
  

