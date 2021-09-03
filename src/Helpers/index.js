import axios from 'axios'

export const getDataAPI = async url => {
  const res = await axios.get(url)

  return res
}
