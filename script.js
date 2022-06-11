
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
//   var random1=Math.floor(Math.random()*12)
//   console.log(bouncy[random1])
// }
// randomBounce()

window.addEventListener("mousemove", function (dets) {
  let y = dets.pageY;
  let x = dets.pageX;

  setTimeout(function () {
    document.querySelector("#mcircle").style.top = y + 30 + "px";
    document.querySelector("#mcircle").style.left = `${x + 30}px`;
  }, 100)
})

document.querySelector(".hnav h3").addEventListener("mouseover", function () {
  document.querySelector(".hnav h3").classList.add("rotation");
  document.querySelector(".hnav h3").addEventListener("transitionend", function () {
    document.querySelector(".hnav h3").classList.remove("rotation")
  })
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

if(screen.width<screen.height){
  document.querySelector("#modal").style.display="initial";
  document.querySelector("#mcircle").style.display="none";
    setTimeout(function(){
      document.querySelector("#modal").style.display="none";
    },8000)
};