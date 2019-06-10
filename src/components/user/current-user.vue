<template>
  <span>
    <slot :user="user" name="abc">{{ user.lastName }}</slot>
  </span>
</template>

<script>
export default {
  data () {
    return {
      user: {
        lastName: 'abc',
        firstName: '123'
      }
    }
  }
}
</script>
