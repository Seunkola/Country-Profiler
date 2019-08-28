import React, {Component} from 'react';
import ApolloClient from 'apollo-boost';
import {Query} from 'react-apollo';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { GET_COUNTRIES_LIST, url } from '../constants/Constants';

const client = new ApolloClient({
    uri: url
});

class ListCountries extends Component {
    render(){
        return (
            <Query query={GET_COUNTRIES_LIST} client={client}>
                {({loading, error, data}) => {
                    if(loading) return <p>loading....</p>;
                    if(error) return <p>{error.message}</p>;
                    return (
                        <div>
                            <h1>Below are List of Countries</h1>
                            <Link className="left" to="/"  style={{ marginRight: '85%'}}>
                                    <button className="btn">Return to Main Menu</button>
                            </Link>
                            <div>
                                <ul>
                                    {data.countries.map(country => (
                                        <Link to={"/countries/"+country.code}>
                                            <li>
                                                <p>{country.name}</p>
                                                <p>Native: {country.native}</p>
                                                <p>Continent: {country.continent.name}</p>
                                                <p>Official Language: {country.languages.name}</p>
                                                <p>Official Language(Native): {country.languages.native}</p>
                                            </li>
                                        </Link>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )

                }}
            </Query>
        )
    }
}

export default withRouter(ListCountries);