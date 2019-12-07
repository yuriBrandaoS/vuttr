const TOOLS = (state, tools) => {
  state.tools = tools;
};

const SEARCH = (state, query) => {
  state.search = query;
};

export default {
  TOOLS,
  SEARCH,
};
