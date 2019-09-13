<template>
  <div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>

  </div>

</template>

<script>
export default {
  name: "App",

}
</script>
<style scoped>
div{
  height: 100%;
}
</style>
