import React from 'react'
import Card from './Shared/Card'
import {useState} from 'react'
import Button from './Shared/Button'

function FeedbackForm() {
const [text, setText] = useState('')


const handleTextChange=(e)=>{
    setText(e.target.value)
}

  return (
    <Card>
        <form>
            <h2>How would you rate our service?</h2>
            {/*rating*/}

            <div className="input-group">
                <input onChange={handleTextChange} type="text" placeholder='Write a review'/>
                <Button type="submit">Enter</Button>
            </div>
        </form>
        
        {text}
    </Card>
  )
}

export default FeedbackForm