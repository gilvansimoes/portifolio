VanillaTilt.init(document.querySelectorAll(".sci li a"), {
    max: 30,
    speed: 400,
    gare: true
});
let list = document.querySelectorAll('.sci li');
let bg = document.querySelector('body');
let h1 = document.querySelector('h1');
let li = document.querySelectorAll('body .txt li');
list.forEach(element => {
    element.addEventListener("mouseenter", function(event){
        let color = event.target.style.getPropertyValue('--clr');
        bg.style.backgroundColor = color;
        bg.style.color = '#fff';
        h1.style.color = '#fff';
        li.forEach(lista => lista.style.color = '#fff')
    })
    element.addEventListener("mouseleave", function(event){
        bg.style.backgroundColor = '#fff';
        bg.style.color = '#000';
        h1.style.color = '#000';
        li.forEach(lista => lista.style.color = '#222')
    })
});
function updateDimensions() {
    const body = document.body;
    const width = window.innerWidth;
    const altura = window.innerHeight;

    body.style.height = `${altura}px`;
}
updateDimensions();
window.addEventListener('resize', updateDimensions);

let selecionado = document.querySelectorAll('.flag img');

selecionado.forEach(element => {
    element.addEventListener('click', function() {
        selecionado.forEach(el => el.classList.remove('selecionado'));
        this.classList.add('selecionado');
    });
});

let body = document.querySelector('body');

let langToken = sessionStorage.getItem('onload');
let theme = sessionStorage.getItem('theme');
let toggle = document.getElementById('toggle');

if (langToken === null) {
    body.setAttribute('onload', 'pt()');
    selecionado[0].classList.add('selecionado');
} else {
    body.setAttribute('onload', `${langToken}()`);
    document.getElementById(langToken).classList.add('selecionado');
}

if (theme === 'dark') {
    toggle.classList.add('active');
    body.classList.add('night');
} else {
    toggle.classList.remove('active');
    body.classList.remove('night');
}

let home = document.getElementById('home');
let about = document.getElementById('about');
let project = document.getElementById('project');
let titulos = document.getElementById('titulos');
let ul = document.getElementById('ul');
let paragrafos_1 = document.getElementById('paragrafo_1');
let paragrafos_2 = document.getElementById('paragrafo_2');
let paragrafos_3 = document.getElementById('paragrafo_3');
let paragrafos_4 = document.getElementById('paragrafo_4');
let titulos_rede = document.getElementById('titulo_rede');
let footer = document.getElementById('footer');
let corpoEmail = document.getElementById('corpoEmail');
let email = document.getElementById('emails');
let nome = document.getElementById('name');
let message = document.getElementById('message');

let main__about = document.getElementById('main__about');
let about_1 = document.getElementById('about_1');
let about_2 = document.getElementById('about_2');
let about_3 = document.getElementById('about_3');
let about_4 = document.getElementById('about_4');
let about_5 = document.getElementById('about_5');
let timeline = document.getElementById('timeline');
let main__content__titulo = document.getElementById('main__content__titulo');
let main__content__titulo_p = document.getElementById('main__content__titulo_p');

function pt() {
    clean();
    sessionStorage.setItem('onload', 'pt');
    if (langToken === null) {
        body.setAttribute('onload', 'pt()');
    } else {
        body.setAttribute('onload', `${langToken}()`);
    }
    if (titulos) {
        cleanContent();
        dadosIndex('pt');
    }else{
        dadosIndex2('pt');        
    }
}

function en() {
    clean();
    sessionStorage.setItem('onload', 'en');
    if (langToken === null) {
        body.setAttribute('onload', 'pt()');
    } else {
        body.setAttribute('onload', `${langToken}()`);
    }
    if (titulos) {
        cleanContent();
        dadosIndex('en');
    }else{
        dadosIndex2('en');        
    }
}

function es() {
    clean();
    sessionStorage.setItem('onload', 'es');
    if (langToken === null) {
        body.setAttribute('onload', 'pt()');
    } else {
        body.setAttribute('onload', `${langToken}()`);
    }
    if (titulos) {
        cleanContent();
        dadosIndex('es');
    }else{
        dadosIndex2('es');        
    }
}

function fr() {
    clean();
    sessionStorage.setItem('onload', 'fr');
    if (langToken === null) {
        body.setAttribute('onload', 'pt()');
    } else {
        body.setAttribute('onload', `${langToken}()`);
    }
    if (titulos) {
        cleanContent();
        dadosIndex('fr');
    }else{
        dadosIndex2('fr');        
    }
}

