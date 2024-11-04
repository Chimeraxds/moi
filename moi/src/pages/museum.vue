<template>
  <q-page class="flex flex-center bg-amber-1">
     <h3 class="text-center">Белгородский историко-художественный музей-диорама «Курская битва. Белгородское направление»</h3>
     <div class="IMG flex row">
    <img src="../assets/original.jpg" alt="" class="percent" >
    <img src="../assets/war.jpg" alt="" class="percent">
  </div>
   <div class="text text-h6">
    <p>
      Главный экспонат музея – самая крупная в Европе диорама «Огненная дуга». Длина полотна составляет 67 метров, высота – 15. Картина иллюстрирует решающую схватку на Курской дуге в июле 1943 года – с высоты более 200 метров открывается вид на бой 5-й гвардейской танковой армии и боевые порядки 29-го танкового корпуса.
    </p>
    <p>Экспозицию сопровождает аудиоряд, который позволяет перенестись в самый центр событий: разрывы бомб, крики солдат и голос Левитана.</p>
    <p>
      О ключевых этапах Курской битвы – освобождении Белгорода, Орла и Харькова – рассказывают и другие экспонаты: документы, оружие, письма и карты. На площадке за зданием музея установлены образцы военной техники – танки, «Катюша», самолет и полевая кухня.
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