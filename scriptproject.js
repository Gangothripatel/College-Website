var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")

document.addEventListener("mousemove",function(dets){
    crsr.style.left=dets.x+"px"
    crsr.style.top=dets.y+"px"
})

document.addEventListener("mousemove",function(dets){
    blur.style.left=dets.x - 250 +"px"
    blur.style.top=dets.y - 250 +"px"
})
document.addEventListener('DOMContentLoaded', function () {
    var navItems = document.querySelectorAll('#nav h5');
    var contentSections = document.querySelectorAll('.content-section');

    navItems.forEach(function (item, index) {
        item.addEventListener('click', function () {
            // Remove 'active' class from all h5 elements and content sections
            navItems.forEach(function (navItem) {
                navItem.classList.remove('active');
            });

            contentSections.forEach(function (section) {
                section.classList.remove('active');
            });

            // Add 'active' class to the clicked h5 element and content section
            item.classList.add('active');
            contentSections[index].classList.add('active');
        });
    });
});









gsap.to("#nav",{
    backgroundColor:"black",
    duration:0.5,
    height:"90px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        markers:false,
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
}

)
  
gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        markers:false,
        start:"top -25%",
        end:"top -70%",
        scrub:2
    }
})