<template>
  <q-page class="bg-amber-1">
    <div class=" flex-center flex column q-pt-md q-mb-md ">
    <H2 class="q-mb-md q-mr-xl xds">Добро пожаловать в Белгород</H2>
    <div class="flex gap">
  <img src="../assets/belgorod.jpg" alt="" class=" toround">
  <img src="../assets/volodya.jpg" alt="" class="toround">
</div>
</div>
   <div class="q-pa-md  q-gutter-md flex   kekw">
    <q-card class="my-card bg-brown-1">
      <q-card-section>
        <p class="card-text">Белгород – это южный российский город, большая часть которого находится на
       правом берегу Северского Донца, реки, являющейся притоком Дона.
        От Москвы Белгород отделяют почти семьсот километров, от российско-украинской границы
         – лишь около сорока километров. Белгородская область является пограничной с Украиной,
          поэтому украинцы – вторая по численности национальность (после русских), проживающая
           на данной территории. Всего же в Белгородской области живут представители почти ста национальностей.</p>
      </q-card-section>
    </q-card>

    <q-card class="my-card bg-brown-1">
      <q-card-section>
        <p class="card-text">
          К пригородным белгородским районам относится целый ряд посёлков, расположенных в непосредственной близости от города, в частности – Северный, Майский, Таврово и другие. В целом население Белгорода и его окрестностей составляет около пятисот тысяч человек.
Город Белгород относится к городам воинской славы, в 1980 году он был награждён Орденом Отечественной войны Первой степени. Современный Белгород – чистый и благоустроенный город, недаром он не раз занимал первое место по данным критериям в общероссийском рейтинге городов с населением от ста до пятисот тысяч человек.
</p>
      </q-card-section>
    </q-card>
    <q-card class="my-card bg-brown-1">
      <q-card-section>
        <p class="card-text">В состав города Белгорода входят два округа, носящих названия Западного и Восточного, причём ранее (до 1993 года) они назывались Октябрьским и Свердловским районами. Город достаточно велик, общая протяжённость его улиц составляет более 4,5 сотен километров.
Город имеет большое количество удивительных достопримечательностей. В Белгороде есть много красивых старинных зданий, привлекающих внимание приезжих. К таким домам можно отнести дом купца Селиванова, построенный в девятнадцатом веке, в котором в наши дни разместилось сразу два музея – энергетический и литературный.

</p>
      </q-card-section>
    </q-card>
    <q-card class="my-card bg-brown-1">
      <q-card-section>
        <p class="card-text">С точки зрения транспортных сетей и узлов Белгород – довольно развитый город. Здесь  расположены два железнодорожных вокзала, автовокзал, международный аэровокзал. На территории города транспортное сообщение представлено сетью автобусных и троллейбусных маршрутов. Кроме того, в планах администрации Белгорода – строительство фуникулёра, сети скоростных трамваев и даже канатной дороги. В Белгороде много мест развлечений, где Вы сможете приятно провести время и отдохнуть от трудного дня.</p>
      </q-card-section>
    </q-card>
  </div>

  <xds/>
  <div class="bg-light-green-3 q-pt-md q-pl-md">
  <h3 class="fix">Работу выполнили участники команды Wellcum Encorporation</h3>
  <div class="flex footer">
      <li>Савватеев Даниил</li>
      <li>Марущенко Анастасия</li>
      <li>Лопатинский Алексей</li>
      <li>Ниронова Анастасия</li>
      <li>Севрюкова Дарьяна</li>
</div>
</div>
  </q-page>
</template>

<script>
import xds from '../components/xds.vue'
export default {
  name: 'PageIndex',
  components: {
    xds
  }
}
</script>

<style>
.xds{
  letter-spacing: 20px;
  margin-bottom: 4%;
}
.my-card{
  width:100%;
  margin-bottom: 1.5%;
}
.card-text{
  font-size:20px;
}
.fix{
  display: flex;
  justify-content: center;
}
.kekw{
  padding-right: 5%;
  padding-left: 5%;
  flex-wrap: nowrap;
}
.toround{
  border-radius: 8px;
}
.gap{
  gap:20px;
}
.footer{
  justify-content: center;
  gap:20px;
  padding: 2%;
}
li{
  list-style: none;
  font-size:16px;
}
</style>
