class IntercepServices {
  // Logout Handler
  logout() {
    // Remove data from Local Storage
    localStorage.removeItem('token')
    console.log('User logged out from Interceptors')
  }
}

export default new IntercepServices()
