<script setup lang="ts">
import { VDataTable } from 'vuetify/labs/VDataTable'
import api from '../config/api'
import format from '../config/formatResults'

const router = useRouter()
const data = ref([])
const searchField = ref('')

const headers = [
  { title: 'NAME', key: 'Name' },
  { title: 'Added By', key: 'creator_username' },
  { title: 'Added Date', key: 'created_at' },
  { title: 'Id', key: 'id' },
]

const findAll = async () => {
  try {
    const array = []
    const res = await api.get('find')
    if (res) {
      data.value = format(res.data)
      console.log(res.data)
    }
    else {
      throw new Error('no results')
    }
  }
  catch (err) {
    console.error(err)
  }
}

const search = async () => {
  if (searchField.value !== '') {
    try {
      const res = await api.get(`search/${searchField.value}`)

      if (res) {
        console.log(res.data)
        data.value = format(res.data)
      }

      else { throw new Error('no results') }
    }
    catch (error) {
      console.log(error)
    }
  }
  else {
    findAll()
  }
}

const click = async (event, value) => {
  console.log(value)

  const patient_id = value.item.columns.id

  console.log(patient_id)

  router.push(`/patients/${patient_id}`)
}

onMounted(() => {
  findAll()
})
</script>

<template>
  <div>
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
      class="mb-6 refreshparent"
    >
      <button
        class="refresh"
        @click="findAll"
      >
        <VIcon
          color="black"
          icon="jam:refresh"
        />
      </button>
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

<style scoped>
.refreshparent {
  position: relative;
}

.refresh {
  position: absolute;
  inset-block-start: 24px;
  inset-inline-end: 24px;
}
</style>
