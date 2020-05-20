<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">

    <ul class="navbar-nav ml-auto mt-2 mt-lg-0">

      <li v-if="isLogged" class="nav-item">
        <a type="button" class="nav-link">
          <img :src="loggedUser.urlFoto" class="icon">
          {{ user }}
        </a>
      </li>

      <li class="nav-item">
        <router-link v-if="!isLogged" to='/login' class="nav-link">
          <i class="fas fa-sign-in-alt"></i> Login
        </router-link>
      </li>

      <li class="nav-item">
        <a v-if="isLogged" type="button" @click.prevent="logoutUser()" class="nav-link">
          <i class="fas fa-sign-out-alt"></i> Logout
        </a>
      </li>
    </ul>

    <!-- Toggle Button -->
    <button class="btn btn-danger d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <i class="fa fa-bars"></i>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="nav navbar-nav ml-auto">
        <li class="nav-item active">
          <router-link to="/" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Navbar',
  data() {
    return {
      isLogged: false,
      user: ''
    }
  },
  computed: {
    ...mapState('navbar', ['loggedUser', 'initState']),

    // Check if there is a user logged
    checkLoggedUser() {
      let userStats = this.initState.status.loggedIn
      return userStats
    }
  },
  async created() {

    let givenUser // Username

    if(this.checkLoggedUser === true) {
      // User logged
      this.isLogged = true

      // Get user info
      await this.ActionGetUser()

      // Get username
      givenUser = this.loggedUser.nome
      this.user = givenUser.replace(/^./, givenUser[0].toUpperCase())

    } else {
      this.isLogged = false
    }
  },
  methods: {
    ...mapActions('navbar', ['ActionGetUser', 'ActionLogout']),

    logoutUser() {
      this.ActionLogout()
      this.$router.go()
    }
  }
}
</script>

<style lang="scss" scoped>
.icon {
  width: 30px;
  border-radius: 100px;
  margin-right: 5px;
}
</style>
