<template>
<q-btn color="amber q-mb-md" label="На главную" @click="goToMain" />
</template>

<script>
export default {
  // name: 'ComponentName',
  setup () {
    return {}
  },
  methods: {
    goToMain() {
      this.$router.push('/');
    },
  },
}
</script>
