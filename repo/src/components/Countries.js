import React from 'react';
import ListCountries from './ListCountries';
import Country from './Country';

const Countries = ({ match }) => (
    <div>
      {
          match.params.code
          ?
          <Country code={match.params.code} />
          :
          <ListCountries />
      }
    </div>
)

export default Countries;