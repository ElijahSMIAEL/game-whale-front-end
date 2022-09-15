import styles from './ProfileCard.module.css'
import ProfileDetails from '../../pages/ProfileDetails/ProfileDetails'

const ProfileCard = (props) => {
  return (
    <>
    <h1>ProfileCardComponent</h1>
    <p>{props.profile.name}</p>
    <ProfileDetails />
    </>
  )
}

export default ProfileCard