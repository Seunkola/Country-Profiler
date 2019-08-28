import gql from 'graphql-tag';

export const url = 'https://countries.trevorblades.com';

export const GET_COUNTRIES_NAME = gql`
  {
    countries {
      name
      code
    }
  }
`;

export const GET_COUNTRIES_LIST =   gql`
    {
        countries {
            code
            name
            native
            continent {
                code
                name
            }
            languages {
                name
                native
            }
        }
    }
`;

export const GET_COUNTRY = gql`
  query ($code: String!) {
  country(code: $code) {
    code
    name
    native
    phone
    currency
    languages{
      name
      native
    }
  }
}
`;