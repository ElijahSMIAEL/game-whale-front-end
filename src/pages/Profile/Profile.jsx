import styles from './Profile.module.css'
import ProfileList from '../../components/ProfileList/ProfileList'
import ProfileSettings from '../../components/ProfileSettings/ProfileSettings'

const Profile = (props) => {
  return (
    <>
    <h1>ProfileComponent</h1>
    <ProfileSettings />
    <ProfileList profiles={props.profiles}/>
    </>
  )
}

export default Profile