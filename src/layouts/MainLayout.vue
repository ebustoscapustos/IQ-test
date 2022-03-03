<template>
  <div class="main-layout">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>

export default {
    name: "MainLayout"
};
</script>

<style lang="scss" scoped>
.main-layout {
  text-align: center;
  width: 100%;
}
.content {
  padding: 0 calc(50% - 295px);
  
}
</style>