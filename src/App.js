// import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Create from './components/Create';
import Read from './components/Read';
import Update from './components/Update';

function App() {
  return (
   
      <div className="main">
        <Router>
        {/* <h2 className="main-header">React Axios Crud Operations</h2> */}
       {/* <Switch> */}
       <div>
          <Route exact path="/" component={Create} />
        </div>
        <div style={{ marginTop: 20 }}>
          <Route exact path='/read' component={Read} />
        </div>

        <Route exact path='/update' component={Update} />
       {/* </Switch> */}
    </Router>

      </div>

  );
}

export default App;
