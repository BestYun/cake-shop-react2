import React from 'react';
import CheckRadio from './CheckRadio'

// 结算
export default function CloseAccount() {
    return (
        <div data-flex='dir:left cross:center' style={{
            height: '50px',
            marginTop: '1px',
            backgroundColor: 'white',
            flexShrink: 0,
        }}>
            <div data-flex='dir:left cross:center' style={{ flex: 1, paddingLeft: '20px', paddingRight: '10px' }}>
                <CheckRadio check={true} onChange={
                    (checked) => {
                        console.log(checked)
                    }
                } />

                <span style={{ fontSize: '14px', marginLeft: '10px' }}>全选 (已选中3件商品)</span>
                <div style={{ flex: 1 }}></div>
                <span style={{ fontSize: '18px', color: 'rgb(242,49,79)' }}>￥128</span>
            </div>
            <div data-flex='dir:top main:center' style={{
                color: 'white', backgroundColor: 'rgb(242,49,79)', width: '80px',
                textAlign: 'center', height: '100%'
            }}><span>下单</span></div>

        </div>
    )
}