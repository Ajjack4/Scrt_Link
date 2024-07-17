
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MessageForm from './components/MessageForm.jsx';
import MessageReader from './components/MessageReader.jsx';


const App = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" Component={MessageForm} />
      <Route path="/message/:id" Component={MessageReader} />
      
    </Routes>
   </Router>
  );
};

export default App;