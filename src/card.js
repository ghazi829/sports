
import './cardstyle.css';

function Card(props)
{
    
    return (
        <div className="card">
            <img src={props.pic} />
            <h2>{props.ttl}</h2>
            <h3>{props.sport}</h3>
            <h4>{props.gnd}</h4>
            <p>
                {props.team}
            </p>
        </div>
    );
}

export default Card;