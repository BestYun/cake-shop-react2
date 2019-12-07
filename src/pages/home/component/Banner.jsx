import React, { useState } from 'react'
import { Carousel } from 'antd-mobile';

//广告
export default function Banner() {

    const [imgs] = useState(
        [
            'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2506197831,1636712722&fm=26&gp=0.jpg',
            'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2506197831,1636712722&fm=26&gp=0.jpg',
            'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2506197831,1636712722&fm=26&gp=0.jpg',
            'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2506197831,1636712722&fm=26&gp=0.jpg',
        ]
    )

    return (
        <div data-flex='dir:left cross:center' >
            <Carousel
                autoplay={true}
                infinite
                dotStyle={{ backgroundColor: 'rgba(230,230,230,1)' }}
                dotActiveStyle={{ backgroundColor: '#f74b60' }}
            >
                {imgs.map((url, index) => (
                    <img
                        alt=''
                        key={index + 10}
                        src={url}
                        style={{ width: '100%', verticalAlign: 'top', height: '180px' }}
                    />

                ))}
            </Carousel>


        </div >
    )
}