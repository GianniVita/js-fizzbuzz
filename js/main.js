/*
Esercizio di oggi: **FizzBuzz**
nome repo: js-fizzbuzz

**Consegna:**
Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

**Prima di partire a scrivere codice poniamoci qualche domanda:**
Come faccio a sapere se un numero è divisibile per?
Abbiamo visto qualcosa di particolare che possiamo usare?

**Consigli del giorno:**
1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
*/

/*
Ragioniamo sull'esercizio:
- Dobbiamo stampare i numeri da 1 a 100
    - ci serve un ciclo che abbiamo usato oggi (for)
che parte da 1 fino e uguale a 100 con incremento ++

- Poi dobbiamo capire quando un numero è multiplo di 3 o di 5
    - ci serve il modulo operatore % che ci dice se un numero è divisibile pienamente per i numeri che sappiamo dalla traccia cioè 3 e 5.
    - Quindi SE l'operazione con i % 3 == 0 il numero sarà un multiplo di 3
        - E SE l'ho è dovrà stampare "Fizz"
    - Invece SE l'operazione con i % 5 == 0 il numero sarà un multiplo di 5
        - E anche qui SE l'ho è dovrà stampare "Buzz"

- Poi dobbiamo  capire se ci sono dei numeri che siano multipli di entrambi(3 e 5)
    - E se ci sono dobbiamo stampare sempre con console.log() la parola intera FizzBuzz
*/

// Dichiariamo i numeri
for (let i = 1; i <= 100; i++) {
    // Poniamo la condizione per multiplo di 3   
    if (i % 3 === 0) {
        console.log(`Fizz`);

    }
    // Poniamo la condizione per multiplo di 5
    else if (i % 5 === 0) {
        console.log(`Buzz`);
    }
    //Poniamo la condizione per divisibilità sia di 3 che 5
    else if(i % 3 === 0 && i % 5 === 0){
        console.log(`FizzBuzz`);

    }
    // Se non divisibile per i numeri indicati stampa il numero
    else {
        console.log(i);
        
    }


}


