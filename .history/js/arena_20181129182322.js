class Arena {

    constructor() {
        this.rozmiar_x = cw / piksel;
        this.rozmiar_y = ch / piksel;
        this.tablica = new Array(this.rozmiar_y);
        for (let i = 0; i < this.rozmiar_y; i++) {
            this.tablica[i] = new Array(this.rozmiar_x); // tak się tworzy tablice dwu wymiarowa
        }

        for (let i = 0; i < this.rozmiar_y; i++) {  //wypełniamy ją zerami które reprezentują że nie ma w tym miejscu narazie nic
            for (let j = 0; j < this.rozmiar_x; j++) {
                this.tablica[i][j] = 0;
    
            }
        }
    }


    odswiez(klocek) { // Ta metoda ma zmodyfikować tablice po kolizji
        for (let i = 0; i < klocek.dlugosc; i++) {
            for (let j = 0; j < klocek.szerokosc; j++) {
                if (this.tablica[klocek.y + j][klocek.x + i] == 0) {
                    this.tablica[klocek.y + j][klocek.x + i] = klocek.tablica[j][i];
                }
            }
        }
    }


    sprawdzenie() {
        //  TO DO: sprawdzenie czy jest cała linia zapelniona przez klocki w tablicy jeśli tak to update scoru i usunięcie tej linii 
   // buuuuuuu gubię się w tych zmiennych :c nie działą :C 
        for(r = 0; r < this.rozmiar_x; r++){
            let isRowFull = true;
            for( j = 0; j < this.rozmiar_y; j++){
                isRowFull = isRowFull && (tablica[r][j] != []);
            }
            if(isRowFull){
               
                for( y = r; y > 1; y--){
                    for( j = 0; j < this.rozmiar_y; j++){
                        tablica[y][j] = tablica[y-1][j];
                    }
                }
               
                for( j = 0; j < this.rozmiar_y; j++){
                    thtablica[0][j] = [];
                }
                
                score += 10;
            }
        }
            
       scoreElement.innerHTML = score;
}
    rysuj() { //To się przyda jak już coś będzie w tablicy żeby narysowąć klocki które już istnieją
        for (let i = 0; i < arena.rozmiar_y; i++) {
            for (let j = 0; j < arena.rozmiar_x; j++) {
                switch (arena.tablica[i][j]) {
                    case 0:
                        break;
                    default:
                        c.fillStyle = kolorki[arena.tablica[i][j]];
                        c.fillRect(j, i, 1, 1);
                        break;
                }
            }
        }
    }


    kolizja2(klocek) {
        //TO DO: sprawdzenie czy cos jest w indeksie w którym jest aktualnie klocek
        for (let y = 0; y < klocek.szerokosc; y++) {
            for (let x = 0; x < klocek.dlugosc; x++) {
                if (klocek.tablica[y][x] !== 0 && arena.tablica[y + klocek.y][x + klocek.x] !== 0 && arena.tablica[y + klocek.y][x + klocek.x] !== undefined) {
                    if ((y + klocek.y) == 0 || (y + klocek.y) == 1) {
                        return false;
                    }
                    klocek.y--;
                    return true;
                }
            }
        }
    }

    kolizjaPrawo(klocek){ // kolizja z prawymi bokami klockow
        for(let y=0; y<klocek.szerokosc; y++){
            for (let x=0; x<klocek.dlugosc; x++){
                if(klocek.tablica[y][x]!=0 && arena.tablica[klocek.y+y][klocek.x+x-1]!=0){
                     return false;
                }
            }   
        }
        return true;
    }


    kolizjaLewo(klocek){ // kolizja z lewymi bokami klockow

        for(let y=0; y<klocek.szerokosc; y++){
            for (let x=0; x<klocek.dlugosc; x++){
                if(klocek.tablica[y][x]!=0 && arena.tablica[klocek.y+y][klocek.x+x+1]!=0){
                    return false
                }
            }
        }
        return true;
    }    
}