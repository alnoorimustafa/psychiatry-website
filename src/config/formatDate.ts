// Define a function to format the date
const formatDate = (date: string | number | Date) => {
  const newDate = new Date(date)
  const day = newDate.getDate().toString().padStart(2, '0') // Get the day and pad with leading zero if necessary
  const month = (newDate.getMonth() + 1).toString().padStart(2, '0') // Get the month (add 1 as months are zero-based) and pad with leading zero if necessary
  const year = newDate.getFullYear()

  return `${day}/${month}/${year}`
}

export default formatDate
