<template>
  <div class="content-box">
    <div class="yellow-box"></div>
    <div class="flex-box">
      <div class="blue-box"></div>
      <div class="red-box"></div>
    </div>
  </div>
</template>

<style>
.yellow-box {
  background-color: #ffec49;
  border-radius: 0px 500px 0px 0px;
  height: 493px;
  width: 1048px;
}

.flex-box {
  margin-top: 22px;
}

.blue-box {
  background-color: #5a61ff;
  border-radius: 0px 150px 0px 0px;
  height: 240px;
  width: 517px;
  margin-right: 14px;
  display: inline-block;
}

.red-box {
  background-color: #ff5a5a;
  border-radius: 0px 0px 0px 150px;
  height: 240px;
  width: 517px;
  display: inline-block;
}
.content-box {
  background-color: #272626;
  width: 1070px;
  height: 755px;
  margin-right: 60px;
}
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
