import React, { Component } from 'react'
import { Query } from "react-apollo"

import { ME_QUERY } from '../../graphql/query'

class UserProfile extends Component {
  render() {
    return (
      <Query query={ME_QUERY}>
        {
          ({ loading, error, data }) => {
            console.log("loading", loading)
            console.log("error", error)
            console.log("data", data)
            if (loading) return <div>Fetching</div>
            if (error) return <div>Error</div>
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
                          <div className='dt-viewInfo-text'>{data.me.name}</div>
                        </div>
                        {/* <div className='dt-viewInfo-block'>
                          <div className='dt-viewInfo-title ico-user'>username</div>
                          <div className='dt-viewInfo-text'>Username</div>
                        </div> */}
                        <div className='dt-viewInfo-block'>
                          <div className='dt-viewInfo-title ico-email'>e-mail</div>
                          <div className='dt-viewInfo-text'>{data.me.email}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          }
        }
      </Query>
    )
  }
}


export default UserProfile
