<template>
  <q-page class="flex flex-center bg-amber-1">
     <h3 class="text-center">Белгородский историко-художественный музей-диорама «Курская битва. Белгородское направление»</h3>
     <div class="IMG flex row">
    <img src="../assets/knyaz.jpg" alt="" class="percent" >
    <img src="../assets/volodya.jpg" alt="" class="percent">
  </div>
   <div class="text text-h6">
    <p>
      Памятник находится на Харьковской горе, и со смотровой площадки возле него открывается вид на центр города. Монумент открыли в августе 1998 года.
    </p>
    <p>Авторы памятника – скульптор Вячеслав Клыков и архитектор Виталий Перцев. Постамент и скульптура отлиты из меди, их общая высота более 22 метров. Это самый высокий памятник князю Владимиру в мире.</p>
    <p>
      На горельефах постамента изображены православные святые и русские воины. В правой руке князь держит крест, как бы благословляя город, а левой опирается на щит – он олицетворяет защиту и покровительство православным.
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