export class Letter {
  constructor(letter) {
    this.letter = letter;

  }

  count() {
    let input = $('.input').val();

    let splitinput = input.split();
    abc = ["a", "b", "c", "d"];
    count = [];

    for (let i = 0; i < splitinput.length; i++) {
      for(let j = 0; j < abc.length; j++){
        if abc[j].includes(splitinput[i])
      } count ++
    } else {
      return 0;
    }

    }

}
