import './App.css';

import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import{
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
const App = ()=> {
const pageSize = 15;
const apiKey = process.env.REACT_APP_NEWS_API

const [progress, setProgress] = useState(0)

    return (
      <div>
        <Router>
          <NavBar />
          <LoadingBar
          height={3}
            color='#f11946'
            progress={progress}
            // onLoaderFinished={() => setProgress(0)}
          />
          <Switch>
          <Route exact path="/"><News setProgress={setProgress}  key="general" pageSize={pageSize} apiKey={apiKey} country="us" category="general"/></Route>
          <Route exact path="/business"><News setProgress={setProgress}  key="business" pageSize={pageSize} apiKey={apiKey} country="us" category="business"/></Route>
          <Route exact path="/entertainment"><News setProgress={setProgress}  key="entertainment" pageSize={pageSize} apiKey={apiKey} country="us" category="entertainment"/></Route>
          <Route exact path="/general"><News setProgress={setProgress}  key="general" pageSize={pageSize} apiKey={apiKey} country="us" category="general"/></Route>
          <Route exact path="/health"><News setProgress={setProgress}  key="health" pageSize={pageSize} apiKey={apiKey} country="us" category="health"/></Route>
          <Route exact path="/science"><News setProgress={setProgress}  key="science" pageSize={pageSize} apiKey={apiKey} country="us" category="science"/></Route>
          <Route exact path="/sports"><News setProgress={setProgress}  key="sports" pageSize={pageSize} apiKey={apiKey} country="us" category="sports"/></Route>
          <Route exact path="/technology"><News setProgress={setProgress}  key="technology" pageSize={pageSize} apiKey={apiKey} country="us" category="technology"/></Route>
        </Switch>
        </Router>
      </div>
    )
}

export default App;