import api from './api'

const accessToken = JSON.parse(localStorage.getItem('accessToken') || 'null')

const postRemote = async (url: string, body: unknown): Promise<unknown> => {
  try {
    api.setHeader('Authorization', `Bearer ${accessToken}`)

    return await api.post(url, body)
  }
  catch (error) {
    console.error(error)
  }
}

export default postRemote
