<script setup>
import BurgersLvl from "../components/BurgersLvl.vue";
</script>

<script>
import { mapGetters } from "vuex";
import "../static/css/adaptation.css"

export default {
  data() {
    return {
      fallback: [],
      open: false,
    };
  },
  computed: {
    ...mapGetters(["arr"]),
  },
  mounted() { 
    
    Object.prototype.idx = 0;
    Object.prototype.inpCols = 1;
    this.reload();
    this.show();
  },
  methods: {
    reload() {
      this.fallback = this.arr[Object.prototype.idx];
      if(Object.prototype.idx == 5){
        Object.prototype.inpCols = 2  
      }else{
        Object.prototype.inpCols = 1
      }
    },
    beginType() {
      let req = document.querySelector("#request");
      let ans = document.querySelector("#answer");
      req.style = `display:flex;${event.target.value}`;

      this.$store.dispatch("EQUAL", [req, ans]);
    },
    show() {
      document.querySelector("#content").innerHTML = this.fallback.content;
    },
    openMenu() {
      this.open = !this.open;
    },
    changeLevel() {
      Object.prototype.idx = event.target.dataset.level - 1;
      this.reload();
      this.show();
    },
    next() {
      // может это не нужно одинаково с burgerlvl но и это не работает
      for (let i of document.querySelector(".levels").children) {
        if (i.dataset.level == Object.prototype.idx + 2) {
          i.classList.add("green");
        } else {
          i.classList.remove("green");
        }
      }
// ........................................................
      Object.prototype.idx += 1;
// 
      this.$root.$emit("colorOption");
      // здесь мы очищаем следущий инпут
      document.querySelector("#beginInput").value = "";
      this.reload();
      this.show();
      document.querySelector("#next").classList.add("disabled");
      document.querySelector("#next").setAttribute("disabled", "disabled");
      let req = document.querySelector("#request");
      req.style.justifyContent = "";
      req.style.alignItems = "";
      req.style.flexDirection = "";
      req.style.alignContent = "";
      req.style.flexWrap = "";
      req.style.order = "";
      req.style.flexFlow = "";

    },

    prevLvl() {
      // 
      for (let i of document.querySelector(".levels").children) {
        if (i.dataset.level == Object.prototype.idx) {
          i.classList.add("green");
        } else {
          i.classList.remove("green");
        }
      }
      // 
      Object.prototype.idx -= 1
      this.reload()
      this.show()
    },
    nextLvl() {
      for (let i of document.querySelector(".levels").children) {
        if (i.dataset.level == Object.prototype.idx + 2) {
          i.classList.add("green");
        } else {
          i.classList.remove("green");
        }
      }

      Object.prototype.idx += 1
      this.reload()
      this.show()
    },
  },
};
</script>

