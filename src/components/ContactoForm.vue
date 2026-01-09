<template>
  <section class="contact" id="contact">
    <div class="contact-inner">

      <h1 class="contact-title">Contacto</h1>

      <v-form ref="form" v-model="valid" class="contact-form">

        <v-row>
          <!-- NOMBRE -->
          <v-col cols="12" md="6">
            <v-text-field
              v-model="form.name"
              label="Nombre"
              variant="outlined"
              density="comfortable"
              :rules="[rules.required]"
            />
          </v-col>

          <!-- EMAIL -->
          <v-col cols="12" md="6">
            <v-text-field
              v-model="form.email"
              label="Email"
              variant="outlined"
              density="comfortable"
              :rules="[rules.required, rules.email]"
            />
          </v-col>

          <!-- MENSAJE -->
          <v-col cols="12">
            <v-textarea
              v-model="form.message"
              label="Mensaje"
              rows="5"
              variant="outlined"
              density="comfortable"
              :rules="[rules.required]"
            />
          </v-col>
        </v-row>

        <!-- BOTÓN -->
        <div class="form-actions">
          <v-btn
            size="large"
            class="submit-btn"
            @click="submit"
          >
            Enviar mensaje
          </v-btn>
        </div>

        <!-- ALERTA -->
        <transition name="fade">
          <div v-if="sent" class="success-alert">
            ✔ Mensaje enviado correctamente
          </div>
        </transition>

      </v-form>

    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactoForm',
  data() {
    return {
      valid: false,
      sent: false,
      form: {
        name: '',
        email: '',
        message: ''
      },
      rules: {
        required: v => !!v || 'Campo obligatorio',
        email: v => /.+@.+\..+/.test(v) || 'Email no válido'
      }
    }
  },
  methods: {
    submit() {
      if (!this.$refs.form.validate()) return

      this.sent = true
      this.$refs.form.reset()

      setTimeout(() => {
        this.sent = false
      }, 3000)
    }
  }
}
</script>

<style scoped>

.contact {
  padding-bottom: 120px;
}

.contact-inner {
  max-width: 900px;
  margin: 0 auto;
}

.contact-title {
  margin: 0 0 70px 0;
  font-size: 44px;
  font-weight: 700;
  text-align: center;
  background: linear-gradient(90deg, #4ade80, #22d3ee);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.contact-form {
  max-width: 700px;
  margin: 0 auto;
}

.form-actions {
  display: flex;
  justify-content: center;
  margin-top: 36px;
}

.submit-btn {
  padding: 12px 44px;
  border-radius: 999px;
  font-weight: 700;
  font-size: 15px;
  letter-spacing: 0.02em;

  color: #020617;
  background: linear-gradient(90deg, #4ade80, #22d3ee);

  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease, color 0.2s ease;
}

.submit-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 14px 30px rgba(34, 211, 238, 0.45);
  color: #14532d;
}

.submit-btn:active {
  transform: translateY(0);
  box-shadow: 0 8px 16px rgba(34, 211, 238, 0.3);
}

.success-alert {
  margin-top: 28px;
  padding: 14px 22px;
  border-radius: 12px;
  text-align: center;
  font-weight: 600;
  color: #0f172a;
  background: linear-gradient(90deg, #4ade80, #22d3ee);
}

:deep(input),
:deep(textarea) {
  color: #ffffff !important;
  caret-color: #22d3ee;
}

:deep(.v-label) {
  color: #cbd5e1 !important;
}

:deep(.v-field) {
  background-color: rgba(255, 255, 255, 0.04);
  --v-theme-on-surface: #ffffff;
}

</style>
