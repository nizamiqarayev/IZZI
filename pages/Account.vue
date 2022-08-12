<template>
  <AccountMain />
</template>

<script>
import Profile from '../components/AccountSubComponents/Profile.vue';
import Password from '../components/AccountSubComponents/Password.vue';
import Notifications from '../components/AccountSubComponents/Notifications.vue';
import BonusBalance from '../components/AccountSubComponents/BonusBalance.vue';
import SavedCards from '../components/AccountSubComponents/SavedCards.vue';
import InviteFriend from '../components/AccountSubComponents/InviteFriend.vue';
import AccountMain from '../components/AccountMain.vue';
export default {
  components: { Profile, Password, Notifications, BonusBalance, SavedCards, InviteFriend, AccountMain },
  data() {
    return {
      selectedMenu: 3,
    }
  },
  mounted(){
        window.scrollTo(0,0)
    }
}
</script>

<style>
</style>