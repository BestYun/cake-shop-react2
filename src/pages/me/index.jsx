import React from 'react'
import './index.css'
export default function MePage() {
    return (
        <div data-flex='dir:top'>
            <div data-flex='dir:top  cross:center' style={{
                height: '200px',
                backgroundColor: '#f74b60',

            }}>
                <img style={{
                    backgroundColor: 'rgb(242,242,242)',
                    height: '80px', width: '80px', borderRadius: '40px',
                    marginTop: '30px'
                }} />
                <span style={{ color: 'white', fontSize: '18px', marginTop: '8px' }}>登录/注册</span>

            </div>

            <div style={{
                backgroundColor: 'white',
                zIndex: '1', marginTop: '-40px',
                marginLeft: '10px', marginRight: '10px',
                borderRadius: '10px',
                paddingBottom: '10px'
            }} data-flex='dir:top'>
                <span style={{ fontSize: '16px', color: '#333', margin: "14px" }}>我的订单</span>

                <div style={{ margin: '0px 10px', backgroundColor: 'rgb(242,242,242)', height: '1px' }}></div>

                <div data-flex='dir:left box:mean' style={{ marginTop: '11px' }}>
                    {
                        [
                            { title: '待付款', icon: 'wait_pay.png' },
                            { title: '待发货', icon: 'wait_send.png' },
                            { title: '待收货', icon: 'wait_revecive.png' },
                            { title: '全部', icon: 'all.png' },
                        ].map((item, index) => {
                            const iconImg = require('../../assets/images/' + item.icon)
                            return (
                                <div data-flex='dir:top main:center cross:center' onClick={() => {
                                    console.log('--------' + index)
                                }} style={{}}>

                                    <div data-flex="dir:left">
                                        <img src={iconImg} style={{ width: '40px', height: '40px' }} />

                                        {/* <span style={{
                                            backgroundColor: 'red',
                                            height: '20px', width: '20px', borderRadius: '20px',
                                            color: 'white', fontSize: '12px',
                                            marginTop: '-10px',
                                            marginLeft: '-10px', position: 'relative'

                                        }}>{index}</span> */}
                                    </div>

                                    <span style={{ color: '#666', marginTop: '8px', fontSize: '12px' }}>{item.title}</span>


                                </div>
                            )
                        })
                    }

                </div>

            </div>

            <div style={{ backgroundColor: 'white', marginTop: '20px' }}>
                <div onClick={() => {
                    console.log('item')
                }}>
                    <div data-flex='dir:left cross:center' style={{ padding: "12px" }}>
                        <img src={require('../../assets/images/coupon.png')} style={{ width: '20px', height: '20px', marginRight: '10px' }} />
                        <span style={{ flex: 1 }}>我的优惠券</span>
                        <img style={{ width: '20px', height: '20px' }} src={require('../../assets/images/arrow_right.png')} />

                    </div>
                    <div style={{ height: '1px', backgroundColor: 'rgb(242,242,242)' }}></div>
                </div>

                <div onClick={() => {
                    console.log('item')
                }}>
                    <div data-flex='dir:left cross:center' style={{ padding: "12px" }}>
                        <img src={require('../../assets/images/address_me.png')} style={{ width: '20px', height: '20px', marginRight: '10px' }} />
                        <span style={{ flex: 1 }}>我的地址</span>
                        <img style={{ width: '20px', height: '20px' }} src={require('../../assets/images/arrow_right.png')} />

                    </div>
                    <div style={{ height: '1px', backgroundColor: 'rgb(242,242,242)' }}></div>
                </div>
                <div onClick={() => {
                    console.log('item')
                }}>
                    <div data-flex='dir:left cross:center' style={{ padding: "12px" }}>
                        <img src={require('../../assets/images/about_me.png')} style={{ width: '20px', height: '20px', marginRight: '10px' }} />
                        <span style={{ flex: 1 }}>关于我们</span>
                        <img style={{ width: '20px', height: '20px' }} src={require('../../assets/images/arrow_right.png')} />

                    </div>
                    <div style={{ height: '1px', backgroundColor: 'rgb(242,242,242)' }}></div>
                </div>
            </div>

            <div data-flex='dir:top main:center cross:center' style={{
                padding: "12px", marginTop: '40px', marginLeft: "20px", marginRight: '20px',
                color: 'white',
                border: '1px solid #f74b60',
                borderRadius: '40px'

            }}>
                <span style={{ color: ' #f74b60' }}>退出登陆</span>
            </div>

        </div >
    )
}