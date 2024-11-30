function heart () {
    basic.showLeds(`
        . # . # .
        # . # . #
        # . . . #
        . # . # .
        . . # . .
        `)
    basic.showLeds(`
        . # . # .
        # # # # #
        # . . . #
        . # . # .
        . . # . .
        `)
    basic.showLeds(`
        . # . # .
        # # # # #
        # # . # #
        . # # # .
        . . # . .
        `)
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        . . # . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
}
function displayServo () {
    if (Ultrasonic_Sensor2.getDistance(Ultrasonic_Sensor.DistUnits.cm) > 30) {
        if (played == true) {
            servos.P00.setAngle(90)
            played = false
            music.playMelody("C F A - - - - - ", 140)
        }
    } else {
        if (played == false && Ultrasonic_Sensor2.getDistance(Ultrasonic_Sensor.DistUnits.cm) <= tempCheck) {
            servos.P00.setAngle(0)
            played = true
            music.playMelody("A F C - - - - - ", 148)
        }
    }
}
let played = false
let tempCheck = 0
let Ultrasonic_Sensor2: Ultrasonic_Sensor.Ultrasonic_Sensor = null
Ultrasonic_Sensor2 = Ultrasonic_Sensor.createUltrasonic_Sensor(DigitalPin.P1, DigitalPin.P2)
tempCheck = 15
basic.forever(function () {
    serial.writeValue("Distance", Ultrasonic_Sensor2.getDistance(Ultrasonic_Sensor.DistUnits.cm))
    heart()
    displayServo()
})
