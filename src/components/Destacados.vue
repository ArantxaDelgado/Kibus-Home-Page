<template>
  <div class="destacados">
    <img src="../../public/images/contenido izquierdo.png" />

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
.destacados {
  display: flex;
  align-items: center;
}

.title {
  width: 425px;
  font-size: 32px;
  font-weight: 700;
  line-height: 43.2px;
  margin-bottom: 16px;
}

.info {
  width: 459px;
  height: 168px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #111111;
}

.btns {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 21px;
  margin-top: 30px;
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
