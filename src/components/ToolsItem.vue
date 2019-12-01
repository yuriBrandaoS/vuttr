<template>
  <div class="tools-item">
    <a :href="tool.link" target="_blank">{{ tool.title }}</a>
    <p>{{ tool.description }}</p>
    <b>{{ tool.tags.join(' #') }}</b>
  </div>
</template>

<script>
export default {
  props: {
    tool: {
      type: Object,
      required: true,
    },
  },
};
</script>
