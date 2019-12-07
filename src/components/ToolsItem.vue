<template>
  <li class="d-flex align-items-start flex-column bd-highlight mb-3" style="height: 200px;">
    <div>
      <a
        class="mb-auto p-2 bd-highlight"
        :href="tool.link">
        {{ tool.title }}
      </a>
    </div>
    <div class="p-2 bd-highlight">{{ tool.description }}s</div>
    <b class="p-2 bd-highlight">{{ tool.tags.join(' #') }}</b>
  </li>
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
