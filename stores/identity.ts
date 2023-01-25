import { defineStore } from 'pinia'

export interface IIdentityState {
  firstName: string
  lastName: string
}

export const useIdentity = defineStore('identity', {
  state: (): IIdentityState => ({
    firstName: 'Chris',
    lastName: 'K',
  }),
  actions: {
    setFirstName(firstName: string) {
      this.firstName = firstName
    },
    setLastName(lastName: string) {
      this.lastName = lastName
    },
    reset() {
      this.firstName = ''
      this.lastName = ''
    },
  },
  getters: {
    fullName() {
      return `${this.firstName} ${this.lastName}`
    },
  },
})
