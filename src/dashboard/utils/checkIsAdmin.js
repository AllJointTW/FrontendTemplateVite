import { get } from 'lodash'

export default function checkIsAdmin(user) {
  if (!user || !get(user.value, ['role'])) {
    return false
  }
  if (user.value.role !== 'admin') {
    return false
  }
  return true
}