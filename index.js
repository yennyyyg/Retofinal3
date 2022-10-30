
/*import {saveTask} from './firebase.js'*/
import {guardar,getTasks,deleteTask,gettask,actualizar} from './firebase.js'

const TaskForm = document.getElementById('Task-form');
const taskscontainer = document.getElementById('tasks-containers')

let editstatus = false;
let id = '';

window.addEventListener('DOMContentLoaded',async() => {
  //traer los datos que existen en ese momento
   const querysnapshot=  await getTasks()

   let html = ''

   querysnapshot.forEach((doc) => {
     const task = doc.data();
     html += `
     <div class="card card-body mt-2 border-primary">
     <h3 class="h5">${task.nombreestud1}</h3>
     <h3 class="h5">${task.apellestud1}</h3>
     <p>${task.idestud1}</p>
     <p>${task.matricula11}</p>
     <h3 class="h5">${task.tituloclase1}</h3>
     <h3 class="h5">${task.idclase1}</h3>
     <p>${task.descripclase1}</p>
     <div class>
     <button class="btn btn-primary btn-edit" data-id="${doc.id}">🖉 Edit</button>

     <button class="btn btn-secondary btn_borrar" data-id="${doc.id}">🗑 Eliminar</button>
     </div>

     
    
     </div>`;
             
     
    })

   taskscontainer.innerHTML = html
   const btnborrar = taskscontainer.querySelectorAll('.btn_borrar')

   btnborrar.forEach(btn => {
     btn.addEventListener('click',({target:{dataset}})=>{
       deleteTask(dataset.id)

      })
    })

   const btnedit =  taskscontainer.querySelectorAll('.btn-edit')
   btnedit.forEach(btn => {
      btn.addEventListener('click',async e =>{
    
        const doc = await gettask(e.target.dataset.id)
        const task = doc.data()
        TaskForm['IDclase'].value = task.idclase1
        TaskForm['tituloclase'].value = task.tituloclase1
        TaskForm['descripcionclase'].value = task.descripclase1
        TaskForm['Idestudiante'].value = task.idestud1
        TaskForm['nombreestudiante'].value = task.nombreestud1
        TaskForm['apellidoestudiante'].value = task.apellestud1
        TaskForm['matriculaid'].value = task.matricula11
        
        editstatus = true 
        id = doc.id;
        TaskForm['boton_guardar'].innerText = 'Update '

      })
   })
  
})





 
TaskForm.addEventListener('submit',async e =>{
    e.preventDefault();
    const idclase1 = TaskForm['IDclase']
    const tituloclase1 = TaskForm['tituloclase']
    const descripclase1 = TaskForm['descripcionclase']
    const idestud1 = TaskForm['Idestudiante']
    const nombreestud1= TaskForm['nombreestudiante']
    const apellestud1 = TaskForm['apellidoestudiante']
    const matricula11 = TaskForm['matriculaid']


    if(!editstatus){
        guardar(idclase1.value,tituloclase1.value,descripclase1.value,idestud1.value,nombreestud1.value,apellestud1.value,matricula11.value);
       

     } else{
    
        actualizar(
            id,{
            idclase1 : idclase1.value,tituloclase1 : tituloclase1.value,descripclase1:descripclase1.value,
            idestud1:idestud1.value,nombreestud1:nombreestud1.value,apellestud1:apellestud1.value,matricula11:matricula11.value,
           })
        editstatus = false;

    }

   // guardar(idclase1.value,tituloclase1.value,descripclase1.value,idestud1.value,nombreestud1.value,apellestud1.value,matricula11.value)    

    TaskForm.reset();
  

});

