import React,{Component} from 'react';
import ApolloClient from 'apollo-boost';
import {Query} from 'react-apollo';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { GET_COUNTRY, url } from '../constants/Constants';

const client = new ApolloClient({
    uri: url
});

class Country extends Component {
    render(){
        const code = this.props.code;
        return (
            <Query query={GET_COUNTRY} variables={{ code, }} skip={code === ''} client={client}>
                {({loading, error, data}) => {
                    if(loading) return <p>loading....</p>;
                    if(error) return <p>{error.message}</p>;
                    return (
                        <div>
                            <h1>{`Welcome to ${data.country.name}`}</h1>
                            <h2>Country Details</h2>
                            <ul>  
                                <li>Native: {data.country.native}</li>
                                <li>Official Language: {data.country.languages.map(language => language.name)}</li>
                                <li>Official Language(Native): {data.country.languages.map(language => language.native)}</li>
                                <li>Area Code: {data.country.phone}</li>
                                <li>Currency: {data.country.currency}</li>  
                            </ul>
                            <div className="nav">
                                <Link className="left" to="/countries">
                                    <button className="btn">Back</button>
                                </Link>
                                <Link className="right" to="/">
                                    <button className="btn">Return to Main Menu</button>
                                </Link>
                            </div>
                        </div>
                        )
                    }}
            </Query>
        )
    }
}

export default withRouter(Country);