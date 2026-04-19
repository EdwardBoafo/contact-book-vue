<script>
import { getContactById, updateContact } from '../utils/contactStorage.js'

export default {
  data() {
    return {
      id: '',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      contactFound: true
    }
  },

  created() {
    const contactId = this.$route.params.id
    const contact = getContactById(contactId)

    if (contact) {
      this.id = contact.id
      this.firstName = contact.firstName
      this.lastName = contact.lastName
      this.email = contact.email
      this.phone = contact.phone
    } else {
      this.contactFound = false
    }
  },

  methods: {
    saveUpdatedContact() {
      const updatedContact = {
        id: this.id,
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        phone: this.phone
      }

      updateContact(updatedContact)
      this.$router.push(`/contact/${this.id}`)
    }
  }
}
</script>

<template>
  <section v-if="contactFound">
    <h1>Edit Contact</h1>

    <form @submit.prevent="saveUpdatedContact">
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

      <button type="submit" style="margin-top: 16px;">Update Contact</button>
    </form>
  </section>

  <section v-else>
    <h1>Contact not found</h1>
  </section>
</template>