export default [
  {
    path: '/cars',
    name: 'Cars',
    component: () => import(/* webpackChunkName: "cars" */ './views/CarsStorage')
  },
  {
    path: '/cars/:id',
    name: 'Car',
    component: () => import(/* webpackChunkName: "car" */ './views/CarStorage'),
    props: true
  }
]
