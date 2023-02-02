let addToDoButton = document.getElementById("addToDo");
let toDoContainer = document.getElementById("toDoContainer");
let inputField = document.getElementById("inputField");
let clearall=document.getElementById("clearall")
let active=document.getElementById("active") //active
let clr=document.getElementById("clr-completed") //

addToDoButton.addEventListener("click", function () {
add()
});
inputField.addEventListener("keyup",function(e){
    if(e.key==='Enter'){
        add()
    }
})
function add (){
    var paragraph = document.createElement("p");
    paragraph.classList.add("paragraph-styling");
    //   paragraph.innerText = inputField.value;
    paragraph.innerHTML = `
  <div id="task">
  ${inputField.value}
  </div>
  <button class="complete" id="btn">Done</button>
  <button class="Delete" id="btn">delete</button>
  
  `;
    if (inputField.value === "") {
      alert("You must write something!");
    } else {
      toDoContainer.appendChild(paragraph);
      inputField.value = "";
  
      let taskComplete=document.querySelectorAll(".complete")
      for(let i=0; i<taskComplete.length;i++){
          taskComplete[i].onclick=function(){
              this.parentNode.firstElementChild.style.textDecoration = "line-through"
          }
      }
      let taskdelete=document.querySelectorAll(".Delete")
      for(let i=0; i<taskdelete.length;i++){
          taskdelete[i].onclick=function(){
              this.parentNode.remove();
          }
      }
    }
}


clearall.onclick=function(){
    toDoContainer.innerHTML=""
}

document.getElementById('completed').onclick= function(){  // checking for text dec
    let taskComplete=document.querySelectorAll(".complete")
    for(let i=0; i<taskComplete.length;i++){
       if(taskComplete[i].parentNode.firstElementChild.style.textDecoration){
   
        taskComplete[i].parentNode.style.display="flex";
       }
       else {
        taskComplete[i].parentNode.style.display="none";
        
       }
    }
}
document.getElementById('active').onclick= function(){ // opposite of the above
    let taskComplete=document.querySelectorAll(".complete")
    for(let i=0; i<taskComplete.length;i++){
       if(taskComplete[i].parentNode.firstElementChild.style.textDecoration){
        taskComplete[i].parentNode.style.display="none";
       }
       else {
        taskComplete[i].parentNode.style.display="flex";
       }
    }
}

document.getElementById('all').onclick= function(){
    let taskComplete=document.querySelectorAll(".complete")
    for(let i=0; i<taskComplete.length;i++){
       
        taskComplete[i].parentNode.style.display="flex";
       
    }
}
clr.onclick= function(){
    let taskComplete=document.querySelectorAll(".complete")
    for(let i=0; i<taskComplete.length;i++){
       
        if(taskComplete[i].parentNode.firstElementChild.style.textDecoration){
            taskComplete[i].parentNode.remove();
           }
       
    }
}

