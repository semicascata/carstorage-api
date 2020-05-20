<template>
<div>
  <div class="container cars">

    <div class="row justify-content-md-center">
      <div :key='car.id' v-for='car in cars' class="card">
        <div class="card-body">
          <div class="imgContainer">
            <img :src="car.urlFoto" alt="Car-Img">
          </div>
          <h5 class="card-title">{{ car.nome }}</h5>
          <h6 class="card-subtitle mb-2 text-muted">{{ car.tipo }}</h6>
          <button @click.prevent="singleCar(car.id)" type="button" class="btn btn-sm btn-danger">More</button>
        </div>
      </div>

    </div>
  </div>
</div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Drugstore',
  mounted() {
    this.ActionGetCars()
  },
  computed: {
    ...mapState('cars', ['cars'])
  },
  methods: {
    ...mapActions('cars', ['ActionGetCars']),

    singleCar(id) {
      this.$router.push('/cars/' + id)
    }
  }
}
</script>

<style lang='scss' scoped>
.cars {
    margin: 30px auto;
}

.imgContainer {
    margin: 2px auto;
    text-align: center;

    img {
        width: 140px;
        padding: 5px;
    }
}

.btnNew {
  margin: 10px auto;
  text-align: center;
  font-family: 'Bree Serif', serif;
}

.card {
    width: 200px;
    margin: 30px;
    box-shadow: 15px 15px 30px #363636;
    text-align: center;

    .card-title {
        font-family: 'Bree Serif', serif;
        font-size: 1rem;
    }

    h6 {
        font-family: 'Playfair Display', serif;
        font-size: 0.8rem;
    }

    button {
        margin: 5px auto 0;
    }
}
</style>
