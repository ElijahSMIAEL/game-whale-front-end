import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons' 
import { useState } from 'react'
import useMeasure from 'react-use-measure'
import { useSpring, animated } from 'react-spring'

const NavBar = ({ user, handleLogout }) => {

  const [showLess, setShowLess] = useState(true)
  const [ref, bounds] = useMeasure()

  function handleClick() {
    setShowLess(!showLess)
  }

  function handleMouseOn() {
    setShowLess(false)
  }
  function handleMouseOff() {
    setShowLess(true)
  }

  const navAnimatedStyle = useSpring({
    display: "flex",
    width: showLess ? 0 : bounds.width,
    overflow: "hidden"
  })

  const chevAnimatedStyle = useSpring({
    transform: showLess ? 'rotate(0deg)' : 'rotate(180deg)',
  })

  return (
    <>
      {user ?
        <nav className={styles.navContainer} onMouseEnter={handleMouseOn} onMouseLeave={handleMouseOff}>
          <div className={styles.linkContainer}>
            <animated.div style={navAnimatedStyle}>
              <div ref={ref}>
                <div className={styles.navContent}>
                  <Link to="" onClick={handleLogout}><div>Log Out</div></Link>
                <Link to="/changePassword"><div>Change Password</div></Link>
                <Link to="/allPosts"><div>All Posts</div></Link>
                <Link to="/addPost"><div>Add Post</div></Link>
                <Link to="/games"><div>Games</div></Link>
                <Link to="/profile"><div>Profile</div></Link>
                </div>
              </div>
            </animated.div>
          </div>
          <div onClick={handleClick} className={styles.navButton}>
            <animated.div style={chevAnimatedStyle}>
              <FontAwesomeIcon icon={faChevronCircleRight} style={{
                height: "45px",
                color: '#002c66',
              }}/>
            </animated.div>
            
          </div>
        </nav>
      :
        <nav className={styles.navContainer} onMouseEnter={handleMouseOn} onMouseLeave={handleMouseOff}>
          <div className={styles.linkContainer}>
            <animated.div style={navAnimatedStyle}>
              <div ref={ref}>
                <div className={styles.navContent}>
                  <Link to="/login"><div>Log In</div></Link>
                  <Link to="/signup"><div>Sign Up</div></Link>
                </div>
              </div>
            </animated.div>
          </div>
          <div onClick={handleClick} className={styles.navButton}>
            <animated.div style={chevAnimatedStyle}>
              <FontAwesomeIcon icon={faChevronCircleRight} style={{
                height: "45px",
                color: '#002c66',
              }}/>
            </animated.div>
          </div>
        </nav>
      }
    </>
  )
}

export default NavBar
