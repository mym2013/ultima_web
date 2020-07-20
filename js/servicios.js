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
          4-. leermas: link a las pg siguientes*/
  
        var posts=[
          { title:' Procesos y Procedimientos T.I.',
            date: "publicado el día " + moment().date() +" "+ moment().format("MMMM") + "  del año " + moment().format("YYYY"),
            content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur metus ex, eget vulputate leo volutpat in. Maecenas bibendum, nunc et porttitor faucibus, ex mi venenatis dolor, pretium dapibus orci neque sit amet dolor. Nam interdum massa id lacus ultrices malesuada. In massa arcu, efficitur rutrum iaculis ac, porttitor pharetra arcu. Proin laoreet eleifend lectus, rutrum ultricies tortor tincidunt id. Praesent vitae lacinia felis. Quisque commodo velit tempus enim laoreet, a posuere magna luctus. Duis et pellentesque lorem. Proin consequat vitae libero nec pellentesque.",
            leermas:'../index.html',
          },
          { title:' Desarrollo de aplicaciones',
          date: "publicado el día " + moment().date() +" "+ moment().format("MMMM") + "  del año " + moment().format("YYYY"),
          content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur metus ex, eget vulputate leo volutpat in. Maecenas bibendum, nunc et porttitor faucibus, ex mi venenatis dolor, pretium dapibus orci neque sit amet dolor. Nam interdum massa id lacus ultrices malesuada. In massa arcu, efficitur rutrum iaculis ac, porttitor pharetra arcu. Proin laoreet eleifend lectus, rutrum ultricies tortor tincidunt id. Praesent vitae lacinia felis. Quisque commodo velit tempus enim laoreet, a posuere magna luctus. Duis et pellentesque lorem. Proin consequat vitae libero nec pellentesque.",
          leermas:'../index.html',
        },
        { title:' Videos de capacitación',
        date: "publicado el día " + moment().date() +" "+ moment().format("MMMM") + "  del año " + moment().format("YYYY"),
        content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur metus ex, eget vulputate leo volutpat in. Maecenas bibendum, nunc et porttitor faucibus, ex mi venenatis dolor, pretium dapibus orci neque sit amet dolor. Nam interdum massa id lacus ultrices malesuada. In massa arcu, efficitur rutrum iaculis ac, porttitor pharetra arcu. Proin laoreet eleifend lectus, rutrum ultricies tortor tincidunt id. Praesent vitae lacinia felis. Quisque commodo velit tempus enim laoreet, a posuere magna luctus. Duis et pellentesque lorem. Proin consequat vitae libero nec pellentesque.",
        leermas:'../index.html',
      },
      { title:' Integración de plataformas complejas',
      date: "publicado el día " + moment().date() +" "+ moment().format("MMMM") + "  del año " + moment().format("YYYY"),
      content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur metus ex, eget vulputate leo volutpat in. Maecenas bibendum, nunc et porttitor faucibus, ex mi venenatis dolor, pretium dapibus orci neque sit amet dolor. Nam interdum massa id lacus ultrices malesuada. In massa arcu, efficitur rutrum iaculis ac, porttitor pharetra arcu. Proin laoreet eleifend lectus, rutrum ultricies tortor tincidunt id. Praesent vitae lacinia felis. Quisque commodo velit tempus enim laoreet, a posuere magna luctus. Duis et pellentesque lorem. Proin consequat vitae libero nec pellentesque.",
      leermas:'../index.html',
    },
  
          ];
  
  
  
  posts.forEach((item, index) => {
    var post = `
      <article class="post">
        <h2>${item.title}</h2>
      
        <p>
          ${item.content}
        </p>
        <a href="${item.leermas}" class="button-more">Inicio</a>
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
  