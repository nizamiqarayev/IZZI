<template>
  <main class="shadow-inner flex items-center justify-center min-h-screen w-full bg-slate-50 font-averta">
    <div class="flex lg:flex-row flex-col  items-start justify-center gap-4 w-full lg:w-5/6">
      <div class="bg-white w-full lg:w-4/12 shadow-md">
        <div @click="showaccount=!showaccount" class="lg:hidden flex gap-4 justify-between items-center">
          <h2 class="pt-7 pl-7 pr-48 mb-4 font-bold text-2xl">Account</h2>
          <img :class="showaccount ? 'rotate-180 ' : ''"
                          class="h-6 w-6 mr-4 lg:hidden transform transition-all duration-500" src="../assets/images/Vector 59.svg"
                          alt="">
        </div>
        <div class="hidden lg:flex gap-4 items-center">
          <h2 class="pt-7 pl-7 pr-48 mb-4 font-bold text-2xl">Account</h2>
        </div>
        <div :class="showaccount? 'h-[340px]' : 'h-0'" class="overflow-hidden transform transition-all duration-500">
          <div @click="selectedMenu = 1"
              :class="selectedMenu == 1 ? 'border-l-4 border-[#5920BC] bg-[#5920BC] bg-opacity-[0.03]':'border-l-transparent'"
            class="hover:cursor-pointer py-4 border-l-4  hover:border-[#5920BC] hover:bg-[#5920BC] hover:bg-opacity-[0.03] ">
            <p class="flex items-center ml-6 gap-[0.9375rem]"><img src="../assets/images/accounticons/user (13).svg"
                alt=""><span>Profile</span></p>
          </div>
          <div @click="selectedMenu = 2"
           :class="selectedMenu == 2 ? 'border-l-4 border-[#5920BC] bg-[#5920BC] bg-opacity-[0.03]':'border-l-transparent'"
            class="hover:cursor-pointer py-4 border-l-4  hover:border-[#5920BC] hover:bg-[#5920BC] hover:bg-opacity-[0.03] ">
            <p class="flex items-center ml-6 gap-[0.9375rem]"><img src="../assets/images/accounticons/lock (2).svg"
                alt=""><span>Password</span></p>
          </div>
          <div @click="selectedMenu = 3"
            :class="selectedMenu == 3 ? 'border-l-4 border-[#5920BC] bg-[#5920BC] bg-opacity-[0.03]':'border-l-transparent'"
            class="hover:cursor-pointer py-4 border-l-4  hover:border-[#5920BC] hover:bg-[#5920BC] hover:bg-opacity-[0.03] ">
            <p class="flex items-center ml-6 gap-[0.9375rem]"><img
                src="../assets/images/accounticons/Notification 3.svg" alt=""><span>Notifications</span></p>
          </div>
          <div @click="selectedMenu = 4"
            :class="selectedMenu == 4 ? 'border-l-4 border-[#5920BC] bg-[#5920BC] bg-opacity-[0.03]':'border-l-transparent'"
            class="hover:cursor-pointer py-4 border-l-4  hover:border-[#5920BC] hover:bg-[#5920BC] hover:bg-opacity-[0.03] ">
            <p class="flex items-center ml-6 gap-[0.9375rem]"><img src="../assets/images/accounticons/Credit Card.svg"
                alt=""><span>Saved Cards</span></p>
          </div>
          <div @click="selectedMenu = 5"
            :class="selectedMenu == 5 ? 'border-l-4 border-[#5920BC] bg-[#5920BC] bg-opacity-[0.03]':'border-l-transparent'"
            class="hover:cursor-pointer py-4 border-l-4  hover:border-[#5920BC] hover:bg-[#5920BC] hover:bg-opacity-[0.03] ">
            <p class="flex items-center ml-6 gap-[0.9375rem]"><img src="../assets/images/accounticons/Heart.svg"
                alt=""><span>Bonus Balance</span></p>
          </div>
          <div @click="selectedMenu = 6"
            :class="selectedMenu == 6 ? 'border-l-4 border-[#5920BC] bg-[#5920BC] bg-opacity-[0.03]':'border-l-transparent'"
            class="hover:cursor-pointer py-4 border-l-4  hover:border-[#5920BC] hover:bg-[#5920BC] hover:bg-opacity-[0.03] ">
            <p class="flex items-center ml-6 gap-[0.9375rem]"><img src="../assets/images/accounticons/Sale Coupon.svg"
                alt=""><span>Invite Friend</span></p>
          </div>
        </div>
      </div>

      <div class="w-full mb-10">
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
      selectedMenu: 1,
      showaccount:true
    }
  },
}
</script>

<style>

</style>