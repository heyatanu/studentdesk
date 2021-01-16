import './App.css';
import BookApiFetch from './Apifetch';
import Newbooks from './Newbooks';
import {Route,Switch} from 'react-router-dom';


function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={BookApiFetch}/>
        <Route component={Newbooks}/>
      </Switch>
    </>
  );
}

export default App;
