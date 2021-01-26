<template>
	<div id="app">
		<router-view />
	</div>
</template>
<script>

export default {
    name: 'app',

}
</script>
<style lang="scss">
	@import "./sass/transfrom.scss";
	@import './common/font.css';

	body{
		width: 100%;
		margin: 0;
		padding: 0;
		overflow-x: hidden;
	}
	div{
		box-sizing: border-box;
	}
	#app {
		font-family: 'HYQiHei', sans-serif !important;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}

	#nav {
		padding: 30px;

		a {
			font-weight: bold;
			color: #2c3e50;

			&.router-link-exact-active {
				color: #42b983;
			}
		}
	}
</style>
