---
layout: work_post
title: Play Octagon
dates: Fall 2015
position: 4
image: https://raw.githubusercontent.com/echiou/echiou.github.io-images/master/Work/IDD/Play-Octagon-1.jpg
category: hardware
context: coursework
---
![][octagon-1]

Ethan Chiou & [Diane Wang](http://diane.io)

<a href="https://github.com/dianecw/idd-play-octagon">View on Github <span class="fa fa-long-arrow-right"></span></a>

Assignment for Interactive Device Design, a graduate-level Computer Science course at UC Berkeley that teaches concepts and skills related to designing, prototyping, and fabricating interactive devices.

**Challenge:** Create a game controller that interfaces with an existing computer game.

### Table of Contents

[Octagon](#octagon)
/
[Design Approach](#design-approach)
/
[Controller Design](#controller-design)
/
[Software](#software)
/
[Video](#video)
/
[Final Thoughts](#final-thoughts)

### Octagon

<div class="double-photo">
  <img class="double-left" src="https://raw.githubusercontent.com/echiou/echiou.github.io-images/master/Work/IDD/Play-Octagon-4.png"><img class="double-right" src="https://raw.githubusercontent.com/echiou/echiou.github.io-images/master/Work/IDD/Play-Octagon-5.png">
</div>

For this assignment, my partner and I decided to make a controller for [Octagon](http://www.octagongame.com), one of the most popular "Free" games in the Mac App Store, and for good reason - it features a simple control scheme, simplistic yet stunning visuals, and a steep skill curve (easy to pick up, hard to perfect). Players take the place of an octagonal avatar, traversing their way through an angular obstacle course.

### Design Approach

![][octagon-3]

From there, we went through several iterations of relevant control schemes. We started with an octagonal controller that a player could hold and rotate (to move left and right) or flick upwards (to jump), but this didn't seem to map well with the game's mentality, where it almost seems like the environment changes direction and orientation, rather than the character. Because of this, we decided to switch gears and instead created a controller which would lay flat on the table, that the player could tilt back and forth to turn the right and left, and lift his hands off from to jump. The panels on which the player would place his hands are lightly angled (not at 45 degree angles, for ergonomic purposes), emulating the course’s left and right turns.

### Controller Design

![][octagon-2]

To construct the controller, we used laser cut wood and acrylic, making panels to connect to a pair of rails, which would provide the light angling. A small open-face enclosure is located on the bottom, to which we glued standoffs to attach the FRDM-LR25Z, as well as attached a capacitive touch sensor breakout. This capacitive touch sensor detects when users place their hands on the left and right panels, as well as when they press the switch to begin the game. We sense orientation of the controller using the onboard accelerometer, detecting left and right tilts to translate them to left and right inputs.

### Software

Our controller uses both discrete and continuous inputs for gameplay. We used the USBKeyboard library for mbed to emulate keyboard input, since this is a closed-source game. The capacitive touch sensor maps directly to the discrete “flip” and “start” commands from the different areas of the controller.

On the other hand, the timing and orientation scheme for the on-board accelerometer was more complex. Although the game itself only uses right and left arrows for control, we also had to implement controls for when the user presses multiple buttons in a row, or when they hold down the buttons for faster movement. We took advantage of the continuous sensor input and created a continuous control timing and orientation scheme for when the player wants to move more than one step at a time, implementing a delay between each orientation detection loop, and decreasing the delay if the user stayed in the same orientation. This makes it much easier for the user to, for example, move 4 steps at a time.

### Video

<div class="embed-video">
  <iframe src="https://www.youtube-nocookie.com/embed/tYkRtAXRfbg?rel=0&amp;autoplay=0&amp;showinfo=0&amp;vq=hd720" frameborder="0" allowfullscreen></iframe>
</div>
<br>

### Final Thoughts

#### Playtesting notes

- **Software must be finely tuned to be used with hardware.** Three milliseconds makes a huge difference in playability, especially in gaming.
- **Physical controllers make games more challenging.** Keyboard presses and interactions with computers are much faster because of the familiar mapping and speed of repetitive pressing.
- **People treat game controllers very poorly.** This is probably due to game controllers historically being robust. People slammed our controller against the table, which scared us.
- **People don’t like to wait.** Even with clear & simple written instructions, people want to start playing games without reading or listening to directions. This means that ideally, the controller must be so intuitive that it immediately makes sense to everyone.
- **Physical usability is hard to deduce** The mapping of a controller's design to the game environment differs a lot based on the user that is playing. There really is no way to deduce usability other than live user testing.
- **Calibration is difficult** Because the game was so fast-paced, we made the tilting relatively sensitive. People had a difficult time dealing with the sensitivity, even though it was required for playability.

#### For the future

- Add feet or padding the the bottom of the device to reduce impact of abrasive actions
- Implement some sort of system where onboarding guidance is required before play
- Test a few more angles/shapes for a more intuitive mapping

[octagon-1]: https://raw.githubusercontent.com/echiou/echiou.github.io-images/master/Work/IDD/Play-Octagon-1.jpg
[octagon-2]: https://raw.githubusercontent.com/echiou/echiou.github.io-images/master/Work/IDD/Play-Octagon-2.jpg
[octagon-3]: https://raw.githubusercontent.com/echiou/echiou.github.io-images/master/Work/IDD/Play-Octagon-3.jpg
