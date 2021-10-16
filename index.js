const part2Title = document.querySelector('.part-2-title');
let observerPart2Title = new IntersectionObserver((entries) =>{
    let entry = entries[0];
    if(entry.intersectionRatio > 0.0){
        entry.target.classList.add('slide-in-left');
    }
});

observerPart2Title.observe(part2Title);

for(let i =1; i <= 4; i++){
    const part2Circle = document.querySelector('.part-2-circle-'+ i); 
    let observerPart2Circle = new IntersectionObserver((entries) =>{
        if(entries[0].intersectionRatio > 0.0){
            setTimeout(function(){
                entries[0].target.classList.add('slide-in-right',);       
            },i*20);            
        }
    });
    observerPart2Circle.observe(part2Circle);

}




