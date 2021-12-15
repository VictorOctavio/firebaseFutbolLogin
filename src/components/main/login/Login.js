import React from 'react'
import LoginForm from './LoginForm'
import {auth} from '../../../firebase'
import {withRouter} from 'react-router-dom'


const Login = (props) => {

    const [email, setEmail] = React.useState('')
    const [pass, setPass] = React.useState('')
    const [error, setError] = React.useState(null)
    const [registro, setRegistro] = React.useState(true)
    const [success, setSuccsess] = React.useState(null)


    //OBTENER EMAIL Y PASSWORD EN EL STATE
    const getDataEmail = (e) => {
        setEmail(
            [e.target.name] = e.target.value
        )
    }

    const getDataPass = (e) => {
        setPass(
            [e.target.name] = e.target.value
        )
    }

    //Validar datos form
    const onSubmit = (e) => {
        e.preventDefault()

        if(!email.trim()){
            setError('Ingrese el Email')
            return
        }

        if(!pass.trim()){
            setError('Ingrese la clave')
            return
        }

        setError(null)
        
        if(registro){
            registrarUsuario()
        }else{
            LoginUsuario()
        }
    }


    //Registro
    const handleRegistro = () => {
        setRegistro(!registro)
    }


    //Registrar Usuario Firebase
    const registrarUsuario = React.useCallback(async() => {
        
        try{

            const res = await auth.createUserWithEmailAndPassword(email, pass)
            console.log(res.user)

            setEmail('')
            setPass('')

            setSuccsess('Registro con exito!')

            setTimeout(() => {
                props.history.push('/principal')
            }, 1500)   

        }catch(err){
            if(err.code === 'auth/email-already-in-use'){
                setError('Email ya registrado')
            }
            if(err.code === 'auth/invalid-email'){
                setError('Email no exitente')
            }
            if(err.code === 'auth/weak-password'){
                setError('Clave minima 6 caracteres')
            }
            if(err.code === 'auth/email-already-in-use'){
                setError('Email ya registrado')
            }
            console.log(err)
        }

    },[email, pass,  props.history])    

    const LoginUsuario = React.useCallback( async() => {

        try{

            const res = await auth.signInWithEmailAndPassword(email, pass)
            console.log(res.user)

            setEmail('')
            setPass('')

            setSuccsess('Inicio de Sesion Correcto :)')

            setTimeout(() => {
                props.history.push('/principal')
            }, 1500)

        }catch(err){
            if(err.code === 'auth/wrong-password'){
                setError('Clave Inconrrecta')
            }
            if(err.code === 'auth/user-not-found'){
                setError('Email no válido')
            }
            if(err.code === 'auth/invalid-email'){
                setError('Email no exitente')
            }
            console.log(err)
        }


    }, [email, pass, props.history])
    


    const recovery = () => {
        props.history.push('/resetClave')
    }


    return (

        <React.Fragment>

        
        <LoginForm 
            getEmail={getDataEmail}
            getPass={getDataPass}
            onSubmit={onSubmit}
            error={error}
            success={success}
            registro={handleRegistro}
            regis={registro}
            email={email}
            pass={pass}
            resetClave={recovery}
        />

        </React.Fragment>
        
    )
}

export default withRouter(Login)
