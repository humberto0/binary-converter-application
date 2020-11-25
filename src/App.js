import React, { useState } from 'react'

import {
    StyledForm,
    BinaryTextInput,
    Label,
    Button,
    DecimalTextInput,
    Field,
} from './components/styles'

function App() {
    const [binaryText, setBinaryText] = useState('')
    const [decimalText, setDecimalText] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    // Perform the conversion on form submit
    const onFormSubmit = b => {
        b.preventDefault() // prevents refresh of the browser

        // Make sure we accept only either 0 or 1
        if (binaryText.match(/^[0-1]+$/g) === null) {
            setErrorMessage('Digite um numero entre 0 e 1')
            return
        }

        setErrorMessage('') // Reset the error message

        // Formulae:
        // input = 1 => output = 1 * (2^0) = 1
        // input = 10 => output = (0 * (2^0)) + (1 * (2^1)) = 2
        // So we reverse and iterate from the back
        const reversedBinaryText = binaryText
            .split('')
            .map(Number) // Convert to a number from string
            .reverse()

        // Calculate the result by accumulating previous vaue
        const result = reversedBinaryText.reduce(
            (accumulator, currentValue, idx) =>
                accumulator + currentValue * Math.pow(2, idx)
        )
        setDecimalText(result)
    }

    return (
        <>
            <h1>Conversor de numero binario para decimal</h1>

            <StyledForm onSubmit={onFormSubmit}>
                {errorMessage && <span style={{ color: 'white' }}>{errorMessage}</span>}
                <br />
                <Field>
                    <Label style={{ color: 'white'}}>Digite o numero binario</Label>
                    <div>
                        <BinaryTextInput
                            autoComplete="off"
                            type="text"
                            name="binary"
                            placeholder="Enter 0 or 1"
                            value={binaryText}
                            onChange={b => setBinaryText(b.target.value)}
                        />
                        <Button type="submit">Convert</Button>
                    </div>
                </Field>
                <Field>
                    <Label style={{ color: 'white' }}> Resultado </Label>
                    <DecimalTextInput
                        type="text"
                        name="decimal"
                        value={decimalText}
                        disabled
                    />
                </Field>
            </StyledForm>
        </>
    )
}

export default App
