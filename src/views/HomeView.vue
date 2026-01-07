<template>
  <div>
    <NavComponent />
    <PerfilFoto />
  </div>
</template>

<script>
import NavComponent from '@/components/NavComponent.vue';
import PerfilFoto from '@/components/PerfilFoto.vue'

export default {
  name: 'HomeView',
  components: {
    NavComponent,
    PerfilFoto
  }
}
</script>
