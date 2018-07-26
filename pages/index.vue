<template>
  <section class="container">
    <div class="wrapper">
      <Title/>
      <search-box/>
      <result-box/>
      <nuxt-link :to="{name: 'id', params: { id: 1 } }">SPAお試しページ</nuxt-link>
    </div>
  </section>
</template>

<script>
import Title from '~/components/Title.vue'
import SearchBox from '~/components/SearchBox.vue'
import ResultBox from '~/components/ResultBox.vue'

export default {
  components: {
    Title,
    SearchBox,
    ResultBox
  },
  fetch ({ store }) {
    return store.dispatch('setInfo', {})
  },
  head () {
    return {
        title: 'タイトル',
        meta: [
          { hid: 'description', name: 'description', content: 'カスタマイズされたDescription' }
        ]
      }
  },
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
