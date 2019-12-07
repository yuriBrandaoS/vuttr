/* eslint-disable implicit-arrow-linebreak */
import api from '@/api';

export const getTools = ({ commit }) =>
  api.getAllTools()
    .then((response) => {
      commit('TOOLS', response.data);
    })
    .catch((err) => {
      console.log('getTools', err);
    });

export const searchTools = ({ commit }, query) => {
  api.searchTools(query);
  commit('SEARCH', query);
};

export default {
  getTools,
  searchTools,
};
