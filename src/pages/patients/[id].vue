<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import api from '../../config/api'
import formatDate from '../../config/formatDate'
import { appearances, behaviors, chronic_disorders, cognitive, diagnoses, insights, managements, moods, perceptions, speeches, substances, suicides, thought_contents, thought_forms } from '../../config/suggestions'

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
      appearance: '',
      behavior: '',
      speech: '',
      mood: '',
      thought_form: '',
      thought_content: '',
      perception: '',
      cognitive_state: '',
      differential_diagnosis: '',
      management: '',
      lab_tests: '',
      notes: '',
      insight: '',
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
      appearance: 'good',
      behavior: 'well behaved',
      speech: 'fluent',
      mood: 'average',
      thought_form: 'normal',
      thought_content: 'phobia',
      perception: 'psudohallucinations',
      cognitive_state: 'normal',
      differential_diagnosis: 'panic disorder, phobia',
      management: 'fluoxetine',
      lab_tests: 'thyroid function test',
      notes: 'no extra notes',
      insight: '',
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
const new_appearance = ref('')
const new_behavior = ref('')
const new_speech = ref('')
const new_mood = ref('')
const new_thought_form = ref('')
const new_thought_content = ref('')
const new_perception = ref('')
const new_cognitive_state = ref('')
const new_differential_diagnosis = ref('')
const new_management = ref('')
const new_lab_tests = ref('')
const new_notes = ref('')
const new_insight = ref('')

const newVisit = ref(false)

