import React from 'react';
import Popup from 'reactjs-popup';
import '../styles/App.css';
import Card from './Card';

const TipsCard = () => (
  <div className="wrapper" >
    <Popup
      trigger={<button
        style={{ bottom: "35px" }}
        className="btn-floating btn-large waves-effect waves-light pink right">
        <i className="material-icons">add</i>
      </button>}
      position="bottom center"
      on="click"
    >
      <Card />
    </Popup>
  </div >
);

export default TipsCard;