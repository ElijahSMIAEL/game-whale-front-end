import styles from './ProfileList.module.css'
import ProfileCard from '../ProfileCard/ProfileCard'
import { useEffect, useState } from 'react'
import * as profileService from '../../services/profileService'

const ProfileList = props => {
  const [profiles, setProfiles] = useState([])

  useEffect(() => {
    const fetchProfiles = async () => {
      const profileData = await profileService.getAllProfiles()
      setProfiles(profileData)
    }
    fetchProfiles()
  }, [])

  return (
    <>
    <h1>ProfileListComponent</h1>
      {profiles.length ? 
        <>
          {profiles.map(profile =>
            <ProfileCard 
              key={profile._id} 
              profile={profile}
            />
          )}
        </>
      :
        <p>No profiles yet</p>
      }
    </>
  )
}

export default ProfileList