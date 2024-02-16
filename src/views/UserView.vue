<script setup lang="ts">
import axios from 'axios'
import { IUser, ROLES } from '../utils/types'
import { ref, computed } from 'vue'
import { onMounted } from 'vue'
import InputText from 'primevue/inputtext'
import Checkbox from 'primevue/checkbox'

const users = ref<IUser[]>([])
const searchQuery = ref<string>('')

const getUser = async (): Promise<IUser[]> => {
  const response = await axios.get<IUser[]>('http://localhost:3001/users')
  return response.data.map((user) => ({ ...user, isTeacher: false, isStudent: false }))
}

const filteredUsers = computed(() => {
  return users.value.filter(
    (user) =>
      user.firstName.toLowerCase().startsWith(searchQuery.value.toLowerCase()) ||
      user.lastName.toLowerCase().startsWith(searchQuery.value.toLowerCase())
  )
})

onMounted(async () => {
  users.value = await getUser()
})

const updateUserRole = async (user: IUser, role: ROLES) => {
  try {
    const updatedUser = { ...user, role }
    await axios.put(`http://localhost:3001/users/${user.id}`, updatedUser)
    if (role === ROLES.TEACHER) {
      user.isStudent = false
    } else if (role === ROLES.STUDENT) {
      user.isTeacher = false
    }
  } catch (error) {
    console.error('Ошибка при обновлении роли пользователя:', error)
  }
}
</script>

<template>
  <main>
    <InputText type="text" v-model="searchQuery" placeholder="Search by name or last name" />
    <div v-if="filteredUsers.length === 0">No users found.</div>
    <div v-else>
      <div v-for="user in filteredUsers" :key="user.id" class="user__list">
        <h2 class="user__title">
          {{ user.firstName }} - {{ user.lastName }}
          <ul class="user__check">
            <Checkbox
              v-model="user.isTeacher"
              :inputId="'teacher_' + user.id"
              name="teacher"
              :value="true"
              @change="updateUserRole(user, ROLES.TEACHER)"
            />
            <label :for="'teacher_' + user.id" class="ml-2"> Teacher </label>
            <Checkbox
              v-model="user.isStudent"
              :inputId="'student_' + user.id"
              name="student"
              :value="true"
              @change="updateUserRole(user, ROLES.STUDENT)"
            />
            <label :for="'student_' + user.id" class="ml-2"> Student </label>
          </ul>
        </h2>
      </div>
    </div>
  </main>
</template>

<style scoped>
.user__list {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 10px;
  max-height: 100%;
  width: 100%;
  background-color: #fff;
}
.user__title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 24px;
  font-size: 24px;
  font-weight: normal;
  border: 1px solid #000;
  border-radius: 8px;
  box-shadow: 5px 5px 10px 2px rgba(0, 0, 0, 0.5);
}
</style>
