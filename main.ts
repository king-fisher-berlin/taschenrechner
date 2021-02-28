input.onButtonPressed(Button.A, function () {
    A += 1
    basic.showNumber(A)
})
input.onGesture(Gesture.Shake, function () {
    if (Operator == 1) {
        Ergebnis = A + B
    } else if (Operator == 2) {
        Ergebnis = A - B
    } else if (Operator == 3) {
        Ergebnis = A * B
    } else if (Operator == 0) {
        Ergebnis = 0
    } else {
        Ergebnis = A / B
    }
    basic.showNumber(Ergebnis)
})
input.onButtonPressed(Button.AB, function () {
    if (Operator == 4) {
        Operator = 0
    }
    Operator += 1
    if (Operator == 1) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . . # . .
            . . # . .
            `)
    } else if (Operator == 2) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
    } else if (Operator == 3) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    } else {
        basic.showLeds(`
            . . # . .
            . . . . .
            # # # # #
            . . . . .
            . . # . .
            `)
    }
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
