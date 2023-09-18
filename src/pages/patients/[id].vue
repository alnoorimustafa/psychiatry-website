<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import api from '../../config/api'
import cognitive from '../../config/cognitive'
import diagnosis from '../../config/diagnosis'
import drugs from '../../config/drugs'
import formatDate from '../../config/formatDate'
import perceptions from '../../config/perceptions'

const route = useRoute()

const data = {
  id: '6507e3bf381da9d0a6473c13',
  Name: 'mustafa',
  dob: 1999,
  gender: 'male',
  phone: '6858568',
  creator_id: '6507e328381da9d0a6473c0c',
  createdAt: '2023-09-18T05:44:30.972Z',
  updatedAt: '2023-09-18T05:43:42.036Z',
  creator: {
    id: '6507e328381da9d0a6473c0c',
    username: 'zain',
    password: '1234',
    role: 'resident',
  },
  visits: [
    {
      id: '65080db5414f2f23acd27221',
      marital_status: '',
      children: '',
      occupation: '',
      residence: '',
      education: '',
      chief_complaint: 'delusion',
      present_illness: '',
      suicide: '',
      family_hx: '',
      past_psychiatric_hx: '',
      past_medical_hx: '',
      forensic_hx: '',
      social_hx: '',
      drug_hx: '',
      substance: '',
      personal_hx: '',
      appreance: '',
      behavior: '',
      speech: '',
      mood: '',
      thought_form: '',
      thought_content: '',
      perception: '',
      cognitive_state: '',
      differntial_diagnosis: '',
      management: '',
      lab_tests: '',
      notes: '',
      provider_id: '6507f518ff9709dd1c0fc42d',
      patient_id: '6507e3bf381da9d0a6473c13',
      createdAt: '2023-09-18T08:43:32.827Z',
      updatedAt: '2023-09-18T08:43:32.827Z',
    },
    {
      id: '650810be5aedca84e8776ad8',
      marital_status: 'married',
      children: '2',
      occupation: 'worker',
      residence: 'baghdad',
      education: 'elementary',
      chief_complaint: 'panic attack',
      present_illness: 'suffer from acute attacks',
      suicide: 'negative',
      family_hx: 'his uncle',
      past_psychiatric_hx: 'previous visit',
      past_medical_hx: 'diabetes',
      forensic_hx: 'negative',
      social_hx: 'good',
      drug_hx: 'propranolol',
      substance: 'benzodiazepine',
      personal_hx: 'awsome childhood',
      appreance: 'good',
      behavior: 'well behaved',
      speech: 'fluent',
      mood: 'average',
      thought_form: 'normal',
      thought_content: 'phobia',
      perception: 'psudohallucinations',
      cognitive_state: 'normal',
      differntial_diagnosis: 'panic disorder, phobia',
      management: 'fluoxetine',
      lab_tests: 'thyroid function test',
      notes: 'no extra notes',
      provider_id: '6507f518ff9709dd1c0fc42d',
      patient_id: '6507e3bf381da9d0a6473c13',
      createdAt: '2023-09-18T08:56:29.712Z',
      updatedAt: '2023-09-18T08:56:29.712Z',
    },
  ],
}

const new_marital_status = ref('')
const new_children = ref('')
const new_occupation = ref('')
const new_residence = ref('')
const new_education = ref('')
const new_chief_complaint = ref('')
const new_present_illness = ref('')
const new_substance = ref('')
const new_drug_hx = ref('')
const new_suicide = ref('')
const new_past_psychiatric_hx = ref('')
const new_family_hx = ref('')
const new_past_medical_hx = ref('')
const new_forensic_hx = ref('')
const new_personal_hx = ref('')
const new_social_hx = ref('')
const new_appreance = ref('')
const new_behavior = ref('')
const new_speech = ref('')
const new_mood = ref('')
const new_thought_form = ref('')
const new_thought_content = ref('')
const new_perception = ref('')
const new_cognitive_state = ref('')
const new_differntial_diagnosis = ref('')
const new_management = ref('')
const new_lab_tests = ref('')
const new_notes = ref('')

const newVisit = ref(false)

