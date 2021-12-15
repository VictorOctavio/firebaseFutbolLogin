import React from 'react'
import {withRouter} from 'react-router-dom'
import {auth} from '../../../firebase'


function Reset(props) {

    const [email, setEmail] = React.useState('')
    const [error, setError] = React.useState(null)
    const [success, setSuccess] = React.useState(null)


    //Validar datos form
    const onSubmit = (e) => {
        e.preventDefault()

        if(!email.trim()){
            setError('Ingrese el Email')
            return
        }
        
        setError(null)

        recuperar()
    }

    const recuperar = React.useCallback(async () => {
        try{

            await auth.sendPasswordResetEmail(email)
            
            setEmail('')
            setSuccess('Te enviamos un email de recuperacion en tu correo electronico :)')

            setTimeout(() => {
                props.history.push('/login')
            }, 7000)
           
        }catch(err){
            if(err.code === 'auth/invalid-email'){
                setError('Email no valido')
            }
            console.log(err)
        }
    }, [email, props.history])



    return (

        <React.Fragment>

            <div className="container formulario">

                <div className="formulario-img">
                    <img
                    alt="img"
                    src="https://firebasestorage.googleapis.com/v0/b/follsclothing-a8076.appspot.com/o/ba903d245409dd2bcbf441e79d7f8c85.jpg?alt=media&token=2037407a-8b78-433d-92f2-dd236e8e2264"
                    />
                </div>


                <div className="formulario-container">
                    <form onSubmit={onSubmit}>

                        <div className="form-title">
                            <h6>RECUPERAR CONTRASEÑA</h6>
                        </div>
                        
                        <div className="form-inputs">
                            {
                                error !== null ? (
                                    <div className="alert alert-danger mg-error">
                                        {error}
                                    </div>
                                ):( 
                                    null
                                )
                            }
                            {
                                success !== null ? (
                                    <div className="alert alert-success mg-error">
                                        {success}
                                    </div>
                                ):(
                                    null
                                )
                            }
                            <input
                            className="form-control mb-3"
                            placeholder="Email"
                            name="email"
                            type="text"
                            onChange={(e) => (setEmail(e.target.value))}
                            value={email}
                            />
                        </div>
                        
                        <div className="form-button">
                            
                                <button className="btn btn-danger"
                                    type="submit"
                                    >Recuperar Contraseña</button>
                        </div>
                    </form>
                </div>
            </div>   
           
       </React.Fragment>
    )
}

export default withRouter(Reset)
