
for i in range(1,7):
    pins.digital_write_pin(DigitalPin.P0, 1)
    basic.pause(800)
    pins.digital_write_pin(DigitalPin.P0, 0)
    basic.pause(800)