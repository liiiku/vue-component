<template>
  <current-user>
    <template slot="abc" slot-scope="slotProps">
      {{ slotProps.user.firstName }}
    </template>
  </current-user>
</template>

<script>
// 这里是父作用于，按理说是拿不到user的
import currentUser from './user/current-user'
export default {
  components: {
    currentUser
  }
}
</script>
