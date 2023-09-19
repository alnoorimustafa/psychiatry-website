import api from './api'

const accessToken = JSON.parse(localStorage.getItem('accessToken') || 'null')

const fetchRemote = async (url: string): Promise<unknown> => {
  try {
    api.setHeader('Authorization', `Bearer ${accessToken}`)

    return await api.get(url)
  }
  catch (error) {
    console.error(error)
  }
}

export default fetchRemote
