<template>
  <BaseModal
    @mouse-click-outside="isShow = false;"
    @key-esc="isShow = false;"
    @key-enter="pressKeyEnter"
    :modalName="`ConfirmDialog`"
    :isShow="isShow"
  >
    <template #header>
      <h5 class="mb-0">{{ title ? title : $t('confirm.title-default') }}</h5>
    </template>
    {{ message ? message : $t('confirm.message-confirmation-default') }}
    <template #footer>
      <input
        type="button"
        :value="$t('confirm.button-delete')"
        @click="agreeConfirm"
        class="btn btn-danger"
      />
      <input
        type="button"
        :value="$t('confirm.button-cancel')"
        @click="cancelConfirm"
        class="btn btn-dark"
      />
    </template>
  </BaseModal>
</template>

<script>
import BaseModal from "../../../components/common/base-modal/BaseModal";

export default {
  name: "ConfirmDialog",
  components: {
    BaseModal,
  },

  props: {
    title: {
      type: String,
      default: "",
    },
    message: {
      type: String,
      default: "",
    },
    data: {
      type: Object,
      default: null,
    },
  },

  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    pressKeyEnter() {
      this.agreeConfirm();
    },

    agreeConfirm() {
      this.isShow = false;
      this.$emit("agree", this.data);
    },

    cancelConfirm() {
      this.isShow = false;
      this.$emit("cancel", this.data);
    },
  },
  watch: {
    data() {
      this.isShow = true; // Show alert
    },

    // isShow() {
    //   this.$emit("change-overlay", this.isShow);
    // },
  },
};
</script>

<style>
</style>