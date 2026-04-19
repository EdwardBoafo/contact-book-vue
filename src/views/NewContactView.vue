<script>
import { addContact } from '../utils/contactStorage.js'

export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      phone: ''
    }
  },

  methods: {
    saveNewContact() {
      const newContact = {
        id: Date.now().toString(),
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        phone: this.phone
      }

      addContact(newContact)
      this.$router.push(`/contact/${newContact.id}`)
    }
  }
}
</script>

<template>
  <section>
    <h1>Add New Contact</h1>

    <form @submit.prevent="saveNewContact">
      <div>
        <label>First Name</label><br />
        <input v-model="firstName" type="text" required />
      </div>

      <div style="margin-top: 12px;">
        <label>Last Name</label><br />
        <input v-model="lastName" type="text" required />
      </div>

      <div style="margin-top: 12px;">
        <label>Email</label><br />
        <input v-model="email" type="email" required />
      </div>

      <div style="margin-top: 12px;">
        <label>Phone</label><br />
        <input v-model="phone" type="text" />
      </div>

      <button type="submit" style="margin-top: 16px;">Save Contact</button>
    </form>
  </section>
</template>