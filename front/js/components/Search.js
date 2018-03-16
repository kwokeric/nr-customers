import React from 'react';
import { browserHistory } from 'react-router';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.fetchResults = this.fetchResults.bind(this);

    this.state = {
      query: props.location.query.q || '',
      data: []
      // hasLoaded: true
    };
  }

  componentWillMount() {
    this.fetchResults(this.props.location.query.q);
  }


  componentWillReceiveProps(nextProps) {
    if (nextProps.location.query.q !== this.state.query) {
      this.fetchResults(nextProps.location.query.q);
    }
  }

  handleChange(e) {
    const query = e.target.value.toLowerCase();
    this.setState({ query });
    browserHistory.push(`/?q=${query}`);
  }

  fetchResults(query) {
    fetch(`http://localhost:3000/customer/?q=${query}`)
      .then((response) => {
        return response.json();
      })
      .then((JSON) => {
        this.setState({ data: JSON });
      });
  }

  renderHeader() {
    return (
      <div className="header">
        <div className="title">Customer directory</div>
        <input className="text-input" type="text" value={this.state.query} placeholder="Search" onChange={this.handleChange} />
      </div>
    );
  }

  renderResults() {
    return (
      <div className="customer-container">
        <div className="results">{this.state.data.length} results</div>
        {this.renderCustomers()}
      </div>
    );
  }

  renderCustomers() {
    return this.state.data.map((c, idx) => (
      this.renderCustomer(c, idx)
    ));
  }

  renderCustomer(c, idx) {
    return (
      <div className="customer" key={idx}>
        {c.first_name} {c.last_name}
      </div>
    );
  }

  render() {
    return (
      <div className="search-container">
        {this.renderHeader()}
        {this.renderResults()}
      </div>
    );
  }
}

Search.defaultProps = {
  location: { query: { q: '' } }
};

export default Search;
