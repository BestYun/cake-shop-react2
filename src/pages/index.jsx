import React, { useState } from 'react'
import { TabBar } from 'antd-mobile';

import HomePage from './home/index'
import CategoryPage from './categorys/index'
import CartPage from './cart/index'
import MePage from './me/index'


const renderImage = (text) => {
    return <img style={{
        width: '20px',
        height: '20px',
        marginBottom: '2px',
        marginTop: '2px'
    }} src={require('../assets/images/tabbar/' + text)} />
}


export default function IndexPage() {
    const [tabIndex, setTabIndex] = useState(0)

    return (

        <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
            <TabBar
                unselectedTintColor="#949494"
                tintColor="#f74b60"
                barTintColor="white"
                tabBarPosition="bottom"
                prerenderingSiblingsNumber={0}
            >
                <TabBar.Item
                    title="首页"
                    key="首页"
                    icon={renderImage('home.png')}
                    selectedIcon={renderImage('home_selected.png')
                    }
                    selected={tabIndex === 0}
                    onPress={() => {
                        setTabIndex(0)
                    }}
                    data-seed="logId"
                >
                    <HomePage />
                </TabBar.Item>
                <TabBar.Item
                    icon={
                        renderImage('categroy.png')
                    }
                    selectedIcon={
                        renderImage('categroy_selected.png')
                    }
                    title="分类"
                    key="分类"
                    selected={tabIndex === 1}
                    onPress={() => {
                        setTabIndex(1)
                    }}
                >
                    <CategoryPage />
                </TabBar.Item>
                <TabBar.Item
                    icon={
                        renderImage('cart.png')
                    }
                    selectedIcon={
                        renderImage('cart_selected.png')
                    }
                    title="购物车"
                    key="购物车"
                    badge={100}
                    selected={tabIndex === 2}
                    onPress={() => {
                        setTabIndex(2)
                    }}
                >
                    <CartPage />
                </TabBar.Item>
                <TabBar.Item
                    icon={renderImage('me.png')}
                    selectedIcon={renderImage('me_selected.png')}
                    title="我的"
                    key="我的"
                    selected={tabIndex === 3}
                    onPress={() => {
                        setTabIndex(3)
                    }}
                >
                    <MePage />
                </TabBar.Item>
            </TabBar>
        </div >
    )
}