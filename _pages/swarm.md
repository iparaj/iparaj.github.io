---
layout: archive
title: "On algorithms for controller tuning of UAVs for minimal energy consumption"
permalink: /swarm/
author_profile: true
---

Unmanned Aerial Vehicles (UAVs) are evolving as versatile machines in revolutionising modern transportation systems. Their applications range from quick package delivery, seamless terrain mapping to emergency responsiveness and precision agriculture. Also, in today's modern world, one can not ignore their tremendous use cases in warfare.  However, UAVs are inefficient means of transport as nearly half of their energy is wasted in supporting their own weight. Also, the batteries can nearly make a third of their total weight, so increasing battery capacity always incurs more weight and never a practical solution for increasing the energy efficiency.
One of the well-known problems concerning UAV operations is the trajectory planning of a UAV with minimal energy consumption.
A Power Consumption Model (PoCM) is used to estimate the endurance of a UAV, like its flying time, range, speed, payload limits, battery capacity, etc. So, an accurate PoCM plays a crucial role in planning the best possible path or trajectory in terms of energy being spent for a given operation. However, defining accurate PoCM is tricky as it involves a lot of estimated parameters.
<br>
<p align="center">
  <img width="662" height="432" src="/files/swarm.jpg">
</p>
<br>
The primary objective of our research is to find energy optimal trajectories for quadrotors, tailored to specific missions. In order to find such trajectories, it is crucial to derive an accurate energy consumption model of a quadorotor. Existing literature highlights the challenges that exist in formulating such a model. Most models are based on a limited number of static flight variables that do not capture the energy consumption dynamics well and hence does not aid well in trajectory planning with energy efficiency. In this research, we try develop a physics based optimal control framework aimed at identifying least-energy trajectories, leveraging insights from propulsion dynamics of its thrusters. Furthermore, we integrate mission time considerations into our optimal control formulation to enable a balance between hover and propulsion energy. While the optimal control problem solution provides least-energy trajectories for the quadrotor in open-loop, the response of the quadrotor to these trajectories during actual flight is practically governed by its controller parameters. Thus, tuning of controllers becomes crucial to achieve optimal tracking performance. So, we aim to propose algorithms for tuning two significant control architectures namely the Proportional-Integral-Derivative (PID) control architecture and Model Predictive Control (MPC) architecture in order to enable the quadrotor closely follow the least-energy trajectory leading to minimal energy consumption.

A previous version of my work <a href="https://iparaj.github.io/files/Report.pdf"><span style="color: blue;">[Here]</span></a>

Resources

- <a href="https://github.com/iparaj/quad_pid"><span style="color: green;">[PID Control of quadrotors]</span></a>


- <a href="https://bit.ly/cil1lib"><span style="color: green;">[CIL1 Library]</span></a>