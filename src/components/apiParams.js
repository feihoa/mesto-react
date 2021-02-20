import Api from './Api';

const apiParams =  {

    api : new Api({
      baseUrl: 'https://nomoreparties.co/cohort9',
      headers: {
        authorization: '548c5797-a590-40d0-8f9e-48d758ca9ae7',
        'Content-Type': 'application/json'
      }
    }),

}


export default apiParams;
