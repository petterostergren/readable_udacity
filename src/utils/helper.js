import moment from 'moment'

export function timeConverter(t) {
  const m = moment(t)
  const mString = m.utc().fromNow()
  return mString
}

// export function timeConverter(t) {
//   var options = {
//     weekday: 'long',
//     year: 'numeric',
//     month: 'long',
//     day: 'numeric',
//   }
//   let date = new Date(t)
//   return date.toLocaleDateString('en-US', options)
// }

export function compareHighestScore(a, b) {
  if (a.voteScore < b.voteScore) {
    return 1
  }
  if (a.voteScore > b.voteScore) {
    return -1
  }
  return 0
}

export function comparePublished(a, b) {
  if (a.timestamp < b.timestamp) {
    return 1
  }
  if (a.timestamp > b.timestamp) {
    return -1
  }
  return 0
}
