<template>
  <div>
    <form class="x-form" @submit.prevent>
      <h3>Добавить студента</h3>
      <x-input type="text" placeholder="Имя" v-focus v-model.trim="student.name"/>
      <x-input type="text" placeholder="Возраст" v-model="student.age"/>
      <x-input type="text" placeholder="Описание" v-model="student.description"/>
      <x-input type="text" placeholder="Курс" v-model.number="student.level"/>
      <x-button @click="addStudent">Добавить</x-button>
    </form>
  </div>
</template>

<script>
export default {
  name: "CreateForm",
  data() {
    return {
      student: {
        name: '',
        age: '',
        description: '',
        level: '',
      }
    }
  },
  methods: {
    addStudent() {
      this.$ajax.post('api/students/', {...this.student}).then(() => {
        this.$emit('create', {...this.student})
        this.student.name = ''
        this.student.age = ''
        this.student.description = ''
        this.student.level = ''
      })

    }
  }

}
</script>

<style scoped>
.x-form {
  background: white;
  padding: 1px 10px 10px 10px;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
}
</style>