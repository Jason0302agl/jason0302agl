// MENU VARIABLES
const menuButton = document.querySelector('#menu-button');
const menuItems = document.querySelector('#menu');
const menuButtonSpans = document.querySelectorAll('#menu-button span');
const links = document.querySelectorAll('#menu a');
const main = document.querySelector('main');
menuButton.addEventListener('click', () => {
  menuItems.classList.toggle('hidden');
  main.classList.toggle('opacity-10');

  menuButtonSpans.forEach((span) => {
    span.classList.toggle('animado');
  });
});

links.forEach((link) => {
  link.addEventListener('click', () => {
    menuItems.classList.add('hidden');
    main.classList.remove('opacity-10');
    menuButtonSpans.forEach((span) => {
      span.classList.remove('animado');
    });
  });
});

// CIERRA MENU ON RESIZE

window.onresize = function () {
  let w = window.outerWidth;
  if (w > 768) {
    menuItems.classList.add('hidden');
    menuButtonSpans.forEach((span) => {
      span.classList.remove('animado');
    });
  }
};

/**MODO OSCURO*/

const darkButton = document.querySelector('#darkButton');

darkButton.addEventListener('click', function () {
  // si se configuró previamente a través del almacenamiento local
  if (localStorage.getItem('color-theme')) {
    if (localStorage.getItem('color-theme') === 'light') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('color-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('color-theme', 'light');
    }

    // si NO se configuró previamente a través del almacenamiento local
  } else {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('color-theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('color-theme', 'dark');
    }
  }
});