function toggleTheme() {
    var theme = sessionStorage.getItem('theme');
    if (theme === null) {
        sessionStorage.setItem('theme', 'dark');
    } else if (theme === 'dark') {
        sessionStorage.setItem('theme', 'light');
    } else if (theme === 'light') {
        sessionStorage.setItem('theme', 'dark');
    }
}

function clean() {
    home.innerHTML = '';
    about.innerHTML = '';
    project.innerHTML = '';
    footer.innerHTML = '';
}
function cleanContent() {
    titulos.innerHTML = '';
    ul.innerHTML = '';
    paragrafos_1.innerHTML = '';
    paragrafos_2.innerHTML = '';
    paragrafos_3.innerHTML = '';
    paragrafos_4.innerHTML = '';
    titulos_rede.innerHTML = '';
}
function cleanAbout() {
    about_1.innerHTML = '';
    about_2.innerHTML = '';
    about_3.innerHTML = '';
    about_4.innerHTML = '';
    about_5.innerHTML = '';
    timeline.innerHTML = '';
    main__content__titulo.innerHTML = '';
    main__content__titulo_p.innerHTML = '';
}
function dadosIndex(idioma) {
    fetch("./assets/json/dados.json", {
        headers: {
            'Accept-Language': idioma
        }
    })
    .then(response => response.json())
    .then((dados) => {    
            switch (idioma) {
                case 'pt':
                    dados.pt.map(item => {
                        buscaDados(item);
                    })
                break;
                case 'en':
                    dados.en.map(item => {
                        buscaDados(item);
                    })
                break;
                case 'es':
                    dados.es.map(item => {
                        buscaDados(item);
                    })
                break;
                case 'fr':
                    dados.fr.map(item => {
                        buscaDados(item);
                    })
                break;
            }
    })
}

function dadosIndex2(idioma) {
    fetch("./assets/json/dados.json")
    .then(response => response.json())
    .then((dados) => {
        switch (idioma) {
            case 'pt':
                dados.pt.map(item => {
                    buscaDados2(item);
                })
            break;
            case 'en':
                dados.en.map(item => {
                    buscaDados2(item);
                })
            break;
            case 'es':
                dados.es.map(item => {
                    buscaDados2(item);
                })
            break;
            case 'fr':
                dados.fr.map(item => {
                    buscaDados2(item);
                })
            break;
        }
    })
}

function buscaDados(item) {
    if (item.index[0].nav !== undefined) {
        home.innerHTML += `${item.index[0].nav[0].home}`;
        about.innerHTML += `${item.index[0].nav[1].about}`;
        project.innerHTML += `${item.index[0].nav[2].project}`;
    }
    if (item.index[1].titulo !== undefined) {
        titulos.innerHTML += `${item.index[1].titulo}`;
    }
    if (item.index[2].ul !== undefined) {
        ul.innerHTML += `<li><p>${item.index[2].ul[0].full}</p></li>`;
        ul.innerHTML += `<li><p>${item.index[2].ul[1].front}</p></li>`;
        ul.innerHTML += `<li><p>${item.index[2].ul[2].back}</p></li>`;
        ul.innerHTML += `<li><p>${item.index[2].ul[3].dev}</p></li>`;
        ul.innerHTML += `<li><p>${item.index[2].ul[4].name}</p></li>`;
    }
    if (item.index[3].paragrafo_1 !== undefined) {
        paragrafos_1.innerHTML += `${item.index[3].paragrafo_1}`;
    }
    if (item.index[4].paragrafo_2 !== undefined) {
        paragrafos_2.innerHTML += `${item.index[4].paragrafo_2}`;
    }
    if (item.index[5].paragrafo_3 !== undefined) {
        paragrafos_3.innerHTML += `${item.index[5].paragrafo_3}`;
    }
    if (item.index[6].paragrafo_4 !== undefined) {
        paragrafos_4.innerHTML += `${item.index[6].paragrafo_4}`;
    }
    if (item.index[7].titulo_rede !== undefined) {
        titulos_rede.innerHTML += `${item.index[7].titulo_rede}`;
    }
    if (item.index[8].footer !== undefined) {
        footer.innerHTML += `${item.index[8].footer}`;
    }
    sendEmail(item.index[9].ptitulo, item.index[10].pEmail, item.index[11].pNome, item.index[12].pWhatsapp, item.index[13].pMessage, item.index[14].pSubmit)
}