const fetchingPatient = async () => {
  try {
    const res = await api.get(`patients/${route.params.id}`)

    console.log(res.data)

    // data.value = res.data
  }
  catch (error) {
    console.log(error)
  }
}

const appendText = (text: string, field) => {
  console.log(text)
  console.log(field)
}

onMounted(() => {
  fetchingPatient()
})
</script>

<template>
  <div>
    <VCard
      :title="data.Name"
      :subtitle="data.phone"
      class="mb-6"
    />

    <VCard
      title="Demographics"
      class="mb-6"
    >
      <div class="v-card-text">
        <p>Gender : <span> {{ data.gender }}</span></p>
        <p>Date of birth : <span>{{ data.dob }}</span></p>
        <p>Marital Status : <span>{{ data.visits[data.visits.length - 1].marital_status }}</span></p>
        <p>Children : <span>{{ data.visits[data.visits.length - 1].children }}</span></p>
        <p>Occupation : <span>{{ data.visits[data.visits.length - 1].occupation }}</span></p>
        <p>Education : <span>{{ data.visits[data.visits.length - 1].education }}</span></p>
        <p>Residence : <span>{{ data.visits[data.visits.length - 1].residence }}</span></p>
      </div>
    </VCard>

    <VCard
      v-for="(visit, index) in data.visits"
      :key="visit.id"
      :title="`Visit ${index + 1}`"
      :subtitle="formatDate(visit.createdAt)"
      class="mb-6"
    >
      <div class="v-card-text ">
        <h2 class="mb-5">
          History
        </h2>

        <p>
          Chief Complaint :
          <span>
            {{ visit.chief_complaint }}
          </span>
        </p>

        <p>
          History of Present Illness : <span>{{ visit.present_illness }}</span>
        </p>
        <p>
          Substance Hx : <span>{{ visit.substance }}</span>
        </p>
        <p>
          Drug Hx : <span>{{ visit.drug_hx }}</span>
        </p>
        <p>
          Suicide Hx : <span>{{ visit.suicide }}</span>
        </p>
        <p>
          Past Psychiatric Hx : <span>{{ visit.past_psychiatric_hx }}</span>
        </p>
        <p>
          Family Hx : <span>{{ visit.family_hx }}</span>
        </p>
        <p>
          Medical Hx : <span>{{ visit.past_medical_hx }}</span>
        </p>
        <p>
          Personal Hx : <span>{{ visit.personal_hx }}</span>
        </p>
        <p>
          Social Hx : <span>{{ visit.social_hx }}</span>
        </p>
        <p>
          Forensic Hx : <span>{{ visit.forensic_hx }}</span>
        </p>
        <p>
          Lab Tests : <span>{{ visit.lab_tests }}</span>
        </p>
        <p>
          notes : <span>{{ visit.notes }}</span>
        </p>
      </div>

      <div class="v-card-text">
        <h2 class="mb-5">
          Mental State Examination
        </h2>
        <p>
          Appearance : <span>{{ visit.appreance }}</span>
        </p>
        <p>
          behavior : <span>{{ visit.behavior }}</span>
        </p>
        <p>
          Mood : <span>{{ visit.mood }}</span>
        </p>
        <p>
          Speech : <span>{{ visit.speech }}</span>
        </p>
        <p>
          Though Form : <span>{{ visit.thought_form }}</span>
        </p>
        <p>
          Though Content : <span>{{ visit.thought_content }}</span>
        </p>
        <p>
          Perception : <span>{{ visit.perception }}</span>
        </p>
        <p>
          Cognitive state : <span>{{ visit.cognitive_state }}</span>
        </p>
      </div>

      <div
        v-if="visit.differntial_diagnosis"
        class="v-card-text"
      >
        <h2 class="mb-5">
          Differential Diagnosis
        </h2>
        <p>{{ visit.differntial_diagnosis }}</p>
      </div>

      <div
        v-if="visit.management"
        class="v-card-text"
      >
        <h2 class="mb-5 v-theme--light.iconify">
          Management
        </h2>
        <p>{{ visit.management }}</p>
      </div>
    </VCard>

    <VCard
      v-if="newVisit"
      :title="`Visit ${data.visits.length + 1}`"
      :subtitle="new Date().toLocaleDateString('fr')"
    >
      <button
        class="refresh"
        @click="newVisit = false"
      >
        <VIcon
          color="black"
          icon="material-symbols:delete"
        />
      </button>

      <div class="v-card-text">
        <h2 class="mb-5">
          History
        </h2>
        <VCol
          cols="12"
          sm="6"
        >
          <p>
            Chief Complaint :
          </p>
          <AppTextarea
            v-model="new_chief_complaint"
            class="mb-8"
            auto-grow
          />
        </VCol>
        <VCol
          cols="12"
          sm="6"
        >
          <p>
            History of Present Illness :
          </p>
          <AppTextarea
            v-model="new_present_illness"
            class="mb-8"
            auto-grow
          />
        </VCol>
        <VCol
          cols="12"
          sm="6"
        >
          <p>
            Substance Hx :
          </p>
          <AppTextarea
            v-model="new_substance"
            class="mb-8"
            auto-grow
          />
        </VCol>
        <VCol
          cols="12"
          sm="6"
        >
          <p>
            Drug Hx :
          </p>
          <AppTextarea
            v-model="new_drug_hx"
            class="mb-8"
            auto-grow
          />
        </VCol>
        <VCol
          cols="12"
          sm="6"
        >
          <p>
            Suicide Hx :
          </p>
          <AppTextarea
            v-model="new_suicide"
            class="mb-8"
            auto-grow
          />
        </VCol>
        <VCol
          cols="12"
          sm="6"
        >
          <p>
            Past Psychiatric Hx :
          </p>
          <AppTextarea
            v-model="new_past_psychiatric_hx"
            class="mb-8"
            auto-grow
          />
        </VCol>
        <VCol
          cols="12"
          sm="6"
        >
          <p>
            Family Hx :
          </p>
          <AppTextarea
            v-model="new_family_hx"
            class="mb-8"
            auto-grow
          />
        </VCol>
        <VCol
          cols="12"
          sm="6"
        >
          <p>
            Medical Hx :
          </p>
          <AppTextarea
            v-model="new_past_medical_hx"
            class="mb-8"
            auto-grow
          />
        </VCol>
        <VCol
          cols="12"
          sm="6"
        >
          <p>
            Personal Hx :
          </p>
          <AppTextarea
            v-model="new_personal_hx"
            class="mb-8"
            auto-grow
          />
        </VCol>
        <VCol
          cols="12"
          sm="6"
        >
          <p>
            Social Hx :
          </p>
          <AppTextarea
            v-model="new_social_hx"
            class="mb-8"
            auto-grow
          />
        </VCol>
        <VCol
          cols="12"
          sm="6"
        >
          <p>
            Forensic Hx :
          </p>
          <AppTextarea
            v-model="new_forensic_hx"
            class="mb-8"
            auto-grow
          />
        </VCol>
        <VCol
          cols="12"
          sm="6"
        >
          <p>
            Lab Tests :
          </p>
          <AppTextarea
            v-model="new_lab_tests"
            class="mb-8"
            auto-grow
          />
        </VCol>
        <VCol
          cols="12"
          sm="6"
        >
          <p>
            Notes :
          </p>
          <AppTextarea
            v-model="new_notes"
            class="mb-8"
            auto-grow
          />
        </VCol>
      </div>

      <div class="v-card-text">
        <h2 class="mb-5">
          Mental State Examination
        </h2>
        <p>
          Appearance :
        </p>
        <VCol
          cols="12"
          sm="6"
        >
          <AppTextarea
            v-model="new_appreance"
            class="mb-8"
            auto-grow
          />
        </VCol>
        <p>
          behavior :
        </p>
        <VCol
          cols="12"
          sm="6"
        >
          <AppTextarea
            v-model="new_behavior"
            class="mb-8"
            auto-grow
          />
        </VCol>
        <p>
          Mood :
        </p>
        <VCol
          cols="12"
          sm="6"
        >
          <AppTextarea
            v-model="new_mood"
            class="mb-8"
            auto-grow
          />
        </VCol>
        <p>
          Speech :
        </p>
        <VCol
          cols="12"
          sm="6"
        >
          <AppTextarea
            v-model="new_speech"
            class="mb-8"
            auto-grow
          />
        </VCol>
        <p>
          Though Form :
        </p>
        <VCol
          cols="12"
          sm="6"
        >
          <AppTextarea
            v-model="new_thought_form"
            class="mb-8"
            auto-grow
          />
        </VCol>
        <p>
          Though Content :
        </p>
        <VCol
          cols="12"
          sm="6"
        >
          <AppTextarea
            v-model="new_thought_content"
            class="mb-8"
            auto-grow
          />
        </VCol>
        <p>
          Perception :
        </p>
        <VRow>
          <VCol
            cols="12"
            sm="6"
          >
            <AppTextarea
              v-model="new_perception"
              class="mb-8"
              auto-grow
            />
          </VCol>
          <VCol
            cols="12"
            sm="6"
          >
            <VChip
              v-for="perception in perceptions"
              :key="perception"
              class="me-2 mb-2"
              label
              @click="new_perception = `${new_perception}${new_perception ? ', ' : ''}${perception}`"
            >
              {{ perception }}
            </VChip>
          </VCol>
        </VRow>
        <p>
          Cognitive state :
        </p>
        <VRow>
          <VCol
            cols="12"
            sm="6"
          >
            <AppTextarea
              v-model="new_cognitive_state"
              class="mb-8"
              auto-grow
            />
          </VCol>
          <VCol
            cols="12"
            sm="6"
          >
            <VChip
              v-for="cognitiv in cognitive"
              :key="cognitiv"
              class="me-2 mb-2"
              label
              @click="new_cognitive_state = `${new_cognitive_state}${new_cognitive_state ? ', ' : ''}${cognitiv}`"
            >
              {{ cognitiv }}
            </VChip>
          </VCol>
        </VRow>
      </div>

      <div class="v-card-text">
        <h2 class="mb-5">
          Differential Diagnosis
        </h2>
        <VRow>
          <VCol
            cols="12"
            sm="6"
          >
            <AppTextarea
              v-model="new_differntial_diagnosis"
              class="mb-8"
              auto-grow
            />
          </VCol>
          <VCol
            cols="12"
            sm="6"
          >
            <VChip
              v-for="diagnosi in diagnosis"
              :key="diagnosi"
              class="me-2 mb-2"
              label
              @click="new_differntial_diagnosis = `${new_differntial_diagnosis}${new_differntial_diagnosis ? ', ' : ''}${diagnosi}`"
            >
              {{ diagnosi }}
            </VChip>
          </VCol>
        </VRow>
      </div>

      <div class="v-card-text">
        <h2 class="mb-5">
          Management
        </h2>
        <VRow>
          <VCol
            cols="12"
            sm="6"
          >
            <AppTextarea
              v-model="new_management"
              class="mb-8"
              auto-grow
            />
          </VCol>
          <VCol
            cols="12"
            sm="6"
          >
            <VChip
              v-for="drug in drugs"
              :key="drug"
              class="me-2 mb-2"
              label
              @click="new_management = `${new_management}${new_management ? ', ' : ''}${drug}`"
            >
              {{ drug }}
            </VChip>
          </VCol>
        </VRow>
      </div>
    </VCard>

    <div
      v-else
      class="w-100 text-center"
    >
      <VBtn
        color="primary"
        @click="newVisit = true"
      >
        <span class="me-2">
          <VIcon
            color="white"
            icon="jam:plus"
          />
        </span>
        New Visit
      </VBtn>
    </div>
  </div>
</template>

<style scoped>
.info {
  display: flex;
  flex-direction: column;
  gap: 10px; /* Adjust the gap as needed */
}

.info p {
  margin: 0;
}

p {
  color: #222;
  font-size: 1rem;
}

span {
  color: #5c5c5c;
  font-size: 1rem;
}

h2 {
  color: rgb(var(--v-theme-primary));
}

.refresh {
  position: absolute;
  inset-block-start: 24px;
  inset-inline-end: 24px;
}
</style>
