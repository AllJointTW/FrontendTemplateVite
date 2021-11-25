import dayjs from 'dayjs'
import 'dayjs/locale/zh-tw'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.locale('zh-tw')
dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(relativeTime)

export function formatDate(isoTime, format = 'YYYY年MM月DD日') {
  if (!isoTime) {
    return ''
  }
  return dayjs(isoTime).tz().format(format)
}

export function toISO(isoTime, type) {
  if (!isoTime) {
    return ''
  }
  if (type === 'startOf') {
    return dayjs(isoTime).tz().startOf('day').toISOString()
  }
  if (type === 'endOf') {
    return dayjs(isoTime).tz().endOf('day').toISOString()
  }
  return dayjs(isoTime).tz().toISOString()
}

export default {
  formatDate,
  toISO
}