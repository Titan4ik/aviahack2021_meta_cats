<template>
  <div class="create-service">
    <QrCodeForm :docSetId="docSetId" />
  </div>
</template>

<script>
import QrCodeForm from '@/components/QrCodeForm.vue'

export default {
  name: 'CreateQrCode',
  props: {
    docSetId: String
  },
  components: {
    QrCodeForm
  }
}
</script>
