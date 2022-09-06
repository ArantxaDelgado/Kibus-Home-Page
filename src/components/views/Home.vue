<template>
  <div class="home">
    <img
      class="logo"
      src="../../../public/images/logo.png"
      alt="logotipo de kibus"
    />
    <div class="head">
      <img class="image" src="../../../public/images/imagen.png" />
      <div class="info">
        <h1>Alimentar bien a tu perro es más fácil que nunca</h1>
        <p>
          La nueva alimentación canina ha llegado. Con Kibus, podrás ofrecer a
          tu compañero comida sana, rica y recién cocinada de una forma fácil y
          cómoda
        </p>

        <div class="btns">
          <!-- Los links han dejado de funcionar porque no se importa bien vue-router -->
          <router-link class="btn reserva" to="/productos">Reserva Ahora</router-link>
          <router-link class="btn btn-info" to="/footer">Quiero Saber Más
            <img
              class="arrow"
              src="../../../public/images/Arrow - Right Circle.png"/>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
h1 {
  width: 327px;
  font-size: 32px;
  font-weight: 700;
  line-height: 32px;
}

p {
  width: 327px;
  font-weight: 700;
  color: var(--font-color-secondary);
  line-height: 22px;
}

.logo {
  height: 32px;
  width: 72px;
  margin-top: 20px;
  margin-left: 20px;
}
.home {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
}

.head {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.info {
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
}

.image {
  align-self: center;
  width: 370px;
  height: auto;
}

.btns {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 21px;
  margin-top: 32px;
}

.btn:hover {
  background-color: var(--color-primary-light);
  color: black;
}

.btn {
  font-weight: 600;
  font-size: 16px;
  line-height: 18px;
  width: 327px;
  border-radius: 32px;
  padding: 16px 32px;
  border: none;
  background-color: white;
}

.btn-info {
  border: 1px solid var(--color-primary);
  color: var(--color-primary);
  display: flex;
  justify-content: center;
  gap: 16px;
}

.reserva {
  background-color: var(--color-primary);
  color: white;
  text-align: center;
}

.arrow {
  width: 1rem;
  height: 1rem;
}

@media only screen and (min-width: 992px) {
  h1 {
    width: 710px;
    font-weight: 700;
    font-size: 72px;
    line-height: 72px;
  }

  p {
    width: 652px;
    font-weight: 700;
    font-size: 22px;
    line-height: 28px;
  }

  .logo {
    width: 120px;
    height: 54px;
    margin-top: 68px;
    margin-left: 68px;
  }

  .head {
    flex-direction: row-reverse;
    justify-content: space-around;
  }

  .info {
    gap: 32px;
    align-items: flex-start;
    justify-content: center;
  }

  .image {
    width: 754.11px;
    height: auto;
    
  }

  .btns {
    flex-direction: row;
    margin-top: 47px;
  }
}
</style>
