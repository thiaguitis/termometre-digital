input.onButtonPressed(Button.A, function () {
    basic.showString("" + (input.temperature()))
    basic.showString("celsius")
    serial.writeLine("" + (input.temperature()))
    serial.writeLine("celsius")
})
input.onButtonPressed(Button.AB, function () {
    if (input.temperature() > 25) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
        basic.pause(500)
        basic.showString("" + (input.temperature()))
        serial.writeLine("" + (input.temperature()))
    } else if (input.temperature() < 25) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
        basic.pause(500)
        basic.showString("" + (input.temperature()))
        serial.writeLine("" + (input.temperature()))
    }
})
input.onButtonPressed(Button.B, function () {
    if (input.temperature() < 25) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
        basic.pause(500)
        basic.showString("" + (input.temperature()))
        serial.writeLine("" + (input.temperature()))
    } else if (input.temperature() > 25) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
        basic.pause(500)
        basic.showString("" + (input.temperature()))
        serial.writeLine("" + (input.temperature()))
    }
})
