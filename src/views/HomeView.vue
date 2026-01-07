<template>
  <div>
    <NavComponent />
    <PerfilFoto />
    <ProyectosComponent />
  </div>
</template>

<script>
import NavComponent from '@/components/NavComponent.vue';
import PerfilFoto from '@/components/PerfilFoto.vue'
import ProyectosComponent from '@/components/ProyectosComponent.vue'


export default {
  name: 'HomeView',
  components: {
    NavComponent,
    PerfilFoto,
    ProyectosComponent
  }
}
</script>
