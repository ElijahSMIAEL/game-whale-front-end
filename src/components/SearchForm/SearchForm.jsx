import { useState } from "react";

const SearchForm = (props) => {
  const [formData, setFormData] = useState({
    query: '',
  })

  function onChange(evt) {
    handleChange(evt);
    handleSubmit(evt);
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
            name="query" 
            type="text" 
            autoComplete="off"
            value={formData.query}
            onChange={onChange}
            />
          <button type="submit">Search</button>
        </form>
      </div>
    </>
  );
}
 
export default SearchForm;