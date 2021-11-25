import scrollTo from 'ant-design-vue/lib/_util/scrollTo'
import { get, isArray, mergeWith } from 'lodash'
import { tryParseConditions } from './queryHelpers'

function useRightArray(objValue, srcValue) {
  if (isArray(objValue)) {
    return srcValue
  }
  return undefined
}

export default function handleTableChangeWrapper(route, router) {
  return function handleTableChange(pagination, filter, sorter) {
    scrollTo(0)
    const newQuery = mergeWith(
      tryParseConditions(get(route.query, ['conditions'])),
      filter,
      useRightArray
    )
    const conditions = JSON.stringify({
      ...Object.keys(newQuery).reduce((pre, curr) => {
        if (typeof newQuery[curr] === 'undefined' || newQuery === null) {
          return pre
        }
        if (Array.isArray(newQuery[curr]) && !newQuery[curr].length) {
          return pre
        }
        return {
          ...pre,
          [curr]: newQuery[curr]
        }
      }, {})
    })
    const sort = sorter.order
      ? JSON.stringify({
          [sorter.field]: sorter.order === 'ascend' ? 1 : -1
        })
      : '{}'
    const query = {
      conditions,
      skip: pagination.current - 1,
      limit: pagination.pageSize,
      sort
    }
    router.replace({ query: { ...route.query, ...query } })
  }
}