function buscaDados2(item) {  
    if (item.index[0].nav !== undefined) {
        home.innerHTML += `${item.index[0].nav[0].home}`;
        about.innerHTML += `${item.index[0].nav[1].about}`;
        project.innerHTML += `${item.index[0].nav[2].project}`;
    }
    if (item.index[8].footer !== undefined) {
        footer.innerHTML += `${item.index[8].footer}`;
    }
    if (main__about) {
        cleanAbout();
        if (item.about[0].about_1 !== undefined) {
            about_1.innerHTML += `${item.about[0].about_1}`;
            let age = document.getElementById('age');
            if (age) {
                let ano = new Date().getFullYear();
                age.innerHTML += ano - 1985;
            }
        }
        if (item.about[1].about_2 !== undefined) {
            about_2.innerHTML += `${item.about[1].about_2}`;
        }
        if (item.about[2].about_3 !== undefined) {
            about_3.innerHTML += `${item.about[2].about_3}`;
        }
        if (item.about[3].about_4 !== undefined) {
            about_4.innerHTML += `${item.about[3].about_4}`;
        }
        if (item.about[4].about_5 !== undefined) {
            about_5.innerHTML += `${item.about[4].about_5}`;
        }
        if (item.about[5].titulo !== undefined) {
            main__content__titulo.innerHTML += `${item.about[5].titulo}`;
        }
        if (item.about[6].titulo_p !== undefined) {
            main__content__titulo_p.innerHTML += `${item.about[6].titulo_p}`;
        }
        if (item.about[7].timeline !== undefined) {
            for (let i = 0; i < item.about[7].timeline.length; i++) {
                timeline.innerHTML += `
                ${i == 0 ? '<div class="timeline__section work">' : 
                    i == 1 ? '<div class="timeline__section work">' : 
                    i == 4 ? '<div class="timeline__section work">' : 
                    i == 10 ? '<div class="timeline__section work">' : 
                    i == 11 ? '<div class="timeline__section work">' : '<div class="timeline__section study">'}
                        <div class="timeline__left">
                            <div class="timeline__date">
                                <div class="timeline__title">${item.about[7].timeline[i].title}</div>
                                <div class="timeline__dates">${item.about[7].timeline[i].year}</div>
                            </div>
                        </div>
                        <div class="timeline__tracker">
                            <div class="tracker"></div>
                        </div>
                        <div class="timeline__middle">
                            <div class="timeline__bullet"></div>
                        </div>
                        <div class="timeline__right">
                        ${i == 0 ? '<div class="work">' : 
                            i == 1 ? '<div class="work">' : 
                            i == 4 ? '<div class="work">' : 
                            i == 10 ? '<div class="work">' : 
                            i == 11 ? '<div class="work">' : '<div class="study">'}
                                <div class="timeline__content">
                                    ${item.about[7].timeline[i].description}
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            }
        }
    }
}
function sendEmail(ptitulo, pEmail, pNome, pWhatsapp, pMessage, pSubmit) {
    window.formbutton=window.formbutton||function(){(formbutton.q=formbutton.q||[]).push(arguments)};    
    formbutton("create", {
      action: "https://formspree.io/f/mldjnwzd",
      title: ptitulo,
      fields: [
        { 
          type: "email", 
          label: "Email:", 
          name: "email",
          required: true,
          placeholder: pEmail
        },
        { 
          type: "text", 
          label: "Name:", 
          name: "name",
          required: true,
          placeholder: pNome
        },
        { 
          type: "text", 
          label: "Whatsapp:", 
          name: "whatsapp",
          required: false,
          placeholder: pWhatsapp
        },
        {
          type: "textarea",
          label: "Message:",
          name: "message",
          required: true,
          placeholder: pMessage
        },
        
        { type: "submit", value: pSubmit}      
      ],
      styles: {
        title: {
          backgroundColor: "gray"
        },
        button: {
          backgroundColor: "rgb(158 158 158 / 0%)",
          backgroundPosition: "center",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundImage: "url(./assets/gmail.svg)",
          bottom: "2.5%",
          right: "0",
          zIndex: "10",
          borderRadius: "0",
          boxShadow: "none",
          filter: "drop-shadow(dimgray 0px 0px 6px)",
          display: "none"
        },
        input: {
          backgroundColor: "#d9edf7",
          height: "30px",
          borderRadius: "7px",
          padding: "5px 10px",
          fontSize: "16px"
        },
        path: {
          display: "none"
        }
      }
    });
}

const main = document.getElementById("main");

if (main) {
    window.addEventListener("scroll", () => { 
    const elemento = document.getElementById("formbutton-button");
    const limite = 100; 
  
    const alturaTotal = document.documentElement.scrollHeight;
    const alturaVisivel = window.innerHeight;
    const posicaoScroll = window.scrollY;
  
    if (alturaTotal - (posicaoScroll + alturaVisivel) <= limite) {
      elemento.style.display = "block"; 
    } else {
      elemento.style.display = "none"; 
    }
  });
}