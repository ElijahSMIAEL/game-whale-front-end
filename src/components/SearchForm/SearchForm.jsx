import { useState } from "react";
import { useSpring, animated } from "react-spring";
import useMeasure from "react-use-measure";
import styles from './SearchForm.module.css'

const SearchForm = (props) => {
  const [formData, setFormData] = useState({
    query: '',
  })
  const [ref, { width }] = useMeasure()

  const searchBar = !props.isBlurred

  const searchStyle = useSpring({ 
    width: searchBar ? (width + 80) : 0,
    overflow: "hidden",
  })

  function onChange(evt) {
    handleChange(evt);
    // handleSubmit(evt);
  }

  const handleChange = evt => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }
  const handleSubmit = evt => {
    evt.preventDefault()
    props.handleGameSearch(formData)
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <animated.div style={searchStyle} className={styles.animatedDiv}>
          <input
            ref={ref}  
            className={styles.gameSearch}
            name="query" 
            type="text" 
            autoComplete="off"
            value={formData.query}
            placeholder="Search for a game..."
            onChange={onChange}
            />
          </animated.div>
        </form>
      </div>
    </>
  );
}
 
export default SearchForm;