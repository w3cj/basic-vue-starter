<template>
  <div class="col s12 m6">
    <div class="card">
      <div class="card-image">
        <img :src="item.img">
        <span class="card-title">{{item.title}}</span>
      </div>
    </div>
  </div>
</template>

<script>
module.exports = {
  props: ['item']
}
</script>

<style>
.cat-card {
  max-width: 800px;
}
</style>
