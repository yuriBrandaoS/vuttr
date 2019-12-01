<template>
  <div>
    <toolsItem v-for="tool of tools" :key=tool.id :tool="tool"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import toolsItem from '@/components/ToolsItem.vue';

export default {
  components: {
    toolsItem,
  },
  mounted() {
    this.$store.dispatch('tools/getTools');
  },
  computed: {
    ...mapGetters({
      tools: 'tools/tools',
    }),
  },
};
</script>
