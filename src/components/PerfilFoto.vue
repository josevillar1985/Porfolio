<template>
  <v-container class="hero-container">
    <v-row align="center" justify="center">

      <!-- TEXTO -->
      <v-col cols="12" md="6" class="text-block animate-left">
        <h1 class="hero-title">José Angel Villar</h1>

        <h2 class="hero-subtitle">
          Desarrollador Web · Vue & Spring Boot
        </h2>

        <p class="hero-description">
          Desarrollo aplicaciones web modernas cuidando tanto el diseño como la
          lógica interna. Me gusta crear interfaces limpias, escalables y bien
          estructuradas, trabajando principalmente con Vue en el frontend y
          Spring Boot en el backend.
        </p>
      </v-col>

      <!-- AVATAR + ICONOS -->
      <v-col cols="12" md="6" class="d-flex flex-column align-center animate-right">
        <v-avatar size="350" class="avatar-border">
          <img src="FotoPerfil.jpeg" alt="Perfil" class="avatar-img" />
        </v-avatar>

        <!-- ICONOS -->
        <!-- ICONOS SOCIALES -->
        <div class="social-links">
          <a href="https://github.com/josevillar1985" target="_blank" rel="noopener" class="social-icon github"
            aria-label="GitHub">
            <i class="mdi mdi-github"></i>
          </a>

          <a href="https://www.linkedin.com/in/jose-angel-villar-095b633a2/" target="_blank" rel="noopener" class="social-icon linkedin"
            aria-label="LinkedIn">
            <i class="mdi mdi-linkedin"></i>
          </a>
        </div>

      </v-col>

    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'HeroPerfil'
}
</script>

<style scoped>
/* ===============================
   CONTENEDOR
================================ */
.hero-container {
  max-width: 1200px;
  margin: 0 auto;
  min-height: calc(100vh - 120px);
  display: flex;
  align-items: center;
  padding: 0 24px;
}

/* ===============================
   TEXTO
================================ */
.text-block {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.hero-title {
  font-size: 50px;
  line-height: 1.1;
  font-weight: 700;
  margin: 0;
  background: linear-gradient(90deg, #4ade80, #22d3ee);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-subtitle {
  font-size: 22px;
  font-weight: 400;
  color: #cfd3dc;
}

.hero-description {
  font-size: 17px;
  line-height: 1.6;
  color: #bfc5d2;
  max-width: 520px;
}

/* ===============================
   AVATAR
================================ */
.avatar-border {
  padding: 4px;
  background: linear-gradient(135deg, #4ade80, #22d3ee);
  border-radius: 50%;
}

.avatar-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}

/* ===============================
   ICONOS SOCIALES (SIN LÍNEAS)
================================ */
/* ICONOS SOCIALES */
.social-links {
  display: flex;
  gap: 28px;
  margin-top: 26px;
}

/* ANCLA LIMPIA (CLAVE) */
.social-icon {
  text-decoration: none !important; /* ← elimina las líneas */
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36px;
  transition: transform 0.25s ease;
}

/* GitHub blanco */
.social-icon.github {
  color: #ffffff;
}

/* LinkedIn azul real */
.social-icon.linkedin {
  color: #0A66C2;
}

/* Hover: solo crecer */
.social-icon:hover {
  transform: scale(1.2);
}


/* ===============================
   ANIMACIONES
================================ */
.animate-left {
  opacity: 0;
  animation: fadeSlideLeft 1s ease forwards;
}

.animate-right {
  opacity: 0;
  animation: fadeSlideRight 1s ease forwards;
  animation-delay: 0.15s;
}

@keyframes fadeSlideLeft {
  from {
    opacity: 0;
    transform: translateX(-60px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeSlideRight {
  from {
    opacity: 0;
    transform: translateX(60px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* ===============================
   MOBILE
================================ */
@media (max-width: 768px) {
  .hero-container {
    min-height: auto;
    padding: 80px 20px;
  }

  .text-block {
    align-items: center;
    text-align: center;
    margin-bottom: 40px;
  }

  .hero-title {
    font-size: 36px;
  }

  .hero-subtitle {
    font-size: 18px;
  }

  .hero-description {
    font-size: 16px;
  }

  .avatar-border {
    width: 220px;
    height: 220px;
  }
}
</style>
