var typed = new Typed(".auto", {
    strings: ["Krutik dudhane", "Web Developer", "Frontend developer"],
    typeSpeed: 60,
    backSpeed: 70,
    loop: true,
  });
let t1=gsap.timeline();

t1
.from("#logo",{
    opacity:0,
    y:-50,
    duration:1
})
.from("#first",{
    opacity:0,
    y:-50,
    duration:0.2
})
.from("#second",{
    opacity:0,
    y:-50,
    duration:0.2
})
.from("#third",{
    opacity:0,
    y:-50,
    duration:0.2
})
.from("#fourth",{
    opacity:0,
    y:-50,
    duration:0.2
})
.from("#fifth",{
    opacity:0,
    y:-50,
    duration:0.2
})
.from("#moon",{
    opacity:0,
    y:-50,
    duration:0.2
})
.from("#background-cover",{
    duration:0.5,
    y:600,
    opacity:0  
})
.from("#name>h1",{
    opacity:0,
    scale:1.3 ,
    duration:0.3
    
})
.from("#hero-section>img",{
    duration:1,
    opacity:0  
})
let t2=gsap.timeline();
t2
.from("#Github",{
    opacity:0 ,
    x:30, 
    duration:".2"
})
.from("#Twitter",{
    opacity:0 ,
    x:30, 
    duration:".2"
})
.from("#Linkedin",{
    opacity:0 ,
    x:30, 
    duration:".2"
})
.from("#Whatsapp",{
    opacity:0 ,
    x:30, 
    duration:"1"
})
.from(".line",{
    opacity:0,
    y:-800
})
document.addEventListener("mousemove",function(dets){
    // console.log(dets);
     gsap.to('#crsr',{
        x: dets.clientX,
        y: dets.clientY,
     })
})



function download() {
  const link = document.createElement('a');
  link.href = "myresume.pdf"; // Replace with the actual path
  link.download = "downloaded_pdf.pdf"; // Optional: Set a custom download filename

  }