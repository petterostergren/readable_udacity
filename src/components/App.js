import React, { Component } from 'react'
import '../App.css'
import { Route, Switch } from 'react-router-dom'
import Posts from './Posts'
import PostDetails from './PostDetails'
import Category from './Category'


class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Category} />
          <Route path="/:category/:postId" component={PostDetails} />
          <Route path="/:category" component={Posts} />
        </Switch>
      </div>
    )
  }
}

export default App
