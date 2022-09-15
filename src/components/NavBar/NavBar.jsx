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

  let contentAnimatedStyle = useSpring({
    display: "flex",
    width: showLess ? 0 : bounds.width,
    overflow: "hidden"
  })

  return (
    <>
      {user ?
        <nav className={styles.navContainer} onMouseEnter={handleMouseOn} onMouseLeave={handleMouseOff}>
          <div className={styles.linkContainer}>
            <animated.div style={contentAnimatedStyle}>
              <div ref={ref}>
                <div className={styles.navContent}>
                  <Link to="" onClick={handleLogout}><div>Log Out</div></Link>
                <Link to="/changePassword"><div>Change Password</div></Link>
                <Link to="/allPosts"><div>All Posts</div></Link>
                <Link to="/games"><div>Games</div></Link>
                <Link to="/profile"><div>Profile</div></Link>
                </div>
              </div>
            </animated.div>
          </div>
          <div onClick={handleClick} className={styles.navButton}>
            <FontAwesomeIcon icon={faChevronCircleRight} style={{'transform': showLess ? 'rotate(0deg)' : 'rotate(180deg)',
            height: "40px",
            color: "#1d3557",
            }}/>
          </div>
        </nav>
      :
        <nav className={styles.navContainer} onMouseEnter={handleMouseOn} onMouseLeave={handleMouseOff}>
          <div className={styles.linkContainer}>
            <animated.div style={contentAnimatedStyle}>
              <div ref={ref}>
                <div className={styles.navContent}>
                  <Link to="/login"><div>Log In</div></Link>
                  <Link to="/signup"><div>Sign Up</div></Link>
                </div>
              </div>
            </animated.div>
          </div>
          <div onClick={handleClick} className={styles.navButton}>
            <FontAwesomeIcon icon={faChevronCircleRight} style={{'transform': showLess ? 'rotate(0deg)' : 'rotate(180deg)',
            height: "30px"}}/>
          </div>
        </nav>
      }
    </>
  )
}

export default NavBar
