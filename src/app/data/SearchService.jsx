import Data from './data'

export default class SearchService extends Data {

  static fetchSearchResults(query = '') {
    const url = `${this.baseUrl('search')}/${query}`

    return this.httpRequest(url)
  }

}
