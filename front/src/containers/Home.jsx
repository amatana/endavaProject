import React from 'react';

const Home = (props) =>{
    console.log("SOY LAS PROPS DEL HOME!!!", props)
    return(
        <div>
            Acá viene el Home con los botones de acuerdo al usuario que ya está mapeado en el store de redux
        </div>
    )
}

export default Home;