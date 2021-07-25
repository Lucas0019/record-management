function validarUsuario(
  idNomeUsuario,
  idEmailUsuario,
  idTelefoneUsuario,
  idEnderecoUsuario,
  idDataNascimentoUsuario,
  idSexoUsuario,
) {
  let nome = document.getElementById(idNomeUsuario).value;
  let email = document.getElementById(idEmailUsuario).value;
  let telefone = document.getElementById(idTelefoneUsuario).value;
  let endereco = document.getElementById(idEnderecoUsuario).value;
  let dataNascimento = document.getElementById(idDataNascimentoUsuario).value;
  let sexo = document.getElementById(idSexoUsuario).value;

  // campo não pode esta em branco 
  if (nome == "")
    alert("Nome do produto não pode estar em branco. Favor preenchê-lo!");
  else if (email == "")
    alert("Email do produto não pode estar em branco. Favor preenchê-lo!");
  else if (telefone == "")
    alert("Telefone do produto não pode estar em branco. Favor preenchê-lo!");
  else if (endereco == "")
    alert("Endereço do produto não pode estar em branco. Favor preenchê-lo!");
  else if (dataNascimento == "")
    alert("Data de nascimento do produto não pode estar em branco. Favor preenchê-lo!");
  else if (sexo == "")
    alert("Sexo do produto não pode estar em branco. Favor preenchê-lo!");
  else cadastrarUsuario(nome, email, parseInt(telefone), endereco, parseInt(dataNascimento), sexo);
}

function cadastrarUsuario(nome, email, telefone, endereco, dataNascimento, sexo) {
  let novoUsuario = { 
    nome: nome, 
    email: email,
    telefone: telefone,
    endereco: endereco,
    dataNascimento: dataNascimento,
    sexo: sexo
  };


  if (typeof Storage !== "undefined") {
    let usuarios = localStorage.getItem("usuarios");
    if (usuarios == null) usuarios = [];

    // Nenhum produto ainda foi cadastrado
    else usuarios = JSON.parse(usuarios);
    usuarios.push(novoUsuario); // Adiciona um novo produto
    localStorage.setItem("Usuarios", JSON.stringify(usuarios));



    alert('Usuário cadastrado com sucesso');
    atualizarTotalUsuarios("totalUsuario");
    
    location.reload();
  } 
};

function atualizarTotalUsuarios(idCampo) {
  localStorage.setItem(
    "totalUsuario",
    ++document.getElementById(idCampo).innerHTML
  );
}

function carregarTotalUsuarios(idCampo) {
  if (typeof Storage !== "undefined") {
    let totalUsuario = localStorage.getItem("totalUsuario");
    if (totalUsuario == null) totalUsuario = 0;
    document.getElementById(idCampo).innerHTML = totalUsuario;
  }
}

function listarUsuarios() {
  if (typeof Storage !== "undefined") {
    let usuarios = localStorage.getItem("usuarios");
    console.log(usuarios);
    document.write("<h1>Usuarios:</h1>");
    if (usuarios == null)
      document.write("<h3>Ainda não há nenhum ususario cadastrado</h3>");
    else {
      usuarios = JSON.parse(usuarios);
      usuarios.forEach((usuario) => {
        document.write("<ul>");
        document.write("<li>Nome Completo: " + usuario.nome + "</li>");
        document.write("<li>Código do produto: " + usuario.email + "</li>");
        document.write("<li>Telefone: " + usuario.telefone + "</li>");
        document.write("<li>Endereço: " + usuario.endereco + "</li>");
        document.write("<li>Data de Nascimento: " + usuario.dataNascimento + "</li>");
        document.write("<li>Sexo: " + usuario.sexo + "</li>");
        document.write("</ul>");
      });
    }
  }
}
