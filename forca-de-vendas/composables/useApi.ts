import { useFetch } from '#app'

export const useApi = () => {
  const getMensagem = async () => {
    return await useFetch('/mensagem', {
      baseURL: 'http://localhost:8080/api'
    })
  }

  return {
    getMensagem
  }
}