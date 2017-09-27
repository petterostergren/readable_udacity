import moment from 'moment'

export function timeConverter(t) {
  const m = moment(t)
  const mString = m.utc().fromNow()
  return mString
}
