<template>
<div id="app">
  <div class="wrapper d-flex align-items-stretch">

    <!-- SideBar -->
    <nav id="sidebar">
      <Sidebar />
    </nav>

    <!-- Toggle Sidebar -->
    <button type="button" id="sidebarCollapse" class="btn">
      <i class="fa fa-bars"></i>
    </button>

    <div id="content" class="p-4 p-md-5">

      <!-- Navbar -->
      <Navbar />

      <!-- Page Content -->
      <router-view />

    </div>
  </div>
</div>
</template>
<script>
import $ from 'jquery'
import Sidebar from './components/layout/navbar/views/Sidebar'
import Navbar from './components/layout/navbar/views/Navbar'

export default {
  name: 'App',
  components: {
    Sidebar,
    Navbar
  },
  mounted() {
    // jQuery
    $('#sidebarCollapse').click(() => {
      $('#sidebar').toggleClass('active')
    })
  }
}
</script>
<style lang="scss" scoped>
</style>
