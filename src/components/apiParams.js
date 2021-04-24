import Api from './Api';
import * as secretToken from './secretToken';

const apiParams =  {

    api : new Api({
      baseUrl: 'https://nomoreparties.co/cohort9',
      headers: {
        authorization: secretToken.secretToken,
        'Content-Type': 'application/json'
      }
    }),

}


export default apiParams;
