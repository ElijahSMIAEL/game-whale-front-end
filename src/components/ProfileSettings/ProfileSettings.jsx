import styles from './ProfileSettings.module.css'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import * as profileService from '../../services/profileService'

const ProfileSettings = (props) => {
  const user= props.user
  const xbox = user.profile.xboxTag
  const steam = user.profile.steamTag
  const ps = user.profile.playstationTag
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: user.name,
    xboxTag: xbox,
    steamTag: steam,
    playstationTag: ps,
  })
  
  const [photoData, setPhotoData] = useState({})
  
  const profileId = user.profile

  const handleProfileChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handlePhotoChange = (e) => {
    setPhotoData({ photo: e.target.files[0] })
  }

  const handleAddProfileData = async (formData, photo, profileId) => {
    const profileChange = await profileService.changeProfile(formData, profileId)
    if (photo) {
      props.profile.photo = await ProfilePhotoHelper(photo, profileChange._id)
    }
    navigate('/')
  }

  const ProfilePhotoHelper = async (photo, id) => {
    const photoData = new FormData()
    photoData.append('photo', photo)
    return await profileService.addPhoto(photoData, id)
  }

  const { name, xboxTag, steamTag, playstationTag } = formData


  return (
    <form
      autoComplete='off'
      onSubmit={handleAddProfileData}
    >
      <div>
        <label className={styles.nameLabel} htmlFor="name">Preferred Name
        </label>
        <input 
          type="text"
          className={styles.nameInput}
          autocomplete="off"
          name='name'
          value={name}
          onChange={handleProfileChange}
        />
      </div>
      <div>
        <label className={styles.xboxLabel} htmlFor="name">Xbox Username
        </label>
        <input 
          type="text"
          className={styles.xboxInput}
          autocomplete="off"
          name='xboxTag'
          value={xboxTag}
          onChange={handleProfileChange}
        />
      </div>
      <div>
        <label className={styles.steamLabel} htmlFor="name">Steam Username
        </label>
        <input 
          type="text"
          className={styles.steamInput}
          autocomplete="off"
          name='steamTag'
          value={steamTag}
          onChange={handleProfileChange}
        />
      </div>
      <div>
        <label className={styles.psLabel} htmlFor="name">Playstation Username
        </label>
        <input 
          type="text"
          className={styles.psInput}
          autocomplete="off"
          name='playstationTag'
          value={playstationTag}
          onChange={handleProfileChange}
        />
      </div>
    </form>
  )
}

export default ProfileSettings