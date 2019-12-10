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
                            { title: '待付款', icon: '' },
                            { title: '待发货', icon: '' },
                            { title: '待收货', icon: '' },
                            { title: '全部', icon: '' },
                        ].map((item, index) => {
                            return (
                                <div data-flex='dir:top main:center cross:center' onClick={() => {
                                    console.log('--------' + index)
                                }} >
                                    <image style={{ width: '40px', height: '40px', backgroundColor: 'red' }} />
                                    <span style={{ color: '#666', marginTop: '8px', fontSize: '12px' }}>{item.title}</span>
                                </div>
                            )
                        })
                    }

                </div>

            </div>

            <div style={{ backgroundColor: 'white', marginTop: '20px' }}>
                <p>我的优惠券</p>
                <p>我的地址</p>
                <p>关于我们</p>
                <p>退出登陆</p>
            </div>


        </div>
    )
}