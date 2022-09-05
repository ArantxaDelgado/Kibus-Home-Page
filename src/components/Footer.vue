<template>
  <div class="footer">
    <img
      class="logo"
      src="../../public/images/KIBUS LOGO, COLOUR + ELEMENTS-08 1.png"
    />
    <div class="container">
      <div class="section">
        <p class="title">Sobre KIBUS</p>
        <p class="info">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation.
        </p>
      </div>

      <div class="section">
        <p class="title">Políticas</p>
        <p class="info">Políticas de Privacidad</p>
        <p class="info">Condiciones de uso</p>
        <p class="info">Cookies</p>
        <p class="info">FAQ</p>
      </div>

      <div class="section-especial">
        <img
          class="icons face"
          src="../../public/images/facebook.png"
          alt="Facebook"
        />
        <img
          class="icons insta"
          src="../../public/images/instagram.png"
          alt="Instagram"
        />
        <img
          class="icons youtube"
          src="../../public/images/youtube.png"
          alt="Youtube"
        />
      </div>

      <div class="section">
        <p>Metodos de pago</p>
        <div class="section-especial">
            <img class="pago" src="../../public/images/mastercard.png" />
            <img class="pago" src="../../public/images/visa.png" />
            <img class="pago" src="../../public/images/apple pay.png" />
            <img class="pago" src="../../public/images/google pay.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  color: var(--myWhite);
  background-color: #111;
  display: flex;
  flex-direction: column;
  margin-left: -68px;
  margin-top: 250px;
  padding: 58.69px 80px;

}

.container {
  display: flex;
  gap: 105px;
}

.section {
  width: 380px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.section-especial {
  width: 380px;
  display: flex;
  gap: 6px;
}

.title {
  font-weight: 700;
  font-size: 22px;
  line-height: 28px;
}

.info {
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
}

.logo {
  width: 44px;
  height: 38px;
}

.icons {
  margin-left: 40px;
  height: 20px;
  width: auto;
}

.pago {
    width: 58px;
    height: 36px;
}
</style>
