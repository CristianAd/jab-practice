import React from "react";


function Cena({nombre, color, precio, setTotal }) {
    const ruta= "https://www.html6.es/img/rey_"
    const imagen = `${ruta}${nombre.toLowerCase()}.png`
    const comprar = (element)=>{
            setTotal((e)=>e+precio)

            element.target.parentNode.parentNode.style.display = "none"
    }
    return <>
        <div className="rey" style={{backgroundColor: color}}>
            <h1>{nombre}</h1>
                <img src={imagen} />
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