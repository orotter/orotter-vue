<template lang="pug">
article.user-panel
  header.user-header
    icon(:src="user.image", size="80")
    div.user-name-wrapper
      p.user-name(v-text="user.name")
      p.user-username(v-text="'@' + user.username")
  ul.user-info
    li.user-info-item(v-for="info in infoList")
      strong.user-info-label(v-text="info.label")
      span.user-info-value(v-text="info.value")
</template>

<script>
import Icon from '../components/Icon'

export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  },

  computed: {
    infoList () {
      return [
        { label: 'つぶやき数', value: this.user.tweetsCount },
        { label: 'フォロー数', value: this.user.followsCount },
        { label: 'フォロワー数', value: this.user.followersCount }
      ]
    }
  },

  components: {
    Icon
  }
}
</script>

<style lang="scss" scoped>
@import '../themes/variables';

.user-panel {
  background-color: #fff;
  border-radius: $border-radius;
}

.user-header {
  display: flex;
  padding: 20px;
}

.user-name-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 16px;
}

.user-name {
  font-size: 2rem;
}

.user-username {
  margin-top: 3px;
  font-size: 1.4rem;
}

.user-info-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  border-top: 1px solid #f1f1f1;
}

.user-info-label {
  color: #888888;
  font-weight: normal;
}

.user-info-value {
  color: $base-dark-color;
  font-size: 2rem;
}
</style>
