class Klocek {

    losujRodzaj() {

        let losowa = Math.floor(Math.random() * 9) + 1;
        console.log(losowa);
               // // TO DO: więcej typów klocków każdy z inną cyferką

            switch (losowa) {
                   case 1:
                       {
                           this.dlugosc = 3; // wiem nazwy zmiennych sa odwrotnie niz powinno byc ale zostawmy tak jak jest
                           this.szerokosc = 2; // inne typy klockow tez musza posiadac te atrybuty, ustawione w ten sam sposob
                           return [
                               [1, 1, 1],
                               [0, 1, 0],
                           ]
                           break;
                       }

                   case 2:
                       {
                           this.dlugosc = 4;
                           this.szerokosc = 1;
                           return [
                               [1, 1, 1, 1]
                           ];
                           break;
                       }

                   case 3:
                       {
                           this.dlugosc = 3;
                       this.szerokosc = 1;
                       return [
                           [1, 1, 1]
                       ];
                       break;
                    }

                   case 4:
                       {
                           this.dlugosc = 1;
                       this.szerokosc = 1;
                       return [
                           [1]
                       ];
                       break;
                    }

                   case 5:
                      { this.dlugosc = 2;
                       this.szerokosc = 2;
                       return [
                           [1, 0],
                           [1, 1]
                       ];
                       break;
                    }

                   case 6:
                       {
                           this.dlugosc = 3;
                       this.szerokosc = 4;
                       return [
                           [1, 0, 0],
                           [1, 0, 0],
                           [1, 0, 0],
                           [1, 1, 1]
                       ];
                       break;
                    }
                    case 7: {
                        this.dlugosc = 3;
                        this.szerokosc = 3;
                        return [
                            [1, 1, 1],
                            [1, 1, 1],
                            [1, 1, 1]
                        ];
                        break;
                    }
                     case 8: {
                         this.dlugosc = 3;
                         this.szerokosc = 3;
                         return [
                             [1, 1, 0],
                             [0, 1, 0],
                             [0, 1, 1]
                         ];
                         break;
                     }
                      case 9: {
                          this.dlugosc = 3;
                          this.szerokosc = 3;
                          return [
                              [1, 0, 1],
                              [1, 0, 1],
                              [1, 1, 1]
                          ];
                          break;
                      }


               }

    }

    constructor() {
        this.tablica = this.losujRodzaj();
        this.x = (cw / (piksel * 2)) - 1;
        this.y = 0;
    }

    spadanie() {
        //to jest na opadanie klocka, trzeba dopisać ruchy na boki i szybsze spadanie po wcisnieciu strzałki w dół (można rozważyć stworzenie osobnej metody na to)
        //metoda ruch ma przyjmowac parametr ktory okresli kierunek zmiany (przyjmuje x ktory skoryguje this.x)
        this.y++;
    }
    ruch(x) {
        //to jest na opadanie klocka, trzeba dopisać ruchy na boki i szybsze spadanie po wcisnieciu strzałki w dół (można rozważyć stworzenie osobnej metody na to)
        this.x += x;
        //metoda ruch ma przyjmowac parametr ktory okresli kierunek zmiany (przyjmuje x ktory skoryguje this.x)
        // this.y++;
    }
    rysuj() {
        for (let i = 0; i < this.dlugosc; i++) {
            for (let j = 0; j < this.szerokosc; j++) {
                switch (this.tablica[j][i]) {
                    case 0:
                        break;
                    case 1:
                        c.fillStyle = 'red';
                        c.fillRect(this.x+i, this.y+j, 1,1); 
                        break;
                }
            }
        }

    }
    kolizja() {
        if (this.y > arena.rozmiar_y - this.szerokosc) {
            this.y--;
            return true;
        }
    }

    //TO DO kolizja2 która sprawdzi czy nie ma zderzenia z bokami areny

    obrot() {
        // TO DO: Obracanie tego co siedzi w this.tablica, to moze byc trudne zostawćie to sobie na deser
    }
}
