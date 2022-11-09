function myFunction() {
    var x = document.getbtnClickentById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  


  console.log("hello from index.js")
 
//     var container=document.getElementById("myTopnav");

//     var links=container.getElementsByClassName("link");

// console.log(links)
// for (var i=0;i<links.length;i++){
//     links[i].addEventListener("click",function(){
//         var current=document.getbtnClickentsByClassName("active");
//         current[0].className=current[0].className.replace("active","link")
//         this.className+= " active";
//     })
// }




function showPass(){
  var pass=document.getElementById("pass");

  if (pass.type=="password"){
    pass.type="text";
  }
  else{
    pass.type="password";
  }
  console.log("clicked here");
}

  


function fullScreen(){
  var btnClick=document.getElementById("screen")
console.log("gg clice")
    if (btnClick.requestFullscreen) {
      btnClick.requestFullscreen();
    } else if (btnClick.webkitRequestFullscreen) { /* Safari */
      btnClick.webkitRequestFullscreen();
    } else if (btnClick.msRequestFullscreen) { /* IE11 */
      btnClick.msRequestFullscreen();
    }
  
}


//   var userClick=document.getElementById("user-option")
// var div=document.querySelector(".menu")
// var final=div.documentElement('a');
//   userClick.addEventListener("click",function(){
//     if (div.style.display== "flex"){
//       console.log("it is flex")
//     }
//     else{
//       console.log("not flex")
//     }

//   })


var container=document.getElementById("user-section")
var menus=container.getElementsByClassName("class")
var links=container.getElementsByClassName("user-option")
console.log(links)
var style=window.getComputedStyle(menus[0])
links[0].addEventListener("click",function(){
  console.log(style.display)
  if (style.display=="none"){
    menus[0].style.display= "flex";
    menus[1].style.display= "flex";

  }
  else{
    menus[0].style.display= "none";
    menus[1].style.display= "none";
  }
})



  function popUp(){
    console.log("gg clicked")
    var btn=document.getElementById('popup-btn')
    var cl=document.getElementsByClassName('pop')
    var style=window.getComputedStyle(cl[0])
    if (style.display== "none"){
      cl[0].style.display = "block";
      
    }
    else{
      cl[0].style.display = "none";
      
    }

  }



  var container=document.getElementById("side");


    var links=container.getElementsByClassName("menu-list");

console.log('clicked');
for (var i=0;i<links.length;i++){
    links[i].addEventListener("click",function(){
      console.log(links[i])
        var current=document.getElementsByClassName("active");
        current[0].className=current[0].className.replace("active"," ")
        this.className+= " active";
    })
}