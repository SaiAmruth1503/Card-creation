import './Cardcreation.css';
import data from '../JSON-Data/data.json';

export default function Cardcreation(){
    return(
        <>
        <div className="ultra">
            {data.map((prod) => (

            <div className="main" key={prod.id}>
                <img src={prod.image} alt="card"/>

            <div className="card-text">
                <h3 className="card-title">{prod.title}</h3>
                <p className="card-state">{prod.state}</p>
            </div>
        
        </div>
            ))}
        </div>
        </>
    );
}