<template>
  <div>
    <div v-show="students.length > 0"> <!-- Список студентов не пустой-->
      <transition-group name="students-list">
        <div class="students" v-for="student in students" :key="`student-${student.id}`">
          <div>
            <div :class="[{'x-active': isActive === student.id}, 'x-item']" @click="isActive=student.id">
              <p><strong>id:</strong> {{ student.id }}</p>
              <p><strong>Имя:</strong> {{ student.name }}</p>
              <p><strong>Возраст:</strong> {{ student.age }}</p>
              <p><strong>Описание:</strong> {{ student.description }}</p>
              <p><strong>Курс:</strong> {{ student.level }}</p>
            </div>
          </div>
          <div class="x-item--actions">
            <x-button class="success" style="margin-right: 5px;" @click="$emit('edit', student)">Изменить</x-button>
            <x-button class="warning" @click="$emit('remove', student)">Удалить</x-button>
          </div>
        </div>
      </transition-group>
    </div>
    <transition name="empty-students">
      <div v-show="students.length === 0" style="color: orangered;"> <!-- Список студентов пустой-->
        Студенты не созданы
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    students: {
      type: Array,
      required: true,
    }
  },
  name: "StudentsList",
  data() {
    return {
      isActive: 0
    }
  }
}
</script>

<style scoped>
.x-active {
  background-color: blueviolet !important;
}
.students-list-enter-active, .students-list-leave-active {
  transition: all 1s;
}

.students-list-move {
  transition: transform .3s;
}

.students-list-enter, .students-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.empty-students-enter-active, .empty-students-leave-active {
  transition: all 1s;
}

.empty-students-enter, .empty-students-leave-to /* .fade-leave-active до версии 2.1.8 */
{
  opacity: 0;
}

.x-item {
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  margin-top: 15px;
  border-radius: 5px;
  background: white;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.x-item--actions {
  display: flex;
  align-self: end;
}

.x-item p {
  margin-top: 5px;
  margin-bottom: 5px;
}
</style>