export default function concatText(firstWord, secondWord, connector) {
  let text = ''
  const concate = connector || ' '
  if (firstWord) {
    text = firstWord
  }
  if (secondWord) {
    text = text.length > 0 ? `${text}${concate}${secondWord}` : secondWord
  }
  return text
}
