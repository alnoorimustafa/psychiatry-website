<script setup lang="ts">
import { VDataTable } from 'vuetify/labs/VDataTable'
import fetchRemote from '../config/fetchRemote'
import format from '../config/formatResults'
import { childrens, educations, genders, marital_statuses, occupations, residences } from '../config/suggestions'
import postRemote from '@/config/postRemote'

const userData = JSON.parse(localStorage.getItem('userData') || 'null')
const router = useRouter()
const data = ref([])
const searchField = ref('')
const isDialogVisible = ref(false)

const name = ref('')
const dob = ref()
const marital_status = ref('')
const gender = ref('')
const education = ref('')
const residence = ref('')
const phone = ref('')
const children = ref('')
const occupation = ref('')

const headers = [
  { title: 'NAME', key: 'Name' },
  { title: 'Added By', key: 'creator_username' },
  { title: 'Added Date', key: 'created_at' },
  { title: 'Id', key: 'id' },
]

const findAll = async () => {
  try {
    const res = await fetchRemote(`find/${userData.id}`)
    if (res && res.ok)
      data.value = format(res.data)
    else throw new Error('no results')
  }
  catch (err) {
    console.error(err)
  }
}

const search = async () => {
  if (searchField.value !== '') {
    try {
      const res = await fetchRemote(`search/${userData.id}/${searchField.value}`)

      if (res && res.ok)
        data.value = format(res.data)

      else throw new Error('no results')
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

  router.push(`/patients/${patient_id}`)
}

const closeDialog = () => {
  name.value = ''
  marital_status.value = ''
  gender.value = ''
  education.value = ''
  residence.value = ''
  phone.value = ''
  children.value = ''
  occupation.value = ''
  isDialogVisible.value = false
}

const savePatient = async () => {
  try {
    const res = await postRemote(`new-patient/${userData.id}`, {
      Name: name.value,
      dob: dob.value,
      marital_status: marital_status.value,
      gender: gender.value,
      education: education.value,
      residence: residence.value,
      phone: phone.value,
      children: children.value,
      occupation: occupation.value,
    })

    if (res.ok)
      router.push(`/patients/${res.data.id}`)

    else
      console.log(res)

    isDialogVisible.value = false
  }
  catch (error) {
    console.log(error)
  }
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
      <div class="refresh">
        <VBtn
          color="primary"
          class="me-2"
          @click="findAll"
        >
          <VIcon
            class="me-2"
            color="black"
            icon="jam:refresh"
          />
          refresh
        </VBtn>
        <VBtn
          color="primary"
          @click="isDialogVisible = !isDialogVisible"
        >
          <VIcon
            class="me-2"
            color="black"
            icon="codicon:new-file"
          />
          New Patient
        </VBtn>
      </div>
      <div class="v-card-text">
        <VDataTable
          :headers="headers"
          :items="data"
          :items-per-page="6"
          :on-click:row="click"
        />
      </div>
    </VCard>
    <div>
      <VDialog
        v-model="isDialogVisible"
        fullscreen
        :scrim="false"
        transition="dialog-bottom-transition"
      >
        <!-- Dialog Content -->
        <VCard>
          <!-- Toolbar -->
          <div>
            <VToolbar color="primary">
              <VBtn
                icon
                variant="plain"
                @click="closeDialog"
              >
                <VIcon
                  color="white"
                  icon="tabler-x"
                />
              </VBtn>

              <VToolbarTitle>New Patient</VToolbarTitle>

              <VSpacer />

              <VToolbarItems>
                <VBtn
                  variant="text"
                  @click="savePatient"
                >
                  Save
                </VBtn>
              </VToolbarItems>
            </VToolbar>
          </div>

          <!-- List -->
          <div class="v-card-text">
            <VRow>
              <VCol
                cols="6"
                md="6"
              >
                <VTextField
                  v-model="name"
                  label="Name"
                />
              </VCol>
            </VRow>
            <VRow>
              <VCol
                cols="6"
                md="6"
              >
                <VTextField
                  v-model="dob"
                  label="Birth Year"
                />
              </VCol>
            </VRow>
            <VRow>
              <VCol
                cols="6"
                md="6"
              >
                <VTextField
                  v-model="gender"
                  label="Gender"
                />
              </VCol>
              <VCol
                cols="6"
                sm="6"
              >
                <VChip
                  v-for="item in genders"
                  :key="item"
                  class="me-2 mb-2"
                  label
                  @click="gender = item"
                >
                  {{ item }}
                </VChip>
              </VCol>
            </VRow>
            <VRow>
              <VCol
                cols="6"
                md="6"
              >
                <VTextField
                  v-model="education"
                  label="Education"
                />
              </VCol>
              <VCol
                cols="6"
                sm="6"
              >
                <VChip
                  v-for="item in educations"
                  :key="item"
                  class="me-2 mb-2"
                  label
                  @click="education = item"
                >
                  {{ item }}
                </VChip>
              </VCol>
            </VRow>
            <VRow>
              <VCol
                cols="6"
                md="6"
              >
                <VTextField
                  v-model="residence"
                  label="Residence"
                />
              </VCol>
              <VCol
                cols="6"
                sm="6"
              >
                <VChip
                  v-for="item in residences"
                  :key="item"
                  class="me-2 mb-2"
                  label
                  @click="residence = item"
                >
                  {{ item }}
                </VChip>
              </VCol>
            </VRow>
            <VRow>
              <VCol
                cols="6"
                md="6"
              >
                <VTextField
                  v-model="marital_status"
                  label="Marital Status"
                />
              </VCol>
              <VCol
                cols="6"
                sm="6"
              >
                <VChip
                  v-for="item in marital_statuses"
                  :key="item"
                  class="me-2 mb-2"
                  label
                  @click="marital_status = item"
                >
                  {{ item }}
                </VChip>
              </VCol>
            </VRow>
            <VRow>
              <VCol
                cols="6"
                md="6"
              >
                <VTextField
                  v-model="children"
                  label="Children"
                />
              </VCol>
              <VCol
                cols="6"
                sm="6"
              >
                <VChip
                  v-for="item in childrens"
                  :key="item"
                  class="me-2 mb-2"
                  label
                  @click="children = item"
                >
                  {{ item }}
                </VChip>
              </VCol>
            </VRow>
            <VRow>
              <VCol
                cols="6"
                md="6"
              >
                <VTextField
                  v-model="occupation"
                  label="Occupation"
                />
              </VCol>
              <VCol
                cols="6"
                sm="6"
              >
                <VChip
                  v-for="item in occupations"
                  :key="item"
                  class="me-2 mb-2"
                  label
                  @click="occupation = item"
                >
                  {{ item }}
                </VChip>
              </VCol>
            </VRow>
            <VRow>
              <VCol
                cols="6"
                md="6"
              >
                <VTextField
                  v-model="phone"
                  label="Phone"
                />
              </VCol>
            </VRow>
          </div>
        </VCard>
      </VDialog>
    </div>
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

<style lang="scss">
.dialog-bottom-transition-enter-active,
.dialog-bottom-transition-leave-active {
  transition: transform 0.2s ease-in-out;
}
</style>
