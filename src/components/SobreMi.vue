<template>
  <section class="about" id="about">
    <div class="about-inner">

      <h1 class="about-title">Sobre mí</h1>

      <div class="about-content">

        <!-- TEXTO PRINCIPAL -->
        <div class="about-text">
          <p>
            Soy desarrollador web con especial interés en crear aplicaciones
            bien estructuradas, escalables y con una experiencia de usuario
            cuidada. Disfruto trabajando tanto en el frontend como en el
            backend, entendiendo el producto de forma global.
          </p>

          <p>
            Trabajo principalmente con Vue y Spring Boot, aplicando buenas
            prácticas, separación de responsabilidades y código limpio.
            Me gusta aprender constantemente y mejorar proyecto a proyecto.
          </p>

          <p>
            Busco seguir creciendo como desarrollador, aportar valor real
            en equipos técnicos y enfrentarme a retos que me permitan
            evolucionar profesionalmente.
          </p>
        </div>

        <!-- BLOQUES DESTACADOS -->
        <div class="about-cards">

          <div class="about-card bluecard">
            <h3>Frontend</h3>
            <span class="text-black">Vue · Vuetify </span>
          </div>

          <div class="about-card orangecard">
            <h3>Backend</h3>
            <span>Spring Boot · APIs REST · MySQL</span>
          </div>

          <div class="about-card greencard">
            <h3>Tecnologías</h3>
            <span>VSCode · Intellij · IDEA · DBeaver · PostMan</span>
          </div>

        </div>

      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: 'SobreMi'
}
</script>

<style scoped>
/* ===============================
   SECCIÓN GENERAL (SIN MARGIN TOP)
================================ */
.about {
  padding-bottom: 120px;
}

.about-inner {
  max-width: 900px;
  margin: 0 auto;
}

/* ===============================
   TÍTULO
================================ */
.about-title {
  margin: 0 0 70px 0;
  font-size: 44px;
  font-weight: 700;
  text-align: center;

  background: linear-gradient(90deg, #4ade80, #22d3ee);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* ===============================
   CONTENIDO
================================ */
.about-content {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 60px;
}

/* TEXTO */
.about-text p {
  font-size: 16px;
  line-height: 1.7;
  color: #cfd3dc;
  margin-bottom: 18px;
}

/* ===============================
   CARDS
================================ */
.about-cards {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.about-card {
  padding: 18px 22px;
  border-radius: 14px;

  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.06);

  transition: transform 0.25s ease, box-shadow 0.25s ease;
}


.about-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.35);
}

.about-card h3 {
  font-size: 18px;
  margin: 0 0 6px 0;
  color: rgba(255, 255, 255, 0.95);
}

.about-card span {
  color: #020617;
  font-size: 15px; 
}

.bluecard{
    background-color: #24c8e5;
}
.orangecard{
    background-color: #f97316;
}
.greencard{
    background-color: #6bae41;
}


/* ===============================
   RESPONSIVE
================================ */
@media (max-width: 768px) {
  .about-content {
    grid-template-columns: 1fr;
  }
}
</style>
