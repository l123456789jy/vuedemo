<template>
  <div>
    <div class="home">
      <button style="background-color: red;width:100%"></button>
      <button style="background-color: yellow;width:100%"></button>
      <button style="background-color: oldlace;width:100%"></button>
      <button style="background-color: cadetblue;width:100%"></button>
      <button style="background-color:blue;width:100%"></button>
    </div>

    <div class="secode">
      <div class="thild">
        <span style="background-color: #42b983;height: 50%; width: 100%">1</span>
        <span style="background-color: firebrick;height: 50%;  width: 100%">2</span>
      </div>
      <span style="background-color: fuchsia;height: 200px; width: 50%">3</span>
    </div>

  </div>
</template>

<script>
export default {
  name: "flexTest"
}
</script>

<style scoped>

.home {
  justify-content: space-around;
  display: flex;
  height: 200px;
}

.secode{
  justify-content: space-around;
  flex-direction: row;
  display: flex;
  height: 200px;
}

.thild{
  justify-content: space-around;
  width: 50%;
  flex-direction: column;
  display: flex;
  height: 200px;
}


</style>