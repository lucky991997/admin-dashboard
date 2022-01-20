import React from 'react'
import ProgressBar from '../progressbar/ProgressBar'
import './revenue-list.scss'


const RevenueList = ({datas}) => {
    const data = datas.revenueByChannel

    return (
        <ul className="revenue-list">
           {
               data.map((item,index) => (
                   <li className='revenue-list__item' key={`revenue-${index}`}>
                       <div className="revenue-list__item__title ">
                          {item.title}
                           <span className={
                               `${item.value < 50 ? 'txt-danger title' : 'txt-success title'}`
                           }>{item.value}%</span>
                       </div>
                       <div>
                           <ProgressBar value={item.value}/>
                       </div>
                   </li>
               ))
           }
        </ul>
    )
}

export default RevenueList
