# Mi cuaderno de notas

Aplicación de Laura Armando para registrar calificaciones por materia y fecha. Usa Vue 3, JavaScript, HTML y CSS, con componentes separados para el formulario o la lista de notas.

[Probar la demo](https://lolamora744-dev.github.io/Notas.lau/)

## Ejecutar y compilar

```sh
npm ci
npm run dev
```

Para generar la demo de producción, ejecutá `npm run build`. Los archivos se generan en `docs`, que es la carpeta publicada con GitHub Pages.

## Código fuente

`src/App.vue` contiene la interfaz principal. Los componentes están en `src/components`. El proyecto conserva su ZIP original y también permite revisar los archivos directamente desde GitHub.

## Alcance

Valida los campos y las calificaciones entre 1 y 10. Muestra el estado aprobado o desaprobado. Los datos se guardan en memoria mientras la página permanece abierta y se borran al recargar. Esta es una variante del proyecto de notas, con su propia organización o presentación visual.
