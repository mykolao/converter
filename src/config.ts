const CURRENCIES = ['USD', 'EUR', 'UAH', 'CAD', 'GBP'] as const;
const BASE_CURRENCY = 'USD';

const FEATURES_PAIRS = [
  ['USD', 'UAH'],
  ['EUR', 'UAH']
];

const API_KEY = '0UHIgpZj42pAQpGXzMvjxJmYFCdmwmvVixejH1wE';
const API_BASE = 'https://api.currencyapi.com/v3';

const URL_PARAMS = `apikey=${API_KEY}&currencies=${CURRENCIES.join(
  '%2C'
)}&base_currency=${BASE_CURRENCY}`;

const REQUEST_URL = `${API_BASE}/latest?${URL_PARAMS}`;

export { BASE_CURRENCY, REQUEST_URL, FEATURES_PAIRS };
