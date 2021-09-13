import axios from 'axios'

const baseUrl = "http://localhost:8000/api/booktrackerapi/"

const getAll = () => {
  const data = axios.get(baseUrl)
  return data.then(response => response.data)
}
  
const create = newObject => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

const update = (id, newObject) => {
  const request = axios.patch(`${baseUrl}${id}/`, newObject)
  return request.then(response => response.data)
}

const remove = (id) => {
  const request = axios.delete(`${baseUrl}${id}/`)
  return request.then(response => response)
}

export default { getAll, create, update, remove}