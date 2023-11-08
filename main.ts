/* Copyright (c) 2023 MTHS All rights reserved
 *
 * Created by: Olmes
 * Created on: Nov 2023
 * This program moves a servo
*/

// variables
const servoNumber1 = robotbit.Servos.S1

// setup
basic.showIcon(IconNames.Silly)

// moves the servo to 0° on Button A
input.onButtonPressed(Button.A, function () {
  robotbit.Servo(servoNumber1, 0)
  basic.clearScreen()
  basic.showString('0')
  basic.showIcon(IconNames.SmallSquare)
  basic.clearScreen()
  basic.showIcon(IconNames.Duck)
})

// moves the servo to 180° on Button B
input.onButtonPressed(Button.B, function () {
  robotbit.Servo(servoNumber1, 180)
  basic.clearScreen()
  basic.showString('180')
  basic.showIcon(IconNames.SmallSquare)
  basic.clearScreen()
  basic.showIcon(IconNames.Duck)
})

// moves the servo to 90° on Buttons A & B
input.onButtonPressed(Button.AB, function () {
  robotbit.Servo(servoNumber1, 90)
  basic.clearScreen()
  basic.showString('90')
  basic.showIcon(IconNames.SmallSquare)
  basic.clearScreen()
  basic.showIcon(IconNames.Duck)
})
