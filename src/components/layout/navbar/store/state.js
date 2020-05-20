const user = localStorage.getItem('token')

const initState = user
? { status: { loggedIn: true }, user }
: { status: { loggedIn: false }, user: null }

export default {
  initState,
  loggedUser: {}
}
