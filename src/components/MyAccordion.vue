<template>
  <VExpansionPanels
    variant="accordion"
    class="expansion-panels-width-border"
  >
    <VExpansionPanel
      v-for="item in 2"
      :key="item"
      elevation="0"
    >
      <VExpansionPanelTitle>
        Accordion {{ item }}
      </VExpansionPanelTitle>

      <VExpansionPanelText>
        <VBtn variant="outlined">
          Primary
        </VBtn>
        <VBtn variant="outlined">
          Primary
        </VBtn>
        <VBtn variant="outlined">
          Primary
        </VBtn>
      </VExpansionPanelText>
    </VExpansionPanel>
  </vexpansionpanels>
</template>
