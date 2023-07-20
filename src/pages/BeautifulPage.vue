<template>
  <v-layout justify-center>
    <v-flex xs9>
      <v-toolbar class="rounded-b-lg">
        <v-flex xs3>
          <p> Максим Хабаров</p>
        </v-flex>
        <v-flex xs6>
          <p> Анекдот </p>
        </v-flex>
        <v-flex xs3>
          <v-btn outlined color="primary" class="mx-auto">Выход</v-btn>
        </v-flex>
      </v-toolbar>

      <v-layout row class="mt-5">
        <v-flex xs7>
          <v-text-field
              label="Поиск"
              placeholder="Что ищем?"
              rounded
              outlined
          ></v-text-field>
          <v-flex grow>
            <v-select :items="items" label="сортировка" outlined></v-select>
          </v-flex>
          <v-flex shrink>
            <v-btn outlined color="success">Добавить</v-btn>
          </v-flex>
        </v-flex>
      </v-layout>

      <v-layout row class="mt-5" justify-space-between>
        <v-card
            max-height="344"
            outlined
            v-for="student in students"
            :key="`student-${student.id}`"
            class="mt-5"
        >
          <v-list-item three-line>
            <v-list-item-content>
              <div class="text-overline mb-4">Карточка студента №{{student.id}}</div>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-layout>

    </v-flex>
  </v-layout>
</template>

<script>

export default {
  name: "BeautifulPage",
  data() {
    return {
      items: ['1', '2', '3', '4'],
      students: []
    }
  },
  mounted() {
    this.$ajax.get('api/students').then((response) => {
      this.students = response.data
    })
  }
}
</script>

<style scoped>

</style>