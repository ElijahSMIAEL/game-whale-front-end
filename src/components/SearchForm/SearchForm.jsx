import { useState } from "react";
import styles from './SearchForm.module.css'

const SearchForm = (props) => {
  const [formData, setFormData] = useState({
    query: '',
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
          <input 
            className={styles.gameSearch}
            name="query" 
            type="text" 
            autoComplete="off"
            value={formData.query}
            placeholder="Search for a game..."
            onChange={onChange}
            />
        </form>
      </div>
    </>
  );
}
 
export default SearchForm;