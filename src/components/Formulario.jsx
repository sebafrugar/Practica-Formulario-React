import React, { useState } from 'react';
import Views from './Views'



const Formulario = (props) =>{

    const [nameUser,setNameUser] = useState('')
    const [lastnameUser,setlastnameUser] = useState('')
    const [correoUser,setcorreoUser] = useState('')
    const [passUser,setpassUser] = useState('')
    const [confirmPass,setconfirmPass] = useState('')
    const [nameError, setnameError] = useState("");
    const [lastnameError, setlastnameError] = useState("");
    const [correoError, setcorreoError] = useState("");
    const [passError, setpassError] = useState("");
    const [confirpassError, setconfirpassError] = useState("");


    const handlernameUser = (e) => {
        setNameUser(e.target.value)
    }
    const handlerlastnameUser = (e) => {
        setlastnameUser(e.target.value)
    }
    const handlercorreoUser = (e) => {
        setcorreoUser(e.target.value)
    }
    const handlerpassUser = (e) => {
        setpassUser(e.target.value)
    }
    const handlerconfirmPass = (e) => {
        setconfirmPass(e.target.value)
    }
    const validateName = (e) => {
        setNameUser(e.target.value);
        if(e.target.value.length < 1) {
            setnameError("Se requiere un nombre!");
        } else if(e.target.value.length < 2) {
            setnameError("Minimo de dos caracteres!");
        } else {
            setnameError('');
        }
    }
    const validateApellido = (e) =>{
        setlastnameUser(e.target.value);
        if(e.target.value.length < 1) {
            setlastnameError("Se requiere un apellido!");
        } else if(e.target.value.length < 2) {
            setlastnameError("Minimo de dos caracteres!");
        } else {
            setlastnameError('');
        }
    }
    const validateCorreo = (e) => {
        const validMail = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
        if(e.target.value.length < 5) {
            setcorreoError("Correo contiene menos de 5 caracteres!");
        } else if(!validMail.test(e.target.value)) {
            setcorreoError("se requiere un correo valido");
        } else {
            setcorreoError('');
        }
    }
    const validatePassword = (e) => {
        setpassUser(e.target.value);
        if(e.target.value.length < 8) {
            setpassError("Password minimo de 8 caracteres!");
        } else {
            setpassError('');
        }
    }
    const confirmPassword = (e) =>{
        if(passUser !== e.target.value){
            setconfirpassError("passwords no coinciden") 
        } else {
            setconfirpassError("") 
        }   
    }


    return(
        <div>
            <h2>Formulario Usuario </h2>
            <form action="">
                <label >Nombre :</label>
                <input type="text" name="nameUser" value={nameUser} onChange={(e)=> {handlernameUser(e);validateName(e);}}/><br />
                <p style={{color:'red'}}>{ nameError }</p>
                <label >Apellido :</label>
                <input type="text" name="lastnameUser" value={lastnameUser} onChange={(e)=> {handlerlastnameUser(e);validateApellido(e);}}/><br />
                <p style={{color:'red'}}>{ lastnameError }</p>
                <label >Correo :</label>
                <input type="email" name="correoUser" value={correoUser} onChange={(e)=> {handlercorreoUser(e);validateCorreo(e)}}/><br />
                <p style={{color:'red'}}>{ correoError}</p>
                <label >Password :</label>
                <input type="password" name="passUser" value={passUser} onChange={(e)=> {handlerpassUser(e);validatePassword(e)}}/><br />
                <p style={{color:'red'}}>{ passError}</p>
                <label >Confirmar Password :</label>
                <input type="password" name="confirmPass" value={confirmPass} onChange={(e)=> {handlerconfirmPass(e);confirmPassword(e)}}/><br />  
                <p style={{color:'red'}}>{ confirpassError}</p>         
            </form>
            <Views  nameUser={nameUser}
                    lastnameUser={lastnameUser}
                    correoUser={correoUser}
                    passUser={passUser}
                    confirmPass={confirmPass}/>
        </div>
    )

}


export default Formulario