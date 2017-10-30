import React from 'react'
import '../App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CategoryView from './CategoryView'
import PostDetails from './PostDetails'
import Header from './Header'
import Posts from './Posts'
import AddPost from './AddPost'
import PostEdit from './PostEdit'
import AddComment from './AddComment'
import CommentEdit from './CommentEdit'

const App = () => {
  return (
    <div>
      <Router>
        <div>
          <Header />

          <Switch>
            <Route exact path="/" component={Posts} />
            <Route exact path="/addPost" component={AddPost} />
            <Route
              path="/editcomment/:postId/:commentId"
              component={CommentEdit}
            />
            <Route
              exact
              path="/addComment/:category/:postId"
              component={AddComment}
            />
            <Route exact path="/:category/:postId/edit" component={PostEdit} />
            <Route exact path="/:category/:postId" component={PostDetails} />
            <Route exact path="/:category" component={CategoryView} />
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App
