<template>
    <div class="form">
      <div class="input-row">
        <label class="inputLabel" for="first_name">First name</label>
        <input class="inputField" :class="{ activeInput: isActive }" type="text" id="first_name" v-model="user.firstName" :disabled="isDisabled" />
      </div>
      <div class="input-row">
        <label class="inputLabel" for="last_name">Last name</label>
        <input class="inputField" :class="{ activeInput: isActive }" type="text" id="last_name" v-model="user.lastName" :disabled="isDisabled" />
      </div>
      <div class="input-row">
        <label class="inputLabel" for="student_code">Student code</label>
        <input class="inputField" :class="{ activeInput: isActive }" type="text" id="student_code" v-model="user.studentCode" :disabled="isDisabled" />
      </div>
      <div class="logged-in-at">
        <label class="inputLabel" id="loggedAt">Logged in at</label>
        <div class="timestamps" v-for="timestamp in user.loggedAtTimestamps" :key="timestamp">{{ timestamp }}</div>
      </div>
    </div>
  </template>
  
<script>
  import { mapState } from 'vuex';
  
  export default {
    computed: {
      ...mapState(['user']),
    },
    props: ['isDisabled', 'isActive'],
  };
</script>
  
<style scoped>
  .form {
    display: flex;
    flex-direction: column;
    margin-left: 50px;
  }
  
  .input-row {
    display: flex;
    flex-direction: column;
    margin-bottom: 25px;
    width: 20%;
  }
  
  .inputLabel {
    margin-bottom: 5px;
  }

  .inputField {
    background-color: #221f25;
    height: 40px;
    border-radius: 5px;
    color: rgb(185, 176, 176);
    font-size: 16px;
    padding-left: 15px;
  }

  .activeInput {
    background-color: #3c383f;
  }

  .logged-in-at {
    margin-top: 10px;
  }

  .timestamps{
    margin-top: 20px;
    color: #3b2d3d;
    font-weight: bolder;
  }
</style>