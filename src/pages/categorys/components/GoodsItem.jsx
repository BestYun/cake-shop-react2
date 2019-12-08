import React from 'react'
import './index.scss'

///分类里面的item
export default function GoodsItem() {
    return (
        <div data-flex='dir:top' className='item'>
            <img className='img' />
            <div data-flex='dir:top' style={{
                flex: 1,
            }}>
                <p style={{
                    fontSize: '14px', fontFamily: 'PingFangSC-Semibold', lineHeight: '16px'
                }}>巧克力蛋糕巧克力蛋糕巧克力蛋糕</p>
                <p style={{
                    fontSize: '12px', color: '#999',
                    marginTop: '6px',
                    maxLines: '1',
                    lineHeight: '16px',
                    flexShrink: 1,
                    maxHeight: '16px',
                    overflow: 'hidden',
                    marginBottom: '6px'

                }}>描述描述描述描述描述描述描述描述描述描述描述描述</p>
                <div style={{ flex: 1 }} />
                <div data-flex='dir:left' >
                    {/* 只有一种规格的时候，显示加减 */}
                    <div data-flex='dir:left cross:center' style={{ flex: 1 }}>
                        <span style={{ color: '#f74b60', fontSize: '14px' }}>￥128</span>
                        <span style={{ color: '#999', fontSize: '12px' }}>/磅</span>
                    </div>
                    <div data-flex='dir:left cross:center'>
                        <img style={{ width: "20px", height: '20px' }} src={require('../../../assets/images/minus.png')} />
                        <p style={{ margin: '0px 6px', fontSize: '14px', fontFamily: 'PingFangSC-Semibold' }}>10</p>
                        <img style={{ width: "20px", height: '20px' }} src={require('../../../assets/images/add.png')} />
                    </div>
                    {/* <div data-flex='dir:left cross:center' style={{ height: '20px', backgroundColor: '#f74b60', borderRadius: '10px' }}>
                        <p style={{ fontSize: '12px', color: 'white', padding: '4px 8px' }}>选规格</p>
                    </div> */}
                </div>
            </div>

        </div>
    )
}