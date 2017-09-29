import _ from 'lodash'
import { COMMENTS_GET_COMMENTS } from '../actions/actionConstants'


const categories = (state = [], action) => {
  console.log(action.payload)
  switch (action.type) {
    case COMMENTS_GET_COMMENTS:
      return {
        ...state,
        comments: _.groupBy(action.payload, 'parentId'),
      }
    default:
      return state
  }
}

export default categories