const saveVisit = () => {
  console.log(new_management.value)
  api.post(`new-visit/${data.id}/6507f518ff9709dd1c0fc42d`, {
    marital_status: new_marital_status.value,
    children: new_children.value,
    occupation: new_occupation.value,
    residence: new_residence.value,
    education: new_education.value,
    chief_complaint: new_chief_complaint.value,
    present_illness: new_present_illness.value,
    suicide: new_suicide.value,
    substance: new_substance.value,
    drug_hx: new_drug_hx.value,
    past_psychiatric_hx: new_past_psychiatric_hx.value,
    family_hx: new_family_hx.value,
    past_medical_hx: new_past_medical_hx.value,
    forensic_hx: new_forensic_hx.value,
    personal_hx: new_personal_hx.value,
    social_hx: new_social_hx.value,
    appearance: new_appearance.value,
    behavior: new_behavior.value,
    speech: new_speech.value,
    mood: new_mood.value,
    thought_form: new_thought_form.value,
    thought_content: new_thought_content.value,
    perception: new_perception.value,
    cognitive_state: new_cognitive_state.value,
    differential_diagnosis: new_differential_diagnosis.value,
    management: new_management.value,
    lab_tests: new_lab_tests.value,
    notes: new_notes.value,
    insight: new_insight.value,
  })
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
        <p v-if="visit.chief_complaint">
          Chief Complaint : <span>{{ visit.chief_complaint }}</span>
        </p>
        <p v-if="visit.present_illness">
          History of Present Illness : <span>{{ visit.present_illness }}</span>
        </p>
        <p v-if="visit.substance">
          Substance Hx : <span>{{ visit.substance }}</span>
        </p>
        <p v-if="visit.drug_hx">
          Drug Hx : <span>{{ visit.drug_hx }}</span>
        </p>
        <p v-if="visit.suicide">
          Suicide Hx : <span>{{ visit.suicide }}</span>
        </p>
        <p v-if="visit.past_psychiatric_hx">
          Past Psychiatric Hx : <span>{{ visit.past_psychiatric_hx }}</span>
        </p>
        <p v-if="visit.family_hx">
          Family Hx : <span>{{ visit.family_hx }}</span>
        </p>
        <p v-if="visit.past_medical_hx">
          Medical Hx : <span>{{ visit.past_medical_hx }}</span>
        </p>
        <p v-if="visit.personal_hx">
          Personal Hx : <span>{{ visit.personal_hx }}</span>
        </p>
        <p v-if="visit.social_hx">
          Social Hx : <span>{{ visit.social_hx }}</span>
        </p>
        <p v-if="visit.forensic_hx">
          Forensic Hx : <span>{{ visit.forensic_hx }}</span>
        </p>
        <p v-if="visit.lab_tests">
          Lab Tests : <span>{{ visit.lab_tests }}</span>
        </p>
        <p v-if="visit.notes">
          notes : <span>{{ visit.notes }}</span>
        </p>
      </div>

      <div class="v-card-text">
        <h2 class="mb-5">
          Mental State Examination
        </h2>
        <p v-if="visit.appearance">
          Appearance : <span>{{ visit.appearance }}</span>
        </p>
        <p v-if="visit.behavior">
          behavior : <span>{{ visit.behavior }}</span>
        </p>
        <p v-if="visit.mood">
          Mood : <span>{{ visit.mood }}</span>
        </p>
        <p v-if="visit.speech">
          Speech : <span>{{ visit.speech }}</span>
        </p>
        <p v-if="visit.thought_form">
          Though Form : <span>{{ visit.thought_form }}</span>
        </p>
        <p v-if="visit.thought_content">
          Though Content : <span>{{ visit.thought_content }}</span>
        </p>
        <p v-if="visit.perception">
          Perception : <span>{{ visit.perception }}</span>
        </p>
        <p v-if="visit.cognitive_state">
          Cognitive state : <span>{{ visit.cognitive_state }}</span>
        </p>
        <p v-if="visit.insight">
          Insight : <span>{{ visit.insight }}</span>
        </p>
      </div>

      <div
        v-if="visit.differential_diagnosis"
        class="v-card-text"
      >
        <h2 class="mb-5">
          Differential Diagnosis
        </h2>
        <p>{{ visit.differential_diagnosis }}</p>
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

        <p>
          Chief Complaint :
        </p>
        <VRow>
          <VCol
            cols="12"
            sm="6"
          >
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
            <VChip
              v-for="item in chief_complaints"
              :key="item"
              class="me-2 mb-2"
              label
              @click="new_chief_complaint = `${new_chief_complaint}${new_chief_complaint ? ', ' : ''}${item}`"
            >
              {{ item }}
            </VChip>
          </VCol>
        </VRow>

        <p>
          History of Present Illness :
        </p>
        <VRow>
          <VCol
            cols="12"
            sm="6"
          >
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
            <VChip
              v-for="item in present_illnesses"
              :key="item"
              class="me-2 mb-2"
              label
              @click="new_present_illness = `${new_present_illness}${new_present_illness ? ', ' : ''}${item}`"
            >
              {{ item }}
            </VChip>
          </VCol>
        </VRow>

        <p>
          Substance Hx :
        </p>
        <VRow>
          <VCol
            cols="12"
            sm="6"
          >
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
            <VChip
              v-for="item in substances"
              :key="item"
              class="me-2 mb-2"
              label
              @click="new_substance = `${new_substance}${new_substance ? ', ' : ''}${item}`"
            >
              {{ item }}
            </VChip>
          </VCol>
        </VRow>

        <p>
          Drug Hx :
        </p>
        <VRow>
          <VCol
            cols="12"
            sm="6"
          >
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
            <VChip
              v-for="item in managements"
              :key="item"
              class="me-2 mb-2"
              label
              @click="new_drug_hx = `${new_drug_hx}${new_drug_hx ? ', ' : ''}${item}`"
            >
              {{ item }}
            </VChip>
          </VCol>
        </VRow>

        <p>
          Suicide Hx :
        </p>
        <VRow>
          <VCol
            cols="12"
            sm="6"
          >
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
            <VChip
              v-for="item in suicides"
              :key="item"
              class="me-2 mb-2"
              label
              @click="new_suicide = `${new_suicide}${new_suicide ? ', ' : ''}${item}`"
            >
              {{ item }}
            </VChip>
          </VCol>
        </VRow>

        <p>
          Past Psychiatric Hx :
        </p>
        <VRow>
          <VCol
            cols="12"
            sm="6"
          >
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
            <VChip
              v-for="item in past_psychiatrics"
              :key="item"
              class="me-2 mb-2"
              label
              @click="new_past_psychiatric_hx = `${new_past_psychiatric_hx}${new_past_psychiatric_hx ? ', ' : ''}${item}`"
            >
              {{ item }}
            </VChip>
          </VCol>
        </VRow>

        <p>
          Family Hx :
        </p>
        <VRow>
          <VCol
            cols="12"
            sm="6"
          >
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
            <VChip
              v-for="item in family_hxs"
              :key="item"
              class="me-2 mb-2"
              label
              @click="new_family_hx = `${new_family_hx}${new_family_hx ? ', ' : ''}${item}`"
            >
              {{ item }}
            </VChip>
          </VCol>
        </VRow>

        <p>
          Medical Hx :
        </p>
        <VRow>
          <VCol
            cols="12"
            sm="6"
          >
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
            <VChip
              v-for="item in chronic_disorders"
              :key="item"
              class="me-2 mb-2"
              label
              @click="new_past_medical_hx = `${new_past_medical_hx}${new_past_medical_hx ? ', ' : ''}${item}`"
            >
              {{ item }}
            </VChip>
          </VCol>
        </VRow>

        <p>
          Personal Hx :
        </p>
        <VRow>
          <VCol
            cols="12"
            sm="6"
          >
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
            <VChip
              v-for="item in personal_hxs"
              :key="item"
              class="me-2 mb-2"
              label
              @click="new_personal_hx = `${new_personal_hx}${new_personal_hx ? ', ' : ''}${item}`"
            >
              {{ item }}
            </VChip>
          </VCol>
        </VRow>

        <p>
          Social Hx :
        </p>
        <VRow>
          <VCol
            cols="12"
            sm="6"
          >
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
            <VChip
              v-for="item in social_hxs"
              :key="item"
              class="me-2 mb-2"
              label
              @click="new_social_hx = `${new_social_hx}${new_social_hx ? ', ' : ''}${item}`"
            >
              {{ item }}
            </VChip>
          </VCol>
        </VRow>

        <p>
          Forensic Hx :
        </p>
        <VRow>
          <VCol
            cols="12"
            sm="6"
          >
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
            <VChip
              v-for="item in forensic_hxs"
              :key="item"
              class="me-2 mb-2"
              label
              @click="new_forensic_hx = `${new_forensic_hx}${new_forensic_hx ? ', ' : ''}${item}`"
            >
              {{ item }}
            </VChip>
          </VCol>
        </VRow>

        <p>
          Lab Tests :
        </p>
        <VRow>
          <VCol
            cols="12"
            sm="6"
          >
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
            <VChip
              v-for="item in lab_tests"
              :key="item"
              class="me-2 mb-2"
              label
              @click="new_lab_tests = `${new_lab_tests}${new_lab_tests ? ', ' : ''}${item}`"
            >
              {{ item }}
            </VChip>
          </VCol>
        </VRow>

        <p>
          Notes :
        </p>
        <VRow>
          <VCol
            cols="12"
            sm="6"
          >
            <AppTextarea
              v-model="new_notes"
              class="mb-8"
              auto-grow
            />
          </VCol>
          <VCol
            cols="12"
            sm="6"
          >
            <VChip
              v-for="item in notess"
              :key="item"
              class="me-2 mb-2"
              label
              @click="new_notes = `${new_notes}${new_notes ? ', ' : ''}${item}`"
            >
              {{ item }}
            </VChip>
          </VCol>
        </VRow>
      </div>

      <div class="v-card-text">
        <h2 class="mb-5">
          Mental State Examination
        </h2>
        <p>
          Appearance :
        </p>
        <VRow>
          <VCol
            cols="12"
            sm="6"
          >
            <AppTextarea
              v-model="new_appearance"
              class="mb-8"
              auto-grow
            />
          </VCol>
          <VCol
            cols="12"
            sm="6"
          >
            <VChip
              v-for="item in appearances"
              :key="item"
              class="me-2 mb-2"
              label
              @click="new_appearance = `${new_appearance}${new_appearance ? ', ' : ''}${item}`"
            >
              {{ item }}
            </VChip>
          </VCol>
        </VRow>

        <p>
          behavior :
        </p>
        <VRow>
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
          <VCol
            cols="12"
            sm="6"
          >
            <VChip
              v-for="item in behaviors"
              :key="item"
              class="me-2 mb-2"
              label
              @click="new_behavior = `${new_behavior}${new_behavior ? ', ' : ''}${item}`"
            >
              {{ item }}
            </VChip>
          </VCol>
        </VRow>

        <p>
          Mood :
        </p>
        <VRow>
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
          <VCol
            cols="12"
            sm="6"
          >
            <VChip
              v-for="item in moods"
              :key="item"
              class="me-2 mb-2"
              label
              @click="new_mood = `${new_mood}${new_mood ? ', ' : ''}${item}`"
            >
              {{ item }}
            </VChip>
          </VCol>
        </VRow>

        <p>
          Speech :
        </p>
        <VRow>
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
          <VCol
            cols="12"
            sm="6"
          >
            <VChip
              v-for="item in speeches"
              :key="item"
              class="me-2 mb-2"
              label
              @click="new_speech = `${new_speech}${new_speech ? ', ' : ''}${item}`"
            >
              {{ item }}
            </VChip>
          </VCol>
        </VRow>

        <p>
          Though Form :
        </p>
        <VRow>
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
          <VCol
            cols="12"
            sm="6"
          >
            <VChip
              v-for="item in thought_forms"
              :key="item"
              class="me-2 mb-2"
              label
              @click="new_thought_form = `${new_thought_form}${new_thought_form ? ', ' : ''}${item}`"
            >
              {{ item }}
            </VChip>
          </VCol>
        </VRow>

        <p>
          Though Content :
        </p>
        <VRow>
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
          <VCol
            cols="12"
            sm="6"
          >
            <VChip
              v-for="item in thought_contents"
              :key="item"
              class="me-2 mb-2"
              label
              @click="new_thought_content = `${new_thought_content}${new_thought_content ? ', ' : ''}${item}`"
            >
              {{ item }}
            </VChip>
          </VCol>
        </VRow>

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
              v-for="item in cognitive"
              :key="item"
              class="me-2 mb-2"
              label
              @click="new_cognitive_state = `${new_cognitive_state}${new_cognitive_state ? ', ' : ''}${item}`"
            >
              {{ item }}
            </VChip>
          </VCol>
        </VRow>
      </div>

      <div class="v-card-text">
        <h2 class="mb-5">
          Insight :
        </h2>
        <VRow>
          <VCol
            cols="12"
            sm="6"
          >
            <AppTextarea
              v-model="new_insight"
              class="mb-8"
              auto-grow
            />
          </VCol>
          <VCol
            cols="12"
            sm="6"
          >
            <VChip
              v-for="item in insights"
              :key="item"
              class="me-2 mb-2"
              label
              @click="new_insight = `${new_insight}${new_insight ? ', ' : ''}${item}`"
            >
              {{ item }}
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
              v-model="new_differential_diagnosis"
              class="mb-8"
              auto-grow
            />
          </VCol>
          <VCol
            cols="12"
            sm="6"
          >
            <VChip
              v-for="item in diagnoses"
              :key="item"
              class="me-2 mb-2"
              label
              @click="new_differential_diagnosis = `${new_differential_diagnosis}${new_differential_diagnosis ? ', ' : ''}${item}`"
            >
              {{ item }}
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
              v-for="item in managements"
              :key="item"
              class="me-2 mb-2"
              label
              @click="new_management = `${new_management}${new_management ? ', ' : ''}${item}`"
            >
              {{ item }}
            </VChip>
          </VCol>
        </VRow>
      </div>

      <div class="w-100 text-center my-10">
        <VBtn
          color="primary"
          @click="saveVisit"
        >
          <span class="me-2">
            <VIcon
              color="white"
              icon="fluent:save-20-regular"
            />
          </span>
          Save
        </VBtn>
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
