import React from 'react';

export const CheckBox = props => {
    return (

        <input key={props.id} onChange={props.handleCheckedElement} type="checkbox" checked={props.isChecked} value={props.value} />

    )
};

export default CheckBox;
