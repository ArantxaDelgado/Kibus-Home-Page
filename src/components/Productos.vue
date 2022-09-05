<template>
  <div class="container">
    <div class="column">
      <div class="section">
        <img class="icon" src="../../public/images/programable icon.png" />
        <p>Programmable 24h</p>
      </div>
      <div class="section">
        <img class="icon" src="../../public/images/Group 62.png" />
        <p>Agua siempre disponible</p>
      </div>
      <div class="section">
        <img
          class="icon"
          src="../../public/images/cantidad personalizable.png"
        />
        <p>Cantidad personalizable</p>
      </div>
      <div class="section">
        <img class="icon" src="../../public/images/function.png" />
        <p>Histórial de las comidas</p>
      </div>

      <div class="section">
        <img class="icon" src="../../public/images/Fácil de usar y lavar.png" />
        <p>Histórial de las comidas</p>
      </div>
      <div class="section">
        <img
          class="icon"
          src="../../public/images/App para iOS y Android.png"
        />
        <p>App para iOS y Android</p>
      </div>
    </div>

    <img class="front" src="../../public/images/app.png" />
    <img class="back" src="../../public/images/comedero.png" />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
    max-width: 1440px;
  display: flex;
  padding-left: 150px;
  align-items: center;
}
.column {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.section {
  display: flex;
  align-items: center;
  gap: 16px;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
}

.icon {
  width: 42px;
  height: auto;
}

.back {
  position: absolute;
  left: 622px;
  top: 2150px;
  width: 609.22px;
  height: 551.49px;
}

.front {
  position: absolute;
  left: 1044.06px;
  top: 2279px;
  z-index: 10;
  width: 272px;
  height: 521px;
}
</style>
