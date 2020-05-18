import React from 'react'
import styled from 'styled-components'

const Button = (props) => {
    return(
        <SubmitButton disabled={props.disabled} type={props.type} value={props.value} onClick={props.onClick}/>
    )
}

export default Button

const SubmitButton = styled.input`
    width: 150px;
    height: 54px;
    background-color: ${props => props.disabled ? 'rgba(141, 142, 161, 0.1)' : '#FF7165'} ;
    border: none;
    border-radius: 4px;
    color: #211965;
    font-weight: 600;
    cursor: pointer;
    outline: none;
`
