import React, { Component } from 'react'
import '../App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CategoryView from './Category_View'
import PostDetails from './PostDetails'
import Category from './Category'

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Category} />
            <Route exact path="/:category/:postId" component={PostDetails} />
            <Route path="/:category" component={CategoryView} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App
