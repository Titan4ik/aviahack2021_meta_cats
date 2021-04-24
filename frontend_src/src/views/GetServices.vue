<template>
<div id="get-services">
    <h1>Список услуг</h1>
    <div v-if="docSets">
      <div v-for="docSet in docSets" :key="docSet.producer_name">
        <h2>{{ docSet.producer_name }}</h2>
        <ul v-if="docSet.offers" class="list-group">
          <li v-for="offer in docSet.offers" :key="offer.offer_id" class="list-group-item">
            <a :href="`get-service/${offer.id}`">{{ offer.name }}</a>
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
        docSets: false
      }
    },
    mounted() {
      this.getDocSets()
    },
    methods: {
      getDocSets() {
        api.getDocSets()
        .then(async response => {
          if (response.ok) {
            this.docSets = await response.json()
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
</style>