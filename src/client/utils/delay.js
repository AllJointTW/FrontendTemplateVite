export default function delay(timer = 2000) {
  return new Promise((res) => {
    setTimeout(() => {
      res()
    }, timer)
  })
}