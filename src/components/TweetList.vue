<template lang="pug">
transition-group.tweet-list(tag="ul" name="list")
  li.tweet-item(v-for="t in list", :key="t.id")
    .tweet-user-icon
      icon(:src="t.user.image", :size="80")
    .tweet-main
      .tweet-header
        p.tweet-name(v-text="t.user.name")
        p.tweet-username(v-text="'@' + t.user.username")
      p.tweet-body(v-text="t.text")
</template>

<script>
import Icon from './Icon'

export default {
  props: {
    list: {
      type: Array,
      required: true
    }
  },

  components: {
    Icon
  }
}
</script>

<style lang="scss">
@import '../themes/variables';

.tweet-list {
  overflow: hidden;
  border-radius: $border-radius;
}

.tweet-item {
  display: flex;
  padding: 20px;
  background-color: #fff;

  &:not(:last-child) {
    border: 1px solid #f1f1f1;
  }
}

.tweet-user-icon {
  margin-right: 24px;
}

.tweet-header {
  margin: 5px 0;
}

.tweet-name {
  display: inline-block;
  margin-right: 8px;
  color: $base-dark-color;
  font-size: 2rem;
  vertical-align: middle;
}

.tweet-username {
  display: inline-block;
  color: #888;
  font-size: 1.4rem;
  vertical-align: middle;
}

/* Transition
----------------------------------------*/
$easing: cubic-bezier(0.59, 0.11, 0.43, 0.92);

.list-enter-active,
.list-leave-active {
  transition: 600ms $easing;
  transition-property: opacity, transform;
}

.list-move {
  transition: transform 600ms $easing;
}

.list-enter-active {
  opacity: 1;
  transform: scale(1);
}

.list-enter {
  opacity: 0;
  transform: scale(0.5);
}
</style>
