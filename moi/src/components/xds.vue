<template>
  <div class="q-pa-md">
    <q-carousel
      arrows
      animated
       :autoplay="autoplay"
      v-model="slide"
      height="400px"
    >
      <q-carousel-slide name="first" img-src="../assets/square.jpg">
        <div class="absolute-bottom custom-caption">
          <div @click="goToSquare" class="text-h4 cursor">Соборная площадь</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="second" img-src="../assets/theatre.jpg">
        <div class="absolute-bottom custom-caption">
        <div @click="goToTheatre" class="text-h4 cursor">Драматический театр имени М. С. Щепкина</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="third" img-src="../assets/original.jpg">
        <div class="absolute-bottom custom-caption">
          <div @click="goToMuseum" class="text-h4 cursor">Белгородский историко-художественный музей-диорама «Курская битва. Белгородское направление»</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="fourth" img-src="../assets/knyaz.jpg">
        <div class="absolute-bottom custom-caption">
          <div @click="goToVolodya" class="text-h4 cursor">Памятник князю Владимиру</div>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup () {
    return {
      slide: ref('first'),
      autoplay: ref(true)
    }
  },
  methods: {
    goToSquare() {
      this.$router.push('/square');
    },
    goToTheatre(){
      this.$router.push('/theatre');
    },
    goToMuseum(){
      this.$router.push('/museum');
    },
    goToVolodya(){
      this.$router.push('/volodya');
    }
  },
}
</script>
<style>
.custom-caption{
  text-align: center;
  padding: 12px;
  color: white;
  background-color: rgba(0, 0, 0, .3);
}
.cursor{
  cursor: pointer;
}
</style>