<script setup lang="ts">
import { ref } from 'vue'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import router from '@/router'

let formValues = ref({ email: '', password: '', firstName: '' })

const onSignUp = async () => {
  const [error, isValid] = validate()

  setError(error)

  if (isValid) {
    const user = (await axios.post('users', formValues)).data
    localStorage.setItem('userId', user.id)
    navigate('/modules')
  }
}
</script>

<template>
  <div className="register-form">
    <h2 className="register-form__title">Register</h2>
    <div className="register-form__inputs">
      <InputText v-model="formValues.email" label="Email" fullWidth />
      <InputText v-model="formValues.password" label="Password" fullWidth />
      <InputText v-model="formValues.firstName" label="First name" fullWidth />
      <Button @click="onSignUp" variant="contained"> Register </Button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.register-form {
  width: 400px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 3px #000;

  &__title {
    font-size: 30px;
    margin-bottom: 20px;
  }

  &__inputs {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
}
</style>
