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

// controllo sul cognome passato
lastName = lastName.charAt(0).toUpperCase()+lastName.slice(1).toLowerCase();

// aggiunta valore nell'array e controllo sul valore passato
listLastName.push(lastName);

// stampa array con ordine alfabetico e stampa la chiave del valore aggiunto dall'utente
console.log(listLastName.sort());
var posizione = listLastName.indexOf(lastName);
console.log('La posizione umana è ', posizione + 1);


