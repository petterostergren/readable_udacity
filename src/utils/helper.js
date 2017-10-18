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
