<template lang="pug">
span.icon-wrapper(:style="styleSize")
  img.icon(:src="src || '//placehold.it/100x100'")
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true
    },
    size: {
      type: [String, Number],
      required: true
    }
  },
  computed: {
    styleSize () {
      return {
        width: this.size + 'px',
        height: this.size + 'px'
      }
    }
  }
}
</script>

<style lang="scss">
.icon-wrapper {
  overflow: hidden;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
}

.icon {
  display: block;
  max-width: 100%;
  min-width: 100%;
}
</style>
