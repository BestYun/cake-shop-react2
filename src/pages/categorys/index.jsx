import React from 'react'
import './index.css'
import { Tabs, WhiteSpace, Badge } from 'antd-mobile';

const tabs = [
    { title: '蛋糕' },
    { title: '面包' },
    { title: '下午茶' },
    { title: '饮品' },
];




export default function CategoryPage() {

    console.log('---CategoryPage---')
    return (
        <div data-flex='dir:top' style={{ height: '100%' }}>
            <Tabs tabs={tabs}
                initialPage={0}
                onChange={(tab, index) => { console.log('onChange', index, tab); }}
                onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                tabBarUnderlineStyle={{
                    height: '6px',
                    backgroundColor: '#f74b60',
                    color: '#f74b60',
                    borderWidth: 0,
                    margin: '0px 32px',
                    width: '30px'
                }}
                tabBarActiveTextColor={
                    '#f74b60'
                }
            >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: '#fff' }}>
                    Content of first tab
                    </div>
            </Tabs>

        </div >
    )
}