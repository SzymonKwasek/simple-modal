import React from 'react'
import styled from 'styled-components'

import lock from '../assets/lock.png'
import close from '../assets/closeButton.png'

import '../App.css'

const Modal = (props) => {

    if(props.visible) {
        return(
            <StyledModal>
                <img src={lock} alt={'Lock'} className={'image'}/>
                <CloseButton onClick={props.onClose}>
                <img src={close} alt={'Close'} className={'close'}/>
                </CloseButton>
                {props.children}
            </StyledModal>
        )
    } else {
        return <div/>
    }

}

export default Modal

const StyledModal = styled.div`
    max-width: 800px;
    min-width: 328px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    padding: 10px;
    width: 45vw;
    height: 488px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media (max-width: 768px) {
        flex-direction: column;
        padding: 0;
    }
`

const CloseButton = styled.div`
    position: absolute;
    top: 20px;
    right: 20px;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    outline: none;
    border: 1px solid #DBDCEE;
    border-radius: 10px;
`