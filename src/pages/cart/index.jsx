import React from 'react'
import './index.scss'
import CartEmpty from './component/CartEmpty'
import YouLike from './component/YouLike'
import ClosAccount from './component/ClosAccount'
import CartContent from './component/CartContent'

export default function CartPage() {
    return (
        <div data-flex='dir:top' style={{ height: '100%' }}>
            <div data-flex='dir:lef main:center cross:center' style={{
                height: '49px', backgroundColor: 'white',
                marginBottom: '8px',
                flexShrink: 0,
            }}>
                <span style={{ fontSize: '18px' }}>购物车</span>
            </div>
            <div style={{ flex: 1, overflow: 'scroll', backgroundColor: 'clear', paddingBottom: '8px' }}>
                {/* <CartEmpty /> */}
                {
                    [1, 2, 3, 4].map(item => <CartContent />)
                }

                <div style={{ margin: '10px 0px' }}>
                    <YouLike />
                </div>

            </div>

            <ClosAccount />
        </div>
    )
}