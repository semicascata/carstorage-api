import { routes as auth } from '@/modules/authentication'
import { routes as home } from '@/views/home'
import { routes as cars } from '@/views/cars'

export default [
  ...auth,
  ...home,
  ...cars
]
