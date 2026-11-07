<template>
  <div class="pagina">
    <!-- "hoja" es la hoja de cuaderno que contiene el formulario -->
    <div class="hoja">
      <h1 class="titulo">Mi cuaderno de notas</h1>
      <p class="subtitulo">registro personal &middot; ciclo lectivo 2026</p>

      <!-- Formulario: @submit.prevent evita que la página se recargue -->
      <!-- Los campos van en fila (no siempre apilados como un formulario común) -->
      <form @submit.prevent="agregarNota">
        <div class="fila-campos">
          <div class="campo">
            <label>Materia</label>
            <input type="text" v-model="materia" placeholder="Ej: Matemática" />
          </div>

          <div class="campo">
            <label>Fecha</label>
            <input type="date" v-model="fecha" />
          </div>

          <div class="campo campo-nota">
            <label>Nota</label>
            <input type="text" v-model="nota" placeholder="Ej: 8" />
          </div>
        </div>

        <button type="submit">+ Agregar nota</button>

        <!-- Mensaje de error, solo aparece si hay un error -->
        <p v-if="error" class="mensaje-error">{{ error }}</p>
      </form>
    </div>

    <!-- Le pasamos la lista de notas al componente hijo mediante props -->
    <Notas :notas="listaNotas" />
  </div>
</template>

<script>
// Importamos el componente que muestra la lista de notas
import Notas from './components/Notas.vue'

export default {
  name: 'App',
  components: {
    Notas
  },
  data() {
    // Acá guardamos todo lo que la app necesita recordar
    return {
      materia: '',
      fecha: '',
      nota: '',
      error: '',
      listaNotas: [] // Acá se van a ir acumulando las notas agregadas
    }
  },
  methods: {
    agregarNota() {
      // Primero limpiamos el error anterior
      this.error = ''

      // Verificamos que no haya campos vacíos
      if (this.materia === '' || this.fecha === '' || this.nota === '') {
        this.error = 'Por favor completá todos los campos.'
        return
      }

      // Convertimos lo que escribió el usuario a número
      const notaNumero = Number(this.nota)

      // Verificamos que realmente sea un número (Number('abc') da NaN)
      if (isNaN(notaNumero)) {
        this.error = 'La nota tiene que ser un número.'
        return
      }

      // Verificamos que esté en el rango permitido
      if (notaNumero < 1 || notaNumero > 10) {
        this.error = 'La nota tiene que estar entre 1 y 10.'
        return
      }

      // Si pasó todas las validaciones, la agregamos a la lista
      this.listaNotas.push({
        materia: this.materia,
        fecha: this.fecha,
        nota: notaNumero
      })

      // Limpiamos el formulario para cargar una nueva nota
      this.materia = ''
      this.fecha = ''
      this.nota = ''
    }
  }
}
</script>

<style>
/* Traemos dos tipografías de Google Fonts:
   - "Caveat" es una tipografía manuscrita, para que parezca escrito a mano.
   - "Space Mono" es una tipografía tipo "máquina de escribir", para los datos. */
@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=Space+Mono:wght@400;700&display=swap');

/* Fondo tipo hoja de carpeta, con líneas horizontales suaves (como un renglón) */
body {
  margin: 0;
  background-color: #ece1cc;
  background-image: repeating-linear-gradient(
    to bottom,
    transparent,
    transparent 27px,
    #ddceac 28px
  );
  font-family: 'Space Mono', monospace;
}

.pagina {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 20px;
}

/* "hoja" simula una hoja de cuaderno: papel claro, un poco inclinada
   y con un margen rojo vertical como el de las carpetas escolares */
.hoja {
  position: relative;
  background-color: #fbf6ea;
  width: 100%;
  max-width: 620px;
  padding: 36px 34px 30px 62px;
  border-radius: 2px 14px 14px 2px;
  box-shadow: 7px 10px 0 rgba(139, 94, 43, 0.15), 0 2px 6px rgba(59, 42, 30, 0.12);
  transform: rotate(-0.6deg);
  margin-bottom: 45px;
}

/* Línea roja vertical, como el margen de una hoja de carpeta */
.hoja::before {
  content: "";
  position: absolute;
  left: 38px;
  top: 0;
  bottom: 0;
  width: 2px;
  background-color: #c17a63;
}

/* Agujeritos de carpeta sobre el borde izquierdo */
.hoja::after {
  content: "";
  position: absolute;
  left: 13px;
  top: 22px;
  bottom: 22px;
  width: 14px;
  background-image: radial-gradient(circle, #ece1cc 5px, transparent 5.5px);
  background-size: 14px 36px;
  background-repeat: repeat-y;
}

/* Título grande y manuscrito, un poco inclinado, como un título anotado a mano */
.titulo {
  font-family: 'Caveat', cursive;
  font-size: 46px;
  font-weight: 700;
  color: #6b431c;
  margin: 0 0 2px 0;
  transform: rotate(-2deg);
}

.subtitulo {
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: #8a7660;
  margin: 0 0 26px 0;
}

/* Los tres campos van en fila y se acomodan solos si no entran (flex-wrap) */
.fila-campos {
  display: flex;
  gap: 18px;
  flex-wrap: wrap;
  margin-bottom: 22px;
}

.campo {
  display: flex;
  flex-direction: column;
  flex: 1 1 150px;
}

.campo-nota {
  flex: 0 1 100px;
}

label {
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #8a7660;
  margin-bottom: 6px;
  font-weight: bold;
}

/* Los inputs no tienen recuadro completo, solo una línea abajo,
   como si escribieras sobre un renglón */
input {
  padding: 8px 2px;
  border: none;
  border-bottom: 2px solid #ddceac;
  background-color: transparent;
  color: #3b2a1e;
  font-size: 15px;
  font-family: 'Space Mono', monospace;
  outline: none;
  width: 100%;
  box-sizing: border-box;
}

input:focus {
  border-bottom-color: #8b5a2b;
}

/* El botón parece un sello de goma: borde punteado, sin relleno */
button {
  padding: 12px 22px;
  background-color: transparent;
  color: #6b431c;
  border: 2px dashed #8b5a2b;
  border-radius: 8px;
  font-family: 'Space Mono', monospace;
  font-size: 13px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  cursor: pointer;
  transition: transform 0.15s ease, background-color 0.15s ease, color 0.15s ease;
}

button:hover {
  background-color: #8b5a2b;
  color: #fbf6ea;
  border-style: solid;
  transform: rotate(-1deg);
}

.mensaje-error {
  color: #a23e2c;
  background-color: #f3ded7;
  border-left: 4px solid #a23e2c;
  padding: 8px 12px;
  margin-top: 14px;
  font-size: 13px;
}

/* En pantallas chicas, la hoja pierde un poco de padding lateral */
@media (max-width: 480px) {
  .hoja {
    padding: 30px 20px 24px 48px;
  }
  .titulo {
    font-size: 36px;
  }
}
</style>
