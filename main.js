const box = document.querySelector('#rectangle');

//box.removeEventListener('mousemove',()=>{})
box.addEventListener('mousemove', function (event) {
  const boxRectLocation = box.getBoundingClientRect();
  console.log(event)
  
  const calcInsideRect = event.clientX - boxRectLocation.left;
  console.log(calcInsideRect)
  
  if (calcInsideRect < boxRectLocation.width / 2){
    const calcRecMapColor1 = gsap.utils.mapRange(0, boxRectLocation.width / 2, 255, 0, calcInsideRect);
    gsap.to(box, {
      backgroundColor: `rgb(${calcRecMapColor1}, 0,0)`,
      ease: Power4,
    })
  } else {
    const calcRecMapColor2 = gsap.utils.mapRange(boxRectLocation.width / 2, boxRectLocation.width, 0, 255, calcInsideRect);
    gsap.to(box, {
      backgroundColor: `rgb(0, 0, ${calcRecMapColor2})`,
      ease: Power4,
    })
  }
  
  
})

box.addEventListener('mouseleave', () => {
  gsap.to(box, {
    backgroundColor: 'antiquewhite'
  })
})
