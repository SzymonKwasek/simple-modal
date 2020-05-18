import React, { useState } from 'react';
import './App.css';

import ModalContent from './components/ModalContent'
import Modal from './components/Modal'
import Button from './components/Button'

function App() {

  const [modalVisible, setModalVisible] = useState(true)

  return (
    <div className="App">
      <Modal visible={modalVisible} onClose={() => setModalVisible(false)}>
        <ModalContent/>
      </Modal>
      <Button 
        onClick={() => setModalVisible(true)}
        value={'Otwórz Modal'}
        type={'button'}/>
    </div>
  );
}



export default App;
