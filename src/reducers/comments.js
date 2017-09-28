import _ from 'lodash'
import { COMMENTS_GET_COMMENTS } from '../actions/actionConstants'


const categories = (state = [], action) => {
  switch (action.type) {
    case COMMENTS_GET_COMMENTS:
      return {
        ...state,
        comments: action.payload,
        numberOfComments: _.groupBy(action.payload, 'parentId'),
      }
    default:
      return state
  }
}

export default categories
