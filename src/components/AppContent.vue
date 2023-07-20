<template>
  <div class="x-content">
    <x-dialog v-model="createFormVisible">
      <create-form @create="addStudent"></create-form>
    </x-dialog>
    <div class="x-actions">
      <x-input style="width: 100%; margin-right: 10px" v-model="searchText" v-focus placeholder="Поиск..."></x-input>
      <x-select v-model="selectedSort" style="margin-right: 10px" :options="sortOptions"></x-select>
      <x-button
          @click="createFormVisible=true"
          style="margin-right: 10px"
          class="success"
      >
        Добавить
      </x-button>
    </div>
    <students-list :students="sortedAndSearched" @remove="removeStudent"></students-list>
  </div>
</template>

<script>
import CreateForm from "@/components/CreateForm.vue";
import StudentsList from "@/components/StudentsList.vue";

export default {
  name: "AppContent",
  components: {StudentsList, CreateForm},
  data() {
    return {
      students: [],
      name: "",
      age: "",
      description: "",
      level: "",
      createFormVisible: false,
      selectedSort: "",
      sortOptions: [
        {value: 'name', name: 'По имени'},
        {value: 'description', name: 'По описанию'},
      ],
      searchText: "",
    }
  },
  computed: {
    sortedStudents() {
      return [...this.students].sort((stud1, stud2) => stud1[this.selectedSort]?.localeCompare(stud2[this.selectedSort]))
    },
    sortedAndSearched() {
      return this.sortedStudents.filter(student => student.name.toLowerCase().includes(this.searchText.toLowerCase()))
    }
  },
  methods: {
    addStudent(student) {
      this.students.push(student)
      this.createFormVisible = false
    },
    removeStudent(student) {
      this.$ajax.delete(`api/students/${student.id}`).then((response) => {
        this.students = this.students.filter(elem => elem.id !== student.id)
      })
    },
  },
  mounted() {
    this.$ajax.get('api/students').then((response) => {
      this.students = response.data
    })
  }
}
</script>

<style scoped>
.x-actions {
  display: flex;
  margin-top: 15px;
  align-items: baseline;
}
</style>