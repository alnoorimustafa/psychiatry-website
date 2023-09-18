export interface User {
  id: string
  Name: string
  dob: number
  gender: string
  phone: string
  marital_status: string
  children: string
  occupation: string
  residence: string
  education: string
  creator_id: string
  createdAt: string
  updatedAt: string
  creator: {
    id: string
    username: string
    password: string
    role: string
  }
  visits: Visit[]
}

export interface Visit {
  id: string
  chief_complaint: string
  present_illness: string
  suicide: string
  family_hx: string
  past_psychiatric_hx: string
  past_medical_hx: string
  forensic_hx: string
  social_hx: string
  drug_hx: string
  substance: string
  personal_hx: string
  appearance: string
  behavior: string
  speech: string
  mood: string
  thought_form: string
  thought_content: string
  perception: string
  cognitive_state: string
  differential_diagnosis: string
  management: string
  lab_tests: string
  notes: string
  insight: string
  provider_id: string
  patient_id: string
  provider: Provider
  createdAt: string
  updatedAt: string
}

export interface Provider {
  id: string
  password: string
  role: string
  username: string
}

export interface Patient {
  id: string
  Name: string
  dob: number
  gender: string
  phone: string
  marital_status: string
  children: string
  occupation: string
  residence: string
  education: string
  visits: Visit[]
  creator_id: string
  creator: User
}
