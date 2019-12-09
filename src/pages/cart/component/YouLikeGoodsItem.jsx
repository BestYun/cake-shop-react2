
import React from 'react';

import './like_goods_item.scss'

// 猜你喜欢里面的商品项
export default function YouLikeGoodsItem() {
    return (
        <div data-flex='dir:top' className='lg-item'>
            <img className='img' />
            <div data-flex='dir:top' style={{
                flex: 1, padding: '8px'
            }}>
                <p style={{
                    fontSize: '14px', fontFamily: 'PingFangSC-Semibold', lineHeight: '16px'
                }}>巧克力蛋糕巧克力</p>
                <div data-flex='dir:left' style={{ marginTop: '8px' }}>
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

        </div>)
}