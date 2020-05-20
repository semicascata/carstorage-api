<template>
  <div class="contact">

    <div class="twContainer">
      <div class="twEffect">
        <h4 class="twText">Contact me.</h4>
      </div>
    </div>

    <div class="me">
      <h3>Raul O. Duarte</h3>
      <h4>
        <i class="fas fa-terminal"></i> <i>Aspiring Developer and IT Technician</i>
      </h4>

      <div class="cardMe">
        <i class="fas fa-envelope"></i> raulduarte94@hotmail.com <br />
        <i class="fas fa-phone"></i> +55 (41) 9 9700-2285 <br />
        <i class="fas fa-map-marker-alt"></i> Curitiba/PR - Brazil <br />
      </div>

      <p>
        <a type="button" href="https://github.com/semicascata" class="btn btn-floating btn-lg btn-git">
          <i class="fab fa-github"></i> GitHub
        </a>

        <a type="button" href="https://www.linkedin.com/in/raul-duarte-605378156/" class="btn btn-floating btn-lg btn-li">
          <i class="fab fa-linkedin"></i> Linkedin
        </a>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Contact'
}
</script>
<style lang="scss" scoped>
/* TypeWriter Machine Effect */
.twContainer {
  margin: 80px auto 20px;
  display: flex;
  justify-content: center;
}

.twEffect .twText {
  font-family: 'Bree Serif', serif;
  font-size: 2.5rem;
  overflow: hidden;
  /* Ensures the content is not revealed until the animation */
  border-right: .12em solid #363636;
  /* The typwriter cursor */
  white-space: nowrap;
  /* Keeps the content on a single line */
  margin: 0 auto;
  /* Gives that scrolling effect as the typing happens */
  letter-spacing: .30em;
  /* Adjust as needed */
  animation:
    typing 2s steps(11, end),
    /* 11 = Number of letters */
    blink-caret .3s step-end infinite;
}

/* The typing effect */
@keyframes typing {
  from {
    width: 0
  }

  to {
    width: 100%
  }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from, to {
    border-color: transparent
  }

  35% {
    border-color: #363636
  }
}
</style>
