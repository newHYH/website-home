<template>
	<img alt="Vue logo" src="./assets/logo.png" />
	<p class="test">test</p>
	<div>
		<div class="test-box"></div>
		<div class="test-box"></div>
	</div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style lang="less">
@import './less/common.less';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.test{
	font-size: 1rem;
}
.test-box{
	width: 6.4rem;
	height: 30px;
	border: 1px solid #ddd;
}
</style>
