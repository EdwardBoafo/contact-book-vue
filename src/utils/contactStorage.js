const STORAGE_KEY = 'contact-book-contacts'

const starterContacts = [
  {
    id: '1',
    firstName: 'Alice',
    lastName: 'Brown',
    email: 'alice@example.com',
    phone: '613-111-1111'
  },
  {
    id: '2',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@example.com',
    phone: '613-222-2222'
  },
  {
    id: '3',
    firstName: 'Mark',
    lastName: 'Smith',
    email: 'mark@example.com',
    phone: '613-333-3333'
  },
  {
    id: '4',
    firstName: 'Sarah',
    lastName: 'Johnson',
    email: 'sarah@example.com',
    phone: '613-444-4444'
  },
  {
    id: '5',
    firstName: 'Daniel',
    lastName: 'Anderson',
    email: 'daniel@example.com',
    phone: '613-555-5555'
  },
  {
    id: '6',
    firstName: 'Grace',
    lastName: 'Wilson',
    email: 'grace@example.com',
    phone: '613-666-6666'
  }
]

export function getContacts() {
  const storedContacts = localStorage.getItem(STORAGE_KEY)

  if (storedContacts) {
    return JSON.parse(storedContacts)
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(starterContacts))
  return starterContacts
}

export function saveContacts(contacts) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts))
}

export function getContactById(id) {
  const contacts = getContacts()
  return contacts.find((contact) => contact.id === id)
}

export function addContact(contact) {
  const contacts = getContacts()
  contacts.push(contact)
  saveContacts(contacts)
}

export function updateContact(updatedContact) {
  const contacts = getContacts()

  const updatedContacts = contacts.map((contact) => {
    if (contact.id === updatedContact.id) {
      return updatedContact
    }

    return contact
  })

  saveContacts(updatedContacts)
}

export function deleteContact(id) {
  const contacts = getContacts()

  const updatedContacts = contacts.filter((contact) => {
    return contact.id !== id
  })

  saveContacts(updatedContacts)
}