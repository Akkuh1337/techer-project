<template>
  <button class="x-btn" v-on="$listeners">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "XButton"
}
</script>

<style scoped>
.x-btn {
  border: 1px solid #0738fd;
  background-color: #0738fd;
  color: white;
  padding: 14px 28px;
  margin-top: 5px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
}
</style>