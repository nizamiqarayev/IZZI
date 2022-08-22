<template>
  <section class="w-full bg-white lg:px-8 px-4 font-averta min-h-[70vh] shadow-md">
    <div class="py-2 flex px-2 justify-between border-b-2">
      <h2 class="text-2xl font-bold">Notifications</h2>
    </div>
    <div class="w-full flex flex-col p-2">
      <table class="border-b-[1px]">
        <thead>
          <tr class="bg-[#faf5ff]">
            <th class="py-2 w-5/12">Marketing Notifications</th>
            <th class="font-normal py-2">Email</th>
            <th class="font-normal border-x-[1px] py-2">SMS</th>
            <th class="font-normal py-2 w-2/12">Notifications</th>
          </tr>
        </thead>
        <tbody>
          <tr class="h-12">
            <th>
              New Services
            </th>
            <th>
              <input type="checkbox" name="" class="w-5 h-5" id="">
            </th>
            <th>
              <input type="checkbox" name="" class="w-5 h-5" id="">
            </th>
            <th>
              <input type="checkbox" name="" class="w-5 h-5" id="">
            </th>
            
          </tr>
          <tr class="h-12">
            <th>
              Discounts
            </th>
            <th>
              <input type="checkbox" name="" class="w-5 h-5" id="">
            </th>
            <th>
              <input type="checkbox" name="" class="w-5 h-5" id="">
            </th>
            <th>
              <input type="checkbox" name="" class="w-5 h-5" id="">
            </th>
            
          </tr>

        </tbody>
      </table>
      <div class="flex items-center justify-end gap-4 py-4">
        <button class="py-2 px-4 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100">Cancel</button>
        <button class="py-2 px-4 border bg-[#5920BC] text-white border-gray-300 rounded-md">Submit</button>
      </div>
    </div>

  </section>
</template>

<script>
export default {

}
</script>

<style>

</style>