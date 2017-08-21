import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchSearchResults } from '../actions/SearchActions'

class Search extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      searchEndpoints: {},
      searchResults: {},
      selectedEndpoint: '',
      searchEndpointsError: {},
      searchError: {},

    }
    this.makeSearchList = this.makeSearchList.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.getSerachResults = this.getSerachResults.bind(this)
    this.setSerachFilter = this.setSerachFilter.bind(this)
  }

  render() {
    return (
      <div>
        <h1>Search Type</h1>
        <ul className='list-group'>
          { this.makeSearchList() }
        </ul>
      </div>
    )
  }

  componentWillMount() {
    this.props.fetchSearchResults()
    .then(( response ) => {
      this.setState( { searchEndpoints: response } )
    })
    .catch(( error ) => {
      this.setState( { searchEndpointsError: error } )
    })
  }

  handleInputChange(event) {
    const target = event.target

    this.setState({
      selectedEndpoint: target.value
    })

    this.getSerachResults()
  }

  setSerachFilter() {
    const filters = ''

    this.getSerachResults(filters)
  }

  getSerachResults(filters = '') {
    const query = filters === '' ? `${this.state.selectedEndpoint}/` : `${this.state.selectedEndpoint}/?${filters}`

    this.props.fetchSearchResults(query)
    .then(( response ) => {
      this.setState( { searchResults: response } )
    })
    .catch(( error ) => {
      this.setState( { searchError: error } )
    })
  }

  makeSearchList() {
    const endpoints = [
      'overnight-boarding',
      'overnight-traveling',
      'drop-in',
      'doggy-day-care',
      'dog-walking'
    ]

    return endpoints.map( (text) => {
      return(
        <li className='radio-inline' key={ `endpoint-${text}` }>
          <label>
            <input
              type="radio"
              value={ text }
              onChange={ this.handleInputChange } />
              { text }
          </label>
        </li>
      )
    })
  }

  makeSearchResultsUi() {

  }

}

function mapStateToProps( state ) {
  return {
    state: state,
  }
}

function mapDispatchToProps( dispatch ) {
  return bindActionCreators({
    fetchSearchResults: fetchSearchResults,
  }, dispatch )
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
