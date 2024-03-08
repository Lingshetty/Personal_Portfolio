const products = document.querySelectorAll(".certify .swapping");
let count = 0;
let isdragging=false;
let startX;

function left(){

    if(count == 0){
        count = products.length / 4 - 1;
    }
    else{
        count--;
    }
    
    scroll();
}

function right(){

    if(count == products.length / 4 - 1){
        count = 0;
    }
    else{
        count++;
    }
    scroll();
}

function scroll(){
    products.forEach(function(item){
        item.style.transform = `translateX(-${count * 1250}px)`;
    })
}


// my resume js Code
function item(itemId,clickedelement){
    console.log(itemId);
    document.querySelectorAll('.education').forEach(info =>{
        info.classList.remove('active');
    })

    document.querySelectorAll(".btn_2").forEach(item =>{
        item.classList.remove('active');
    })

const selectedinfo = document.getElementById(`info${itemId}`);

if(selectedinfo){
    selectedinfo.classList.add('active');
}

if(clickedelement){
    clickedelement.classList.add('active')
}


}
function containerClick(){
    document.querySelector('.nav_list').classList.toggle('clicked');
    console.log("clicked container");
}

// click button goes to top of the website
document.addEventListener("DOMContentLoaded",()=>{

var scrollToTopBtn = document.querySelector(".updirection");

window.onscroll=()=>{
    if(document.documentElement.scrollTop>100 || document.body.scrollTop>100){
        scrollToTopBtn.style.display = "block";
        console.log("scrolling")
    }
    else{
        scrollToTopBtn.style.display = "none";
    }
}

})

const text = document.querySelector(".auto_change");

const textLoad = ()=>{
    setTimeout(()=>{
        text.textContent="Developer"
    },0)
    setTimeout(()=>{
        text.textContent="Web Designer"
    },4000)
    setTimeout(()=>{
        text.textContent="Freelancer"
    },8000)
    setTimeout(()=>{
        text.textContent="UI/UX Designer"
    },12000)
    setTimeout(()=>{
        text.textContent="Singer"
    },16000)
}
textLoad();
setInterval(textLoad,20000);


// hamber click mobile side manu4
let right_container_2 = document.querySelector(".right_container_2");
let tittle = document.querySelector(".tittle");
let menu = document.querySelector(".lists")
const hamber = document.querySelector(".bar_icon");
hamber.addEventListener("click",()=>{
    console.log("clicked hamber ")
   
    menu.classList.add("activeted")
    
    if(right_container_2.style.display == "none"){
        right_container_2.style.display = "block";
    }
    else{
        right_container_2.style.display = "none";
    }
    if( tittle.style.display == "none"){
        tittle.style.display = "block";
    }
    else{
        tittle.style.display = "none";
    }
})


// button i will add so dynamically

var ptag = document.createElement("div")
ptag.classList = "divcreate";
ptag.textContent = "HI,✌️SANGAMESH_LISHETTY";
menu.appendChild(ptag)

var logo = document.createElement("img");
logo.src = "img/23640.jpg";  
logo.alt = "Company Logo"; 
logo.classList = "logoimg" 
menu.appendChild(logo)

var button = document.createElement("button");
button.classList = "cancell";
button.textContent = "X"
menu.appendChild(button)



// cancell button js
 const cancell = document.querySelector(".cancell");
    cancell.addEventListener("click",()=>{
        menu.classList.remove("activeted")
        right_container_2.style.display = "block";
        tittle.style.display = "block";
    })

const listitem = document.querySelectorAll("li");
listitem.forEach(function(listItem){
    listItem.addEventListener("click",()=>{
        menu.classList.remove("activeted")
        right_container_2.style.display = "block";
        tittle.style.display = "block";
})
});

//  const products = document.querySelectorAll(".certify .swapping");
// let count = 0;
// let isdragging=false;
// let startX;

// function left(){

