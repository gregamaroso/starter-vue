<template>
  <div
    class="test-div"
    :data-foo="foo"
    v-if="display"
    @click="doSomething">{{ message }} (click me btw)</div>
</template>

<script>
const message = 'Hello World!';

export default {
  name: "app",
  data: () => ({
    foo: 'bar',
    display: true,
    message: message
  }),
  methods: {
    doSomething: function(event) {
      console.log(this.message);
    }
  }
}
</script>

<style scoped>
.test-dev {
  display: inline-block;
  background-color: #ebebeb;
  margin: 20px;
  padding: 20px;
}
</style>