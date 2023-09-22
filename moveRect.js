const rectangle = document.querySelector("#rectangle");

window.addEventListener('mousemove', (event) => {
    console.log(event.clientX);
    
    
    const xMove = gsap.utils.mapRange(0, window.innerWidth,
                                      (100 + rectangle.getBoundingClientRect().width) / 2,
                                      window.innerWidth - (100 + rectangle.getBoundingClientRect().width) / 2,
                                      event.clientX)
    
    
    gsap.to('#rectangle', {
        left: xMove + 'px',
        ease: "power3"
    })
})



/*****
without using gsap
****/
//const rectangle = document.querySelector("#rectangle");
//
//window.addEventListener('mousemove', (event) => {
//    console.log(event.clientX);
//
//    const rectWidth = rectangle.getBoundingClientRect().width;
//    const halfRectWidth = (100 + rectWidth) / 2;
//    const maxXMove = window.innerWidth - halfRectWidth;
//
//    const xMove = mapRange(0, window.innerWidth, halfRectWidth, maxXMove, event.clientX);
//
//    rectangle.style.left = xMove + 'px';
//});
//
//// Helper function to map a value from one range to another
//function mapRange(inputStart, inputEnd, outputStart, outputEnd, value) {
//    return outputStart + ((value - inputStart) / (inputEnd - inputStart)) * (outputEnd - outputStart);
//}
