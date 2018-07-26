<template>
  <div>
    <div class='wrapper'>
      <input class='form' type='text' @input="updateValue" v-model='keyword' placeholder="ゴミ名を入力ください">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      keyword: ''
    }
  },
  watch: {
    keyword: function(val) {
      if (this.keyword != '') {
        this.$store.dispatch('searchItems', this.keyword)
      }
    }
  },
  methods: {
    updateValue: function(event) {
      this.keyword = event.target.value
    }
  }
}
</script>

<style scoped>
.wrapper {
  background-color: #fff;
  height: 60px;
  vertical-align: top;
  border-radius: 2px;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08);
  transition: box-shadow 200ms cubic-bezier(0.4, 0.0, 0.2, 1);
}

.form {
  height: 100%;
  width: 100%;
  font-size: 20px;
  padding: 0 10px;
}
</style>
