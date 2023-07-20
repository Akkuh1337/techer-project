<template>
  <input :value="value" class="x-input" @input="updateInput">
</template>

<script>
export default {
  name: "XInput",
  props: {
    value: [String, Number]
  },
  methods: {
    updateInput(event) {
      this.$emit('input', event.target.value)
    }
  }
}
</script>

<style scoped>
.x-input {
  padding: 14px;
  border: 1px solid #bdbdbd;
  font-size: 16px;
  border-radius: 5px;
  outline: 0;
  margin-bottom: 10px;
}

.x-input:focus {
  border-color: #bdbdbd;
  box-shadow: 0 0 0 0.1rem rgba(158, 158, 158, 0.25);
}
</style>