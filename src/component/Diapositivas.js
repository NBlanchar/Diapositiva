import {useState} from 'react'

function Diapositiva({list}){
    /*La variable count define la diapositiva en la que estas */
    const [count,SetCount] = useState(0);
    return( 
    <div className="container">
        <div className="jumbotron p-3 p-md-5 text-white rounded bg-dark">
          <h1 className="titulo">Slideshow App</h1>      
        </div>
        {/* Restart no esta dispoble en la primera diapositiva, reinicia la diapositiva */}        
        <div className="container">
        <button type="button" className="btn btn-primary"
        disabled={count===0} onClick={()=> SetCount(0)}>Restart</button>
        {/* Prev no esta dispoble en la primera diapositiva, muestra la diapositiva anterior */}
        <button type="button" className="btn btn-primary"
        disabled={count===0} onClick={()=> SetCount(count-1)}>Prev</button>
        {/* Next no esta dispoble en la ultima diapositiva, muestra la diapositiva siguiente*/}
        <button type="button" className="btn btn-primary"
        disabled={count===4} onClick={()=> SetCount(count+1)}>Next</button>
        </div>
        <div className="container card-body" >
                <h1>{list[count]['title']}</h1>
                <h1>{list[count]['text']}</h1>
        </div>      
    </div>      
    );
}
export default Diapositiva;