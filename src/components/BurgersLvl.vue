<template>
  <div class="disactive">
    <div
      class="levels h-[265px] relative w-[160px] bg-[#2C3E50] rounded-[4px] py-[16px] px-[8px] flex flex-wrap justify-center text-[12px]"
    >
      <div
      v-for="i of this.arr" :key="i.id"
      @click="$emit('changeLevel'),colorOption()"
      :data-level="i.level"
        class="lvl h-[30px] w-[30px] text-center rounded-[50%] cursor-pointer duration-[.2s] bg-[#566573] hover:bg-[#228B24] flex items-center justify-center border-[2px] border-solid border-[transparent] m-[2px] leading-6"
      >
        {{ i.level }}
      </div>

      <p class="mt-[16px] mb-[10px] text-center cursor-pointer">Сбросить</p>
    </div>
  </div>
</template>

<script setup>

</script>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters(["arr"])
  },
  methods: {
    colorOption(){
      for(let i of event.target.parentNode.children){
        if(i.dataset.level ==  Object.prototype.idx + 1){
          i.classList.add("green")
        }else{
          i.classList.remove("green")
        }
      }
    },
  },

 
};
</script>

<style>
.levels::after {
  content: "";
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 12px solid transparent;
  border-right: 12px solid transparent;
  border-bottom: 12px solid #2c3e50;
}
.disactive {
  position: absolute;
  top: 50px !important;
  left: 50%;
  transform: translateX(-50%) translateY(-20%);
  pointer-events: none;
  transition-duration: 0.3s;
  opacity: 0;
  z-index: 999;
}
.green{
  background: #228B24 !important;
}
</style>

