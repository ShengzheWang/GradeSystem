
<template>
  <div class="hello">
    <el-button type="primary" >hahahah</el-button>
  </div>
</template>

<script>
  import global from './Global';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  created() {
    console.log(global.baseUrl);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
