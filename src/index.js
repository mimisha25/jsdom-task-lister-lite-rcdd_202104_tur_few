document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById("create-task-form");
   const item = document.getElementById("new-task-description");
   const list = document.getElementById("tasks");

   form.addEventListener("submit", (e)=>{
     e.preventDefault();
     const newItem = document.createElement("li");
     newItem.innerHTML = item.value;
     list.append(newItem);
   })
   removeTaks.addEventListener("click", function(e){
       const li = document.querySelectorAll();
       for (let i = 0; i < li.length; i++){
         if (newTask.value === li[i].textContent){
           tasks.removeChild(li[i]);
         }
       }
       e.preventDefault();
     });

   });
