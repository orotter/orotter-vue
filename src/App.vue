<template lang="pug">
div
  transition(name="page" mode="out-in")
    router-view
  toast(position="n")
</template>

<script>
import { Toast } from 'vuex-toast'

export default {
  components: {
    Toast
  }
}
</script>

<style lang="scss" scoped>
.page-enter-active,
.page-leave-active {
  transition: 400ms ease-out;
  transition-property: opacity, transform;
}

.page-enter-active,
.page-leave {
  opacity: 1;
  transform: translateX(0);
}

.page-enter {
  opacity: 0;
  transform: translateX(50px);
}

.page-leave-active {
  opacity: 0;
  transform: translateX(-50px);
}
</style>
