export const environments = {
  baseApi: import.meta.env.PROD ? 'https:/ivrfootage.com': 'http://localhost:3800',
  subdomain: import.meta.env.PROD ? '/admin/' : '/',
}