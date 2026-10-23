<template>
  <div class="trainer_card">
    <img :src="trainer.photo" :alt="trainer.name">
    <p class="trainer_name">{{ trainer.name }}</p>
    <p class="trainer_status">{{ trainer.status }}</p>
    <p>Достижения:</p>
    <ul>
      <li v-for="(achievement, index) in trainer.achievements" :key="index">
        {{ achievement }}
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  trainer: {
    type: Object,
    required: true
  }
})
</script>