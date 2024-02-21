export const dateStringToFormat = (dateString: Date | string): string => {
  const date = new Date(dateString)
  const day = `${date.getDate() < 10 ? '0' : ''}${date.getDate()}`
  const month = `${date.getMonth() + 1 < 10 ? '0' : ''}${date.getMonth() + 1}`
  const year = date.getFullYear()
  return `${year}.${month}.${day}`
}
