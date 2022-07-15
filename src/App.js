
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import FeedbackForm from './components/FeedbackForm';
import AboutPage from './components/Pages/AboutPage';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import Header from './components/Header';
import AboutIconLink from './components/AboutIconLink';
import { FeedbackProvider } from './components/FeedbackContext';



function App() {

  return (
    <FeedbackProvider>
    <Router>
      <Header />
      
        
        <div className="container">
          <Routes>
            <Route exact path='/' element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList  />
                  <AboutIconLink/>
                </>
              }> 
            </Route>          
            <Route path='/About' element={<AboutPage/>}/>
            </Routes>
        </div>
      
      
    </Router>
    </FeedbackProvider>
  );
}

export default App;
