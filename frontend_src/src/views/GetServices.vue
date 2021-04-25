<template>
<div id="get-services">
    <h1 class="text-center mb-5">Список услуг</h1>
    <div v-if="docSets">
      <div v-for="docSet in docSets" :key="docSet.producer_name">
        <h2>{{ docSet.producer_name }}</h2>
        <ul v-if="docSet.offers" class="list-group">
          <li v-for="offer in docSet.offers" :key="offer.offer_id" class="list-group-item d-flex">
            <div class="d-inline-block">
              <router-link :to="`get-service/${offer.id}`">{{ offer.name }}</router-link>
            </div>
            <div class="gear d-inline-block" v-if="producerOffers.has(offer.id)" >
              <router-link to="" title="Редактировать QR">⚙</router-link>
            </div>
          </li>
        </ul>
        <p v-else>У этого постовщика пока нет услуг</p>
      </div>
    </div>
    <p v-else>Получаем доступные услуги...</p>
</div>
</template>

<script>
import api from '@/api/'
export default {
    name: 'GetServices',

    data() {
      return {
        docSets: false,
        producerOffers: false
      }
    },

    mounted() {
      this.getDocSets(),
      this.getProducerOffers()
    },

    methods: {
      getDocSets() {
        api.getDocSets()
        .then(async response => {
          if (response.ok) {
            this.docSets = await response.json()
          }
        })
      },

      getProducerOffers() {
        api.testSignProducer()
        .then(async response => {
          if (response.ok) {
            this.producerOffers = new Set((await response.json()).offers.map((offer) => offer.id))
          }
        })
      }
    }
}
</script>

<style >
h2 {
    margin-top:15px;
}
.gear {
  margin-left: auto;
}

.gear > a {
  text-decoration: none;
}
</style>