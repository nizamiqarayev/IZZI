<template>
  <main class="shadow-inner flex items-center justify-center min-h-screen w-full bg-slate-50 font-quicksand">
    <div class="flex items-start w-5/6">
      <div class="bg-white mr-4">
        <h2 class="pt-7 pl-7 pr-48 mb-4 font-bold text-2xl">Account</h2>
        <ul>
          <li @click="selectedMenu = 1"
            class="hover:cursor-pointer py-4 border-l-4 border-l-transparent hover:border-[#5920BC] hover:bg-[#5920BC] hover:bg-opacity-[0.03]">
            <p class="flex items-center ml-6 gap-[0.9375rem]"><img src="../assets/images/accounticons/user (13).svg"
                alt=""><span>Profile</span></p>
          </li>
          <li @click="selectedMenu = 2"
            class="hover:cursor-pointer py-4 border-l-4 border-l-transparent hover:border-[#5920BC] hover:bg-[#5920BC] hover:bg-opacity-[0.03]">
            <p class="flex items-center ml-6 gap-[0.9375rem]"><img src="../assets/images/accounticons/Credit Card.svg"
                alt=""><span>Saved Cards</span></p>
          </li>
          <li @click="selectedMenu = 3"
            class="hover:cursor-pointer py-4 border-l-4 border-l-transparent hover:border-[#5920BC] hover:bg-[#5920BC] hover:bg-opacity-[0.03]">
            <p class="flex items-center ml-6 gap-[0.9375rem]"><img src="../assets/images/accounticons/Heart.svg"
                alt=""><span>Bonus Balance</span></p>
          </li>
          <li @click="selectedMenu = 4"
            class="hover:cursor-pointer py-4 border-l-4 border-l-transparent hover:border-[#5920BC] hover:bg-[#5920BC] hover:bg-opacity-[0.03]">
            <p class="flex items-center ml-6 gap-[0.9375rem]"><img src="../assets/images/accounticons/Sale Coupon.svg"
                alt=""><span>Invite Friend</span></p>
          </li>
          <li @click="selectedMenu = 5"
            class="hover:cursor-pointer py-4 border-l-4 border-l-transparent hover:border-[#5920BC] hover:bg-[#5920BC] hover:bg-opacity-[0.03]">
            <p class="flex items-center ml-6 gap-[0.9375rem]"><img src="../assets/images/accounticons/lock (2).svg"
                alt=""><span>Password</span></p>
          </li>
          <li @click="selectedMenu = 6"
            class="hover:cursor-pointer py-4 border-l-4 border-l-transparent hover:border-[#5920BC] hover:bg-[#5920BC] hover:bg-opacity-[0.03]">
            <p class="flex items-center ml-6 gap-[0.9375rem]"><img
                src="../assets/images/accounticons/Notification 3.svg" alt=""><span>Notifications</span></p>
          </li>

        </ul>
      </div>

      <div class="">
        <Profile v-if="selectedMenu == 1" />
        <Password v-if="selectedMenu == 2" />
        <Notifications v-if="selectedMenu == 3" />
        <SavedCards v-if="selectedMenu == 4" />
        <BonusBalance v-if="selectedMenu == 5" />
        <InviteFriend v-if="selectedMenu == 6" />
      </div>
    </div>

  </main>
</template>

<script>
import Profile from '../components/AccountSubComponents/Profile.vue';
import Password from '../components/AccountSubComponents/Password.vue';
import Notifications from '../components/AccountSubComponents/Notifications.vue';
import BonusBalance from '../components/AccountSubComponents/BonusBalance.vue';
import SavedCards from '../components/AccountSubComponents/SavedCards.vue';
import InviteFriend from '../components/AccountSubComponents/InviteFriend.vue';
export default {
  components: { Profile, Password, Notifications, BonusBalance, SavedCards, InviteFriend },
  data() {
    return {
      selectedMenu: 1
    }
  },
}
</script>

<style>
</style>