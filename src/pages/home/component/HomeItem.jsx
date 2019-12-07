import React from 'react'
import GoodsItem from './GoodsItem'


export default function HomeItem({ data }) {
    return (
        <div data-flex='dir:top' style={{ backgroundColor: 'white', padding: '16px 10px', marginBottom: '10px' }}>
            <div data-flex='dir:left'>
                <div style={{ width: '4px', backgroundColor: "#f74b60", marginRight: '6px' }}></div>
                <p style={{
                    fontSize: '18px', fontFamily: 'PingFangSC-Semibold'
                }}>新品推荐</p>
            </div>
            {
                [1, 2, 3, 4, 5].map(item => <GoodsItem />)
            }

        </div>
    )
}