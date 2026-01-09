<template>
  <v-container class="hero-container">
    <v-row
      class="hero-row"
      align="center"
      justify="center"
    >

      <!-- TEXTO -->
      <v-col
        cols="12"
        md="6"
        class="text-block animate-left"
      >
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
      <v-col
        cols="12"
        md="6"
        class="avatar-block animate-right"
      >
        <v-avatar size="350" class="avatar-border">
          <img
            src="FotoPerfil.jpeg"
            alt="Perfil"
            class="avatar-img"
          />
        </v-avatar>

        <div class="social-links">
          <a
            href="https://github.com/josevillar1985"
            target="_blank"
            rel="noopener"
            class="social-icon github"
            aria-label="GitHub"
          >
            <i class="mdi mdi-github"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/jose-angel-villar-095b633a2/"
            target="_blank"
            rel="noopener"
            class="social-icon linkedin"
            aria-label="LinkedIn"
          >
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
.hero-container {
  max-width: 1200px;
  margin: 0 auto;
  min-height: calc(100vh - 120px);

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0 24px;
}

.hero-row {
  width: 100%;
}

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

.avatar-block {
  display: flex;
  flex-direction: column;
  align-items: center;
}

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

.social-links {
  display: flex;
  gap: 28px;
  margin-top: 26px;
}

.social-icon {
  text-decoration: none !important;
  font-size: 36px;
  transition: transform 0.25s ease;
}

.social-icon.github {
  color: #ffffff;
}

.social-icon.linkedin {
  color: #0A66C2;
}

.social-icon:hover {
  transform: scale(1.2);
}

.animate-left {
  opacity: 0;
  animation: fadeLeft 0.9s ease forwards;
}

.animate-right {
  opacity: 0;
  animation: fadeRight 0.9s ease forwards;
  animation-delay: 0.15s;
}

@keyframes fadeLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

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
