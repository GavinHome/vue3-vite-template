import moment from 'moment'

const useMoment = (locale: string) => {
  moment.locale(locale)
}

export default {
  useMoment
}
