<template>
  <div class="about">
    <h1>Welcome {{ their_name }}</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali...</p>
  </div>
</template>

<script>
export default {
  name: "shoppingList",
  data() {
    return {
      their_name: this.$route.params.name
    };
  }
};
</script>