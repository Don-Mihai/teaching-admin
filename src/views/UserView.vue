<script lang="ts" setup>
import axios from 'axios'
import { IUser } from '../utils/types'
import { ref, computed } from 'vue'
import { onMounted } from 'vue'
import InputText from 'primevue/inputtext'

const users = ref<IUser[]>([])
const searchQuery = ref<string>('')

const getUser = async (): Promise<IUser[]> => {
  const response = await axios.get<IUser[]>('http://localhost:3001/users')
  return response.data
}

const filteredUsers = computed(() => {
  console.log(users.value, searchQuery.value)
  return users.value.filter(
    (user) =>
      user.firstName.toLowerCase().startsWith(searchQuery.value.toLowerCase()) ||
      user.lastName.toLowerCase().startsWith(searchQuery.value.toLowerCase())
  )
})

onMounted(async () => {
  users.value = await getUser()
})
</script>

<template>
  <main>
    <InputText type="text" v-model="searchQuery" placeholder="Search by name or last name" />
    <div v-if="filteredUsers.length === 0">No users found.</div>
    <div v-else>
      <div v-for="user in filteredUsers" :key="user.id" class="user__list">
        <h2 class="user__title">{{ user.firstName }} - {{ user.lastName }}</h2>
      </div>
    </div>
  </main>
</template>

<style scoped>
.user__list {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 10px;
  max-height: 100%;
  width: 100%;
  background-color: #fff;
}
.user__title {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 24px;
  font-size: 24px;
  font-weight: normal;
  border: 1px solid #000;
  border-radius: 8px;
  box-shadow: 5px 5px 10px 2px rgba(0, 0, 0, 0.5);
}
</style>
