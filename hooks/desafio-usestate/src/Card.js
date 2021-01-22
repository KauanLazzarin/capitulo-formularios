export default function Card (props) {
    return (
        <div>
            <h1>{props.name}</h1>
            <p>{props.price}</p>
            <img src={props.imgsrc} alt={props.name}/>
        </div>
    );
};