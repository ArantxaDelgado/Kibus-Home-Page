<template>
  <form class="form">
  <label class="title" for="name">Nombre de la Receta</label>
  <input class=".info" type="text" id="fname" name="fname" value="" placeholder="Pollo y Pimiento">

  <label class="title" for="desc">Descripción</label>
  <input class=".info" type="text" id="desc" name="desc" value="" placeholder="Energética, con ingredientes antioxidantes">

  <label class="title" for="rec">Receta</label>
  <textarea class=".info" name="receta" form="usrform" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et placerat velit. Vivamus porttitor nulla eu sollicitudin rhoncus. Morbi condimentum. "></textarea>

  <input class="btn" type="submit" value="Submit">
</form> 
</template>

<script>
export default {

}
</script>

<style scoped>
.form{
    margin: 0 auto;
    margin-top: 10vh;
    width: 80vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.title {
    font-size: 28px;
  font-weight: 700;
  line-height: 32px;
}

.info {
  font-weight: 700;
  line-height: 22px;
}

.btn {
  font-weight: 600;
  font-size: 16px;
  line-height: 18px;
  border-radius: 32px;
  padding: 16px 32px;
  border: none;
  background-color: var(--color-primary);
  color: var(--myWhite);
}

.btn:hover {
  background-color: var(--color-primary-light);
  color: black;
}

</style>