<template>
  <div class="hoja hoja-resultados">
    <h2 class="titulo">Boletín</h2>
    <p class="subtitulo">notas cargadas</p>

    <!-- Si no hay notas, mostramos un mensaje -->
    <p v-if="notas.length === 0" class="vacio">
      Todavía no hay notas cargadas. Completá el formulario de arriba.
    </p>

    <!-- Si hay notas, mostramos la lista de boletas -->
    <div v-else class="lista-boletas">
      <!-- Recorremos la lista de notas con v-for -->
      <div class="boleta" v-for="(item, index) in notas" :key="index">
        <div class="boleta-info">
          <span class="materia">{{ item.materia }}</span>
          <span class="fecha">{{ item.fecha }}</span>
        </div>

        <span class="nota-num">{{ item.nota }}</span>

        <!-- Si la nota es mayor o igual a 6, está aprobado -->
        <span v-if="item.nota >= 6" class="sello aprobado">Aprobado</span>
        <span v-else class="sello desaprobado">Desaprobado</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Notas',
  props: {
    // Este componente recibe un array de notas desde App.vue
    notas: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
/* Traemos las mismas tipografías que en App.vue */
@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=Space+Mono:wght@400;700&display=swap');

/* Misma "hoja" de cuaderno, pero inclinada para el otro lado,
   como si fuera la página siguiente del cuaderno */
.hoja {
  position: relative;
  background-color: #fbf6ea;
  width: 100%;
  max-width: 620px;
  padding: 36px 34px 30px 62px;
  border-radius: 2px 14px 14px 2px;
  box-shadow: 7px 10px 0 rgba(139, 94, 43, 0.15), 0 2px 6px rgba(59, 42, 30, 0.12);
  font-family: 'Space Mono', monospace;
}

.hoja-resultados {
  transform: rotate(0.5deg);
}

.hoja::before {
  content: "";
  position: absolute;
  left: 38px;
  top: 0;
  bottom: 0;
  width: 2px;
  background-color: #c17a63;
}

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

.titulo {
  font-family: 'Caveat', cursive;
  font-size: 40px;
  font-weight: 700;
  color: #6b431c;
  margin: 0 0 2px 0;
}

.subtitulo {
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: #8a7660;
  margin: 0 0 22px 0;
}

.vacio {
  font-size: 13px;
  color: #8a7660;
}

.lista-boletas {
  display: flex;
  flex-direction: column;
}

/* Cada nota es una "boleta": materia + fecha a la izquierda,
   número de nota en el medio, y el sello a la derecha */
.boleta {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 14px 0;
  border-bottom: 1px dashed #ddceac;
  flex-wrap: wrap;
}

.boleta:last-child {
  border-bottom: none;
}

.boleta-info {
  display: flex;
  flex-direction: column;
  flex: 1 1 140px;
}

.materia {
  font-weight: bold;
  font-size: 15px;
  color: #3b2a1e;
}

.fecha {
  font-size: 12px;
  color: #8a7660;
}

.nota-num {
  font-size: 22px;
  font-weight: bold;
  color: #6b431c;
  min-width: 30px;
  text-align: center;
}

/* El "sello" imita un sello de goma: borde grueso, letras en mayúscula
   y una leve rotación, como si lo hubieran estampado a mano */
.sello {
  padding: 4px 12px;
  border: 2px solid;
  border-radius: 4px;
  font-size: 11px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.aprobado {
  color: #4c7a3e;
  border-color: #4c7a3e;
  background-color: #e6ecdb;
  transform: rotate(-6deg);
}

.desaprobado {
  color: #a23e2c;
  border-color: #a23e2c;
  background-color: #f3ded7;
  transform: rotate(5deg);
}

@media (max-width: 480px) {
  .hoja {
    padding: 30px 20px 24px 48px;
  }
  .titulo {
    font-size: 32px;
  }
}
</style>
