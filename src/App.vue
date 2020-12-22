<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="less">
body {
  padding: 0;
  margin: 0;
}
#app {
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  overflow: auto;
}
.row-center{
  display: flex;
  align-items: center;
}
.orange-mark{
  color:@orange;
}
.pointer{
  cursor: pointer;
}
</style>
