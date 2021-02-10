export default function Question ( {question, options, setValue} ) {
    return (
        <div>
            <h1>{question}</h1>
            {
                options.map((option) => {
                    return <label htmlFor="">
                                <input 
                                    type="radio" 
                                    name="option" 
                                    value={option} 
                                    onChange={ ( {target }) => setValue(target.value)}
                                />
                                {option}
                            </label>
                })
            }
        </div>
    )
}