//     if(count == 0){
//         count = products.length / 4 - 1;
//     }
//     else{
//         count--;
//     }
    
//     scroll();
// }

// function right(){

//     if(count == products.length / 4 - 1){
//         count = 0;
//     }
//     else{
//         count++;
//     }
//     scroll();
// }

// function scroll(){
//     products.forEach(function(item){
//         item.style.transform = `translateX(-${count * 1250}px)`;
//     })
// }


// // my resume js Code
// function item(itemId,clickedelement){
//     console.log(itemId);
//     document.querySelectorAll('.education').forEach(info =>{
//         info.classList.remove('active');
//     })

//     document.querySelectorAll(".btn_2").forEach(item =>{
//         item.classList.remove('active');
//     })

// const selectedinfo = document.getElementById(`info${itemId}`);

// if(selectedinfo){
//     selectedinfo.classList.add('active');
// }

// if(clickedelement){
//     clickedelement.classList.add('active')
// }


// }
// function containerClick(){
//     document.querySelector('.nav_list').classList.toggle('clicked');
//     console.log("clicked container");
// }

// // click button goes to top of the website
// document.addEventListener("DOMContentLoaded",()=>{

// var scrollToTopBtn = document.querySelector(".updirection");

// window.onscroll=()=>{
//     if(document.documentElement.scrollTop>100 || document.body.scrollTop>100){
//         scrollToTopBtn.style.display = "block";
//         console.log("scrolling")
//     }
//     else{
//         scrollToTopBtn.style.display = "none";
//     }
// }

// })

// const text = document.querySelector(".auto_change");

// const textLoad = ()=>{
//     setTimeout(()=>{
//         text.textContent="Developer"
//     },0)
//     setTimeout(()=>{
//         text.textContent="Web Designer"
//     },4000)
//     setTimeout(()=>{
//         text.textContent="Freelancer"
//     },8000)
//     setTimeout(()=>{
//         text.textContent="UI/UX Designer"
//     },12000)
//     setTimeout(()=>{
//         text.textContent="Singer"
//     },16000)
// }
// textLoad();
// setInterval(textLoad,20000);


// // hamber click mobile side manu4
// let right_container_2 = document.querySelector(".right_container_2");
// let tittle = document.querySelector(".tittle");
// let menu = document.querySelector(".lists")
// const hamber = document.querySelector(".bar_icon");
// hamber.addEventListener("click",()=>{
//     console.log("clicked hamber ")
   
//     menu.classList.add("activeted")
    
//     if(right_container_2.style.display == "none"){
//         right_container_2.style.display = "block";
//     }
//     else{
//         right_container_2.style.display = "none";
//     }
//     if( tittle.style.display == "none"){
//         tittle.style.display = "block";
//     }
//     else{
//         tittle.style.display = "none";
//     }
// })


// // button i will add so dynamically

// var ptag = document.createElement("div")
// ptag.classList = "divcreate";
// ptag.textContent = "HI,✌️SANGAMESH_LISHETTY";
// menu.appendChild(ptag)

// var logo = document.createElement("img");
// logo.src = "img/23640.jpg";  
// logo.alt = "Company Logo"; 
// logo.classList = "logoimg" 
// menu.appendChild(logo)

// var button = document.createElement("button");
// button.classList = "cancell";
// button.textContent = "X"
// menu.appendChild(button)



// // cancell button js
//  const cancell = document.querySelector(".cancell");
//     cancell.addEventListener("click",()=>{
//         menu.classList.remove("activeted")
//         right_container_2.style.display = "block";
//         tittle.style.display = "block";
//     })

// const listitem = document.querySelectorAll("li");
// listitem.forEach(function(listItem){
//     listItem.addEventListener("click",()=>{
//         menu.classList.remove("activeted")
//         right_container_2.style.display = "block";
//         tittle.style.display = "block";
// })
// }); const products = document.querySelectorAll(".certify .swapping");
// let count = 0;
// let isdragging=false;
// let startX;

// function left(){

