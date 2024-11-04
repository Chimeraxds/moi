<template>
  <q-page class="flex flex-center bg-amber-1">
     <h3 class="text-center">Соборная площадь</h3>
     <div class="IMG flex row">
    <img src="../assets/square.jpg" alt="" class="percent" >
    <img src="../assets/baloons.jpg" alt="" class="percent">
  </div>
   <div class="text text-h6">
    <p>
      Соборная площадь, пожалуй, самое известное место в городе. Здесь проходят важные события и именно сюда в первую очередь ведут гостей. Площадь находится на этом месте еще с конца XVIII века. Она не раз меняла свое название, а нынешнее носит с 2004 года.
    </p>
    <p>Архитектурный ансамбль вокруг площади образуют несколько зданий. Они построены в разные годы, но выдержаны в едином стиле. Здесь находится здание областной администрации и театр, департамент агропромышленного комплекса, украшенный колоннадой в стиле сталинского ампира, и гостиница 1956 года с куполом и шпилем.</p>
    <p>
      Здесь же расположен мемориальный комплекс: братская могила, скульптура «Скорбящая мать», две стелы – «Слава героям» и «Вечный огонь».
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