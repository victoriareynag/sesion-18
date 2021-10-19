let Numero = 0
basic.forever(function () {
    Numero = randint(5, 10)
    basic.showNumber(Numero)
    for (let Contar = 0; Contar <= Numero; Contar++) {
        basic.showNumber(Contar)
        for (let index = 0; index < Contar; index++) {
            music.playTone(988, music.beat(BeatFraction.Sixteenth))
            basic.pause(100)
        }
    }
    basic.showString("A buscar!")
    music.playMelody("- - - - - - - - ", 120)
})
