export default function Input ({id, label, value, updateFunction}) {
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input type="text" id={id} name={id} value={value} onChange={({target}) => updateFunction(target.value)}/>
        </div>
    )
};