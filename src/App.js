import React, { useState } from 'react';
import './App.css';

import ModalContent from './scenes/ModalContent'
import { Modal, Button } from '../components'

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
