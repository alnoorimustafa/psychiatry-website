const format = array => {
  const formatted = []

  array.forEach(element => {
    const createdAt = new Date(element.createdAt)
    const formattedDate = createdAt.toLocaleString('fr')

    formatted.push({ created_at: formattedDate, creator_username: element.creator.username, ...element })
  })

  return formatted
}

export default format
