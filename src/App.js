import React from 'react'

//NAVEGACION
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

//COMPONENTES
import Navbar from './components/header/Navbar'
import LoginPage from './pages/LoginPage'
import PrincipalPage from './pages/PrincipalPage'
import Reset from './components/main/principal/Reset'

//FIREBASE VALIDACION
import {auth} from './firebase'

const App = () => {

  //SEGUNDA VALIDACION
  const [firebaseUser, setFirebaseUser] = React.useState(false)

  React.useEffect(() => {

    auth.onAuthStateChanged( user => {

      if(user){
        setFirebaseUser(user)
      }else{
        setFirebaseUser(null)
      }

    })

  }, [])


  return (

    <React.Fragment>
      {
        firebaseUser !== false ? (
          <Router>
            <Navbar
              firebaseUser={firebaseUser}
            />
              <Switch>

                <Route path="/login">
                    <LoginPage/>
                </Route>

                <Route path="/resetClave">
                  <Reset/>
                </Route>

                <Route path="/">
                  <PrincipalPage/>
                </Route>

            </Switch>
          </Router>
        ):(
          <p>Cargando</p>
        ) 
      }
    </React.Fragment>
    
  )
}

export default App;
