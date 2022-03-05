

const Views = (props) => {

    const {nameUser,lastnameUser,correoUser,passUser,confirmPass} = props;

    return(
        <div>
            <h3>Nombre Usuario : {nameUser}</h3>
            <h3>Apellido Usuario : {lastnameUser}</h3>
            <h3>Correo Usuario : {correoUser}</h3>
            <h3>Password Usuario : {passUser}</h3>
            <h3>Confirmar Password : {confirmPass}</h3>
            
        </div>
    )
}

export default Views