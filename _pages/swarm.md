---
layout: archive
title: "Path Planning of a swarm of UAVs with minimal energy consumption"
permalink: /swarm/
author_profile: true
---

Unmanned Aerial Vehicles (UAVs) are evolving as versatile machines in revolutionising modern transportation systems. Their applications range from quick package delivery, seamless terrain mapping to emergency responsiveness and precision agriculture. Also, in today's modern world, one can not ignore its tremendous use cases in warfare.  However, UAVs are inefficient means of transport as nearly half of their energy is wasted in supporting their own weight during flight. Also, batteries can nearly make a third of their total weight, so increasing battery capacity incurs more weight and is never a practical solution for increasing their energy efficiency.
One of the well-known problems concerning UAV operations is the trajectory planning of a UAV with minimal energy consumption.
A Power Consumption Model (PoCM) is used to estimate the endurance of a UAV, like its flying time, range, speed, payload limits, battery capacity, etc. So, an accurate PoCM plays a crucial role in planning the best possible path or trajectory in terms of energy being spent for a given operation. However, defining accurate PoCM is tricky as it involves a lot of estimated parameters.
<br>
<p align="center">
  <img width="662" height="432" src="/files/swarm.jpg">
</p>
<br>
In this research, we aim to address three aspects concerning the energy-efficient trajectory planning of a quadrotor UAV.  
First, we want to derive a Power Consumption Model (PoCM) that can accurately estimate the energy consumed by a quadrotor in-flight. Second, using the obtained PoCM, we aim to obtain trajectories for a mission such that the energy consumed is the least. 
The actual response of a quadrotor following a reference trajectory depends on the controller parameters, among other things. So it is important that the controllers are tuned in line with tracking the least energy trajectories. So, the third objective of this research is to present a controller tuning framework so that the least energy trajectories are followed as closely as possible.

A previous version of my work <a href="https://iparaj.github.io/files/Report.pdf"><span style="color: blue;">[Here]</span></a>

Resources

- <a href="https://github.com/iparaj/quad_pid"><span style="color: green;">[PID Control of quadrotors]</span></a>


- <a href="https://bit.ly/cil1lib"><span style="color: green;">[CIL1 Library]</span></a>