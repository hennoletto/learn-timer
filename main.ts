let eunning = 0
let minutes = 0
input.onButtonPressed(Button.A, function () {
    if (eunning == 1) {
        eunning = 0
        basic.showIcon(IconNames.Ghost)
    } else {
        eunning = 1
        basic.showNumber(minutes)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Angry)
    basic.pause(5000)
    basic.clearScreen()
    music.stopAllSounds()
})
input.onGesture(Gesture.Shake, function () {
    minutes = 0
    eunning = 0
    basic.showNumber(minutes)
})
basic.forever(function () {
    if (eunning == 1) {
        basic.pause(60000)
        minutes += 1
        basic.showNumber(minutes)
    }
    if (minutes == 1800000) {
        eunning = 0
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Ringtone), music.PlaybackMode.UntilDone)
    }
})
