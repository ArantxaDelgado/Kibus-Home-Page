<template>
  <div class="home">
    <img
      class="logo"
      src="../../public/images/logo.png"
      alt="logotipo de kibus"
    />
    <div class="head">
      <img class="image" src="../../public/images/imagen.png" />
      <div class="info">
        <h1>Alimentar bien a tu perro es más fácil que nunca</h1>
        <p>
          La nueva alimentación canina ha llegado. Con Kibus, podrás ofrecer a
          tu compañero comida sana, rica y recién cocinada de una forma fácil y
          cómoda
        </p>

        <div class="btns">
          <button class="btn reserva">Reserva Ahora</button>
          <button class="btn btn-info">
            Quiero Saber Más
            <img
              class="arrow"
              src="../../public/images/Arrow - Right Circle.png"
            />
          </button>
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
  width: 710px;
  font-size: 72px;
  font-weight: 700;
  line-height: 72px;
}

p {
  width: 652px;
  font-weight: 700;
  color: var(--font-color-secondary);
}

.logo {
  height: 54px;
  width: 120px;
  margin-bottom: 32px;
}
.home {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 170px;
}

.head {
  display: flex;
  width: 100vw;
}

.info {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.image {
  width: 700px;
  height: 691.64px;
  position: absolute;
  left: 720.47px;
  top: 140px;
}

.btns {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 21px;
  margin-top: 32px;
}

.btn {
  border-radius: 32px;
  padding: 16px 32px;
  border: none;
  background-color: white;
}

.btn-info {
  border: 1px solid var(--color-primary);
  color: var(--color-primary);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.reserva {
  background-color: var(--color-primary);
  color: white;
}

.arrow {
  width: 1rem;
  height: 1rem;
}
</style>

