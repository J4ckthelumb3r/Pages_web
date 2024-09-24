let kmh=document.getElementById("kmh");
let gearbox=document.getElementById("gearbox");
let accel=document.getElementById("accel");
let depart1=0;
let depart2=0;
let depart3=0;
let done = 0;
kmh.innerText = 0;

                //  set your counter to 1

function vitessemax() {         //  create a loop function
  setTimeout(function() {   //  call a 3s setTimeout when the loop is called  //  your code here
    depart1++;                    //  increment the counter
    if (depart1 < 206) {           //  if the counter < 10, call the loop function
      kmh.innerText = depart1;           //  ..  again which will trigger another 
      vitessemax();
    }                       //  ..  setTimeout()
  }, 16)
}



gearbox.innerText = 0;

                //  set your counter to 1

function boitevitesse() {         //  create a loop function
  setTimeout(function() {   //  call a 3s setTimeout when the loop is called  //  your code here
    depart2++;                    //  increment the counter
    if (depart2 < 8) {           //  if the counter < 10, call the loop function
      gearbox.innerText = depart2;           //  ..  again which will trigger another 
      boitevitesse();
    }                       //  ..  setTimeout()
  }, 600)
}



accel.innerText = 0;

                //  set your counter to 1

function accelleration() {         //  create a loop function
  setTimeout(function() {   //  call a 3s setTimeout when the loop is called  //  your code here
    depart3 = depart3+0.1;                    //  increment the counter
    if (depart3 < 3.3) {           //  if the counter < 10, call the loop function
      accel.innerText = Math.round(depart3*10)/10;           //  ..  again which will trigger another 
      accelleration();
    }                       //  ..  setTimeout()
  }, 120)
}



window.addEventListener('scroll', ()=>{
    if(done != 1){
        if(window.scrollY > 1800){
            done = 1;
            vitessemax();
            boitevitesse();
            accelleration();
        }
    }
})

let R8=document.getElementById("R8");
let A110=document.getElementById("A110");
let M4=document.getElementById("M4");
let section1=document.querySelector(".section1");

R8.addEventListener("click" , ()=> {
        if(section1.classList.contains("r8")){
            section1.classList.remove("a110");
            section1.classList.remove("m4");
        }else if(section1.classList.contains("a110")){
            section1.classList.add("r8");
            section1.classList.remove("a110");
        }else if(section1.classList.contains("m4")){
            section1.classList.add("r8");
            section1.classList.remove("m4");
        }else{
            section1.classList.add("r8");
        }
    }
)

A110.addEventListener("click" , ()=> {
        if(section1.classList.contains("a110")){
            section1.classList.remove("r8");
            section1.classList.remove("m4");
        }else if(section1.classList.contains("r8")){
            section1.classList.add("a110");
            section1.classList.remove("r8");
        }else if(section1.classList.contains("m4")){
            section1.classList.add("a110");
            section1.classList.remove("m4");
        }else{
            section1.classList.add("a110");
        }
    }
)

M4.addEventListener("click" , ()=> {
        if(section1.classList.contains("m4")){
            section1.classList.remove("r8");
            section1.classList.remove("a110");
        }else if(section1.classList.contains("a110")){
            section1.classList.add("m4");
            section1.classList.remove("a110");
        }else if(section1.classList.contains("r8")){
            section1.classList.add("m4");
            section1.classList.remove("r8");
        }else{
            section1.classList.add("m4");   
        }
    }
)

let img1=document.querySelector(".img1");

R8.addEventListener("click" , ()=> {
  if(img1.classList.contains("r8")){
      img1.classList.remove("a110");
      img1.classList.remove("m4");
  }else if(img1.classList.contains("a110")){
      img1.classList.add("r8");
      img1.classList.remove("a110");
  }else if(img1.classList.contains("m4")){
      img1.classList.add("r8");
      img1.classList.remove("m4");
  }else{
      img1.classList.add("r8");
  }
}
)

A110.addEventListener("click" , ()=> {
  if(img1.classList.contains("a110")){
      img1.classList.remove("r8");
      img1.classList.remove("m4");
  }else if(img1.classList.contains("r8")){
      img1.classList.add("a110");
      img1.classList.remove("r8");
  }else if(img1.classList.contains("m4")){
      img1.classList.add("a110");
      img1.classList.remove("m4");
  }else{
      img1.classList.add("a110");
  }
}
)

M4.addEventListener("click" , ()=> {
  if(img1.classList.contains("m4")){
      img1.classList.remove("r8");
      img1.classList.remove("a110");
  }else if(img1.classList.contains("a110")){
      img1.classList.add("m4");
      img1.classList.remove("a110");
  }else if(img1.classList.contains("r8")){
      img1.classList.add("m4");
      img1.classList.remove("r8");
  }else{
      img1.classList.add("m4");   
  }
}
)

let img2=document.querySelector(".img2");

R8.addEventListener("click" , ()=> {
  if(img2.classList.contains("r8")){
      img2.classList.remove("a110");
      img2.classList.remove("m4");
  }else if(img2.classList.contains("a110")){
      img2.classList.add("r8");
      img2.classList.remove("a110");
  }else if(img2.classList.contains("m4")){
      img2.classList.add("r8");
      img2.classList.remove("m4");
  }else{
      img2.classList.add("r8");
  }
}
)

