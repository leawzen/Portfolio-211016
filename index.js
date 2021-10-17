// const part2Title = document.querySelector('.part-2-title');
// let observerPart2Title = new IntersectionObserver((entries) =>{
//     let entry = entries[0];
//     if(entry.intersectionRatio > 0.0){
//         entry.target.classList.add('slide-in-left');
//     }
// });

// observerPart2Title.observe(part2Title);

// for(let i =1; i <= 4; i++){
//     const part2Circle = document.querySelector('.part-2-circle-'+ i); 
//     let observerPart2Circle = new IntersectionObserver((entries) =>{
//         if(entries[0].intersectionRatio > 0.0){
//             debugger;
//             setTimeout(function(){
//                 entries[0].target.classList.add('slide-in-right',);       
//             },i*20);            
//         }
//     });
//     observerPart2Circle.observe(part2Circle);

// }


var scroll = window.requestAnimationFrame;
var elementsToShow = document.querySelectorAll('.part-2-title'); 


function loop() {

    Array.prototype.forEach.call(elementsToShow, function(element){        
      if (isElementInViewport(element)) {
        element.classList.add('slide-in-left');
      } else {
        element.classList.remove('slide-in-left');
      }
    });

    for(let i =1; i <= 4; i++){
        const part2Circle = document.querySelectorAll('.part-2-circle-'+ i); 
        Array.prototype.forEach.call(part2Circle, function(element){        
            if (isElementInViewport(element)) {
              element.classList.add('slide-in-right');
            } else {
              element.classList.remove('slide-in-right');
            }
          });              
    }

    for(let i =1; i <= 5; i++){
      const part4Image = document.querySelectorAll('.part-4-image-'+ i); 
      let currentCss = i % 2 == 0 ? 'slide-in-right-part-4' : 'slide-in-left-part-4';
      Array.prototype.forEach.call(part4Image, function(element){        
          if (isElementInViewport(element)) {
            element.classList.add(currentCss);
          } else {
            element.classList.remove(currentCss);
          }
        });              
  }

    scroll(loop);
}

// Call the loop for the first time
loop();


function isElementInViewport(el) {
    // special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
      el = el[0];
    }
    var rect = el.getBoundingClientRect();
    return (
      (rect.top <= 0
        && rect.bottom >= 0)
      ||
      (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.top + 1<= (window.innerHeight || document.documentElement.clientHeight))
      ||
      (rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
  }


  let currentDateTime = new Date().toLocaleString();