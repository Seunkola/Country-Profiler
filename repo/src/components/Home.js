
import React, {Component} from 'react';
import ApolloClient from 'apollo-boost';
import {Query} from 'react-apollo';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { GET_COUNTRIES_NAME, url } from '../constants/Constants'

const client = new ApolloClient({
    uri: url
});

class Home extends Component {
  state = {
    country: 'US'
  };

  onCountryChange = event => {
    this.setState({country: event.target.value});
    this.props.history.push(`/countries/${event.target.value}`);
  };

  render() {
    return (
      <Query query={GET_COUNTRIES_NAME} client={client}>
        {({loading, error, data}) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>{error.message}</p>;
          return (
            <div className="home">
                <h1>Welcome to Country Profiler</h1>
                <main className="wrapper">
                    <p>Click to view list of all countries</p>
                    <Link to="/countries">
                        <button className="btn">View All Countries</button>
                    </Link>
                    <p>Select a Specific country and view details</p>
                    <select value={this.state.country} onChange={this.onCountryChange}>
                        {data.countries.map(country => (
                            <option key={country.code} value={country.code}>
                                {country.name}
                            </option>
                        ))}
                    </select>
                </main>
            </div>
          );
        }}
      </Query>
    );
  }
}

export default withRouter(Home);