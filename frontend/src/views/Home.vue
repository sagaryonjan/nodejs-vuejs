<template>
  <div class="home">
    <Test />
  </div>
</template>

<script>
// @ is an alias to /src
import Test from "@/components/Test.vue";

export default {
  name: "home",
  components: {
    Test
  }
};
</script>
