import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import AddPost from './pages/AddPost/AddPost'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import Profile from './pages/Profile/Profile'
import Games from './pages/Games/Games'
import AllPosts from './pages/AllPosts/AllPosts'
import * as authService from './services/authService'
import * as profileService from './services/profileService'
import * as gameService from './services/gameService'
import GameDetails from './pages/GameDetails/GameDetails'

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const [game,setGame] = useState({})
  const navigate = useNavigate()

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  const [profiles, setProfiles] = useState([])

  useEffect(() => {
    const fetchProfiles = async () => {
      const profileData = await profileService.getAllProfiles()
      setProfiles(profileData)
    }
    fetchProfiles()
  }, [])

  const handleAddGame = async (newGameCollection) => {
    const newGame = await gameService.addGame(newGameCollection)
    setGame([...game,newGame])
  }
  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/allPosts"
          element={user ? <AllPosts /> : <Navigate to="/login" />}
        />
        <Route
          path="/addPost"
          element={user ? <AddPost /> : <Navigate to="/login" />}
        />
        <Route
          path="/games"
          element={<Games />}
        />
          <Route
          path="/games/:id"
          element={<GameDetails handleAddGame={handleAddGame} />}
        />
        <Route
          path="/profile"
          element={user ? <Profile user={user} profiles={profiles}/> : <Navigate to="/login" />}
        />
        <Route
          path="/changePassword"
          element={
            user ? (
              <ChangePassword handleSignupOrLogin={handleSignupOrLogin} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </>
  )
}

export default App
