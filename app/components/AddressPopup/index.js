import React, {useState} from "react";
import Popup from 'reactjs-popup';

import './index.scss';

function AddressPopup() {
  const [seen, setSeen] = useState(true);

  const togglePop = () => {
    setSeen(false)
  };

  return (
    <Popup 
      open={seen}
      closeOnDocumentClick 
      onClose={togglePop}
      position="right center"
    >
      <div className="modal">
        <button className="close" type="button" onClick={togglePop}> &times; </button>
      </div>
      <div className="try">Popup content here !!</div>
    </Popup>
  );
}

export default (AddressPopup);
