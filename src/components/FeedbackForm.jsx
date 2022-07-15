import React from 'react'
import Card from './Shared/Card'
import {useState,useContext,useEffect} from 'react'
import Button from './Shared/Button'
import RatingSelect from './RatingSelect'
import FeedbackContext from './FeedbackContext'

function FeedbackForm() {
const [text, setText] = useState('')
const [rating, setRating] = useState(10)
const [btnDisabled, setBtnDisabled] = useState(true)
const [message, setMessage] = useState('')

const {addFeedback,feedbackEdit}= useContext(FeedbackContext)

useEffect(()=>{
  if(feedbackEdit.edit===true){
    setBtnDisabled(false);
    setText(feedbackEdit.item.text);
    setRating(feedbackEdit.item.rating);
  }
 
},[feedbackEdit])


const handleTextChange=(e)=>{

  if(text === ""){
    setBtnDisabled(true)
    setMessage(null)
  }
  else if(text!== "" && text.trim('').length<10){
    setBtnDisabled(true)
    setMessage('Enter atleast 10 characters')
  }
  else{
    setBtnDisabled(false)
    setMessage(null)
  }
   
    setText(e.target.value)

  
}

const handleSubmit=(e)=>{
    e.preventDefault()
    if(text.trim().length>10){
      const newFeedback={
        text,
        rating
      }
      
      addFeedback(newFeedback)
      setText ('')
      
    }
}

  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h2>How would you rate our service?</h2>
            <RatingSelect  select={(rating)=> setRating(rating)}/>
            
            <div className="input-group">
                <input onChange={handleTextChange} type="text" placeholder='Write a review'/>
                <Button type="submit" version={'secondary'} isDisabled={btnDisabled}>Enter</Button>
            </div>
            {message && <div className="message">{message}</div>}
        </form>
    </Card>
  )
}

export default FeedbackForm