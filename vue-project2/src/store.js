import { createStore } from 'vuex';
import songsData from './exportSongs';

const state = {
  all_songs: songsData,

  user: {
    firstName: 'name',
    lastName: 'surname',
    studentCode: 'CODE1234',
    loggedAtTimestamps: [],
    isLoggedIn: false,
  },
};

const mutations = {
  setLoggedIn(state) {
    state.user.isLoggedIn = true;
    const timestamp = new Date().toLocaleString('en-GB');
    state.user.loggedAtTimestamps.push(timestamp);
  },

  resetUserProperties(state) {
    state.user = {
      firstName: 'name',
      lastName: 'surname',
      studentCode: 'CODE1234',
      loggedAtTimestamps: [],
      isLoggedIn: false,
    };
  },

  setFirstName(state, newName) {
    state.user.firstName = newName;
},
  setLastName(state, newLastName) {
    state.user.lastName = newLastName;
},
  setStudentCode(state, newCode) {
    state.user.studentCode = newCode;
},
  addLoggedAtTimestamp(state, timestamp) {
    state.user.loggedAtTimestamps.push(timestamp);
},
};

const actions = {
    loginUser({ commit }) {
      commit('setLoggedIn');
    },
  
    logoutUser({ commit }) {
      commit('resetUserProperties');
    },
};
  
export default createStore({
    state,
    mutations,
    actions,
});