<template>
  <div class="p-4 pt-5">
    <img
      v-if="isLogged"
      :src="loggedUser.urlFoto"
      class="img logo rounded-circle mb-5"
    />
    <img
      v-else
      src="../../../../assets/images/shatun.jpg"
      class="img logo rounded-circle mb-5"
    />

    <ul class="list-unstyled components mb-5">
      <li class="active">
        <router-link to="/">Home</router-link>
      </li>
      <!-- <li>
      <router-link to="/about">About</router-link>
    </li> -->
      <li>
        <router-link to="/contact">Contact</router-link>
      </li>

      <li v-if="isLogged">
        <router-link to="/cars">Cars</router-link>
      </li>
    </ul>

    <div class="footer">
      <p>
        Raul Duarte &copy;
      </p>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "Sidebar",
  data() {
    return {
      isLogged: false,
    };
  },
  computed: {
    ...mapState("navbar", ["loggedUser", "initState"]),

    // Check if there is a user logged
    checkLoggedUser() {
      let userStats = this.initState.status.loggedIn;
      return userStats;
    },
  },
  async created() {
    if (this.checkLoggedUser === true) {
      // User logged
      this.isLogged = true;

      // Get user info
      await this.ActionGetUser();
    } else {
      this.isLogged = false;
    }
  },
  methods: {
    ...mapActions("navbar", ["ActionGetUser"]),
  },
};
</script>
<style lang="scss" scoped></style>
