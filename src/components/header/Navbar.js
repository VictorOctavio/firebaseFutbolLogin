import React from 'react'

//Navegador
import {Link} from 'react-router-dom'

//Estilos CSS
import './navbar.css'

//Importar firebase cerrar sesion
import {auth} from '../../firebase'

//import withRouter
import {withRouter} from 'react-router-dom'


const Navbar = (props) => {

    const CerrarSesion = () => {
        auth.signOut()
            .then( () => {
                props.history.push('/login')
            })
        console.log(props.firebaseUser) 

    }

    return (

        <React.Fragment>
            <nav>
                <div className="navegacion">
                   
                   {
                       props.firebaseUser !== null ? (
                        <Link className="btn btn-outline-danger nav" to="/">PRINCIPAL</Link>
                       ): null
                   }
                    

                    {
                        props.firebaseUser !== null ? (
                            <button className="btn btn-outline-danger nav"
                            onClick={CerrarSesion}>Cerrar Sesion</button>
                        ):(
                            <Link className="btn btn-outline-danger nav">LOGIN</Link>
                        )
                    }      
                
                </div>
            </nav>
        </React.Fragment>
        

    )
}

export default withRouter(Navbar)
