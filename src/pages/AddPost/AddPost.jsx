import styles from './AddPost.module.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import GameSelect from '../../components/GameSelect/GameSelect'

const AddPost = (props) => {
  const profiles = props.profiles
  const author = profiles.find(profile => profile._id === props.user.profile)

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    playersNeeded: '',
    gameId: '',
    platform: '',
  })
  const navigate = useNavigate()

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      props.handleAddPost(formData)
    } catch (err) {
      console.log(err)
    }
  }

  const {title, description, playersNeeded, gameId, platform} = formData
  const isFormInvalid = () => {
    return !(title, description, playersNeeded, gameId, platform)
  }

  return (
    <div id="content">
      <form 
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <div>
          <input 
            type="text"
            id='title-input'
            name='title'
            value={formData.title}
            onChange={handleChange}
          />
          <input 
            type="text"
            id='description-input'
            name='description'
            value={formData.description}
            onChange={handleChange}
          />
          <input 
            type="number"
            id='playersNeeded-input'
            name='playersNeeded'
            value={formData.playersNeeded}
            onChange={handleChange}
          />
          <GameSelect handleChange={handleChange} author={author}/>
          <select
            type="text"
            id="platform-input"
            name="platform" 
            value={formData.platform}
            onChange={handleChange}
          >
            <option value="Steam">Steam</option>
            <option value="Playstation 4">Playstation 4</option>
            <option value="Playstation 5">Playstation 5</option>
            <option value="Xbox One">Xbox One</option>
            <option value="Xbox Series X">Xbox Series X</option>
          </select>
        </div>
      </form>
    </div>
  )
}

export default AddPost