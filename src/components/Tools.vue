<template>
  <div>
    <toolsItem v-for="tool of tools" :key=tool.id :tool="tool"/>
  </div>
</template>

<script>
import axios from 'axios';
import toolsItem from '@/components/ToolsItem.vue';

export default {
  data() {
    return {
      tools: [],
      tags: [],
    };
  },
  components: {
    toolsItem,
  },
  mounted() {
    console.log('teste');
  },
  async created() {
    const response = await axios.get('http://localhost:3000/tools');

    this.tools = response.data;
    this.tags = response.data;
  },
};
</script>
