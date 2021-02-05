export default function Select ( {options, id, value, updateValue} ) {
    return (
        <select name={id} id={id} value={value} onChange={( {target} ) => updateValue(target.value)}>

            <option value="" disabled>Selecione uma opção</option>

            {
                options.map((option) => {
                    return <option value={option}>{option}</option>
                })
            }

        </select>
    )
};