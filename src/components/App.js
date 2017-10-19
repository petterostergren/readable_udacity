import React from 'react'
import '../App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CategoryView from './Category_View'
import PostDetails from './PostDetails'
import Header from './Header'
import Posts from './Posts'

const App = () => {
  return (
    <div>
      <Router>
        <div>
          <Header />

          <Switch>
            <Route exact path="/" component={Posts} />
            <Route exact path="/:category/:postId" component={PostDetails} />
            <Route exact path="/:category" component={CategoryView} />
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App
