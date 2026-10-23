<template>
    <div class="membership_card">
        <p class="membership_name">{{ name }}</p>
        <p class="membership_cost">{{ cost }}</p>
        <p>{{ description }}</p>
        <button class="btn_membership">КУПИТЬ</button>
    </div>
</template>

<script setup>
defineProps({
  name: String,
  cost: String,
  description: String
})
</script>