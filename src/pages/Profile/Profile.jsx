import styles from './Profile.module.css'
import ProfileList from '../../components/ProfileList/ProfileList'
import ProfileSettings from '../../components/ProfileSettings/ProfileSettings'

const Profile = (props) => {
  return (
    <div>
    <h1>ProfileComponent</h1>
    <ProfileSettings />
    <ProfileList profiles={props.profiles}/>
    </div>
  )
}

export default Profile