<script setup lang="ts">
const data = ref([])

const findOne = async () => {
  try {
    console.log(await fetch('http://localhost:3000/patients/1'))
  }
  catch (err) {
    console.error(err)
  }
}

onMounted(() => {
  findOne()
})
</script>

<template>
  <div>
    <VCard
      title="patient name"
      class="mb-6"
    >
      <VCardText>demographics</VCardText>
    </VCard>
    <VCard
      title="Want to integrate JWT? 🔒"
      class="mb-6"
    >
      <VCardText>We carefully crafted JWT flow so you can implement JWT with ease and with minimum efforts.</VCardText>
      <VCardText>Please read our  JWT Documentation to get more out of JWT authentication.</VCardText>
    </VCard>
  </div>
</template>
