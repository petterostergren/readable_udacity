import React from 'react'
import '../App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CategoryView from './CategoryView'
import PostDetails from './PostDetails'
import Header from './Header'
import Posts from './Posts'
import AddPost from './AddPost'

const App = () => {
  return (
    <div>
      <Router>
        <div>
          <Header />

          <Switch>
            <Route exact path="/" component={Posts} />
            <Route exact path="/addPost" component={AddPost} />
            <Route exact path="/:category/:postId" component={PostDetails} />
            <Route exact path="/:category" component={CategoryView} />
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App
