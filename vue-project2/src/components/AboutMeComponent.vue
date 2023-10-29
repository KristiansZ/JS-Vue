<template>
  <div class="aboutMe">
    <h1 id="aboutText">ABOUT ME</h1>
    <button id="formBut" @click="toggleEditForm" :class="{ activeForm: isActive }" > {{ isActive ? 'CANCEL':'EDIT FORM'}}</button>
  </div>
  <FormComponent :isDisabled="isDisabled" :isActive="isActive" />
</template>

<script>

export default {
    data() {
        return {
            isActive: false,
            isDisabled: true,
        };
    },
    methods: {
        toggleEditForm() {
            this.isActive = !this.isActive;
            this.isDisabled = !this.isActive;
        },
    },
};
</script>

<style scoped>
.aboutMe {
  display: flex;
  align-items: center;
  margin-bottom: 50px;
  margin-left: 50px;
  margin-top: 85px;
}
#aboutText{
  border-right: rgb(114, 110, 110) solid 1px;
  padding-right: 10px;
  color: white;
  font-weight: bolder;
}

button {
  background-color: #7c02b6;
  color: white;
  padding: 7px;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  margin-left: 10px;
}

.activeForm {
  background-color: #320846;
}
</style>