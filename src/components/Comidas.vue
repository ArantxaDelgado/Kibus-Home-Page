<template>
  <div class="container">
    <div class="card">
      <img class="foto" src="../../public/images/PolloPimiento.png" />
      <p class="nombre">Pollo y Arroz</p>
      <p class="desc">Energética, con ingredientes antioxidantes</p>
    </div>

    <div class="card">
      <img class="foto" src="../../public/images/SalmonArroz.png" />
      <p class="nombre">Salmón y Arroz</p>
      <p class="desc">Ipoalergénica, con Omega 3 y 6</p>
    </div>

    <div class="card">
      <img class="foto" src="../../public/images/CerdoCalabaza.png" />
      <p class="nombre">Cerdo y Calabaza</p>
      <p class="desc">para dar vitalidad buena para el sistema inmune</p>
    </div>

    <div class="card">
      <img class="foto" src="../../public/images/CerdoCalabaza.png" />
      <button class="btn">
        Tu Receta <img class="arrow" src="../../public/images/Stroke 3.png" />
      </button>
      <p class="desc">Ayúdanos a decidir nuestra nueva receta</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  margin: 0 auto;
  display: flex;
  width: 351px;
  height: 398px;
  background-color: var(--myWhite);
  border-radius: 15px;
  box-shadow: 0px 14px 37px 19px rgba(126, 126, 126, 0.08);
  overflow: scroll;
}

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.desc {
  width: 199px;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: var(--font-color-secondary);
  text-align: center;
}

.nombre {
  width: 199px;
  font-weight: 700;
  font-size: 22px;
  line-height: 28px;
  text-align: center;
}

.foto {
  width: auto;
  height: 202.5px;
}

.btn {
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  background-color: var(--myGrey);
  border-radius: 22.5px;
  color: var(--myWhite);
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 30px;
  border: none;

}

.arrow {
  height: 16px;
  width: 16px;
}

@media only screen and (min-width: 992px) {
  .container {
  width: 1281px;
  height: 462px;
  justify-content: space-around;
  overflow: hidden;
}

.nombre {
  width: 202px;
  font-size: 28px;
}

}
</style>
