import Card from "./Shared/Card"
import PropTypes from 'prop-types'
import {FaTimes} from 'react-icons/fa'


function FeedbackItem({item,handleDelete}) {
  

  return (
    <Card>
        <button onClick={()=>handleDelete(item.id)} className="close">
          <FaTimes color='purple'/>
        </button>
        <div className="num-display">{item.rating}</div>
        <div className="text-display">{item.text}</div>
        
    </Card>

  )
}

FeedbackItem.propTypes={
  item: PropTypes.object.isRequired
}

export default FeedbackItem