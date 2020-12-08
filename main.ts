for (let i = 1; i < 7; i++) {
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(800)
    pins.digitalWritePin(DigitalPin.P0, 0)
    basic.pause(800)
}
