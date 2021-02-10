export default function Input (props) {
    return (
        <div>
            <label htmlFor={props.id}>{props.label}</label>
            <input
                type="text" 
                id={props.id} 
                name={props.id} 
                value={props.value} 
                onChange={props.onChange}
                onBlur={props.onBlur}
                placeholder={props.placeholder}
                />
        </div>
    )
};