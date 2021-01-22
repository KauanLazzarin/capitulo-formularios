import React from 'react'
import Button from './Button';
import Input from './Input';

function Form() {
    return (
        <form>
            <h2>Insira aqui seus dados</h2>
            <fieldset>
                <label htmlFor="name-input">Digite aqui seu nome</label>
                <Input id="name-input" />
            </fieldset>

            <fieldset>
                <label htmlFor="email-input">Digite aqui seu melhor email   </label>
                <Input id="email-input" />
            </fieldset>

            <fieldset>
                <Button />
            </fieldset>
        </form>
    );
};

export default Form;
