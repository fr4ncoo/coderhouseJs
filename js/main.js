const formulario = document.getElementById('formulario');
const nombreInput = document.getElementById('nombre');
const emailInput = document.getElementById('email');
const telefonoInput = document.getElementById('telefono');
const guardarButton = document.getElementById('guardar');
const listaDatos = document.getElementById('lista-datos');

function actualizarListaDatos() {
  listaDatos.innerHTML = '';

  for (let i = 0; i < datosGuardados.length; i++) {
    const datos = datosGuardados[i];
    const li = document.createElement('li');
    li.innerHTML = `${datos.nombre}, ${datos.email}, ${datos.telefono}`;
    listaDatos.appendChild(li);
  }
}

let datosGuardados = JSON.parse(localStorage.getItem('datos')) || [];


actualizarListaDatos();


formulario.addEventListener('submit', function(evento) {
  evento.preventDefault();
  

  const nombre = nombreInput.value;
  const email = emailInput.value;
  const telefono = telefonoInput.value;

  const datos = {
    nombre: nombre,
    email: email,
    telefono: telefono
  };

  datosGuardados.push(datos);


  localStorage.setItem('datos', JSON.stringify(datosGuardados));

  actualizarListaDatos();

  nombreInput.value = '';
  emailInput.value = '';
  telefonoInput.value = '';
});




//modOsc

const modeToggle = document.getElementById('modonocturno');
const body = document.querySelector('body');
const isDarkMode = localStorage.getItem('isDarkMode');

if (isDarkMode === 'true') {
  body.classList.add('dark');
  modeToggle.innerText = 'Tema de la web CLARO';
} else {
  body.classList.remove('dark');
  modeToggle.innerText = 'Tema de la web OSCURO';
}

modeToggle.addEventListener('click', function() {
  body.classList.toggle('dark');
  
  if (body.classList.contains('dark')) {
    modeToggle.innerText = 'Tema de la web CLARO (storage)';
    localStorage.setItem('isDarkMode', 'true');
  } else {
    modeToggle.innerText = 'Tema de la web OSCURO (storage)';
    localStorage.removeItem('isDarkMode');
  }
});
