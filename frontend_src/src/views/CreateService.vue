<template>
  <div class="create-service">
    <CustomerForm />
  </div>
</template>

<script>
import CustomerForm from '@/components/CustomerForm.vue'

export default {
  name: 'CreateService',
  components: {
    CustomerForm
  }
}
</script>