A110.addEventListener("click" , ()=> {
  if(img2.classList.contains("a110")){
      img2.classList.remove("r8");
      img2.classList.remove("m4");
  }else if(img2.classList.contains("r8")){
      img2.classList.add("a110");
      img2.classList.remove("r8");
  }else if(img2.classList.contains("m4")){
      img2.classList.add("a110");
      img2.classList.remove("m4");
  }else{
      img2.classList.add("a110");
  }
}
)

M4.addEventListener("click" , ()=> {
  if(img2.classList.contains("m4")){
      img2.classList.remove("r8");
      img2.classList.remove("a110");
  }else if(img2.classList.contains("a110")){
      img2.classList.add("m4");
      img2.classList.remove("a110");
  }else if(img2.classList.contains("r8")){
      img2.classList.add("m4");
      img2.classList.remove("r8");
  }else{
      img2.classList.add("m4");   
  }
}
)

let img3=document.querySelector(".img3");

R8.addEventListener("click" , ()=> {
  if(img3.classList.contains("r8")){
      img3.classList.remove("a110");
      img3.classList.remove("m4");
  }else if(img3.classList.contains("a110")){
      img3.classList.add("r8");
      img3.classList.remove("a110");
  }else if(img3.classList.contains("m4")){
      img3.classList.add("r8");
      img3.classList.remove("m4");
  }else{
      img3.classList.add("r8");
  }
}
)

A110.addEventListener("click" , ()=> {
  if(img3.classList.contains("a110")){
      img3.classList.remove("r8");
      img3.classList.remove("m4");
  }else if(img3.classList.contains("r8")){
      img3.classList.add("a110");
      img3.classList.remove("r8");
  }else if(img3.classList.contains("m4")){
      img3.classList.add("a110");
      img3.classList.remove("m4");
  }else{
      img3.classList.add("a110");
  }
}
)

M4.addEventListener("click" , ()=> {
  if(img3.classList.contains("m4")){
      img3.classList.remove("r8");
      img3.classList.remove("a110");
  }else if(img3.classList.contains("a110")){
      img3.classList.add("m4");
      img3.classList.remove("a110");
  }else if(img3.classList.contains("r8")){
      img3.classList.add("m4");
      img3.classList.remove("r8");
  }else{
      img3.classList.add("m4");   
  }
}
)

let section6=document.querySelector(".section6");

R8.addEventListener("click" , ()=> {
  if(section6.classList.contains("r8")){
      section6.classList.remove("a110");
      section6.classList.remove("m4");
  }else if(section6.classList.contains("a110")){
      section6.classList.add("r8");
      section6.classList.remove("a110");
  }else if(section6.classList.contains("m4")){
      section6.classList.add("r8");
      section6.classList.remove("m4");
  }else{
      section6.classList.add("r8");
  }
}
)

A110.addEventListener("click" , ()=> {
  if(section6.classList.contains("a110")){
      section6.classList.remove("r8");
      section6.classList.remove("m4");
  }else if(section6.classList.contains("r8")){
      section6.classList.add("a110");
      section6.classList.remove("r8");
  }else if(section6.classList.contains("m4")){
      section6.classList.add("a110");
      section6.classList.remove("m4");
  }else{
      section6.classList.add("a110");
  }
}
)

M4.addEventListener("click" , ()=> {
  if(section6.classList.contains("m4")){
      section6.classList.remove("r8");
      section6.classList.remove("a110");
  }else if(section6.classList.contains("a110")){
      section6.classList.add("m4");
      section6.classList.remove("a110");
  }else if(section6.classList.contains("r8")){
      section6.classList.add("m4");
      section6.classList.remove("r8");
  }else{
      section6.classList.add("m4");   
  }
}
)

let section7=document.querySelector(".section7");

R8.addEventListener("click" , ()=> {
  if(section7.classList.contains("r8")){
      section7.classList.remove("a110");
      section7.classList.remove("m4");
  }else if(section7.classList.contains("a110")){
      section7.classList.add("r8");
      section7.classList.remove("a110");
  }else if(section7.classList.contains("m4")){
      section7.classList.add("r8");
      section7.classList.remove("m4");
  }else{
      section7.classList.add("r8");
  }
}
)

A110.addEventListener("click" , ()=> {
  if(section7.classList.contains("a110")){
      section7.classList.remove("r8");
      section7.classList.remove("m4");
  }else if(section7.classList.contains("r8")){
      section7.classList.add("a110");
      section7.classList.remove("r8");
  }else if(section7.classList.contains("m4")){
      section7.classList.add("a110");
      section7.classList.remove("m4");
  }else{
      section7.classList.add("a110");
  }
}
)

M4.addEventListener("click" , ()=> {
  if(section7.classList.contains("m4")){
      section7.classList.remove("r8");
      section7.classList.remove("a110");
  }else if(section7.classList.contains("a110")){
      section7.classList.add("m4");
      section7.classList.remove("a110");
  }else if(section7.classList.contains("r8")){
      section7.classList.add("m4");
      section7.classList.remove("r8");
  }else{
      section7.classList.add("m4");   
  }
}
)
