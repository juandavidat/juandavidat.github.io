const id = "#contenedorPrincipal";
const fondoVerde = "bgVerde";
const fondoAmarillo = "bgAmarillo";
const fondoMorado = "bgMorado";
const fondoNegro = "bgNegro";
const colorVerde = "verde";
const colorAmarillo = "amarillo";
const colorMorado = "morado";
const colorNegro = "negro";
const colorFondo = "colorFondo";
const mostrar1 = "mostrar1";
const mostrar2 = "mostrar2";
const mostrar3 = "mostrar3";
const mostrar4 = "mostrar4";

const colorLocalStorage = localStorage.getItem(colorFondo);

const removerColor = (value) => {
  let element = document.querySelector(id);

  if (value === colorVerde) {
    element.classList.remove(fondoAmarillo, fondoMorado, fondoNegro);
  } else if (value === colorAmarillo) {
    element.classList.remove(fondoVerde, fondoMorado, fondoNegro);
  } else if (value === colorMorado) {
    element.classList.remove(fondoVerde, fondoAmarillo, fondoNegro);
  } else if (value === colorNegro) {
    element.classList.remove(fondoVerde, fondoMorado, fondoAmarillo);
  }
};

const tema = (color) => {
  let element = document.querySelector(id);
  element.classList.add(color || colorLocalStorage);
  localStorage.setItem(colorFondo, color || colorLocalStorage);
};

const mostrarContenido = (value) => {
  if (value === mostrar1) {
    let element = document.querySelector("#desplegarContenido1");
    element.classList.toggle("activo");
  } else if (value === mostrar2) {
    let element = document.querySelector("#desplegarContenido2");
    element.classList.toggle("activo");
  }
  if (value === mostrar3) {
    let element = document.querySelector("#desplegarContenido3");
    element.classList.toggle("activo");
  } else if (value === mostrar4) {
    let element = document.querySelector("#desplegarContenido4");
    element.classList.toggle("activo");
  }
};

if (localStorage.getItem(colorFondo) === fondoVerde) {
  element.classList.add(fondoVerde);
}

if (localStorage.getItem(colorFondo) === fondoAmarillo) {
  element.classList.add(fondoAmarillo);
}

if (localStorage.getItem(colorFondo) === fondoMorado) {
  element.classList.add(fondoMorado);
}

if (localStorage.getItem(colorFondo) === fondoNegro) {
  element.classList.add(fondoNegro);
}

function cambiarContenido(ruta) {
  $(document).ready(function () {
    $(".contenido").load(ruta);
  });
}

$("ul.tabs li a:first").addClass("active");
$(".secciones article").hide();
$(".secciones article:first").show();

$("ul.tabs li a").click(function () {
  $("ul.tabs li a").removeClass("active");
  $(this).addClass("active");
  $(".secciones article").hide();

  var activeTab = $(this).attr("href");
  $(activeTab).show();
  return false;
});
