var amico = prompt('Le porte di Durin, Signore di Moria. Dite amici ed entrate');
if(amico === 'amici') {
  document.getElementById('wrapper').innerHTML = '<img src="img/Moria.jpg">';
}

if(amico === 'amico') {
  document.getElementById('wrapper').innerHTML = '<img src="img/Moria.jpg">';
}

if(amico === 'mellon') {
  document.getElementById('wrapper').innerHTML = '<img src="img/Moria.jpg">';
}

if(amico !== 'amici') {
  alert('NON SEI AMICO DI NOSTRO SIRE DURIN!');
}

if(amico !== 'amico') {
  alert('NON SEI AMICO DI NOSTRO SIRE DURIN!');
}

if(amico !== 'mellon') {
  alert('NON SEI AMICO DI NOSTRO SIRE DURIN!');
}
