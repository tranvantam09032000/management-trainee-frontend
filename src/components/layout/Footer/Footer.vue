<template>
  <CFooter :fixed="false">
    <div>
      <a href="https://coreui.io" target="_blank">CoreUI</a>
      <span class="ml-1">&copy; {{new Date().getFullYear()}} creativeLabs.</span>
    </div>
    <div class="mfs-auto">
      <span class="mr-1" target="_blank">Powered by</span>
      <a href="">IT Cao Thang</a>
    </div>
  </CFooter>
</template>

<script>
export default {
  name: 'Footer'
}
</script>
