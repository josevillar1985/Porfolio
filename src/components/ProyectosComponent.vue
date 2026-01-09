<template>
  <section class="projects" id="projects">
    <div class="projects-inner">

      <h1 class="projects-title">Proyectos</h1>

      <!-- PROYECTO 1 · POKEDEX -->
      <div class="project-row">
        <!-- CONTENIDO -->
        <div class="project-content">
          <h2 class="project-name">Pokédex</h2>

          <p class="project-desc">
            Aplicación web que consume la PokéAPI para mostrar información
            detallada sobre los Pokémon. Incluye búsqueda, filtrado y vistas
            de detalle con componentes reutilizables.
          </p>

          <div class="project-tech">
            <span class="tech vue">
              <v-icon>mdi-vuejs</v-icon> Vue
            </span>
            <span class="tech vuetify">
              <v-icon>mdi-vuetify</v-icon> Vuetify
            </span>
            <span class="tech spring">
              <v-icon>mdi-leaf</v-icon> Spring Boot
            </span>
            <span class="tech mysql">
              <v-icon>mdi-database</v-icon> MySQL
            </span>
          </div>
        </div>

        <!-- IMAGEN -->
        <div class="project-image-wrapper">
          <img src="poke.png" alt="Pokédex" class="project-image" />
          <v-btn class="preview-btn">Previsualizar</v-btn>
        </div>
      </div>

      <!-- PROYECTO 2 · VETERINARIA -->
      <div class="project-row">
        <!-- CONTENIDO -->
        <div class="project-content">
          <h2 class="project-name">Veterinaria</h2>

          <p class="project-desc">
            Aplicación de gestión para clínicas veterinarias con control de citas,
            clientes y mascotas. Backend en Spring Boot y base de datos MySQL,
            frontend en Vue y Vuetify.
          </p>

          <div class="project-tech">
            <span class="tech vue">
              <v-icon>mdi-vuejs</v-icon> Vue
            </span>
            <span class="tech vuetify">
              <v-icon>mdi-vuetify</v-icon> Vuetify
            </span>
            <span class="tech spring">
              <v-icon>mdi-leaf</v-icon> Spring Boot
            </span>
            <span class="tech mysql">
              <v-icon>mdi-database</v-icon> MySQL
            </span>
          </div>
        </div>

        <!-- IMAGEN -->
        <div class="project-image-wrapper">
          <img src="Vet.jpg" alt="Veterinaria" class="project-image" />
          <v-btn class="preview-btn">Previsualizar</v-btn>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: 'ProyectosComponent'
}
</script>

<style scoped>


.projects-inner {
  max-width: 900px;
  margin: 0 auto;
}


.projects-title {
  font-size: 44px;
  font-weight: 700;
  margin-bottom: 80px;
  text-align: center;

  background: linear-gradient(90deg, #4ade80, #22d3ee);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.project-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  margin-bottom: 100px;
}

.project-image-wrapper {
  flex: 0 0 500px;
  text-align: center;
}

.project-image {
  width: 100%;
  border-radius: 14px;
  padding: 8px;
  border: 2px solid transparent;

  background:
    linear-gradient(#0f0c29, #0f0c29) padding-box,
    linear-gradient(90deg, #4ade80, #22d3ee) border-box;

  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-image:hover {
  transform: scale(1.04);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.35);
}

.preview-btn {
  margin-top: 14px;
  padding: 6px 18px;
  font-weight: 600;
  text-transform: none;
  color: #0f0c29;
  background: linear-gradient(90deg, #4ade80, #22d3ee);
  border-radius: 999px;
}


.project-content {
  max-width: 420px;
}

.project-name {
  font-size: 28px;
  color: #f9fafb;
}

.project-name::after {
  content: "";
  width: 36px;
  height: 3px;
  display: block;
  margin-top: 6px;
  background: linear-gradient(90deg, #4ade80, #22d3ee);
}

.project-desc {
  color: #cfd3dc;
  line-height: 1.6;
}

.project-tech {
  margin-top: 18px;
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.tech {
  padding: 6px 14px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.06);
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.tech.vue { color: #4ade80; }
.tech.vuetify { color: #22d3ee; }
.tech.spring { color: #6db33f; }
.tech.mysql { color: #f29111; }

.tech :deep(.v-icon) {
  color: rgba(255, 255, 255, 0.85);
}


@media (max-width: 768px) {
  .project-row {
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 0px;
    margin-top: 0px; 
  }

  .project-image-wrapper,
  .project-content {
    width: 100%;
    max-width: 100%;
  }
}
</style>
