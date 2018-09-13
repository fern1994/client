import React, { Component } from 'react'

class UserProfile extends Component {
  render () {
    return (
      <div>
        <div className='showInfoHead'>
          <div className='showInfoHead-title'>
            user profile
            </div>
          <div className='showInfoHead-contentRight' />
        </div>
        <div className='showInfoContent'>
          <div className='userProfileContent'>
            <div className='profileImage'>
              <div className='profileImage-content' >
                <img src='' alt='profile' />
              </div>
            </div>
            <div className='profileInfo'>
              <div className='dt-viewInfo --oneBlock'>
                <div className='dt-viewInfo-block'>
                  <div className='dt-viewInfo-title ico-accountBox'>full name</div>
                  <div className='dt-viewInfo-text'>Name</div>
                </div>
                <div className='dt-viewInfo-block'>
                  <div className='dt-viewInfo-title ico-user'>username</div>
                  <div className='dt-viewInfo-text'>Username</div>
                </div>
                <div className='dt-viewInfo-block'>
                  <div className='dt-viewInfo-title ico-email'>e-mail</div>
                  <div className='dt-viewInfo-text'>Email</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default UserProfile
