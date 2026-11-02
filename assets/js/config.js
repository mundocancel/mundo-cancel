// ============================================================
// CONFIGURACIÓN DEL SITIO
// Edita solo este archivo para cambiar WhatsApp, imágenes o
// categorías. No necesitas tocar app.js.
// ============================================================
window.SITE_CONFIG = {
  // Número de WhatsApp en formato internacional, sin "+" ni espacios.
  whatsapp: '5213328008949',
  whatsappUrl: 'https://wa.me/5213328008949',

  // Calculador externo (botón "Abrir Calculador")
  calculadorUrl: 'https://mundocalculador-indalum.netlify.app',

  // Imagen del hero y galerías por categoría.
  // Puedes usar URLs o rutas locales, por ejemplo: 'assets/img/corredizo-1.jpg'
  imagenes: {
    hero: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1920&auto=format&fit=crop',

    corredizo: [
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=800&auto=format&fit=crop'
    ],
    abatible: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop'
    ],
    fijo: ['https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop'],
    plegable: ['https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=800&auto=format&fit=crop'],
    domo: ['https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=800&auto=format&fit=crop'],
    templado: ['https://images.unsplash.com/photo-1506377295352-e3154d43ea9e?q=80&w=800&auto=format&fit=crop'],
    acoples: ['https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop'],
    especiales: ['https://images.unsplash.com/photo-1600573472592-401b489a3cdc?q=80&w=800&auto=format&fit=crop']
  },

  // Categorías del catálogo y del cotizador.
  categorias: [
    { id: 'corredizo',        nombre: 'Corredizo',        imgKey: 'corredizo' },
    { id: 'abatible',         nombre: 'Abatible',         imgKey: 'abatible' },
    { id: 'fijo',             nombre: 'Fijo',             imgKey: 'fijo' },
    { id: 'plegable',         nombre: 'Plegable',         imgKey: 'plegable' },
    { id: 'domo',             nombre: 'Domo',             imgKey: 'domo' },
    { id: 'cristal-templado', nombre: 'Cristal Templado', imgKey: 'templado' },
    { id: 'acoples',          nombre: 'Acoples',          imgKey: 'acoples' },
    { id: 'especiales',       nombre: 'Especiales',       imgKey: 'especiales' }
  ]
};
