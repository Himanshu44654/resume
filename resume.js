var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');

for(var i=0; i< navMenuAnchorTags.length;i++)
{
    navMenuAnchorTags[i].addEventListener('click',function(event){
        event.preventDefault();
        var targetSectionID = this.textContent.trim().toLowerCase();
        var targetSection = document.getElementsById(targetSectionID)
        console.log(targetSection);
        var targetSectionCoordinates = targetSection.getBoundingClientRect();
        var interval = setInterval(function(){
            if(targetSectionCoordinates.top <=0){
                clearInterval(interval);
                return;

            }
            window.scrollBy(0,30)
        },100);
    });
}

var progressBars = document.querySelectorAll('.skill-progress>div');;
var skillsContainer = document.getElementsById('skills-container');
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
        },5);
    }
}

function checkScroll(){
    
    var coordinates = skillsContainer.getBoundingClientRect();
    if(!animationDone && coordinates.top < window.innerHeight){
        animationDone = true;
        console.log('skills Section visible');
        fillBars();
    }
    else if(coordinates.top > window.innerHeight){
        animationDone = false;
        initialiseBars();
    }
}

