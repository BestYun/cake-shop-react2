import React from 'react'
import './city_search.css'

export default function CitySearch({ cityName = '广州' }) {
    return (
        <div data-flex='dir:left cross:center' className='city_search'>
            <img className='img' src={require('../../../assets/images/location.png')} />
            <span className='name'>{cityName}</span>
            <div className='search' data-flex='dir:left cross:center' >
                <img className='img2' src={require('../../../assets/images/search.png')} />
                <span className='name2'>卡通风格蛋糕</span>
            </div>
        </div>
    )
}