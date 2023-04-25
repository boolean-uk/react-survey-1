import { useState } from "react";
import AnswersList from "./AnswersList";

const initialFormData = {
  color: '',
  spendTime: [],
  review: '',
  username: '',
  email: ''
}

function Main() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [inputData, setInputData] = useState(initialFormData)
  const [answers, setAnswers] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(inputData)
    setAnswers([...answers, inputData])
    setInputData({
      color: '',
      spendTime: '',
      review: '',
      username: '',
      email: ''
    })
  }

  const handleChange = (e) => {
    const {name, type, value, checked} = e.target
    if (type === "checkbox" && name === "spend-time") {
      let copySpendTime = [...inputData.spendTime]
      if (copySpendTime.includes(value) && !checked) {
        // deselect
        copySpendTime = copySpendTime.filter(item => item !== value)
      } else if (!copySpendTime.includes(value) && checked){
        // select
        copySpendTime.push(value)
      }
      setInputData({...inputData, spendTime: copySpendTime})
    } else {
      setInputData({...inputData, [name]: value})
    }
  }
  // const handleChange = (e) => {
  //   const {name, type, value} = e.target
  //   if 
  // }
// const inputForm = ({inputData, handleSubmit, handleChange}) => {
  return (
    <main className="main">
    <section className={`main__list ${open ? "open" : ""}`}>
      <h2>Answers list</h2>
      {/* answers should go here */}
      <AnswersList answersList = {answers} />

    </section>
    
    <section className="main__form">

    <form className="form" onSubmit={handleSubmit}>
      <h2>Tell us what you think about your rubber duck!</h2>
      <div className="form__group radio">
        <h3>How do you rate your rubber duck colour?</h3>
        {/**
        * ! Radio inputs go here 
        */}
         <ul>
          <li>
            <input 
            id="color-one" 
            type="radio" 
            name="color" 
            value="1" />
            <label htmlFor="color-one">1</label>
          </li>

          <li>
            <input 
            id="color-two" 
            type="radio" 
            name="color" 
            value="2" />
            <label htmlFor="color-two">2</label>
          </li>
           
          <li>
            <input 
            id="color-three" 
            type="radio" 
            name="color" 
            value="3" />
            <label htmlFor="color-three">3</label>
          </li>

          <li>
            <input 
            id="color-four" 
            type="radio" 
            name="color" 
            value="4" />
            <label htmlFor="color-four">4</label>
          </li>
        </ul>

       
       
      </div>

      <div className="form__group">
        <h3>How do you like to spend time with your rubber duck</h3>
        {/** 
        * ! {/* <!-- checkboxes go here --> 
        */}
        <ul>
            <li>
                <label> 
                    <input
                    name="spend-time"
                    type="checkbox"
                    value="swimming"
                    onChange={handleChange}
                    checked={inputData.spendTime.includes("swimming")}
                    />Swimming</label>
            </li>

            <li>
                <label>
                    <input 
                    name="spend-time" 
                    type="checkbox" 
                    value="bathing" 
                    onChange={handleChange}
                    checked={inputData.spendTime.includes("bathing")}/>Bathing</label>
            </li>

            <li>
                <label>
                    <input
                    name="spend-time"
                    type="checkbox"
                    value="chatting"
                    onChange={handleChange}
                    checked={inputData.spendTime.includes("chatting")}
                    />Chatting</label>
            </li>
            <li>
                <label>
                    <input 
                    name="spend-time" 
                    type="checkbox" 
                    value="noTime" 
                    onChange={handleChange}
                    checked={inputData.spendTime.includes("noTime")}/>I don't like to spend time with it</label>
            </li>
        </ul>

      </div>

      <label>What else have you got to say about your rubber duck?
        <textarea
          name="review"
          cols="30"
          rows="10"
          value={inputData.review}
          onChange={handleChange} ></textarea>
      </label>

      <label
        >Put your name here (if you feel like it):
        <input
          type="text"
          name="username"
          value={inputData.username} 
          onChange={handleChange}></input>
      </label>

      <label
        >Leave us your email pretty please??
        <input
          type="email"
          name="email"
          value={inputData.email}
          onChange={handleChange}></input>
      </label>
        
        <input 
        className="form__submit" 
        type="submit" 
        value="Submit Survey!" />

    </form>
    </section>
    </main>
  );
// }
  
}

export default Main;
