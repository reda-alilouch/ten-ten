document.addEventListener("DOMContentLoaded", function(event) {
   
    const showNavbar = (toggleId, sideId, bodyId, asideId) =>{
    const toggle = document.getElementById(toggleId),
    side = document.getElementById(sideId),
    bodypd = document.getElementById(bodyId),
    asidepd = document.getElementById(asideId)
    
    // Validate that all variables exist
    if(toggle && side && bodypd && asidepd){
    toggle.addEventListener('click', ()=>{
    // show navbar
    side.classList.toggle('show')
    // change icon
    toggle.classList.toggle('bx-x')
    // add padding to body
    bodypd.classList.toggle('body-pd')
    // add padding to header
    headerpd.classList.toggle('body-pd')
    })
    }
    }
    
    showNavbar('aside-toggle','side-bar','body-pd','aside')
    
    /*===== LINK ACTIVE =====*/
    const linkColor = document.querySelectorAll('.side_link')
    
    function colorLink(){
    if(linkColor){
    linkColor.forEach(l=> l.classList.remove('active'))
    this.classList.add('active')
    }
    }
    linkColor.forEach(l=> l.addEventListener('click', colorLink))
    
     // Your code to run since DOM is loaded and ready
    });