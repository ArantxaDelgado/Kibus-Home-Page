<template>
  <div class="container">

    <div class="img-container">
      <img class="top" src="../../../public/images/app.png" />
      <img class="bottom" src="../../../public/images/comedero.png" />
    </div>

    <div class="column">
      <div class="section">
        <img class="icon" src="../../../public/images/programable icon.png" />
        <p>Programmable 24h</p>
      </div>
      <div class="section">
        <img class="icon" src="../../../public/images/Group 62.png" />
        <p>Agua siempre disponible</p>
      </div>
      <div class="section">
        <img
          class="icon"
          src="../../../public/images/cantidad personalizable.png"
        />
        <p>Cantidad personalizable</p>
      </div>
      <div class="section">
        <img class="icon" src="../../../public/images/function.png" />
        <p>Histórial de las comidas</p>
      </div>

      <div class="section">
        <img class="icon" src="../../../public/images/Fácil de usar y lavar.png" />
        <p>Histórial de las comidas</p>
      </div>
      <div class="section">
        <img
          class="icon"
          src="../../../public/images/App para iOS y Android.png"
        />
        <p>App para iOS y Android</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
  p {
    width: 158px;
    text-align: center;
  }

.container {
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
}
.column {
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  justify-content: center;
}

.section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
}

.icon {
  width: 37.9px;
  height: auto;
}

.img-container {
  margin: 0 auto;
  position: relative;
  height: 430px;
}

.top {
  width: 150px;
  position: absolute;
  left: 132px;
  top: 100px;
  z-index: 10;
}

.bottom{
  width: 327px;
}

@media only screen and (min-width: 992px) {
  p {
    width: 215px;
    text-align: left;
  }

.container {
  flex-direction: row-reverse;
  margin-left: 200px;
}
.column {
  flex-direction: column;
  justify-content: flex-start;
}

.section {
  flex-direction: row;
  gap: 20px;
}

.icon {
  width: 42px;
}

.img-container {
  height: 650px;
}

.top {
  width: 272px;
  left: 350px;
}

.bottom{
  width: 609.22px;
}
}
</style>
