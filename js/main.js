$(document).ready(function(){

  /* slider */
    $(".galeria").bxSlider({
        mode: "fade",
        captions: true,
        slideWidth: 1200
        
      });


      //post


   /*      propiedades de los jason de los post
        1-. van a tener un titulo
        2-. una fecha
        3-. el cuerpo del post q es un texto
        4-. un leer mas que agregue yo */

      var posts=[
        { title:' Aprobado Retiro de Fondos de las AFP',
          date: "publicado el día " + moment().date() +" "+ moment().format("MMMM") + "  del año " + moment().format("YYYY"),
          content:"Se aprueba el retiro de fondos de las AFP, sepa cómo retirar su dinero"+
          '<img src="../img/retiroAFP3.jpg" alt="AFP">'+
          '<a href="https://www.t13.cl/noticia/nacional/retiro-pensiones-AFP-cuando-se-puede-cobrar-dinero-ley-24-07-2020" target="_blank"><img src="../img/canal13.jpg" alt="canal13"></a>',
          leermas:'paginas/sobre_tdchile.html',
         
        },
        { title:' Buenas noticias en la lucha contra el COVID 19',
          date: "publicado el día " + moment().date() +" "+ moment().format("MMMM") + "  del año " + moment().format("YYYY"),
          content:"posibles tratamientos, vacunas y hallazgos, dan esperanza para resolver dentro del 2020,  la obtención de una vacuna que permitiría volver a la normalidad "+
          '<img src="../img/vacuna3.jpg" alt="vacuna">'+
          '<a href="https://cnnespanol.cnn.com/2020/07/20/buenas-noticias-en-la-lucha-contra-el-coronavirus-posibles-tratamientos-vacunas-y-hallazgos/" target="_blank"><img src="../img/cnn3.png" alt="vacuna"></a>',
          leermas:'paginas/sobre_tdchile.html',
        },
        { title:'Hackeo Masivo a las cuentas de  los super ricos y famosos',
          date: "publicado el día " + moment().date() +" "+ moment().format("MMMM") + "  del año " + moment().format("YYYY"),
          content:" Hackean las cuentas de los super famosos en Twitter para realizar etafas con bitcoin "+
          '<img src="../img/hakeo.jpg" alt="diagrama hackeo famosos">'+
          '<a href="https://www.abc.es/tecnologia/abci-hackean-cuentas-twitter-bill-gates-obama-y-otros-famosos-para-realizar-estafas-criptomonedas-202007160607_noticia.html" target="_blank"><img src="../img/abcnews.jpg" alt="sitio noticias"></a>',
          leermas:'pginas/clientes.html'
        },
        { title:'Las Babosas abren la puerta a una cicatrización mas eficientes de las heridas de los humanos',
          date: "publicado el día " + moment().date() +" "+ moment().format("MMMM") + "  del año " + moment().format("YYYY"),
          content:" El trabajo conjunto de dos prestigiosas Universidades para crear un pegamento médico revolucionario fuertemente adhesivo inspirado en las babosas"+
          '<img src="../img/babosas4.jpg" alt="babosas y medicina">'+
          '<a href="https://www.imnovation-hub.com/es/ciencia-y-tecnologia/babosas-abren-puerta-a-cicatrizacion-mas-eficiente/" target="_blank"> <img src="../img/sitioNews.jpg" alt="sitio noticias"></a>',
          leermas:'paginas/noticias.html'
        },


        ];


/* console.log(posts); */

/* posts.forEach((item, index) => {
var post =
       <article class="post">
                <h2>${item.title}</h2>
                <span class="fecha"> ${item.date}<span>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                  felis lorem, luctus in ex id, faucibus dignissim lorem.
                  Etiam ut urna in tellus tempus ultricies. Nulla est lectus,
                  dictum nec mi quis, aliquam interdum sapien. Suspendisse eget
                  sapien a magna ultricies tincidunt at viverra diam. Sed eu nisi
                  semper, varius orci non, viverra nulla. Nulla laoreet ac massa e
                  t sodales. Vivamus mollis tincidunt lacinia. Sed pulvinar arcu
                  orci, et ultricies ligula interdum eget. Proin lectus odio,
                  tempor nec pellentesque non, porta vitae lectus.
                </p>
                <a href="#" class="button-more">Leer más</a>
            </article>




}); */

posts.forEach((item, index) => {
  var post = `
    <article class="post">
      <h2>${item.title}</h2>
      <span class="date">${item.date}</span>
      <p>
        ${item.content}
      </p>
      <a href="../index.html" class="button-more">Inicio</a>
    </article>
  `;

  /* con este console log hago la verificación visual del contenido de la variable post desde el jason */
  /* console.log(post); */

  $("#posts").append(post);
});

// selector de temas


    var theme = $("#theme");

	$("#to-green").click(function(){
		theme.attr("href", "css/green.css");
	});

	$("#to-red").click(function(){
		theme.attr("href", "css/red.css");
	});

	$("#to-blue").click(function(){
		theme.attr("href", "css/blue.css");
	});


//scroll arriba de la web
$(".subir").click(function(e){
  e.preventDefault();
$("html, body").animate({
  scrollTop: 0
},500);

return false;
});

// login falso

$("#login form").submit(function(){
  var form_name = $("#form_name").val();

  localStorage.setItem("form_name", form_name);

});

var form_name = localStorage.getItem("form_name");

if(form_name != null && form_name != "undefined"){
  var about_parrafo = $("#about p");

  about_parrafo.html("<br><strong>Bienvenido, "+ form_name +"</strong>");
  about_parrafo.append("<a href='#' id='logout'>Cerrar sesión</a>");

  $("#login").hide();

  $("#logout").click(function(){
    localStorage.clear();
    location.reload(true);
  });


}



});
