<template>
  <q-page class="flex flex-center bg-amber-1">
     <h3 class="text-center">Драматический театр имени М. С. Щепкина</h3>
     <div class="IMG flex row">
    <img src="../assets/theatre.jpg" alt="" class="percent" >
    <img src="../assets/dark.jpg" alt="" class="percent">
  </div>
   <div class="text text-h6">
    <p>
      Белгородский театр – величественное здание, построенное в стиле классицизма. В основе лежит типовой проект, который белгородский архитектор Виталий Лимаренко переработал с учетом рельефа. Здание получило оригинальный фасад и каменный цоколь, который компенсировал уклон площади и «поднял» строение на один уровень с остальными. Театр украшен восьмиколонным портиком и фигурой Мельпомены на крыше.
    </p>
  </div>
  <back></back>
  </q-page>
</template>

<script>
import back from 'src/components/back.vue';
export default {
  components: {
    back
  }
}
</script>
 <style>
 .text{
  padding: 36px;
 }
 .IMG{
  display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 4%;
    padding-left: 13%;
 }
 .percent{
  max-width: 40%;
  border-radius: 8px;
 }
 </style>