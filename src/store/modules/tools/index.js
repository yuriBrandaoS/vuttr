import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const state = {
  tools: [],
  search: '',
};

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
};
