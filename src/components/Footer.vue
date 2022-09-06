<template>
  <div class="footer">
    <div class="logo-container">
      <img
        class="logo"
        src="../../public/images/KIBUS LOGO, COLOUR + ELEMENTS-08 1.png"
      />
    </div>
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
  align-items: center;
  flex-direction: column;
  padding-top: 135px;
  padding-bottom: 135px;
}

.logo-container {
  width: 327px;
}

.container {
  display: flex;
  flex-direction: column;
  gap: 48px;
}

.section {
  width: 327px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.section-especial {
  display: flex;
  gap: 20px;
}

.title {
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
}

.info {
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
}

.logo {
  width: 44px;
  height: 38px;
}

.icons {
  height: 38px;
  width: auto;
}

.pago {
  width: 58px;
  height: 36px;
}

@media only screen and (min-width: 992px) {

  .footer {
    align-items: baseline;
    padding: 59px 80px;
  }
.logo-container {
  width: 327px;
}

.container {
  flex-direction: row;
  gap: 105px;
}

.section {
  width: 380px;
}

.section-especial {
  gap: 40px;
}

.title {
  font-size: 22px;
  line-height: 28px;
}

.icons {
  height: 38px;
  width: auto;
}

.pago {
  width: 58px;
  height: 36px;
}
}
</style>
