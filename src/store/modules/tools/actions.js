import api from '@/api';

const getTools = (context) => {
  api.getAllTools()
    .then((response) => {
      context.commit('TOOLS_UPDATE', response.data);
    })
    .catch((err) => {
      console.log('getTools', err);
    });
};

export default {
  getTools,
};
