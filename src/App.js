
import { useState } from 'react';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import Header from './components/Header';
import FeedbackData from './Data/FeedbackData';



function App() {

  const [feedback,setFeedback]=useState(FeedbackData);

  const deleteFeedback=(id)=>{
    if(window.confirm('Are you Sure to delete?')){
      setFeedback(feedback.filter((item)=>item.id!==id))
    }
  }

  return (
    <>
        <Header />
        
        <div className="container">
          <FeedbackStats feedback={feedback}/>
          <FeedbackList feedback = {feedback} handleDelete={deleteFeedback} />
      
        </div>
      
      
    </>
  );
}

export default App;
