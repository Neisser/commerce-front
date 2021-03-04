export const language = [
  {key: 'en', value: 'English'},
  {key: 'es', value: 'Spanish'}
];

export const routes = [
  {
    route: '/landing',
    label: 'Landing'
  },
  {
    route: '/product',
    label: 'Product'
  }
]

export const baseApi = process.env.baseApi;
export const baseLocalApi = 'http://localhost:3000/api/v1';