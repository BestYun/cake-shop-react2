import React from 'react'
import GoodsItem from './components/GoodsItem'

///分类里面的item
export default function ContentPage() {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', marginBottom: '20px' }}>
            {
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
                    return <GoodsItem />
                })
            }
        </div>
    )
}