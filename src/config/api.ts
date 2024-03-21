export const heading: string = "currency converter";
const API_DOMAIN: string = "https://v6.exchangerate-api.com/v6";
const API_KEY: string = "66f0197f7e619ae03a07da2d";
export const endpointPath = (from: string): string =>
  `${API_DOMAIN}/${API_KEY}/latest/${from}`;
