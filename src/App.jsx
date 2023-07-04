import { useState } from 'react';
import './App.css'

function App() {

  const [formData, setFormData] = useState({
    firstTextInput: ' ',
    email: ' ',
    occupation: ' ',
    gender: ' ',
    languages: [],
  });

  const onChangeHandler = (e) => {

    e.preventDefault()

    if (e.target.name === "languages") {

      let copy = {...formData}
      
      if (e.target.checked) {
        copy.languages.push(e.target.value)
      } else {
        copy.languages = copy.languages.filter(lang => lang !== e.target.value)
      }
      setFormData(copy)
    } else {

  setFormData(() => ({      
    ...formData,
    [e.target.name]: e.target.value,
  }))
    }
   
  

  }

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(formData);
  }

  return (
    <>
      <div>
        <form>
          <h1>{formData.firstTextInput}</h1>
          <input
            type="text"
            style={{ width: '30rem', padding: '0.8rem' }}
            onChange={onChangeHandler}
            name="firstTextInput"
          />

          <h3>other complex form entities</h3>

          <div>
            <label htmlFor="email"> email </label>
            <input type="email" name="email" onChange={onChangeHandler} />
          </div>

          <div>
            <label htmlFor="occupation">occupation type</label>
            <select name="occupation" onChange={onChangeHandler}>
              <option value="student">Student</option>
              <option value="engineer">Engineer</option>
            </select>
          </div>

          <div>
            <input
              type="radio"
              name="gender"
              value="male"
              onChange={onChangeHandler}
            />
            <label htmlFor="gender">Male</label>

            <input
              type="radio"
              name="gender"
              value="female"
              onChange={onChangeHandler}
            />
            <label htmlFor="gender">Female</label>
          </div>

          <div>
            <input
              type="checkbox"
              name="languages"
              value="css"
              onChange={onChangeHandler}
            />
            <label htmlFor="languages">CSS</label>

            <input
              type="checkbox"
              name="languages"
              value="HTML"
              onChange={onChangeHandler}
            />
            <label htmlFor="languages">HTML</label>
          </div>

          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default App
