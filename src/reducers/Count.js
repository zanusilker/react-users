import ACTIONS from 'constants/Actions';

let initialState = {
  'base': 'EUR',
  'date': '2017-12-08',
  'count': 0,
  'rates': {
    'AUD': 1.562,
    'BGN': 1.9558,
    'BRL': 3.8435,
    'CAD': 1.5072,
    'CHF': 1.1704,
    'CNY': 7.7729,
    'CZK': 25.555,
    'DKK': 7.4417,
    'GBP': 0.87525,
    'HKD': 9.1661,
    'HRK': 7.5493,
    'HUF': 314.5,
    'IDR': 15910.0,
    'ILS': 4.1343,
    'INR': 75.678,
    'JPY': 133.26,
    'KRW': 1285.3,
    'MXN': 22.22,
    'MYR': 4.8001,
    'NOK': 9.7665,
    'NZD': 1.7157,
    'PHP': 59.336,
    'PLN': 4.202,
    'RON': 4.6336,
    'RUB': 69.651,
    'SEK': 9.977,
    'SGD': 1.5889,
    'THB': 38.361,
    'TRY': 4.5165,
    'USD': 1.1742,
    'ZAR': 16.039
  }
};

export default function Count(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case ACTIONS.COUNT:
      let rate, {from, to, value} = action.data;
      console.log( {from, to, value});

      if (from === to) {
        rate = 1;
      } else {
        rate = action.currency.rates[to];
      }
      let count = (rate * +value).toFixed(2);
      return {
        ...state,
        count
      };
    default:
      return state;
  }
}