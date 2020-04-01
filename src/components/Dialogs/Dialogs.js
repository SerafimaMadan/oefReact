import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
let path = "/dialogs/"+props.id;
    return  <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name} </NavLink>
    </div>;
};

const Message = (props) => {

    return  <div className={s.message}>{props.message}</div>
};

const Dialogs = (props) => {
    return (
  <div className={s.dialogs}>
<div className={s.dialogsItems}>
    <DialogItem name="Olga" id="1"/>
    <DialogItem name="Andrey" id="2"/>
    <DialogItem name="Boris" id="3"/>
    <DialogItem name="Katy" id="4"/>
    <DialogItem name="Fedor" id="5"/>

</div>
    <div className={s.messages}>
    <Message message="Hey, I am good"/>
        <Message message="Hey, I am good"/>
        <Message message="Hey, I am good"/>
        <Message message="Hey, I am good"/>
        <Message message="Hey, I am good"/>
    </div>
  </div>
    );
  };
  export default Dialogs;