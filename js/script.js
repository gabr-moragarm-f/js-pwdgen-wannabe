var nome = prompt('Benvenuto. Nome?');
var cognome = prompt(nome + '....... Cognome?')
var colore = prompt('Signor ' + cognome + ' qual\'è il suo colore preferito?')
var anno = new Date().getFullYear() - 2000
document.getElementsByTagName('h1')[0].append(nome + cognome + anno)
