import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';

// const variants = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];

export default function AlertMsg(props) {
  const capitalize =(word)=>{
    const lower =word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }

  return (
    props.alert && <Alert variant={props.alert.type} dismissible show={props.showAlertOnModeChange} onClose={() => props.setShowAlertOnModeChange(false)}>
      {props.alert.msg}
    </Alert>
  );
}
