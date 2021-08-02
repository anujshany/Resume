var progressBars = document.querySelectorAll('.skill-progress > div');;
var skillsContainer = document.getElementById('skills-container');
window.addEventListener('scroll',checkScroll);
var animationDone = false;

function initialiseBars(){
    for(let bar of progressBars){
        bar.style.width = 0 + '%';
    }
}
initialiseBars();

function fillBars(){

    for(let bar of progressBars){
        let targetWidth = bar.getAttribute('data-bar-width');
        let currentWidth = 0; 
        let interval = setInterval(function(){
            if(currentWidth>targetWidth){
                clearInterval(interval);
                return;
            }
            currentWidth++;
            bar.style.width = currentWidth +'%';
        },15);
    }


}


function checkScroll(){
    //have to check if desired section is visible
    var coordinates = skillsContainer.getBoundingClientRect();
   if(!animationDone && coordinates.top <= window.innerHeight){
       animationDone = true;
        console.log("Skills Section Visible")
        fillBars();
    }else if(coordinates.top>window.innerHeight){
        animationDone = false;
        initialiseBars();
    }
}