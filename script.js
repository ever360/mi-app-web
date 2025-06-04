const formulario = document.getElementById('formulario');
const listaClientes = document.getElementById('lista-clientes');

let clientes = JSON.parse(localStorage.getItem('clientes')) || [];

function guardarClientes() {
  localStorage.setItem('clientes', JSON.stringify(clientes));
}

function mostrarClientes() {
  listaClientes.innerHTML = '';
  clientes.forEach((cliente, index) => {
    const li = document.createElement('li');
    li.textContent = `${cliente.nombre} - ${cliente.correo} - ${cliente.telefono}`;
    listaClientes.appendChild(li);
  });
}

formulario.addEventListener('submit', (e) => {
  e.preventDefault();
  const nombre = document.getElementById('nombre').value;
  const correo = document.getElementById('correo').value;
  const telefono = document.getElementById('telefono').value;

  clientes.push({ nombre, correo, telefono });
  guardarClientes();
  mostrarClientes();

  formulario.reset();
});

mostrarClientes();
