import styles from './Profile.module.css'
import ProfileList from '../../components/ProfileList/ProfileList'
import ProfileSettings from '../../components/ProfileSettings/ProfileSettings'
import { useReducer } from 'react'

const Profile = (props) => {
  return (
    <div id="content">
    <h1>{props.user.name}'s Profile Page</h1>
    <ProfileSettings user={props.user}/>
    <ProfileList profiles={props.profiles}/>
    </div>
  )
}

export default Profile