<template>
  <div id="father" class="h-[969px] w-[100%] bg-[red] flex justify-between ">
    <div id="left" class="h-[100%] w-[50%] bg-[#43A047] flex-col p-[30px] text-[#fff]">
      <div id="logo_wrp" class="flex justify-between items-center">
        <h1 id="logo" class="text-[28px] text-[white] font-[800] mb-[10px] items-center flex">
          FLEXBOX FROGGY
        </h1>
        <div class="h-[30px] relative w-[200px] bg-[#69B36C] flex items-center">
          <svg @click="prevLvl" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 opacity-[0.8] cursor-pointer border-r-[1px] border-solid border-[#56AA5A] rounded-t-[4px] rounded-l-[4px]">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
          </svg>

          <span @click="openMenu()" class="w-[160px] text-center cursor-pointer">Уровень {{ +Object.prototype.idx + 1 }}
            из 24
          </span>

          <BurgersLvl @changeLevel="changeLevel()" :class="{ activeMenu: this.open }" />

          <svg @click="nextLvl" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 opacity-[0.8] cursor-pointer border-r-[1px] border-solid border-[#56AA5A] rounded-t-[4px] rounded-l-[4px]">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
          </svg>
        </div>
      </div>
      <div id="content">
        <!-- innerHTML bulopti biraaa  -->
      </div>
      <div id="textBlock" class="h-[260px] w-[100%] bg-[#e0e0e0] rounded-[4px] mt-[30px] relative flex">
        <div class="h-[100%] text-right w-[25px] py-[9px] px-[7px] bg-[#999] text-[#D5D5D5] flex-col justify-between">
          1<br />
          2<br />
          3<br />
          4<br />
          5<br />
          6<br />
          7<br />
          8<br />
          9<br />
          10<br />
        </div>
        <div class="flex-col h-[200px] p-[15px] w-[100%]">
          <p class="text-[#777]">
            #pond {
            <br />
            {{ this.fallback.request }}
          </p>
          <textarea :rows="Object.prototype.inpCols" @input="beginType" id="beginInput"
            class="resize-none border-none w-[97%] ml-[17px] outline-none text-[#777] px-[2px]"></textarea>
          <pre class="text-[#777]">}</pre>
        </div>
        <!-- чнопка -->
        <button id="next" @click="next" disabled
          class="disabled absolute right-[17px] bottom-[17px] bg-[red] rounded-[4px] text-[#fff] cursor-pointer py-[7px] px-[12px]">
          Следующий
        </button>
      </div>

      <!-- вот здесь бургер меню проверка -->
    </div>
    <!-- right -->
    <div id="right"  class="h-[100%] w-[50%] bg-[#1F5768] flex  ">
      <div class="h-[100%] w-[100%] flex relative justify-between ">
        <!-- request -->
        <div id="request" :style="this.fallback.request" class="z-20 p-[30px] h-[100%] w-[100%] absolute l-0 t-0">
          <div v-for="i of this.fallback.frogs" :key="i.id"
            class="m-[10px] flex items-center justify-center h-[160px] w-[160px]">
            <svg width="100px" height="100px" viewBox="0 0 210 210" preserveAspectRatio="none" version="1.1"
              xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
              xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">
              <!-- Generator: Sketch 3.4.3 (16618) - http://www.bohemiancoding.com/sketch -->
              
              <desc>Created with Sketch.</desc>
              <defs></defs>
              <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"
                transform="translate(0, 26)">
                <g id="frog-yellow" sketch:type="MSLayerGroup" transform="translate(-13.000000, -21.000000)">
                  <rect id="Rectangle-51" fill-opacity="0" fill="#D8D8D8" sketch:type="MSShapeGroup" x="13" y="0"
                    width="210" height="210"></rect>
                  <circle id="Oval-29" :fill="i" sketch:type="MSShapeGroup" cx="73" cy="45" r="24"></circle>
                  <circle id="Oval-29" :fill="i" sketch:type="MSShapeGroup" cx="163" cy="45" r="24"></circle>
                  <g id="frog-green-+-Rectangle-30" transform="translate(0.000000, 75.000000)" sketch:type="MSShapeGroup"
                    :fill="i">
                    <ellipse id="frog-green"
                      transform="translate(46.538193, 57.026578) rotate(-27.000000) translate(-46.538193, -57.026578) "
                      cx="46.5381931" cy="57.0265777" rx="26.5" ry="50.5"></ellipse>
                    <rect id="Rectangle-30" x="13" y="89" width="56" height="15" rx="9"></rect>
                  </g>
                  <g id="frog-green-+-Rectangle-30"
                    transform="translate(189.000000, 132.500000) scale(-1, 1) translate(-189.000000, -132.500000) translate(142.000000, 75.000000)"
                    sketch:type="MSShapeGroup" :fill="i">
                    <ellipse id="frog-green"
                      transform="translate(46.538193, 57.026578) rotate(-27.000000) translate(-46.538193, -57.026578) "
                      cx="46.5381931" cy="57.0265777" rx="26.5" ry="50.5"></ellipse>
                    <rect id="Rectangle-30" x="13" y="89" width="56" height="15" rx="9"></rect>
                  </g>
                  <rect id="Rectangle-30" :fill="i" sketch:type="MSShapeGroup" x="49" y="41" width="138" height="138"
                    rx="9"></rect>
                  <circle id="Oval-37" stroke="#FFFFFF" stroke-width="5" fill="#000000" sketch:type="MSShapeGroup" cx="73"
                    cy="45" r="12"></circle>
                  <circle id="Oval-37" stroke="#FFFFFF" stroke-width="5" fill="#000000" sketch:type="MSShapeGroup"
                    cx="163" cy="45" r="12"></circle>
                  <rect id="Rectangle-33" fill="rgba(255, 255, 255, 0.7)" sketch:type="MSShapeGroup" x="62" y="93"
                    width="110" height="70" rx="9"></rect>
                </g>
              </g>
            </svg>
          </div>
        </div>

        <!-- answer  -->
        <div id="answer" :style="this.fallback.answer" class="flex z-10 p-[30px] h-[100%] justify-start w-[100%] absolute l-0 t-0">
          <svg v-for="i of this.fallback.frogs" :key="i.id" class="m-[10px]"
            :style="`rotate: ${Math.round(Math.random() * 360)}deg `" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
            width="200px" height="200px" viewBox="0 0 160 160" preserveAspectRatio="none" version="1.1">
            <!-- Generator: Sketch 3.4.3 (16618) - http://www.bohemiancoding.com/sketch -->
            <defs>
              <path id="path-1"
                d="M68.1410843,159.12709 C72.0105928,159.702089 75.9705059,126.101562 80,126.101562 C85.4632556,126.101562 90.798605,159.452368 95.9541484,158.409004 C132.492835,151.014406 160,118.719524 160,80 C160,35.81722 124.18278,0 80,0 C35.81722,0 0,35.81722 0,80 C0,120.153286 29.5820305,153.397318 68.1410843,159.12709 Z" />
            </defs>
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
              <g id="lilypad-red" sketch:type="MSLayerGroup">
                <mask id="mask-2" sketch:name="Mask" fill="none">
                  <use xlink:href="#path-1" />
                </mask>
                <use id="Mask" :fill="i + 80" sketch:type="MSShapeGroup" xlink:href="#path-1" />
                <path
                  d="M68.1410843,174.12709 C72.0105928,174.702089 75.9705059,141.101562 80,141.101562 C85.4632556,141.101562 90.798605,174.452368 95.9541484,173.409004 C132.492835,166.014406 160,133.719524 160,95 C160,50.81722 124.18278,15 80,15 C35.81722,15 0,50.81722 0,95 C0,135.153286 29.5820305,168.397318 68.1410843,174.12709 Z"
                  id="lilypad-green" fill="#CF1A17" sketch:type="MSShapeGroup" mask="url(#mask-2)" />
              </g>
            </g>
          </svg>
        </div>

      </div>
    </div>
  </div>
</template>

<style>
.disabled {
  opacity: 60%;
}

.activeMenu {
  transform: translateY(0px) translateX(-50%) !important;
  opacity: 1 !important;
  pointer-events: auto;
}

</style>
