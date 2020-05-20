<template>
<div class="card">
  <form>
    <div v-if="validation" class="alert alert-danger" role="alert">
      {{ validation }}
    </div>

    <div class="form-group">
      <label>Username</label>
      <input class="form-control" placeholder="User" v-model="user.username">
    </div>

    <div class="form-group">
      <label>Password</label>
      <input type="password" class="form-control" placeholder="******" v-model="user.password">
    </div>

    <div class="text-center">
      <button @click.prevent="login()" type="submit" class="btn btn-danger btn-block">
        Submit
      </button>
    </div>
  </form>
</div>
</template>

<script>
import {
  mapActions,
  mapState
} from 'vuex'

export default {
  name: 'Login',
  data() {
    return {
      user: {
        username: '',
        password: ''
      },
      validation: ''
    }
  },
  computed: {
    ...mapState('auth', ['initState']),

    // Check if user is logged
    loggedIn() {
      return this.initState.status.loggedIn
    }
  },
  created() {
    if (this.loggedIn === true) {

      // If user IS logged
      this.$router.push('/cars')
    }
  },
  methods: {
    ...mapActions('auth', ['ActionLogin']),

    async login() {
      try {
        this.ActionLogin(this.user)
          .then(res => {
            if (res.status === 401) {
              console.log(res)
              this.validation = res.errMessage
            }

            if(res.status === 200) {
              this.$router.go()
              console.log(res)
            }
          })
      } catch(err) {
        this.$router.push('/login')
      }
    }
  }
}
</script>

<style lang='scss'>
.card {
    margin: 60px auto;
    width: 350px;
    box-shadow: 15px 15px 30px #363636;
}

form {
    padding: 10px;
    font-size: 0.9rem;

    label {
        font-family: 'Bree Serif', serif;
    }

    .btn {
        font-family: 'Bree Serif', serif;
    }

    medium {
        font-family: 'Bree Serif', serif;
    }
}
</style>
