<template>
  <div>
    <h1 class='title'>
      {{address}}
    </h1>
  </div>
</template>

<script>
export default {
  computed: {
    address () {
      return this.$store.getters.getAddress
    }
  }
}
</script>

<style scoped>
.title {
  margin: 10px;
}
</style>
