import styled from 'styled-components'

export const StyledForm = styled.form`
  border: 1px solid gray;
  border-radius: 10px;
  padding: 10px;
  width: 50%;
  background: #7159c1;
  display: center 
`

export const Field = styled.div`
  display: flex;
  flex-direction: column;
`

export const Label = styled.span`
  margin: 10px;
  font-size: 18px;
  font-family: sans-serif;
  fontWeight: Bold
  color: White
`

export const BinaryTextInput = styled.input`
  width: 50%;
  font-size: 18px;
  margin-left: 10px;
  margin-bottom: 10px;
  border: 1px solid #a3a3a3;
  padding: 10px;
  border-radius: 2px;
  background: #fff;
  outline: none;
  &:focus {
    border: 1px solid #FFF;
  }
`

export const DecimalTextInput = styled.input`
  width: 50%;
  font-size: 18px;
  margin-left: 10px;
  margin-bottom: 10px;
  border: 1px solid #a3a3a3;
  padding: 10px;
  border-radius: 2px;
  background: #FFF;
  outline: none;
`

export const Button = styled.button`
  width: 30%;
  margin-bottom: 10px;
  margin-left: 10px;
  padding: 10px;
  border: 1px solid;
  border-radius: 20px;
  font-size: 18px;
  cursor: pointer;
  &:hover {
    border: 1px solid white;
    color: Black;
    opacity: 0.7
  }
`

