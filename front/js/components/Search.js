import React from 'react';
import { browserHistory } from 'react-router';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.fetchResults = this.fetchResults.bind(this);
    this.renderCustomer = this.renderCustomer.bind(this);

    this.state = {
      query: props.location.query.q || '',
      data: []
    };
  }

  componentWillMount() {
    this.fetchResults(this.props.location.query.q);
  }


  componentWillReceiveProps(nextProps) {
    if (nextProps.params.query !== this.state.query) {
      this.fetchResults(nextProps.params.query);
    }
  }

  handleChange(e) {
    const query = e.target.value.toLowerCase();
    this.setState({ query });
    browserHistory.push(`/?q=${query}`);
  }

  fetchResults(query) {
    console.log('fetching...');
    fetch(`http://localhost:3000/customer/?q=${query}`)
      .then((response) => {
        return response.json();
      })
      .then((JSON) => {
        this.setState({ data: JSON });
      });
  }


  renderCustomers() {
    return this.state.data.map((c, idx) => (
      this.renderCustomer(c, idx)
    ));
  }

  renderCustomer(c, idx) {
    return (
      <div className="customer" key={idx}>
        <h1>{c.first_name} {c.last_name}</h1>
      </div>
    );
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.query} onChange={this.handleChange} />
        supppppppp
        {this.renderCustomers()}
      </div>
    );
  }
}

Search.defaultProps = {
  location: { query: { q: '' } }
};

export default Search;
