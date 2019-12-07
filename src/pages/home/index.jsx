import React, { useState } from 'react'
import './index.css'
import CitySearch from './component/CitySearch'
import Banner from './component/Banner'
import CategoryItem from './component/CategoryItem'
import HomeItem from './component/HomeItem'

{/* <p>地址与搜索</p>
<p>广告</p>
<p>分类</p>
<p>折扣</p>
<p>新品推荐</p>
<p>热销</p> */}
export default function HomePage() {
    const [cityName, setCityName] = useState('广州')


    return (
        <div data-flex='dir:top' className='app'>
            <CitySearch cityName={cityName} />
            <Banner />
            <CategoryItem />
            {
                [1, 2, 3].map((item) => {
                    return <HomeItem />
                })
            }

        </div >
    )
}