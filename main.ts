function cheakEat () {
    if (fx == px && fy == py) {
        count += 1
        while (fx == px && fy == py && (fx == gx && fy == gy) && (gx == px && gy == py && (px == gx && py == gy))) {
            fx = randint(0, 4)
            fy = randint(0, 4)
            led.plotBrightness(fx, fy, 150)
        }
    }
}
input.onGesture(Gesture.TiltLeft, function () {
    if (power == 0) {
        if (px > 0) {
            led.unplot(px, py)
            px += -1
            led.plot(px, py)
            cheakEat()
        }
    }
})
input.onGesture(Gesture.TiltRight, function () {
    if (power == 0) {
        if (px < 4) {
            led.unplot(px, py)
            px += 1
            led.plot(px, py)
            cheakEat()
        }
    }
})
input.onButtonPressed(Button.A, function () {
    power = 1
    basic.showString("" + (count))
})
function init () {
    px = 2
    py = 2
    led.plot(px, py)
    gx = 2
    gy = 2
    led.plotBrightness(gx, gy, 100)
    lifes = 5
}
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    init()
})
input.onButtonPressed(Button.B, function () {
    power = 0
    basic.clearScreen()
    led.plot(px, py)
    led.plotBrightness(fx, fy, 150)
})
input.onGesture(Gesture.LogoDown, function () {
    if (power == 0) {
        if (py > 0) {
            led.unplot(px, py)
            py += -1
            led.plot(px, py)
            cheakEat()
        }
    }
})
input.onGesture(Gesture.LogoUp, function () {
    if (power == 0) {
        if (py < 4) {
            led.unplot(px, py)
            py += 1
            led.plot(px, py)
            cheakEat()
        }
    }
})
let dy = 0
let dx = 0
let lifes = 0
let power = 0
let gy = 0
let gx = 0
let fy = 0
let fx = 0
let count = 0
let py = 0
let px = 0
px = 2
py = 2
led.plot(px, py)
count = 0
fx = randint(0, 4)
fy = randint(0, 4)
led.plotBrightness(fx, fy, 150)
init()
basic.forever(function () {
    if (power == 0) {
        if (lifes > 0) {
            dx = px - gx
            dy = py - gy
            led.unplot(gx, gy)
            if (dx == 0 && dy == 0) {
                lifes += -1
                gx = 0
                gy = 0
                led.plot(px, py)
            }
            if (Math.abs(dx) > Math.abs(dy)) {
                if (dx > 0) {
                    gx += 1
                } else {
                    gx += -1
                }
            } else {
                if (dy > 0) {
                    gy += 1
                } else {
                    gy += -1
                }
            }
            led.plotBrightness(gx, gy, 100)
            led.plotBrightness(fx, fy, 150)
            basic.pause(500)
        } else {
            basic.showString("Game Over ")
            power = 1
        }
    }
})
