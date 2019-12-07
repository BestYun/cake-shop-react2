import React, { useState } from 'react'

//分类
export default function CategoryItem() {

    const [items] = useState(
        [
            { imgName: 'cake.png', id: '0', title: '蛋糕', bg: 'rgb(227,253,243)' },
            { imgName: 'bread.png', id: '1', title: '面包', bg: 'rgb(250,242,248)' },
            { imgName: 'cake.png', id: '2', title: '下午茶', bg: 'rgb(239,234,241)' },
            { imgName: 'cake.png', id: '3', title: '饮品', bg: 'rgb(231,247,255)' },
        ]
    )

    return (
        <div data-flex='dir:left cross:center main:justify' style={{
            margin: '15px 10px',
            padding: "10px 20px",
            backgroundColor: 'white',
            borderRadius: '8px',
            border: '1px solid rgb(230,230,230)'
        }}>
            {
                items.map((item, index) => {
                    const imgData = require('../../../assets/images/' + item.imgName)
                    return (<div data-flex='dir:top main:center cross:center' key={item.id}>
                        <img style={{
                            height: '40px', width: '40px', borderRadius: '20px',
                            backgroundColor: item.bg, padding: '8px'
                        }}
                            src={imgData}
                        />
                        <span style={{ fontSize: '12px', marginTop: '6px', color: '#333333' }}>{item.title}</span>
                    </div>)
                })
            }

        </div >
    )
}