import React from 'react'
import './login.css'

const LoginForm = (props) => {

    
    return (
        <React.Fragment>

            <div className="container formulario">

                <div className="formulario-img">
                    <img
                    alt="img"
                    src="https://firebasestorage.googleapis.com/v0/b/follsclothing-a8076.appspot.com/o/ney.jpg?alt=media&token=270df0d1-ed33-428b-9060-155e274d0e5e"
                    />
                </div>


                <div className="formulario-container">
                    <form onSubmit={props.onSubmit}>

                        <div className="form-title">
                            {
                                props.regis ? (
                                    <h3>Registrarse</h3>
                                ):(
                                    <h3>Iniciar Sesion</h3>
                                )
                            }
                        </div>
                        
                        <div className="form-inputs">

                            {
                                props.success !== null ? (
                                    <div className="alert alert-success mg-error">
                                        {props.success}
                                    </div>
                                ):( 
                                    null
                                )
                            }

                            {
                                props.error !== null ? (
                                    <div className="alert alert-danger mg-error">
                                        {props.error}
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
                            onChange={props.getEmail}
                            value={props.email}
                            />

                            <input
                            className="form-control mb-3"
                            placeholder="Ingrese clave"
                            type="password"
                            name="pass"
                            onChange={props.getPass}
                            value={props.pass}
                            />
                        </div>
                        
                        {
                            props.regis ? (
                            <div className="form-button">
                            
                                <button className="btn btn-danger"
                                    type="submit"
                                >Registrarse</button>
        
                                <button className="btn info"
                                    type="button"
                                    onClick={props.registro}
                                >¿ya tienes cuenta?</button>
                            </div>
                                ):(
                            <div className="form-button">
                            
                                <button className="btn btn-danger"
                                    type="submit"
                                >Login</button>
        
                                <button className="btn info"
                                    type="button"
                                    onClick={props.registro}
                                >¿no tienes cuenta?</button>
                                
                                <button className="btn reset"
                                    type="button"
                                    onClick={props.resetClave}
                                >¿Olvidate tu clave?</button>
                            </div>
                                )
                        }          
                    </form>
                </div>
            </div>   
           
       </React.Fragment>
    )
}

export default LoginForm
