<template>
  <section class="projects" id="projects">
    <div class="projects-inner">

      <h1 class="projects-title">Proyectos</h1>

      <!-- PROYECTO 1 · POKEDEX -->
      <div class="project-row">

        <!-- IMAGEN + BOTÓN -->
        <div class="project-image-wrapper">
          <img
            src="poke.png"
            alt="Pokédex"
            class="project-image"
          />

          <v-btn class="preview-btn">
            Previsualizar
          </v-btn>
        </div>

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

      </div>

      <!-- PROYECTO 2 · VETERINARIA (INVERTIDO) -->
      <div class="project-row reverse">

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

        <!-- IMAGEN + BOTÓN -->
        <div class="project-image-wrapper">
          <img
            src="Vet.jpg"
            alt="Veterinaria"
            class="project-image"
          />

          <v-btn class="preview-btn">
            Previsualizar
          </v-btn>
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
/* ===============================
   SECCIÓN GENERAL
================================ */


.projects-inner {
  max-width: 900px;
  margin: 0 auto;
}

/* ===============================
   TÍTULO PRINCIPAL
================================ */
.projects-title {
  font-size: 44px;
  font-weight: 700;
  margin-bottom: 80px;
  text-align: center;

  background: linear-gradient(90deg, #4ade80, #22d3ee);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* ===============================
   FILAS DE PROYECTO
================================ */
.project-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 48px;
  margin-bottom: 100px;
}

.project-row.reverse {
  flex-direction: row-reverse;
}

/* ===============================
   IMAGEN
================================ */
.project-image-wrapper {
  flex: 0 0 320px;
  text-align: center;
}

/* wrapper SOLO para el hover */
.project-image-hover {
  overflow: hidden;
  border-radius: 14px;
}

.project-image {
  width: 100%;
  display: block;
  border-radius: 14px;
  border: 2px solid transparent;
  padding: 8px;

  background:
    linear-gradient(#0f0c29, #0f0c29) padding-box,
    linear-gradient(90deg, #4ade80, #22d3ee) border-box;

  transition: transform 0.35s ease, box-shadow 0.35s ease;
}

/* hover SOLO cuando pasas por la imagen */
.project-image-hover:hover .project-image {
  transform: scale(1.05);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.35);
}

/* ===============================
   BOTÓN PREVISUALIZAR
================================ */
.preview-btn {
  margin-top: 14px;
  padding: 6px 18px;

  font-weight: 600;
  text-transform: none;

  color: #0f0c29;
  background: linear-gradient(90deg, #4ade80, #22d3ee);

  border-radius: 999px;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.preview-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.35);
}

/* ===============================
   CONTENIDO TEXTO
================================ */
.project-content {
  max-width: 420px;
}

/* TÍTULO PROYECTO (LIMPIO) */
.project-name {
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 14px;
  color: #f9fafb;
}

/* pequeño acento elegante */
.project-name::after {
  content: "";
  display: block;
  width: 36px;
  height: 3px;
  margin-top: 6px;
  border-radius: 2px;
  background: linear-gradient(90deg, #4ade80, #22d3ee);
}

/* DESCRIPCIÓN */
.project-desc {
  font-size: 16px;
  line-height: 1.6;
  color: #cfd3dc;
}

/* ===============================
   TECNOLOGÍAS
================================ */
.project-tech {
  margin-top: 18px;
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.tech {
  display: inline-flex;
  align-items: center;
  gap: 6px;

  padding: 6px 14px;
  font-size: 14px;
  border-radius: 999px;

  background: rgba(255, 255, 255, 0.06);
}

.tech.vue {
  color: #4ade80;
}

.tech.vuetify {
  color: #22d3ee;
}

.tech.spring {
  color: #6db33f;
}

.tech.mysql {
  color: #f29111;
}

/* ===============================
   RESPONSIVE
================================ */
@media (max-width: 768px) {
  .project-row,
  .project-row.reverse {
    flex-direction: column;
    align-items: flex-start;
  }

  .project-image-wrapper {
    width: 100%;
  }

  .project-content {
    max-width: 100%;
  }
}

</style>
