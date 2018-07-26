<template>
  <div>
    <ul class="items" v-show="items.length > 0">
      <li class="item" v-for="item in items" :key="item.name">
        <div class="main">
          <span>{{ item.name }}</span>
          ｜
          <span>{{ getDateById([item.type]) }}</span>
        </div>
        <p class="sub" v-if="item.text">※ {{ item.text }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    items () {
      return this.$store.getters.getItems
    },
    weeks () {
      return this.$store.getters.getWeeks
    },
    types () {
      return this.$store.getters.getTypes
    }
  },
  methods: {
    getDateById: function (typeId) {
      const week = this.weeks[typeId] || ''
      const type = `（ ${this.types[typeId]} ）` || ''
      return week + type
    }
  }
}
</script>

<style scoped>
.items {
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08);
  transition: box-shadow 200ms cubic-bezier(0.4, 0.0, 0.2, 1);
  margin: 0;
  padding: 0;
}

.item {
  list-style: none;
  border: 1px solid #ccc;
  padding: 10px;
}

.main {
  font-size: 20px;
}
.sub {
  font-size: 16px;
}
</style>