//     if(count == 0){
//         count = products.length / 4 - 1;
//     }
//     else{
//         count--;
//     }
    
//     scroll();
// }

// function right(){

//     if(count == products.length / 4 - 1){
//         count = 0;
//     }
//     else{
//         count++;
//     }
//     scroll();
// }

// function scroll(){
//     products.forEach(function(item){
//         item.style.transform = `translateX(-${count * 1250}px)`;
//     })
// }


// // my resume js Code
// function item(itemId,clickedelement){
//     console.log(itemId);
//     document.querySelectorAll('.education').forEach(info =>{
//         info.classList.remove('active');
//     })

//     document.querySelectorAll(".btn_2").forEach(item =>{
//         item.classList.remove('active');
//     })

// const selectedinfo = document.getElementById(`info${itemId}`);

// if(selectedinfo){
//     selectedinfo.classList.add('active');
// }

// if(clickedelement){
//     clickedelement.classList.add('active')
// }


// }
// function containerClick(){
//     document.querySelector('.nav_list').classList.toggle('clicked');
//     console.log("clicked container");
// }

// // click button goes to top of the website
// document.addEventListener("DOMContentLoaded",()=>{

// var scrollToTopBtn = document.querySelector(".updirection");

// window.onscroll=()=>{
//     if(document.documentElement.scrollTop>100 || document.body.scrollTop>100){
//         scrollToTopBtn.style.display = "block";
//         console.log("scrolling")
//     }
//     else{
//         scrollToTopBtn.style.display = "none";
//     }
// }

// })

// const text = document.querySelector(".auto_change");

// const textLoad = ()=>{
//     setTimeout(()=>{
//         text.textContent="Developer"
//     },0)
//     setTimeout(()=>{
//         text.textContent="Web Designer"
//     },4000)
//     setTimeout(()=>{
//         text.textContent="Freelancer"
//     },8000)
//     setTimeout(()=>{
//         text.textContent="UI/UX Designer"
//     },12000)
//     setTimeout(()=>{
//         text.textContent="Singer"
//     },16000)
// }
// textLoad();
// setInterval(textLoad,20000);


// // hamber click mobile side manu4
// let right_container_2 = document.querySelector(".right_container_2");
// let tittle = document.querySelector(".tittle");
// let menu = document.querySelector(".lists")
// const hamber = document.querySelector(".bar_icon");
// hamber.addEventListener("click",()=>{
//     console.log("clicked hamber ")
   
//     menu.classList.add("activeted")
    
//     if(right_container_2.style.display == "none"){
//         right_container_2.style.display = "block";
//     }
//     else{
//         right_container_2.style.display = "none";
//     }
//     if( tittle.style.display == "none"){
//         tittle.style.display = "block";
//     }
//     else{
//         tittle.style.display = "none";
//     }
// })


// // button i will add so dynamically

// var ptag = document.createElement("div")
// ptag.classList = "divcreate";
// ptag.textContent = "HI,✌️SANGAMESH_LISHETTY";
// menu.appendChild(ptag)

// var logo = document.createElement("img");
// logo.src = "img/23640.jpg";  
// logo.alt = "Company Logo"; 
// logo.classList = "logoimg" 
// menu.appendChild(logo)

// var button = document.createElement("button");
// button.classList = "cancell";
// button.textContent = "X"
// menu.appendChild(button)



// // cancell button js
//  const cancell = document.querySelector(".cancell");
//     cancell.addEventListener("click",()=>{
//         menu.classList.remove("activeted")
//         right_container_2.style.display = "block";
//         tittle.style.display = "block";
//     })

// const listitem = document.querySelectorAll("li");
// listitem.forEach(function(listItem){
//     listItem.addEventListener("click",()=>{
//         menu.classList.remove("activeted")
//         right_container_2.style.display = "block";
//         tittle.style.display = "block";
// })
// }); const products = document.querySelectorAll(".certify .swapping");
// let count = 0;
// let isdragging=false;
// let startX;

