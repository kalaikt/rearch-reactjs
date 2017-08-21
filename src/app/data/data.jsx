import Cookies from 'js-cookie'
import endPoints from '../../configs/endpoints'

export default class Data {

  static baseUrl(key) {
    return endPoints[key]
  }

  static httpRequest(request_url, options = {}, timeout = 60000) {
    return new Promise((resolve, reject) => {

      fetch(request_url, options)
      .then((response) => {
       return response.json()
      })
      .catch((error) => {
        return error
      })
    })
  }
}
