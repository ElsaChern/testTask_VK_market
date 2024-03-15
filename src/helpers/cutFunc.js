export const cutFunction = (text, length) => {
  let cuttingText = ""
  text.length > length
    ? (cuttingText = `${text.slice(0, length)}...`)
    : (cuttingText = text)
  return cuttingText
}
