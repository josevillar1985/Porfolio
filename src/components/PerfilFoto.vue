<template>
  <v-container class="content-width hero-container">

    <v-row align="center">
     
      <v-col cols="6" class="text-block">

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

      
      <v-col cols="6" class="d-flex justify-center align-center">

        <v-avatar size="350" class="avatar-border">

          <img
            src="FotoPerfil.jpeg"
            alt="Perfil"
            class="avatar-img"
          />

        </v-avatar>

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

.content-width {
  max-width: 60%;
  margin: 0 auto;
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
  margin: 0;
}


.hero-description {
  font-size: 17px;
  line-height: 1.6;
  color: #bfc5d2;
  max-width: 520px;
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

.hero-container {
  min-height: calc(100vh - 200px); 
  display: flex;
  align-items: center;
}

</style>
