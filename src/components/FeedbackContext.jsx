
import {createContext,useState} from 'react'
import {v4 as uuidv4} from 'uuid';

const FeedbackContext=createContext();

export const FeedbackProvider=({children})=> {

  const [feedback, setFeedback] = useState([
    {
    id: 1,
    text:'This item is from context 1',
    rating: 9
    },
    {
    id: 2,
    text:'This item is from context 2',
    rating: 8
    },
    {
      id: 3,
      text:'This item is from context 3',
      rating: 6
      }])

    const [feedbackEdit, setFeedbackEdit] = useState({
      item: {},
      edit:false
    })

      //add feedback
    const addFeedback=(newFeedback)=>{
      newFeedback.id=uuidv4();
      setFeedback([newFeedback,...feedback])
   }
    //delete feedback
    const deleteFeedback=(id)=>{
      if(window.confirm('Are you Sure to delete?')){
        setFeedback(feedback.filter((item)=>item.id!==id))
      }
    }

    //Set item to be updated
    const editFeedback=(item)=>{
      setFeedbackEdit({
        item,
        edit:true
      })
    }

  return (
    <FeedbackContext.Provider value={{feedback,deleteFeedback,addFeedback,editFeedback,feedbackEdit}}>{children}</FeedbackContext.Provider>
  )
}

export default FeedbackContext