// function left(){

//     if(count == 0){
//         count = products.length / 4 - 1;
//     }
//     else{
//         count--;
//     }
    
//     scroll();
// }

// function right(){

//     if(count == products.length / 4 - 1){
//         count = 0;
//     }
//     else{
//         count++;
//     }
//     scroll();
// }

// function scroll(){
//     products.forEach(function(item){
//         item.style.transform = `translateX(-${count * 1250}px)`;
//     })
// }


// // my resume js Code
// function item(itemId,clickedelement){
//     console.log(itemId);
//     document.querySelectorAll('.education').forEach(info =>{
//         info.classList.remove('active');
//     })

//     document.querySelectorAll(".btn_2").forEach(item =>{
//         item.classList.remove('active');
//     })

// const selectedinfo = document.getElementById(`info${itemId}`);

// if(selectedinfo){
//     selectedinfo.classList.add('active');
// }

// if(clickedelement){
//     clickedelement.classList.add('active')
// }


// }
// function containerClick(){
//     document.querySelector('.nav_list').classList.toggle('clicked');
//     console.log("clicked container");
// }

// // click button goes to top of the website
// document.addEventListener("DOMContentLoaded",()=>{

// var scrollToTopBtn = document.querySelector(".updirection");

// window.onscroll=()=>{
//     if(document.documentElement.scrollTop>100 || document.body.scrollTop>100){
//         scrollToTopBtn.style.display = "block";
//         console.log("scrolling")
//     }
//     else{
//         scrollToTopBtn.style.display = "none";
//     }
// }

// })

// const text = document.querySelector(".auto_change");

// const textLoad = ()=>{
//     setTimeout(()=>{
//         text.textContent="Developer"
//     },0)
//     setTimeout(()=>{
//         text.textContent="Web Designer"
//     },4000)
//     setTimeout(()=>{
//         text.textContent="Freelancer"
//     },8000)
//     setTimeout(()=>{
//         text.textContent="UI/UX Designer"
//     },12000)
//     setTimeout(()=>{
//         text.textContent="Singer"
//     },16000)
// }
// textLoad();
// setInterval(textLoad,20000);


// // hamber click mobile side manu4
// let right_container_2 = document.querySelector(".right_container_2");
// let tittle = document.querySelector(".tittle");
// let menu = document.querySelector(".lists")
// const hamber = document.querySelector(".bar_icon");
// hamber.addEventListener("click",()=>{
//     console.log("clicked hamber ")
   
//     menu.classList.add("activeted")
    
//     if(right_container_2.style.display == "none"){
//         right_container_2.style.display = "block";
//     }
//     else{
//         right_container_2.style.display = "none";
//     }
//     if( tittle.style.display == "none"){
//         tittle.style.display = "block";
//     }
//     else{
//         tittle.style.display = "none";
//     }
// })


// // button i will add so dynamically

// var ptag = document.createElement("div")
// ptag.classList = "divcreate";
// ptag.textContent = "HI,✌️SANGAMESH_LISHETTY";
// menu.appendChild(ptag)

// var logo = document.createElement("img");
// logo.src = "img/23640.jpg";  
// logo.alt = "Company Logo"; 
// logo.classList = "logoimg" 
// menu.appendChild(logo)

// var button = document.createElement("button");
// button.classList = "cancell";
// button.textContent = "X"
// menu.appendChild(button)



// // cancell button js
//  const cancell = document.querySelector(".cancell");
//     cancell.addEventListener("click",()=>{
//         menu.classList.remove("activeted")
//         right_container_2.style.display = "block";
//         tittle.style.display = "block";
//     })

// const listitem = document.querySelectorAll("li");
// listitem.forEach(function(listItem){
//     listItem.addEventListener("click",()=>{
//         menu.classList.remove("activeted")
//         right_container_2.style.display = "block";
//         tittle.style.display = "block";
// })
// }); 