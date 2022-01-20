import React from 'react'
import './userInfo.scss'


const userInfo = ({user}) => {

    return (
        <div className="user-info">
            <div className="user-info__img">
                <img src='../../../images/avt.jpg' alt={user.name}/>
            </div>
            {/* <div className="user-info__img">
                <img src={user.img} alt={user.name}/>
            </div> */}
            <div className="user-info__name">
                <span>{user.name}</span>
            </div>
        </div>
    )
}

export default userInfo
