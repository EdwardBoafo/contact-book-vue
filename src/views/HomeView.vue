<script>
import { RouterLink } from 'vue-router'
import { getContacts } from '../utils/contactStorage.js'

export default {
  components: {
    RouterLink
  },

  data() {
    return {
      search: '',
      contacts: []
    }
  },

  created() {
    this.contacts = getContacts()
  },

  computed: {
    filteredContacts() {
      return [...this.contacts]
        .filter((contact) => {
          const fullName = `${contact.firstName} ${contact.lastName}`.toLowerCase()
          return fullName.includes(this.search.toLowerCase())
        })
        .sort((a, b) => {
          const lastNameCompare = a.lastName.localeCompare(b.lastName)

          if (lastNameCompare !== 0) {
            return lastNameCompare
          }

          return a.firstName.localeCompare(b.firstName)
        })
    }
  }
}
</script>

<template>
  <section>
    <h1>All Contacts</h1>
    <p>Search and view your contacts below.</p>

    <input
      v-model="search"
      type="text"
      placeholder="Search by first or last name"
    />

    <div style="margin-top: 20px;">
      <RouterLink to="/new">Add Contact</RouterLink>
    </div>

    <div v-if="filteredContacts.length" style="margin-top: 20px;">
      <div
        v-for="contact in filteredContacts"
        :key="contact.id"
        style="border: 1px solid #ccc; padding: 16px; margin-bottom: 12px; border-radius: 8px;"
      >
        <RouterLink :to="`/contact/${contact.id}`">
          <strong>{{ contact.firstName }} {{ contact.lastName }}</strong>
        </RouterLink>
        <p>{{ contact.email }}</p>
        <p>{{ contact.phone }}</p>
      </div>
    </div>

    <p v-else style="margin-top: 20px;">No contacts found.</p>
  </section>
</template>