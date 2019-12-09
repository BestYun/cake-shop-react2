import React from 'react';
import CheckRadio from './CheckRadio'
export default function CartContent() {
    return (

        <div data-flex='dir:top ' style={{
            padding: '0px 12px',
            backgroundColor: 'white',
        }}>
            <div data-flex='dir:left cross:center' style={{ margin: '12px 0px', height: '60px' }}>
                <CheckRadio />
                <img style={{
                    width: '60px', height: '60px',
                    backgroundColor: 'rgb(248,248,248)',
                    margin: '0px 8px',
                    borderRadius: '8px'
                }} />

                <div data-flex='dir:top ' style={{
                    flex: 1,
                    justifyContent: 'space-around',
                    height: '100%'
                }}>
                    <p style={{
                        fontSize: '14px', fontFamily: 'PingFangSC-Semibold', lineHeight: '16px'
                    }}>巧克力蛋糕巧克力</p>
                    <div style={{ flex: 1 }}></div>

                    <div data-flex='dir:left' style={{ marginTop: '8px' }}>
                        <div data-flex='dir:left cross:center' style={{ flex: 1 }}>
                            <span style={{ color: '#f74b60', fontSize: '14px', fontStyle: 'bold' }}>￥128</span>
                            <span style={{ color: '#999', fontSize: '12px' }}>/磅</span>
                        </div>
                        <div data-flex='dir:left cross:center'>
                            <img style={{ width: "20px", height: '20px' }} src={require('../../../assets/images/minus.png')} />
                            <p style={{ margin: '0px 6px', fontSize: '14px', fontFamily: 'PingFangSC-Semibold' }}>10</p>
                            <img style={{ width: "20px", height: '20px' }} src={require('../../../assets/images/add.png')} />
                        </div>

                    </div>
                </div>
            </div>
            <div style={{ height: '1px', backgroundColor: 'rgb(248,248,248)' }}></div>
        </div>
    )
}