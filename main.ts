let 온도 = 0
let 온도세기값 = 0
function 뜨거움 () {
    basic.showIcon(IconNames.No)
    basic.pause(100)
    basic.showIcon(IconNames.Sword)
    basic.pause(100)
    basic.clearScreen()
}
function 온도보기 () {
    if (input.buttonIsPressed(Button.A)) {
        basic.clearScreen()
        basic.showNumber(input.temperature())
    }
}
function 물온도측정 () {
    온도 = input.temperature()
}
function 미지근함 () {
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        . . # . .
        . . . . .
        `)
    basic.pause(200)
    basic.clearScreen()
}
function 차가움 () {
    basic.showLeds(`
        . . # . .
        # # # # #
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.pause(200)
    basic.clearScreen()
}
function 따뜻함 () {
    basic.showIcon(IconNames.Happy)
    basic.pause(200)
    basic.clearScreen()
}
function 온도_분류 () {
    물온도측정()
    if (32 <= 온도) {
        온도세기값 = 3
    }
    if (31 == 온도) {
        온도세기값 = 2
    }
    if (30 == 온도) {
        온도세기값 = 1
    }
    if (온도 <= 29) {
        온도세기값 = 0
    }
}
function 이미지출력 () {
    if (온도세기값 == 3) {
        뜨거움()
    }
    if (온도세기값 == 2) {
        따뜻함()
    }
    if (온도세기값 == 1) {
        미지근함()
    }
    if (온도세기값 == 0) {
        차가움()
    }
}
basic.forever(function () {
    온도보기()
})
basic.forever(function () {
    온도_분류()
    이미지출력()
})
