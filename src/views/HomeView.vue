<template>
  <div>
    <NavComponent />
    <PerfilFoto />
    <ProyectosComponent />
    <SobreMi />
    <ContactoForm />
  </div>
</template>

<script>

import ContactoForm from '@/components/ContactoForm.vue';
import NavComponent from '@/components/NavComponent.vue';
import PerfilFoto from '@/components/PerfilFoto.vue'
import ProyectosComponent from '@/components/ProyectosComponent.vue'
import SobreMi from '@/components/SobreMi.vue';


export default {
  name: 'HomeView',
  components: {
    NavComponent,
    PerfilFoto,
    ProyectosComponent,
    SobreMi,
    ContactoForm
  }
}
</script>
