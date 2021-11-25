/**
 * @param {{ conditions: {}, projection: {}, sort: {}, skip: Number, limit: Number, pagination: Boolean }} query 查詢參數
 * @return {String} 回傳 Query String
 */
export default function createQueryString({
  conditions = {},
  projection = {},
  sort = { updatedAt: -1 },
  skip = 0,
  limit = 10,
  pagination = true,
  search = ''
} = {}) {
  const mainQuery = encodeURI(
    `?conditions=${JSON.stringify(conditions)}&projection=${JSON.stringify(
      projection
    )}&sort=${JSON.stringify(sort)}&skip=${skip}&limit=${limit}&pagination=${
      pagination ? '1' : '0'
    }`
  )
  const searchQuery = search
    ? `&search=${encodeURIComponent(search)}`
    : '&search='
  return `${mainQuery}${searchQuery}`
}