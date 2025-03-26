let divUsuarios = document.getElementById('usuarios');
let divMarca = document.getElementById('marca');
let divModelo = document.getElementById('modelo');
let divAno = document.getElementById('ano');

fetch("./assets/json/dados.json")
.then(response => response.json())
.then((dados) => {
    dados.usuarios.map(usuario => {
        divUsuarios.innerHTML += `
            <h4>${usuario.nome}</h4>
            <li>${usuario.id} : ${usuario.email} - ${usuario.senha}</li>
        `;
    })
})


fetch("./assets/json/dados.json")
    .then(response => response.json())
    .then((dados) => {
        dados.carros[0].marca.map(carro => {
            divMarca.innerHTML += `
                <li><h4>${carro.nome}</h3></li>
            `;
        })
    })

    fetch("./assets/json/dados.json")
    .then(response => response.json())
    .then((dados) => {
        dados.carros[0].modelo.map(carro => {
            divModelo.innerHTML += `
                <li><h4>${carro.nome}</h4></li>
            `;
        })
    })

    fetch("./assets/json/dados.json")
    .then(response => response.json())
    .then((dados) => {
        dados.carros[0].ano.map(carro => {
            divAno.innerHTML += `
                <li><h4>${carro.nome}</h4></li>
            `;
        })
    })
/*fetch('./assets/json/dados.json')
    .then(response => response.json())
    .then(data => {
        data.usuarios.forEach(usuario => {
            divUsuarios.innerHTML += `
                <div class="usuario">
                    <h3>${usuario.nome}</h3>
                    <p>${usuario.email}</p>
                    <p>${usuario.senha}</p>
                </div>
            `;
        });
    })
    .catch(error => console.error(error));*/