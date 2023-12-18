Ciao a tutti, ecco la consegna del di Boolzapp. Mi raccomando: proseguite rispettando l'ordine delle milestone, non andate alla successiva se non è terminata quella attuale. Quando avete terminato una milestone il messaggio di commit deve essere del tipo "FINE MILESTONE "N° MILESTONE". Dovete fare almeno 6 push: 1 per milestone obbligatoria più uno di inizializzazione della repo ed 1 di creazione dello scaffolding. Ovviamente se ne fate di più è meglio. Come detto, è consigliabile arrivare a fine giornata con la milestone 1 terminata, ma se riuscite ad andare avanti con quelle successive tanto di guadagnato.



Milestone 1
Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse
Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto


Milestone 2
Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione
Click sul contatto mostra la conversazione del contatto cliccato


Milestone 3
Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando “enter” il testo viene aggiunto al thread sopra, come messaggio verde
Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.


Milestone 4
Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)


Milestone 5 - opzionale
Cancella messaggio: cliccando sul messaggio appare un menu a tendina che permette di cancellare il messaggio selezionato
Visualizzazione ora e ultimo messaggio inviato/ricevuto nella lista dei contatti 


BONUS:
1√ - Invece che ricevere sempre ok come risposta, ricevi una risposta casuale tra altre;
2√ - Cambiare l'icona di fianco all'input: da microfono farla diventare una freccia cliccabile che invia il messaggio
3√ - Sotto il nome del contatto, in alto, far apparire 'sta scrivendo...' quando viene generata la risposta
4 - Implementare le emoji
5(√) - Cliccando sui tre pallini, fare una dropdown dove c'è un pulsante che ti permette di cancellare tutti i messaggi e/o un pulsante che ti permette di cancellare il contatto
6√ - Aggiungere un pulsante che ti permette di aggiungere un contatto alla lista
7 - Quando invii i messaggi "lo schermo" rimane fisso. Far si che ci sia lo scroll automatico all'ultimo messaggio ricevuto (direi anche quando si clicca su una conversazione). //window.top e scrolltop(che si usa su textcontent)
8 - Visualizzare un messaggio di benvenuto quando si atterra la prima volta nell'app e che invita a selezionare un contatto
9 - Rendere l'app responsive
10 - Aggiungere un'icona per cambiare modalità da light a dark e viceversa


substr() per limitare la visualizzazione del messaggio e aggiunger i puntini di sospensione