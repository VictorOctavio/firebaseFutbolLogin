import React from 'react'

const principal = (props) => {

    return (
        <React.Fragment>
            
        {
            props.user !== null &&(
                <div className="container">
                    <div className="saludo">
                        <h5>Bienvenido: <span id="asd">{props.user.email}</span></h5>
                    </div>
                   
                </div>
            )
        }
            
        </React.Fragment>
    )
}

export default principal
