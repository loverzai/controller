pins.setPull(DigitalPin.P13, PinPullMode.PullUp)
pins.setPull(DigitalPin.P14, PinPullMode.PullUp)
pins.setPull(DigitalPin.P15, PinPullMode.PullUp)
pins.setPull(DigitalPin.P16, PinPullMode.PullUp)
led.setBrightness(12)
pins.setPull(DigitalPin.P1, PinPullMode.PullUp)
pins.setPull(DigitalPin.P2, PinPullMode.PullUp)
pins.setPull(DigitalPin.P8, PinPullMode.PullUp)
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P1) < 340 && pins.analogReadPin(AnalogPin.P2) > 680) {
        basic.showArrow(ArrowNames.NorthWest)
    } else if (pins.analogReadPin(AnalogPin.P1) < 340 && pins.analogReadPin(AnalogPin.P2) < 340) {
        basic.showArrow(ArrowNames.NorthEast)
    } else if (pins.analogReadPin(AnalogPin.P1) < 340) {
        basic.showArrow(ArrowNames.North)
    }
})
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P14) == 0) {
        basic.showArrow(ArrowNames.North)
    } else if (pins.digitalReadPin(DigitalPin.P15) == 0) {
        basic.showArrow(ArrowNames.South)
    } else if (pins.digitalReadPin(DigitalPin.P13) == 0) {
        basic.showArrow(ArrowNames.West)
    } else if (pins.digitalReadPin(DigitalPin.P16) == 0) {
        basic.showArrow(ArrowNames.East)
    }
})
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P1) > 680 && pins.analogReadPin(AnalogPin.P2) > 680) {
        basic.showArrow(ArrowNames.SouthWest)
    } else if (pins.analogReadPin(AnalogPin.P1) > 680 && pins.analogReadPin(AnalogPin.P2) < 340) {
        basic.showArrow(ArrowNames.SouthEast)
    } else if (pins.analogReadPin(AnalogPin.P1) > 680) {
        basic.showArrow(ArrowNames.South)
    }
})
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P8) == 0) {
        basic.clearScreen()
    }
})
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P1) > 340 && pins.analogReadPin(AnalogPin.P1) < 680) {
        if (pins.analogReadPin(AnalogPin.P2) > 680) {
            basic.showArrow(ArrowNames.West)
        } else if (pins.analogReadPin(AnalogPin.P2) < 340) {
            basic.showArrow(ArrowNames.East)
        }
    }
})
