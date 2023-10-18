<template>
  <div class="about-me">
    <h1>ABOUT ME</h1>
    <div class="info">
      <h3><span class="gray-text">Name:</span> {{ user.name }}</h3>
      <h3><span class="gray-text">Surname:</span> {{ user.surname }}</h3>
      <h3><span class="gray-text">Code:</span> {{ user.code }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "Kristians",
        surname: "Zondaks",
        code: "IT21008",
      },
    };
  },
};
</script>


<style scoped>
.about-me {
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.info {
  margin-top: 20px;
  text-align: left;
}

.gray-text {
  color: #888; /* or any other gray color */
}
</style>