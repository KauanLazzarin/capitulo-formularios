export default function Input ({id, label, value, updateFunction,...props}) {
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input
                type="text" 
                id={id} 
                name={id} 
                value={value} 
                onChange={({target}) => updateFunction(target.value)}
                {...props}
                />
        </div>
    )
};