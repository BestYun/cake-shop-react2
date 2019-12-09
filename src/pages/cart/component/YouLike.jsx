import React from 'react';
import YouLikeGoodsItem from './YouLikeGoodsItem'


// 猜你喜欢
export default function YouLike() {
    return (
        <div style={{
            backgroundColor: 'white',
            display: 'flex',
            flexDirection: 'column',
        }}>
            <div data-flex='dir:left main:center' style={{ margin: '12px 0px' }}>
                <span style={{ color: '#999', fontSize: '15px' }}>猜你喜欢~</span>
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
            }}>
                {
                    [1, 2, 3, 4, 5].map((item => {
                        return <YouLikeGoodsItem />
                    }))
                }
            </div>


        </div>
    )
}