<script setup lang="ts">
  import { defineAsyncComponent } from "vue";

  const props = defineProps({
    svgName: {
      type: String,
      required: true,
    },
    height: {
      type: String,
      default: null,
    },
    width: {
      type: String,
      default: null,
    },
    iconClass: {
      type: String,
      default: "",
    },
  });

  const AsyncIcon = defineAsyncComponent(
    () => import(`../../assets/svg/${props.svgName}.svg`)
  );
</script>

<template>
  <div
    :style="{
      height: props.height,
      width: props.width,
    }"
  >
    <component
      :is="AsyncIcon"
      :class="iconClass"
    />
  </div>
</template>
