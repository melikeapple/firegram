import React from 'react';
import Title from './comps/Title';
import UploadForms from './comps/UploadForms';
import ImageGrids from './comps/ImageGrids';
import Modal from './comps/Modal';
import { useState } from 'react';

function App() {
  const [selectedImg,setSelectedImg] = useState(null);

  return (
    <div className="App">
      <Title/>
      <UploadForms />
      <ImageGrids setSelectedImg={setSelectedImg}/>
      {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
    </div>
  );
}

export default App;
