let faqWhat = document.querySelectorAll(".faqWhat");
let faqP = document.querySelectorAll(".faqP");
let faqShow = document.querySelector(".faqShow");
let up = document.querySelectorAll(".fa-caret-up");
let down = document.querySelectorAll(".fa-caret-down");
let moreBtn = document.querySelector(".moreBtn");
let footerRight = document.querySelector(".footerRight");
 
moreBtn.addEventListener("click", ()=>{
    footerRight.classList.toggle("moreBtn");
})


for(let i = 0; i<faqWhat.length;i++){
    // console.log(faqWhat[i]);
    // console.log(faqP[i]);
    faqWhat[i].addEventListener("click", ()=>{
        if(faqP[i].style.display == "block"){
        }else{
        faqP[i].classList.toggle("faqP");
        up[i].classList.toggle("faqShow"); 
        down[i].classList.toggle("fa-caret-up");  
        }
             
       
    })

}

        // faqP[i].classList.toggle("faqP");
        // up[i].classList.toggle("faqShow"); 
        // down[i].classList.toggle("fa-caret-up");  

