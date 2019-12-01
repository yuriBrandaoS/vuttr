<template>
  <div>
    <div>
      <input type="text" placeholder="Searching..." v-model="query">
      <label>
        <input type="checkbox" v-model="tags">
        <span></span>
        <p>Search only in Tags</p>
      </label>
    </div>
    <toolsItem v-for="tool of tools" :key="tool.id" :tool="tool"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import toolsItem from '@/components/ToolsItem.vue';

export default {
  data() {
    return {
      query: '',
      tags: [],
    };
  },
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
