import React, { useState } from 'react';

export default function CheckRadio({ check = false, size = '20px', onChange = () => (check) }) {
    const [selected, setSelected] = useState(check)

    return (
        <div onClick={
            () => {
                onChange(!selected)
                setSelected(!selected)
            }
        }>
            <img style={{
                width: size,
                height: size,
            }} src={require('../../../assets/images/' + (selected ? 'radio_selected.png' : 'radio.png'))} />
        </div>
    )
}