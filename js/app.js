/* Lista Cognomi
Chiedere all’utente il cognome
inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’
stampa la lista ordinata alfabeticamente
scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova*/

// array con elementi e dichiarazione
var lastName;
var listLastName=['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi'];

// controllo valore passato con il prompt
do{
    lastName=prompt('Inserisci il tuo cognome');
}while(!isNaN(lastName));

// aggiunta valore nell'array e controllo sul valore passato
listLastName.push(lastName);

// stampa array con ordine alfabetico e stampa la chiave del valore aggiunto dall'utente
console.log(listLastName.sort());
console.log(listLastName.indexOf(lastName));


