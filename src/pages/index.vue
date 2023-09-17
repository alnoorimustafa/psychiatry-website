<script setup lang="ts">
import { VDataTable } from 'vuetify/labs/VDataTable'

const data = ref([])
const searchField = ref('')

const headers = [
  { title: 'NAME', key: 'Name' },
  { title: 'Added By', key: 'Added by' },
  { title: 'Added Date', key: '' },
]

const findAll = async () => {
  try {
    console.log(await fetch('http://localhost:3000/find'))
  }
  catch (err) {
    console.error(err)
  }
}

const search = async () => {
  if (searchField.value === '') {
    const res = await fetch(`http://localhost:3000/search/${searchField.value}`)

    if (res) {
      console.log(res)
      data.value = res
    }
  }
  else {
    console.log(searchField.value)
    data.value = searchResults
  }
}

const click = async (event, value) => {
  const patient_id = value.item.columns.id

  console.log(patient_id)

  const res = await fetch(`http://localhost:3000/patients/${patient_id}`)

  console.log(res)
}

onMounted(() => {
  findAll()
})
</script>

<template>
  <div>
    <VCard
      title="Want to integrate JWT? 🔒"
      class="mb-6"
    >
      <VCardText>We carefully crafted JWT flow so you can implement JWT with ease and with minimum efforts.</VCardText>
      <VCardText>Please read our  JWT Documentation to get more out of JWT authentication.</VCardText>
    </VCard>
    <VCard
      title="Search Patients"
      class="mb-6"
    >
      <div class="v-card-text">
        <AppTextField
          v-model="searchField"
          class="mb-4"
        />
        <VBtn
          color="primary"
          @click="search"
        >
          Search
        </VBtn>
      </div>
    </VCard>

    <VCard
      title="Patients"
      class="mb-6"
    >
      <div class="v-card-text">
        <VDataTable
          :headers="headers"
          :items="data"
          :items-per-page="6"
          :on-click:row="click"
        />
      </div>
    </VCard>
  </div>
</template>
