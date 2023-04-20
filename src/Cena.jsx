import React from "react";


function Cena({nombre, color, precio, setTotal }) {

    const comprar = ()=>{

    }
    return <>
        <div className="rey">
            <h1>{nombre}</h1>
            <div className="titulo"> Precio:</div>
            <div className="precio">
                {precio}
            </div>$
            <div>
                <button onClick={comprar}>Comprar</button>
            </div>
        </div>
    </>
}

export default Cena