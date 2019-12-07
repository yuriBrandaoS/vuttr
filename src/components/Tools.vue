<template>
  <div>
    <div>
      <input
        type="text"
        placeholder="Searching..."
        :value="search"
        @input="updateData"
        class="col-sm-8">
      <label>
        <input type="checkbox" class="col-sm-4">
        <span></span>
        <p>Search only in Tags</p>
      </label>
    </div>
    <ul class="list-group" v-if="this.tools.length > 0">
      <toolsItem
      v-for="tool of filteredTools"
      :key="tool.id"
      :tool="tool"/>
     </ul>

     <p v-else> Não há ferramentas </p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import toolsItem from '@/components/ToolsItem.vue';

export default {
  data() {
    return {
      tags: [],
    };
  },
  components: {
    toolsItem,
  },
  created() {
    this.$store.dispatch('tools/getTools');
  },
  computed: {
    ...mapGetters({
      tools: 'tools/tools',
      search: 'tools/search',
    }),
    filteredTools() {
      const filteredTools = this.tools.filter((tool) => tool.description.toLowerCase()
        .includes(this.search.toLowerCase()));
      return filteredTools;
    },
  },
  methods: {
    updateData(event) {
      const { value } = event.target;
      this.searchTool(value);
    },
    ...mapActions({
      searchTool: 'tools/searchTools',
    }),
  },
};
</script>
