import { createStore } from "vuex";

export default createStore({
  state: {

    arr: [
      {
        level: 1,
        frogs: ["#008000"],
        answer: ` 
        display: flex;
        justify-content: flex-end;
        `,
        request: `
        display: flex;
        `,
        isPassed: false,
        content: `  
     
    
      <p class="mb-[15px]">
        Добро пожаловать в Flexbox Froggy. Игра, в которой тебе нужно помочь
        лягушонку Фроги и его друзьям, напиконтейнер CSS код! Направь этого
        лягушонка на лилию справа, используя свойство
        <code class="bg-[#fff2] font-[600]">justify-content,</code> которое
        выравнивает элементы горизонтально и принимает следующие значения:
      </p>
      <ul class="pl-[30px] mb-[15px]">
        <li>
          <code class="bg-[#fff2] font-[600]">flex-start:</code>элементы
          выравниваются по левой стороне контейнера.
        </li>
        <li>
          <code class="bg-[#fff2] font-[600]">flex-end:</code> элементы
          выравниваются по правой стороне контейнера.
        </li>
        <li>
          <code class="bg-[#fff2] font-[600]">center:</code> элементы
          выравниваются по центру контейнера.
        </li>
        <li>
          <code class="bg-[#fff2] font-[600]">space-between:</code>элементы
          отображаются с одинаковыми отступами между ними.
        </li>
        <li>
          <code class="bg-[#fff2] font-[600]">space-around:</code> элементы
          отображаются с одинаковыми отступами вокруг них.
        </li>
      </ul>
      <p>
        Например, <code class="bg-[#fff2] font-[600]">justify-content:</code>
        <code class="bg-[#fff2] font-[600]">flex-end;</code> сдвинет лягушонка
        вправо.
      </p>

     
        `
      },
      {
        level: 2,
        frogs: ["#008000", "#FFFF00"],
        answer: `
        display: flex;
        justify-content: center;
        `,
        request: `
        display: flex;
        `,
        isPassed: false,
        content: `
   

      <p class="mb-[15px]">
        Используй <code class="bg-[#fff2] font-[600]">justify-content,</code> ещё раз, чтобы помочь этим лягушатам попасть на их лилии. Помни, что это свойство CSS выравнивает элементы горизонтально и принимает следующие значения:
      </p>
      <ul class="pl-[30px] mb-[15px]">
        <li>
          <code class="bg-[#fff2] font-[600]">flex-start:</code>элементы
          выравниваются по левой стороне контейнера.
        </li>
        <li>
          <code class="bg-[#fff2] font-[600]">flex-end:</code> элементы
          выравниваются по правой стороне контейнера.
        </li>
        <li>
          <code class="bg-[#fff2] font-[600]">center:</code> элементы
          выравниваются по центру контейнера.
        </li>
        <li>
          <code class="bg-[#fff2] font-[600]">space-between:</code>элементы
          отображаются с одинаковыми отступами между ними.
        </li>
        <li>
          <code class="bg-[#fff2] font-[600]">space-around:</code> элементы
          отображаются с одинаковыми отступами вокруг них.
        </li>
      </ul>
      
        `
      },
      {
        level: 3,
        frogs: ["#008000", "#FFFF00", '#CF1A17'],
        answer: `
        display: flex;
        justify-content: space-around;
        `,
        request: `
        display: flex;
        `,
        isPassed: false,
        content: `
       

      <p class="mb-[15px]">
        Помоги всем трём лягушатам найти их лилии, просто используя <code class="bg-[#fff2] font-[600]">justify-content.</code> В этот раз у лилий много пространства вокруг.
        
      </p>
      <p>Если ты чувствуешь, что забыл возможные значения свойства, ты можешь навести курсор на название свойства, чтобы посмотреть их. Попробуй навести курсор на <code class="bg-[#fff2] font-[600]">justify-content.</code>
      </p>
      
        `
      },
      {
        level: 4,
        frogs: ["#008000", "#FFFF00", '#CF1A17'],
        answer: `
        display: flex;
        justify-content: space-between;
        `,
        request: `
        display: flex;
        `,
        isPassed: false,
        content: `
      <p class="mb-[15px]">
      Теперь лилии по краям уплыли к берегам, увеличив пространство между ними. Используй <code class="bg-[#fff2] font-[600]">justify-content.</code> В этот раз у лилий одинаковое расстояние между ними.
        
      </p>
      
        `
      },
      {
        level: 5,
        frogs: ["#008000", "#FFFF00", '#CF1A17'],
        answer: `
        display: flex;
        align-items: flex-end;
        `,
        request: `
        display: flex;
        `,
        isPassed: false,
        content: `
      

      <p class="mb-[15px]">
      Теперь используй <code class="bg-[#fff2] font-[600]">align-items</code>, чтобы помочь лягушатам добраться до нижней части пруда. Это свойство CSS выравнивает элементы вертикально и принимает следующие значения:
      </p>
      <ul class="pl-[30px] mb-[15px]">
        <li>
          <code class="bg-[#fff2] font-[600]">flex-start:</code>элементы
          выравниваются по левой стороне контейнера.
        </li>
        <li>
          <code class="bg-[#fff2] font-[600]">flex-end:</code> элементы
          выравниваются по правой стороне контейнера.
        </li>
        <li>
          <code class="bg-[#fff2] font-[600]">center:</code> элементы
          выравниваются по центру контейнера.
        </li>
        <li>
          <code class="bg-[#fff2] font-[600]">space-between:</code>элементы
          отображаются с одинаковыми отступами между ними.
        </li>
        <li>
          <code class="bg-[#fff2] font-[600]">space-around:</code> элементы
          отображаются с одинаковыми отступами вокруг них.
        </li>
      </ul>
      
        `
      },
      {
        level: 6,
        frogs: ["#008000"],
        answer: `
        display: flex;
        align-items: center;
        justify-content: center;
        `,
        request: `
        display: flex;
        `,
        isPassed: false,
        content: `
      

      <p class="mb-[15px]">
      Направь лягушонка в центр пруда, используя <code class="bg-[#fff2] font-[600]">justify-content</code> и <code class="bg-[#fff2] font-[600]">align-items</code> вместе.
        
      </p>
      
        `
      },
      {
        level: 7,
        frogs: ["#008000", "#FFFF00", '#CF1A17'],
        answer: `
        display: flex;
        align-items: flex-end;
        justify-content: space-around;
        `,
        request: `
        display: flex;
        `,
        isPassed: false,
        content: `
    

      <p class="mb-[15px]">
      Лягушатам снова нужно пересечь пруд. В этот раз к лилиям, с достаточно большим пространством вокруг них. Используй комбинацию <code class="bg-[#fff2] font-[600]">justify-content</code> и <code class="bg-[#fff2] font-[600]">align-items</code>
      </p>
      
      
        `
      },
      {
        level: 8,
        frogs: ["#008000", "#FFFF00", '#CF1A17'],
        answer: `
        display: flex;
        flex-direction: row-reverse;
        `,
        request: `
        display: flex;
        `,
        isPassed: false,
        content: `
        

      <p class="mb-[15px]">
      Лягушатам нужно выстроиться в том же порядке, что и лилии, используя <code class="bg-[#fff2] font-[600]">flex-direction</code>. Это свойство CSS задает направление, в котором будут расположены элементы в контейнере, и принимает следующие значения:
      </p>
      <ul class="pl-[30px] mb-[15px]">
        <li>
          <code class="bg-[#fff2] font-[600]">row:</code> элементы размещаются по направлению текста.
        </li>
        <li>
          <code class="bg-[#fff2] font-[600]">row-reverse:</code>  элементы отображаются в обратном порядке к направлению текста.
        </li>
        <li>
          <code class="bg-[#fff2] font-[600]">column:</code> элементы располагаются сверху вниз.
        </li>
        <li>
          <code class="bg-[#fff2] font-[600]">column-reverse:</code>элементы располагаются снизу вверх.
        </li>
      </ul>
      
        `
      },
      {
        level: 9,
        frogs: ["#008000", "#FFFF00", '#CF1A17'],
        answer: `
        display: flex;
        flex-direction: column;
        `,
        request: `
        display: flex;
        `,
        isPassed: false,
        content: `
      
      <p class="mb-[15px]">
      Помоги лягушатам расположиться на своих лилиях, используя <code class="bg-[#fff2] font-[600]">flex-direction</code>. Это свойство CSS задает направление, в котором располагаются элементы в контейнере, и принимает следующие значения:
      </p>
      <ul class="pl-[30px] mb-[15px]">
        <li>
          <code class="bg-[#fff2] font-[600]">row:</code> элементы размещаются по направлению текста.
        </li>
        <li>
          <code class="bg-[#fff2] font-[600]">row-reverse:</code>  элементы отображаются в обратном порядке к направлению текста.
        </li>
        <li>
          <code class="bg-[#fff2] font-[600]">column:</code> элементы располагаются сверху вниз.
        </li>
        <li>
          <code class="bg-[#fff2] font-[600]">column-reverse:</code>элементы располагаются снизу вверх.
        </li>
      </ul>
      
        `
      },
      {
        level: 10,
        frogs: ["#008000", "#FFFF00", '#CF1A17'],
        answer: `
        display: flex;
        flex-direction: row-reverse;
        justify-content: start;
        `,
        request: `
        display: flex;
        `,
        isPassed: false,
        content: `
      

      <p class="mb-[15px]">
      Помоги лягушатам попасть на свои лилии. Хоть и кажется, что они почти на своих местах, всё же придётся применить и <code class="bg-[#fff2] font-[600]">flex-direction</code>, и <code class="bg-[#fff2] font-[600]">justify-content</code>, чтобы поместить их на свои лилии.
      </p>
      <p>Заметь, что когда ты устанавливаешь направление в обратном порядке для ряда или колонки, начало (start) и конец (end) тоже меняются местами.</p>
      
        `
      },
      {
        level: 11,
        frogs: ["#008000", "#FFFF00", '#CF1A17'],
        answer: `
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        `,
        request: `
        display: flex;
        `,
        isPassed: false,
        content: `
      

      <p class="mb-[15px]">
      Помоги лягушатам найти их лилии с помощью <code class="bg-[#fff2] font-[600]">flex-direction</code> и <code class="bg-[#fff2] font-[600]">justify-content</code>.
      </p>
      <p>Заметь, когда в качестве направления выбрана колонка, то <code class="bg-[#fff2] font-[600]">justify-content</code> влияет на вертикальное выравнивание, а <code class="bg-[#fff2] font-[600]">align-items</code>. — на горизонтальное.</p>
      
        `
      },
      {
        level: 12,
        frogs: ["#008000", "#FFFF00", '#CF1A17'],
        answer: `
        display: flex;
        flex-direction: column-reverse;
        justify-content: space-between;
        `,
        request: `
        display: flex;
        `,
        isPassed: false,
        content: `
     
      <p class="mb-[15px]">
      Помоги лягушатам найти их лилии с помощью <code class="bg-[#fff2] font-[600]">flex-direction</code> и <code class="bg-[#fff2] font-[600]">justify-content</code>.
      </p>
      
        `
      },
      {
        level: 13,
        frogs: ["#008000", "#FFFF00", '#CF1A17'],
        answer: `
        display: flex;
        flex-direction: row-reverse;
        align-items: flex-end;
        justify-content: center;
        `,
        request: `
        display: flex;
        `,
        isPassed: false,
        content: `
      <p class="mb-[15px]">
      Помоги лягушатам найти их лилии с помощью <code class="bg-[#fff2] font-[600]">flex-direction</code>, <code class="bg-[#fff2] font-[600]">justify-content</code> и <code class="bg-[#fff2] font-[600]">align-items.</code>.
      </p>
      
        `
      },
      // {
      //   level: 14,
      //   frogs: ["#008000", "#FFFF00", '#CF1A17'],
      //   answer: `
      //   display: flex;
      //   order: 1;
      //   `,
      //   request: `
      //   display: flex; 

      //   `,
      //   isPassed: false,
      //   content: `
      // <p class="mb-[15px]">
      // Иногда изменения порядка отображения элементов в контейнере недостаточно. В таких случаях мы можем применить свойство <code class="bg-[#fff2] font-[600]">order</code>. для конкретных элементов. По умолчанию, значение этого свойства у элементов равно 0, но мы можем задать положительное или отрицательное целое число этому свойству.
      // </p>
      // <p>
      // Используй свойство <code class="bg-[#fff2] font-[600]">order</code>, чтобы разместить лягушат на своих лилиях.
      // </p>
      
      //   `
      // },
      {
        level: 14,
        frogs: ["#FFFF00", "#008000", "#008000", "#008000", "#008000", "#008000", '#CF1A17'],
        answer: `
        display: flex;
        flex-wrap: wrap;
        `,
        request: `
        display: flex;
        `,
        isPassed: false,
        content: `
   

      <p class="mb-[15px]">
        О нет! Лягушат сплющило на одном ряду лилий. Раздвинь их с помощью свойства  <code class="bg-[#fff2] font-[600]">flex-wrap</code>, которое принимает следующие значения:
      </p>
      <ul class="pl-[30px] mb-[15px]">
        <li>
          <code class="bg-[#fff2] font-[600]">nowrap:</code>размеры элементов устанавливаются автоматически, чтобы они поместились в один ряд.
        </li>
        <li>
          <code class="bg-[#fff2] font-[600]">wrap:</code> элементы автоматически переносятся на новую строку.
        </li>
        <li>
          <code class="bg-[#fff2] font-[600]">wrap-reverse:</code> элементы автоматически переносятся на новую строку, но строки расположены в обратном порядке.
        </li>
      </ul>
      
        `
      },
      {
        level: 15,
        frogs: [ "#008000", "#008000", "#008000", "#008000", "#008000", '#CF1A17', '#CF1A17', '#CF1A17', '#CF1A17', '#CF1A17', "#FFFF00", "#FFFF00", "#FFFF00", "#FFFF00", "#FFFF00", ],
        answer: `
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        `,
        request: `
        display: flex;
        `,
        isPassed: false,
        content: `
   

      <p class="mb-[15px]">
        
        Помоги этой армии лягушат выстроиться в три колонки с помощью комбинации <code class="bg-[#fff2] font-[600]">flex-direction</code> и <code class="bg-[#fff2] font-[600]">flex-wrap</code>.
      </p>
      
      
        `
      },



    ],

  },
  getters: {
    arr: state => state.arr
  },
  mutations: {
    EQUAL_MUTATION(state, events) {

      // console.log( 
      //   `
      //   REQUEST
      //       display: ${events[0].style.display}
      //       justifyContent: ${events[0].style.justifyContent}
      //       alignItems: ${events[0].style.alignItems}
      //       flexDirection: ${events[0].style.flexDirection}
      //       order: ${events[0].style.order}
      //       flexFlow: ${events[0].style.flexFlow}
      //       alignContent: ${events[0].style.alignContent}
      //       flexWrap: ${events[0].style.flexWrap}
      //   `
      //  );

      // console.log( 
      //   `
      //   ANSWER
      //       display: ${events[1].style.display}
      //       justifyContent: ${events[1].style.justifyContent}
      //       alignItems: ${events[1].style.alignItems}
      //       flexDirection: ${events[1].style.flexDirection}
      //       order: ${events[1].style.order}
      //       flexFlow: ${events[1].style.flexFlow}
      //       alignContent: ${events[1].style.alignContent}
      //       flexWrap: ${events[1].style.flexWrap}
      //   `
      //  );

      if (
        events[0].style.display == events[1].style.display &&
        events[0].style.justifyContent == events[1].style.justifyContent &&
        events[0].style.alignItems == events[1].style.alignItems &&
        events[0].style.flexDirection == events[1].style.flexDirection &&
        events[0].style.order == events[1].style.order &&
        events[0].style.flexFlow == events[1].style.flexFlow &&
        events[0].style.alignContent == events[1].style.alignContent &&
        events[0].style.flexWrap == events[1].style.flexWrap
      ) {

        state.arr[Object.prototype.idx].isPassed = true
        document.querySelector("#next").removeAttribute("disabled")
        document.querySelector("#next").classList.remove("disabled")
        //////////здесь пользователь когда уже выгал
        //////////здесь пишем код

      }
      


    }
  },
  actions: {
    EQUAL({ commit }, events) {
      commit("EQUAL_MUTATION", events)
    }
  },
  modules: {},
});
