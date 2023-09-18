<script setup lang="ts">
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import api from '../../config/api'
import formatDate from '../../config/formatDate'

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
        <p>marital status : <span>{{ data.visits[data.visits.length - 1].marital_status }}</span></p>
        <p>children : <span>{{ data.visits[data.visits.length - 1].children }}</span></p>
        <p>occupation : <span>{{ data.visits[data.visits.length - 1].occupation }}</span></p>
        <p>education : <span>{{ data.visits[data.visits.length - 1].education }}</span></p>
        <p>residence : <span>{{ data.visits[data.visits.length - 1].residence }}</span></p>
      </div>
    </VCard>

    <VCard
      v-for="(visit, index) in data.visits"
      :key="visit.id"
      :title="`Visit ${index + 1}`"
      :subtitle="formatDate(visit.createdAt)"
      class="mb-6"
    >
      <div class="v-card-text">
        <h3 class="mb-2">
          History
        </h3>
        <p>
          Chief complaint :
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
          Medical Hx : <span>{{ visit.drug_hx }}</span>
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
        <h3 class="mb-2">
          Mental State Examination
        </h3>
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
        <p>
          notes : <span>{{ visit.notes }}</span>
        </p>
        <h3 class="mb-2">
          {{ visit.differntial_diagnosis ? 'Differential Diagnosis' : '' }}
        </h3>
        <p>{{ visit.differntial_diagnosis }}</p>
        <h3 class="mb-2">
          {{ visit.management ? 'Management' : '' }}
        </h3>
        <p>{{ visit.management }}</p>
      </div>
    </VCard>
  </div>
</template>
