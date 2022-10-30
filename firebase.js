
 // Import the functions you need from the SDKs you need
 import  { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
 import { getFirestore,collection,addDoc,getDocs,deleteDoc,doc,getDoc,updateDoc} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-firestore.js"
 // TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

      
// Your web app's Firebase configuration
const firebaseConfig = {
 apiKey: "AIzaSyB-WsXZTIn_JUSlLmr07UtWt9YlNubZvfg",
 authDomain: "proyectofinal-firebasebases.firebaseapp.com",
 projectId: "proyectofinal-firebasebases",
 storageBucket: "proyectofinal-firebasebases.appspot.com",
 messagingSenderId: "30207467768",
 appId: "1:30207467768:web:472f66969acc20592a5b0d"
};
      
// Initialize Firebase
const app = initializeApp(firebaseConfig);
//conexion a la base de datos
const db = getFirestore();

export const guardar = (idclase1,tituloclase1,descripclase1,idestud1,nombreestud1,apellestud1,matricula11)=>
    addDoc(collection(db,'Estudiantes'), {idclase1,tituloclase1,descripclase1,idestud1,nombreestud1,apellestud1,matricula11});

export const getTasks = ()=> getDocs(collection(db,'Estudiantes'))

export const deleteTask = id => deleteDoc(doc(db,'Estudiantes',id));

export const gettask = id => getDoc(doc(db,'Estudiantes',id))

export const actualizar = (id, newFields) =>
updateDoc(doc(db, "Estudiantes", id), newFields);

