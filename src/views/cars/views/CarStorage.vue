<template>
<div class="container cars">

  <div class="row justify-content-md-center">
    <div class="imgContainer">
      <img :src="car.urlFoto" alt="Car-Img">
    </div>

    <div class="carCard">
      <div class="card-body">
        <h5 class="carTitle">{{ car.nome }}</h5>
        <h6 class="carType">{{ car.tipo }}</h6>

        <p class="card-text">
          <b>Description:</b>
          <br>
          {{ car.descricao }}
        </p>
      </div>
    </div>

  </div>

  <div class="buttonContainer">
    <router-link to="/cars" type="button" class="btn">
      <i class="fas fa-caret-left"></i> Back
    </router-link>
  </div>
</div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'CarStorage',
  props: ['id'],
  mounted() {
    this.ActionGetCar(this.id)
  },
  computed: {
    ...mapState('cars', ['car'])
  },
  methods: {
    ...mapActions('cars', ['ActionGetCar'])
  }
}
</script>

<style lang='scss' scoped>
.cars {
    margin: 30px auto 60px;
}

.imgContainer {
    text-align: center;

    img {
        width: 420px;
        padding: 5px;
    }
}

.carCard {
    width: 500px;
    margin-top: 30px;
    padding: 20px;
    text-align: center;

    .carTitle {
        font-family: 'Bree Serif', serif;
        font-size: 1.4rem;
    }

    .carType {
        font-family: 'Playfair Display', serif;
        font-size: 1.2rem;
    }

    .card-text {
        font-family: 'Playfair Display', serif;
        text-align: justify;
        font-size: 1rem;
    }
}

.buttonContainer {
  margin: 60px auto 30px;
  text-align: center;

  .btn {
    font-family: 'Bree Serif', serif;
  }
}
</style>
