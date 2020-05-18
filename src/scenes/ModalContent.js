import React, { useState } from 'react';
import './ModalContent.css';

import { Input, Button } from '../components'

const ModalContent = () => {

    const [state , setState] = useState({
        first: '',
        second: '',
        third: '',
        forth: ''
    })

    const [formSubmitted, setFormSubmitted] = useState(false)
  
    const handleChange = e => {
      const {name , value} = e.target
      setState( prevState => ({
          ...prevState,
          [name] : value.replace(/[^0-9]/g,'')
      }))
    }
  
    const formSubmit = () => {
      setFormSubmitted(true)
    }
  
    const validateForm = () => {
      const emptyExist = Object.values(state).filter(item => item.length === 0)
      return emptyExist.length !== 0
    }
  
    return (
      <div className={'modal-content'} onSubmit={formSubmit}>
            <h4 className={'modal-title'}>
                Podaj kod PIN
            </h4>
            <p className={'modal-description'}>
                Na podany numer telefonu wysłaliśmy SMS z kodem PIN
            </p>
            <div className={'buttons-wrapper'}>
                <Input error={validateForm() && formSubmitted} name={'first'} value={state.first} onChange={handleChange} />
                <Input error={validateForm() && formSubmitted} name={'second'} value={state.second} onChange={handleChange} />
                <Input error={validateForm() && formSubmitted} name={'third'} value={state.third} onChange={handleChange} />
                <Input error={validateForm() && formSubmitted} name={'forth'} value={state.forth} onChange={handleChange} />
            </div>
            <p className={'modal-error'}>
                {
                validateForm() && formSubmitted &&
                    'Kod pin za krótki !'
                }
            </p>
            <div>
                <Button 
                    disabled={validateForm()}
                    onClick={formSubmit}
                    value={'Potwierdź'}
                    type={'submit'}/>
            </div>
            <div className={'modal-footer'}>
                <p className={'footer-normal'}>Nie otrzymałeś kodu?</p>
                <p className={'footer-color'}>Wyślij ponownie</p>
            </div>
      </div>
    )
}

export default ModalContent