# La caseta del sabor — intro + hero

Primer entregable de la landing: cinemática de 5.5 segundos integrada al hero. Tres fotogramas fotográficos pasan de un raspado entero a una explosión de fruta, hielo y jarabes de pantalla completa, antes de revelar el hero. Incluye una composición específica para móvil, botón para saltarla, reproducción solo en la primera visita y una versión estática para quienes prefieren movimiento reducido.

## Ejecutar

```bash
npm install
npm run dev
```

Abrir `http://localhost:3000`. Para volver a ver la intro, usa el botón “Repetir intro” al pie del hero o borra la clave `caseta-intro-seen` de `localStorage`.

## Pendiente de identidad

Los colores están centralizados en `app/globals.css` y son provisionales. Las imágenes en `public/images/` son fotogramas conceptuales generados para visualizar el motion; deberán revisarse frente a las fotos reales y la identidad final. `components/IntroHero.tsx` concentra el contenido, las cinco escenas y las acciones del hero.

El botón “Ver sabores” abre una lista breve dentro del hero mientras se construye la sección de menú de la landing completa. Los precios, horarios y promociones no se muestran hasta recibir datos confirmados.
