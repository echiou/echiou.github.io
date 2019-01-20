---
layout: work_post
title: CapsLoc
dates: Spring 2016
position: 2
image: https://raw.githubusercontent.com/echiou/echiou.github.io-images/master/Work/CapsLoc/CapsLoc.png
category: hardware
context: research
---
![][CapsLoc]

[Rundong "Kevin" Tian](http://rutian.github.io/) & Ethan Chiou

<a href="https://github.com/echiou/caps-loc">View on Github <span class="fa fa-long-arrow-right"></span></a>

An exploration in combining input devices with rapid prototyping techniques, CapsLoc is a method of using simple parallel plate capacitors to easily create novel yet familiar slider and knob inputs. A modular design allows "feel aesthetics" to be fabricated into the input control for context-specific applications.

In short, we developed a way to leverage both poperties of capacitors and multi-material approaches for laser cutters and 3D printers to "make" specialized capacitors which can be then used as hardware input devices, which include not only a standard repetoire of sliders and knobs, but also a wide range of more creative forms of non-traditional, form-adaptive, and exotic displacement sensing.

### Table of Contents

[Design Approach](#design-approach)
/
[Accuracy Evaluation](#accuracy-evaluation)
/
[Geometry Primitives](#geometry-primitives)
/
[Implementation with 3D Printers](#implementation-with-3d-printers)
/
[Application](#application)

### Design Approach

Our approach allows us to make customized capacitors directly using digital fabrication, which we then use to sense a mobile dielectric.

#### Hardware

![][PCBs]

In order to sense the position of this dielectric, we can create arrays of parallel plate capacitors placed linearly (A), rotationally (B), or along curves, and then utilize a Freescale MPR121, a low-cost (~$2 USD), 12-channel capacitive touch sensor.

One side of our capacitor array is connected to sensing channels which will charge and discharge the capacitors, and the other is connected to ground.

#### Software

The MPR121 is connected to a microcontroller through the I2C bus. The capacitors we are sensing are first calibrated for manufacturing variations by measuring their maximum and minimum voltages as the dielectric is moved through the array.

After the calibration procedure, the voltages from each of the capacitors are read, and a voltage ratio (min:max) is calculated to measure how much of each capacitor is covered by the dielectric. For our tests, we calculate the position of a dielectric between the area of 1 and 2 capacitors, which we know can only cover at most three capacitors. From the voltage ratios calculated on each capacitor, we can then estimate the location of the dielectric. 

### Accuracy Evaluation

![][ErrorGraphs]

Our calculated values for linear displacement were measured against a digital caliper in one millimeter increments. Similarly, our calculated rotational displacement was measured against a digital angle finder in increments of five degrees (graphs above). The standard errors for our linear and rotation displacement sensors were +/- 0.75 mm and +/- 3.5 degrees respectively.

### Geometry Primitives

![][LinearRotaryExploded]

Our parallel plate capacitors are implemented using milled double-sided printed circuit boards (PCBs) positioned in an assembly of lasercut acrylic pieces.

The mobile dielectric is fabricated using 1/16" Delrin, an engineering plastic chosen   for its low coefficient of friction and also its good dielectric properties.

Within the assembly of lasercut pieces, haptic feedback is incorporated modularly using mechanical detents and flexure springs to quickly interchange or combine different feel aesthetics, including limited range of motion, detents, ratchet & pawl, return to center, and soft stop.

### Implementation with 3D Printers

We also prototyped both functional linear and rotary displacement sensors using the [Voxel8](http://www.voxel8.com/) multi-material 3D printer (see header picture).  Combining traditional 3D printer materials with conductive silver paste, we can directly print capacitors into physical designs.

While the resulting capacitors function well for measuring displacements, small variations in the conductive silver paste due to uneven reduction in volume reduce the overall accuracy of the multi-material devices when using our procedure.

However, conductive 3D printing provided an advantage in allowing CapsLoc designs to be printed in a single pass without any need for sub-assembly. In addition, multi-material 3D printers can print conductive material in more arbitrary geometries, rather than being constrained to the surface of a PCB.

### Application

![][Lamp]

As an example of how CapsLoc can enable more creative and novel input designs typically unsupported by off-the-shelf components, we fabricated a custom LED desk lamp. The user control for the color temperature is located on the curved brim of the lamp's shade.

In addition, detents in regular intervals (1000 K) in the slider aid the user in selecting color temperature.

The aesthetic constraint of the curved geometry and the design constraint for an open lamp shade makes this input slider difficult to create using off-the-shelf sliders or potentiometers; however, this design is readily enabled by CapsLoc.

[CapsLoc]: https://raw.githubusercontent.com/echiou/echiou.github.io-images/master/Work/CapsLoc/CapsLoc.png
[ErrorGraphs]: https://raw.githubusercontent.com/echiou/echiou.github.io-images/master/Work/CapsLoc/Error-Graphs.jpg
[Lamp]: https://raw.githubusercontent.com/echiou/echiou.github.io-images/master/Work/CapsLoc/Lamp.png
[LinearRotaryExploded]: https://raw.githubusercontent.com/echiou/echiou.github.io-images/master/Work/CapsLoc/LinearRotaryExploded.png
[PCBs]: https://raw.githubusercontent.com/echiou/echiou.github.io-images/master/Work/CapsLoc/PCBs.png
