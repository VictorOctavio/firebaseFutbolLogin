import React from 'react'
import {auth} from '../firebase'
import {withRouter} from 'react-router-dom'
import Principal from '../components/main/principal/Principal'


const PrincipalPage = (props) => {

    const [user, setUser] = React.useState(null)

    //Primer Validación

    React.useEffect(() => {

        if(auth.currentUser){
            setUser(auth.currentUser)
            console.log('Usuario Existente')
        }else{
            console.log('Usuario No Existente')
            props.history.push('/login')
        }

    }, [props.history])

    return (
        <React.Fragment>
            
        <Principal
            user={user}
        />
        
        </React.Fragment>
    )
}

export default withRouter(PrincipalPage)
