<script setup lang="ts">
  defineProps<{
    rating: number;
    numberOfReviews: number;
  }>();

  function scrollToReviews() {
    console.log("Implement scrolling to reviews");
  }
</script>

<template>
  <div class="flex gap-x-2">
    <div class="flex gap-x-1">
      <span class="text-xs text-gray-400">{{ rating }}</span>

      <div class="flex gap-x-1">
        <BaseSvg
          v-for="index in Array(Math.floor(rating))"
          svg-name="icon-star-full"
        />
        <BaseSvg
          v-if="rating - Math.floor(rating) >= 0.5"
          svg-name="icon-star-half"
        />
        <BaseSvg
          v-for="index in Array(5 - Math.round(rating))"
          svg-name="icon-star-empty"
        />
      </div>
    </div>

    <button
      @click="scrollToReviews"
      class="text-xs text-sky-400 underline"
    >
      {{ `${numberOfReviews} recenzje` }}
    </button>
  </div>
</template>
