<template>
  <v-app-bar :elevation="0" color="transparent" class="pa-4">
    <div class="nav-center">

      <!-- HOME (RUTA) -->
      <router-link to="/" class="nav-link mr-6">
        Inicio
      </router-link>

      <!-- PROYECTOS (SCROLL) -->
      <a
        href="#projects"
        class="nav-link mr-6"
        :class="{ active: active === 'projects' }"
        @click="active = 'projects'"
      >
        Proyectos
      </a>

      <!-- SOBRE MÍ (SCROLL) -->
      <a
        href="#about"
        class="nav-link mr-6"
        :class="{ active: active === 'about' }"
        @click="active = 'about'"
      >
        Sobre mí
      </a>

      <!-- CONTACTO (SCROLL) -->
      <a
        href="#contact"
        class="nav-link"
        :class="{ active: active === 'contact' }"
        @click="active = 'contact'"
      >
        Contacto
      </a>

    </div>
  </v-app-bar>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      active: ''
    }
  }
}
</script>

<style scoped>
.nav-link {
  font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
    'Helvetica Neue', sans-serif;

  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  
  color: #cfd3dc;
  text-decoration: none;
  position: relative;
  padding-bottom: 6px;

  transition: color 0.25s ease;
}

.nav-link:hover {
  color: #ffffff;
}

.nav-link::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;

  width: 0%;
  height: 2px;
  background: linear-gradient(90deg, #4ade80, #22d3ee);
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}


.nav-link.active {
  color: #ffffff;
  font-weight: 600;
}

.nav-link.active::after {
  width: 100%;
}


.router-link-exact-active {
  color: #ffffff;
  font-weight: 600;
}

.router-link-exact-active::after {
  width: 100%;
}

.nav-center {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
