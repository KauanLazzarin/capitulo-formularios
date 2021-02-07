export default function Radio ( {options, value, updateFunction} ) {
    return (
        <div>

            {
                options.map((option) => {
                    return (
                        <label key={option}>

                            <input 
                                type="radio" 
                                value={option} 
                                checked={value === option}
                                onChange={({target}) => updateFunction(target.value)}
                            />

                            {option}
                        </label>
                    )
                }) 
            }

        </div>
    )
};