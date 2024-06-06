<script setup lang="ts">
  export interface TheBreadcrumbsProps {
    links: Array<{ name: string; href: string }>;
  }

  const props = defineProps<TheBreadcrumbsProps>();
</script>

<template>
  <div class="p-3 bg-white rounded-sm flex items-center gap-3">
    <div class="flex gap-3 items-center">
      <NuxtLink to="/">
        <BaseSvg
          class="[&_path]:hover:stroke-primary-300 [&_path]:transition-colors [&_path]:duration-100"
          svg-name="icon-home"
        />
      </NuxtLink>

      <BaseSvg svg-name="icon-arrow-breadcrumbs" />
    </div>

    <ul class="flex items-center gap-3">
      <li
        v-for="(link, index) in props.links"
        :key="link.href"
        class="flex items-center gap-3"
      >
        <NuxtLink
          :to="link.href"
          class="font-light hover:text-primary-500 transition-colors duration-100"
          :class="{
            'text-primary-500 font-medium': index === props.links.length - 1,
          }"
        >
          {{ link.name }}
        </NuxtLink>

        <BaseSvg
          v-if="index < props.links.length - 1"
          svg-name="icon-arrow-breadcrumbs"
        />
      </li>
    </ul>
  </div>
</template>
