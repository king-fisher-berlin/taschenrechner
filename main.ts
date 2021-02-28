input.onButtonPressed(Button.A, function () {
    A += 1
    basic.showNumber(A)
})
input.onGesture(Gesture.Shake, function () {
    A = 0
    B = 0
    basic.showNumber(A)
})
input.onButtonPressed(Button.AB, function () {
    Operator += 1
    if (Operator == 1) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . . # . .
            . . # . .
            `)
        Ergebnis = A + B
    } else if (Operator == 2) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
        Ergebnis = A - B
    } else if (Operator == 3) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        Ergebnis = A * B
    } else {
        basic.showLeds(`
            . . # . .
            . . . . .
            # # # # #
            . . . . .
            . . # . .
            `)
        Ergebnis = A / B
        Operator = 0
    }
    basic.showNumber(Ergebnis)
})
input.onButtonPressed(Button.B, function () {
    B += 1
    basic.showNumber(B)
})
let Ergebnis = 0
let Operator = 0
let B = 0
let A = 0
A = 0
B = 0
Operator = 0
