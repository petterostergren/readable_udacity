import React, { Component } from 'react'
import '../App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CategoryView from './Category_View'
import PostDetails from './PostDetails'
import Header from './Header'
import Posts from './Posts'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Router>
          <Switch>
            <Route exact path="/" component={Posts} />
            <Route exact path="/:category/:postId" component={PostDetails} />
            <Route exact path="/:category" component={CategoryView} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App
