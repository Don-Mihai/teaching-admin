<script setup lang="ts">
import { computed, ref, defineExpose } from 'vue'
import { validateEmail, validateName, validatePassword } from '../utils/utils'
import { useRouter } from 'vue-router'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'

const router = useRouter()

const formValues = ref({
  email: '',
  password: '',
  firstName: ''
})
const emailError = ref('')
const passwordError = ref('')
const nameError = ref('')

const validateAndSignUp = () => {
  emailError.value = validateEmail(formValues.value)[formValues.value.email] || ''
  passwordError.value = validatePassword(formValues.value)[formValues.value.password] || ''
  nameError.value = validateName(formValues.value)[formValues.value.firstName] || ''

  if (!emailError.value && !passwordError.value && !nameError.value) {
    router.push('/home')
  }
}

const isInvalid = computed(() => !!emailError.value || !!passwordError.value || !!nameError.value)

defineExpose({
  formValues,
  emailError,
  passwordError,
  nameError,
  validateAndSignUp,
  isInvalid
})
</script>

<template>
  <div className="register-form">
    <h2 className="register-form__title">Register</h2>
    <div class="register-form__inputs">
      <InputText v-model="formValues.email" label="Email" fullWidth />
      <span v-if="emailError">{{ emailError }}</span>
      <InputText v-model="formValues.password" label="Password" fullWidth />
      <span v-if="passwordError">{{ passwordError }}</span>
      <InputText v-model="formValues.firstName" label="First name" fullWidth />
      <span v-if="nameError">{{ nameError }}</span>
      <Button @click="validateAndSignUp" variant="contained"> Register </Button>
    </div>
    <router-link :to="'/login/auth'">Alredy signed up?</router-link>
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
