// Get Token from Local Storage
const user = localStorage.getItem('token')

// Check if the user is already logged
const initState = user
? { status: { loggedIn: true }, user }
: { status: { loggedIn: false }, user: null }

export default {
  initState
}
