import React, { useState } from 'react';
import Views from './Views'


const Formulario = (props) =>{

    const [nameUser,setNameUser] = useState('')
    const [lastnameUser,setlastnameUser] = useState('')
    const [correoUser,setcorreoUser] = useState('')
    const [passUser,setpassUser] = useState('')
    const [confirmPass,setconfirmPass] = useState('')


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




    return(
        <div>
            <h2>Formulario Usuario </h2>
            <form action="">
                <label >Nombre :</label>
                <input type="text" name="nameUser" value={nameUser} onChange={(e)=> handlernameUser(e)}/><br />
                <label >Apellido :</label>
                <input type="text" name="lastnameUser" value={lastnameUser} onChange={(e)=> handlerlastnameUser(e)}/><br />
                <label >Correo :</label>
                <input type="email" name="correoUser" value={correoUser} onChange={(e)=> handlercorreoUser(e)}/><br />
                <label >Password :</label>
                <input type="password" name="passUser" value={passUser} onChange={(e)=> handlerpassUser(e)}/><br />
                <label >Confirmar Password :</label>
                <input type="password" name="confirmPass" value={confirmPass} onChange={(e)=> handlerconfirmPass(e)}/><br />           
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