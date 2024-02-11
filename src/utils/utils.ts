import { PRegister } from '@/utils/types'

export const validateName = (formValues: Partial<PRegister>) => {
  const name = formValues.firstName

  if (!name) {
    return { [formValues.firstName]: 'The data is required!' }
  }

  if (name?.length !== undefined && (name?.length >= 25 || name?.length <= 3)) {
    return { [formValues.firstName]: 'More than 3 and less than 25' }
  }

  return {}
}

export const validateEmail = (formValues: Partial<PRegister>) => {
  const email = formValues.email

  if (!email) {
    return { [formValues.email]: 'The data is required!' }
  }

  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
  if (!emailRegex.test(email)) {
    return {
      [formValues.email]:
        'The email must contain @ or the adjacent index gmail.com, mail.ru, list.ru'
    }
  }

  return {}
}

export const validatePassword = (formValues: Partial<PRegister>) => {
  const password = formValues.password

  if (!password) {
    return { [formValues.password]: 'The data is required!' }
  }

  // Add your custom password strength rules here
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
  if (!passwordRegex.test(password)) {
    return {
      [formValues.password]:
        'Password must be at least 8 characters long and contain at least one letter and one number.'
    }
  }

  return {}
}
