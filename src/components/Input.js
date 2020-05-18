import React from 'react'
import styled from 'styled-components'

const Input = (props) => {
    return(
        <StyledInput 
            type={'text'}
            maxLength={1}
            error={props.error}
            value={props.value} 
            name={props.name} 
            onChange={props.onChange}/>
    )
}

export default Input

const StyledInput = styled.input`
    border: 1px solid;
    border-color: ${props => props.error ? 'red' : '#DBDCEE'};
    box-sizing: border-box;
    border-radius: 10px;
    width: 50px;
    height: 68px;
    margin: 15px;
    text-align: center;
    font-size: 17px;
    font-weight: 600;
    outline: none;
    @media (max-width: 768px) {
        margin: 10px;
    }
`