// TRADUCCION
const translations = {
  en: {
    nav1: "Home",
    nav2: "Benefits",
    nav3: "Videos",
    nav4: "Contact",
    titulo: "LaptopsXpress",
    eslogan: "Portable productivity at your fingertips",
    ben: "BENEFITS",
    ben1: "✔️ After completing the form, you will unlock full access to detailed information on the components offered by the devices of the brand you previously selected. In addition, we will provide you with a telephone number that you can call to resolve any questions you may have .",
    ben2: "✔️ We are proud to offer 100% guarantees on all our products. As an added value, we provide a free cleaning service for all devices belonging to our chain of stores, renewable every 3 months. We want to ensure that your experience with our products are always impeccable.",
    ben3: "✔️ To ensure that your device arrives in perfect condition, we have our own delivery staff. The standard delivery time for your order will not exceed 4 days, and if you are located in the La Libertad department, you can expect to receive your order in just 2 days. We want to make the experience of receiving our products quick and hassle-free.",
    vid: "VIDEOS",
    vid1: "Presentation video",
    vid2: "Custom designs",
    vid3: "Latest updates",
    con: "CONTACT US",
    email : "email en ingles",
    btncon: "Send Suggestion",
    com1: "Amazing online laptop store! Wide selection of models and excellent customer service. I bought my laptop here and was impressed! Fast delivery and product in perfect condition. Recommended!",
    com2: "This online laptop store is great! I found the perfect device for my needs and at an incredible price. The purchasing process was easy and the delivery was fast. Very satisfied with my purchase!",
    com3: "This store is my favorite to buy laptops. Their variety of brands and specifications is amazing. Plus, shipping is always on time and customer service is friendly and helpful. I can't wait to shop here again!",

  },
  es: {
    nav1: "Inicio",
    nav2: "Beneficios",
    nav3: "Videos",
    nav4: "Contacto",
    titulo: "LaptopsXpress",
    eslogan: "Productividad portátil a tu alcance", 
    ben: "BENEFICIOS",
    ben1: "✔️ Después de completar el formulario, desbloqueará un acceso completo a la información detallada de los componentes que ofrecen los dispositivos de la marca que previamente seleccionó. Además, le proporcionaremos un número telefónico al que podrá llamar para resolver cualquier consulta que pueda tener.",
    ben2: "✔️ Nos enorgullece ofrecer garantías del 100% en todos nuestros productos. Como valor adicional, brindamos un servicio de limpieza gratuito para todos los dispositivos pertenecientes a nuestra cadena de tiendas, renovable cada 3 meses. Queremos asegurarnos de que su experiencia con nuestros productos sea siempre impecable.",
    ben3: "✔️ Para garantizar que su dispositivo llegue en perfectas condiciones, contamos con nuestro propio personal de entrega. El tiempo de entrega estándar para su pedido no superará los 4 días, y si se encuentra en el departamento de La Libertad, puede esperar recibir su pedido en tan solo 2 días. Queremos hacer que la experiencia de recibir nuestros productos sea rápida y sin complicaciones.",
    vid: "VIDEOS",
    vid1: "Video de presentacion",
    vid2: "Diseños personalizados",
    vid3: "Ultimas actualizaciones",
    con: "CONTACTANOS",
    btncon: "Enviar Sugerencia",
    email : "info@ejemplo.com",
    com1: "¡Increíble tienda online de laptops! Amplia selección de modelos y excelente servicio al cliente. ¡Compré mi laptop aquí y quedé impresionada! Entrega rápida y producto en perfectas condiciones. ¡Recomendado!",
    com2: "¡Esta tienda online de laptops es genial! Encontré el equipo perfecto para mis necesidades y a un precio increíble. El proceso de compra fue fácil y la entrega rápida. ¡Muy satisfecho con mi compra!",
    com3: "Esta tienda es mi favorita para comprar laptops. Su variedad de marcas y especificaciones es sorprendente. Además, el envío siempre es puntual y el servicio al cliente es amable y servicial. ¡No puedo esperar para volver a comprar aquí!",
  },  
  fr: {
    nav1 : "Accueil",
    nav2 : "Avantages",
    nav3 : "Vidéos",
    nav4 : "Contact",
    titulo : "LaptopsXpress",
    eslogan : "La productivité portable à portée de main",
    ben : "AVANTAGES",
    ben1 : " ✔️ Après avoir rempli le formulaire, vous débloquerez un accès complet à des informations détaillées sur les composants proposés par les appareils de la marque que vous avez précédemment sélectionnée. De plus, nous vous fournirons un numéro de téléphone que vous pourrez appeler pour résoudre toutes vos questions. tu as peut-être .",
    ben2 : " ✔️ Nous sommes fiers d'offrir des garanties à 100 % sur tous nos produits. En valeur ajoutée, nous proposons un service de nettoyage gratuit pour tous les appareils appartenant à notre chaîne de magasins, renouvelable tous les 3 mois. Nous voulons nous assurer que votre expérience avec nos produits sont toujours impeccables.",
    ben3 : " ✔️ Pour que votre appareil arrive en parfait état, nous disposons de notre propre personnel de livraison. Le délai de livraison standard de votre commande ne dépassera pas 4 jours, et si vous vous situez dans le département de La Libertad, vous pouvez vous attendre à recevoir votre commande en seulement 2 jours. Nous voulons que l'expérience de réception de nos produits soit rapide et sans tracas.",
    vid : "VIDÉOS",
    vid1 : "Vidéo de présentation",
    vid2 : "Conceptions personnalisées",
    vid3 : "Dernières mises à jour",
    con : "CONTACTEZ-NOUS",
    btncon : "Envoyer une suggestion",
    com1: "Incroyable boutique d'ordinateurs portables en ligne ! Large choix de modèles et excellent service client. J'ai acheté mon ordinateur portable ici et j'ai été impressionné ! Livraison rapide et produit en parfait état. Recommandé !",
    com2 : "Cette boutique d'ordinateurs portables en ligne est géniale ! J'ai trouvé l'appareil parfait pour mes besoins et à un prix incroyable. Le processus d'achat a été simple et la livraison a été rapide. Très satisfait de mon achat !",
    com3 : "Ce magasin est mon préféré pour acheter des ordinateurs portables. Leur variété de marques et de spécifications est incroyable. De plus, l'expédition est toujours à l'heure et le service client est sympathique et serviable. J'ai hâte de faire des achats ici à nouveau !",
  },

  pt: {
    nav1: "Casa",
    nav2: "Benefícios",
    nav3: "Vídeos",
    nav4: "Contato",
    titulo: "LaptopsXpress",
    eslogan: "Produtividade portátil ao seu alcance",
    ben: "BENEFÍCIOS",
    ben1: "✔️ Após preencher o formulário, você terá acesso total a informações detalhadas sobre os componentes oferecidos pelos aparelhos da marca que você selecionou anteriormente. Além disso, forneceremos um número de telefone para o qual você poderá ligar para esclarecer qualquer dúvida você pode ter .",
    ben2: "✔️ Temos o orgulho de oferecer 100% de garantia em todos os nossos produtos. Como valor acrescentado, oferecemos um serviço de limpeza gratuito para todos os dispositivos pertencentes à nossa rede de lojas, renovável a cada 3 meses. Queremos garantir que a sua experiência com nossos produtos são sempre impecáveis.",
    ben3: "✔️ Para garantir que seu aparelho chegue em perfeitas condições, contamos com nossa própria equipe de entrega. O prazo padrão de entrega do seu pedido não ultrapassará 4 dias, e se você estiver no departamento de La Libertad, poderá receber seu pedido em apenas 2 dias. Queremos tornar a experiência de recebimento de nossos produtos rápida e descomplicada.",
    vid: "VÍDEOS",
    vid1: "Vídeo de apresentação",
    vid2: "Projetos personalizados",
    vid3: "Últimas atualizações",
    con: "FALE CONOSCO",
    btncon: "Enviar sugestão",
    com1: "Incrível loja online de notebooks! Ampla seleção de modelos e excelente atendimento. Comprei meu notebook aqui e fiquei impressionado! Entrega rápida e produto em perfeito estado. Recomendado!",
    com2: "Essa loja online de notebooks é ótima! Encontrei o aparelho perfeito para minhas necessidades e com um preço incrível. O processo de compra foi fácil e a entrega foi rápida. Muito satisfeito com minha compra!",
    com3: "Esta loja é minha favorita para comprar laptops. Sua variedade de marcas e especificações é incrível. Além disso, a entrega é sempre pontual e o atendimento ao cliente é amigável e prestativo. Mal posso esperar para comprar aqui novamente!",
  },

};


// Función para traducir la página
function translatePage(language) {
  const selectedTranslations = translations[language];

  // Obtén todos los elementos con el atributo data-translation-key
  const elementsToTranslate = document.querySelectorAll('[data-translation-key]');

  // Itera sobre los elementos y cambia su contenido
  elementsToTranslate.forEach(element => {
      const translationKey = element.getAttribute('data-translation-key');
      element.textContent = selectedTranslations[translationKey];
  });
}

// Agrega un evento de cambio al elemento <select> para cambiar el idioma
document.getElementById("language-select").addEventListener("change", function () {
  const selectedLanguage = this.value;
  translatePage(selectedLanguage);
});
