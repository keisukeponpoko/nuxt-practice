<template>
  <section class="container">
    <div class="wrapper">
      ページ移動したよ
      id: {{id}}
      <br>
      <nuxt-link :to="{name: 'index' }">検索</nuxt-link>
      <br>
      <nuxt-link :to="{name: 'id', params: { id: Number(id) + 1 } }">次のページへ</nuxt-link>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id
    }
  }
}
</script>

<style scoped>
.container {
  min-height: 100vh;
  margin: 0;
}
.wrapper {
  max-width: 900px;
  margin: 30px;
}
</style>
