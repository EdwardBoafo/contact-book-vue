<script>
import { RouterLink } from 'vue-router'
import { getContactById, deleteContact } from '../utils/contactStorage.js'

export default {
  components: {
    RouterLink
  },

  data() {
    return {
      contact: null
    }
  },

  created() {
    const contactId = this.$route.params.id
    this.contact = getContactById(contactId)
  },

  methods: {
    removeContact() {
      deleteContact(this.contact.id)
      this.$router.push('/')
    }
  }
}
</script>
<template>
  <section v-if="contact">
    <h1>Contact Details</h1>

    <p><strong>First Name:</strong> {{ contact.firstName }}</p>
    <p><strong>Last Name:</strong> {{ contact.lastName }}</p>
    <p><strong>Email:</strong> {{ contact.email }}</p>
    <p><strong>Phone:</strong> {{ contact.phone }}</p>

    <div style="margin-top: 20px;">
      <RouterLink to="/">Back to Home</RouterLink>
    </div>

    <div style="margin-top: 12px;">
      <RouterLink :to="`/edit/${contact.id}`">Edit Contact</RouterLink>
    </div>

    <div style="margin-top: 12px;">
      <button @click="removeContact">Delete Contact</button>
    </div>
  </section>

  <section v-else>
    <h1>Contact not found</h1>
    <RouterLink to="/">Back to Home</RouterLink>
  </section>
</template>