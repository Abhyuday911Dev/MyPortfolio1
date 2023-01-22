
// gsap.from('#center',{
//     onStart: function(){
//       $('#center').textillate({ 
//         in: { 
//           effect: 'bounceIn',
//           callback:function(){
//             $('#center').textillate('out')
//           }
//          },
//         out: { effect: 'hinge' }
//     });
//     }
//   })

gsap.from("#header .a", {
  x: 80,
  duration: 2,
  transform: "scaleX(1.12) scaleY(0.70)",
  opacity: 0,
  ease: "bounce.out",
  stagger: .05
})
gsap.from("#pblob", {
  y: -80,
  duration: 2,
  opacity: 0,
  ease: "bounce.out",

})
gsap.from("#skills", {
  y: 80,
  duration: 2,
  opacity: 0,
  ease: "bounce.out",

})
gsap.from(".hnav", {
  x: 80,
  duration: 2,
  opacity: 0,
  ease: "bounce.out",
  stagger: .05
})
gsap.from(".vnavleft", {
  y: -80,
  duration: 2,
  opacity: 0,
  ease: "bounce.out",
})

const bouncy = document.querySelectorAll(".a");

bouncy.forEach(function (elem) {
  elem.addEventListener("mouseover",
    function () {
      this.classList.add("bouncing");
      this.addEventListener("animationend", function () {
        this.classList.remove("bouncing");
      });
    });
})

// function randomBounce(){

//   // var random1=Math.floor(Math.random()*12)

//   setInterval(function(){
//     for(var i=0;i<12;i++){
//       bouncy[i].style.delay=i
//       bouncy[i].classList.add("bouncing")
//     }
//   },2000)


//   setInterval(function(){
//     for(var p=0;p<12;p++){
//     bouncy[p].classList.remove("bouncing");
//     }
//   },3000)

// }
// randomBounce()
// randomBounce()
// randomBounce()
// randomBounce()
// randomBounce()
// randomBounce()

window.addEventListener("mousemove", function (dets) {
  let y = dets.pageY;
  let x = dets.pageX;

  // console.log(dets)

  gsap.to("#mcircle", {
    x: `${x + 30}px`,
    y: `${y + 30}px`,
  })

  // setTimeout(function () {
  //   // document.querySelector("#mcircle").style.top = y + 30 + "px";
  //   // document.querySelector("#mcircle").style.left = `${x + 30}px`;



  // }, 0)
})

document.querySelector(".hnav h3").addEventListener("mouseover", function () {
  document.querySelector(".hnav h3").classList.add("rotation");
  document.querySelector(".hnav h3").addEventListener("transitionend", function () {
    document.querySelector(".hnav h3").classList.remove("rotation")
  })
})



gsap.from("#pprojecth1 h1", {
  scrollTrigger: {
    trigger: "#pprojecth1 h1",
    scroller: "body",

    start: "top 70%",
    end: "bottom 50%",
    scrub: true
  },
  x: 100,
  opacity: 0,
  // onstart: function(){
  //   $('#pprojecth1 h1').textillate({
  //     in:{
  //       effect: 'fadeInLeftBig',
  //     }
  //   });
  // }

})


gsap.from("#p1line a", {
  scrollTrigger: {
    trigger: "#pprojecth1 h1",
    scroller: "body",
    start: "top 70%",
    end: "bottom 30%",
    scrub: true
  },
  x: 100,
  opacity: 0,
})

gsap.from("#arrow", {
  scrollTrigger: {
    trigger: "#pprojecth1 h1",
    scroller: "body",
    start: "top 70%",
    end: "bottom 30%",
    scrub: true
  },
  x: 200,
  opacity: 0,
})



var horiSlideParent = 0;
var horiLeftBtn = 0;
var horiRightBtn = 0;
document.querySelector("#rightbtn").addEventListener("click", function () {

  if (horiRightBtn < 200) {
    horiSlideParent -= 100;
    horiLeftBtn += 100;
    horiRightBtn += 100;
    gsap.to("#slideparent", {
      x: `${horiSlideParent}vw`,
      duration: 1, ease: "power4.inOut"
    })
    gsap.to("#leftbtn", {
      x: `${horiLeftBtn}vw`,
      duration: 1, ease: "power4.inOut"

    })
    gsap.to("#rightbtn", {
      x: `${horiRightBtn}vw`,
      duration: 1,
      ease: "power4.inOut"

    })
  }
});

document.querySelector("#leftbtn").addEventListener("click", function () {

  if (horiLeftBtn > 0) {
    horiSlideParent += 100;
    horiLeftBtn -= 100;
    horiRightBtn -= 100;
    gsap.to("#slideparent", {
      x: `${horiSlideParent}vw`,
      duration: 1,
      ease: "power4.inOut"
    })
    gsap.to("#leftbtn", {
      x: `${horiLeftBtn}vw`,
      duration: 1,
      ease: "power4.inOut"
    })
    gsap.to("#rightbtn", {
      x: `${horiRightBtn}vw`,
      duration: 1,
      ease: "power4.inOut"
    })

  }

});

setTimeout(function () {
  document.querySelector("#modal").style.display = "none";
}, 6000)

// if (screen.width < screen.height) {
//   // document.querySelector("#modal").style.display="initial";
//   document.querySelector("#mcircle").style.display = "none";
// };