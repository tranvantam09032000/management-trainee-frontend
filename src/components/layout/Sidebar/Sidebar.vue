<template>
  <CSidebar
    fixed
    :minimize="minimize()"
    :show="show()"
    @update:show="(value) => setSidebarShowData(value)"
  >
    <CSidebarBrand class="d-md-down-none" to="/">
      <CIcon
        class="c-sidebar-brand-full"
        name="logo"
        size="custom-size"
        :height="35"
        viewBox="0 0 556 134"
      />
      <CIcon
        class="c-sidebar-brand-minimized"
        name="logo"
        size="custom-size"
        :height="35"
        viewBox="0 0 110 134"
      />
    </CSidebarBrand>

    <CRenderFunction flat :content-to-render="$options.nav" />
    <CSidebarMinimizer class="d-md-down-none" @click.native="setSidebarMinimizeData(!minimize())" />
  </CSidebar>
</template>

<script>
import nav from "././_nav";

import { mapGetters, mapActions } from "vuex";

export default {
  name: "Sidebar",
  nav,
  methods: {
    ...mapGetters("layout", ["getSidebarShow", "getSidebarMinimize"]),
    ...mapActions("layout", ["setSidebarShowData", "setSidebarMinimizeData"]),

    show() {
      return this.getSidebarShow();
    },
    minimize() {
      return this.getSidebarMinimize();
    },
  },
};
</script>
