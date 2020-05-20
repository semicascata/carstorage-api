export default function setHeaders() {
    // Get token/user from Local Storage
    let user = localStorage.getItem('token')

    if(user) {
      // console.log(user)
      return {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user}` // Spring backend
      }
    } else {
      return {}
    }
}
