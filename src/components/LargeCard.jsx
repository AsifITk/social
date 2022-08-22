import React from 'react'

function LargeCard({data}) {
  return (
    <div className='large' style={{borderTop:"1px solid red"}}>
        <div className="name"><span><img src={data[4]} alt="" srcset="" /></span> {data[0]}</div>



        <div className="count">{data[1]}</div>
        <div className="type">{data[2]}</div>
        <div className="today">{data[3]}</div>



    </div>
  )
}

export default LargeCard