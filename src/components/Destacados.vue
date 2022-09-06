<script setup>
import Slider from "./Slider.vue";
</script>

<template>
  <div class="destacados">
    <!-- <img src="../../public/images/contenido izquierdo.png" /> -->
    <Slider />

    <div class="text">
      <p class="title">Mejor para ellos, más fácil y cómodo para ti</p>
      <p class="info">
        Con Kibus, nunca tendrás que preocuparte de cómo ofrecer una dieta sana
        y natural a tu perro de forma cómoda y rápida. Nuestro dispositivo
        cocina automáticamente la cantidad exacta en cada comida e incluso lo
        puedes programar a través de la app. Tu perro disfrutará comida de
        casera de primera calidad, con el mínimo esfuerzo.
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
</template>

<script>
export default {};
</script>

<style scoped>
img {
  width: 438px;
  height: auto;
}

.destacados {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
}

.text {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.title {
  width: 327px;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
}

.info {
  width: 321px;
  height: auto;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #111111;
}

.btns {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.btn:hover {
  background-color: var(--color-primary-light);
}

.btn {
  border-radius: 32px;
  height: 50px;
  border: none;
  font-weight: 600;
font-size: 16px;
line-height: 18px;
}

.btn-info {
  border: 1px solid var(--color-primary);
  color: var(--color-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  background-color: var(--myWhite);
}

.reserva {
  background-color: var(--color-primary);
  color: white;
}

.arrow {
  width: 1rem;
  height: 1rem;
}

@media only screen and (min-width: 992px) {
  img {
  width: 649.91px;
}

.destacados {
  flex-direction: row;
  justify-content: space-evenly;
}

.title {
  width: 425px;
  font-size: 36px;
  line-height: 43px;
}

.info {
  width: 459px;
}

.btns {
  flex-direction: row;
}
.btn {
  padding: 16px 32px;
}
}
</style>
