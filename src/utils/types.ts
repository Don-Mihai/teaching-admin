export interface PRegister {
  firstName: string
  password: string
  email: string
}

export interface IUser {
  id: number
  token?: string
  email: string
  password: string
  role: ROLES
  groupId: string | number
  firstName?: string
  lastName?: string
  url?: string
}

export enum ROLES {
  ADMIN = 'ADMIN',
  TEACHER = 'TEACHER',
  STUDENT = 'STUDENT'
}
