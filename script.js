function postularWhatsApp(area) {
  const telefono = "51999998396";
  let mensaje = "";

  if (area === "soporte") {
    mensaje = "Hola, buen día. Estoy interesado en postular para el área de Soporte Técnico. En breve le enviaré mi CV para su evaluación. Quedo atento(a).";
  } else if (area === "almacen") {
    mensaje = "Hola, buen día. Estoy interesado en postular para el área de Almacén. En breve le enviaré mi CV para su evaluación. Quedo atento(a).";
  }

  const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
  window.open(url, "_blank");
}
