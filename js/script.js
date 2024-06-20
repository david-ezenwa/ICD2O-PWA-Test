// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict"

function findTriangleClicked() {
  const side1 = parseFloat(document.getElementById("side1-entered").value)
  const side2 = parseFloat(document.getElementById("side2-entered").value)
  const side3 = parseFloat(document.getElementById("side3-entered").value)

  // Check if the sides can form a triangle
  if (side1 + side2 <= side3 || side1 + side3 <= side2 || side2 + side3 <= side1) {
    document.getElementById("answer").innerHTML = "The given sides do not form a valid triangle."
    return
  }

  // Using the cosine law to find the angles
  const angleA = Math.acos((side2 ** 2 + side3 ** 2 - side1 ** 2) / (2 * side2 * side3)) * (180 / Math.PI)
  const angleB = Math.acos((side3 ** 2 + side1 ** 2 - side2 ** 2) / (2 * side3 * side1)) * (180 / Math.PI)
  const angleC = Math.acos((side1 ** 2 + side2 ** 2 - side3 ** 2) / (2 * side1 * side2)) * (180 / Math.PI)

  // Check if the sum of angles is approximately 180 degrees
  const sumOfAngles = Math.round(angleA + angleB + angleC)

  if (sumOfAngles !== 180) {
    document.getElementById("answer").innerHTML = "Error: The angles do not add up to 180 degrees."
    return
  }

  // Determine the type of triangle
  if (side1 === side2 && side2 === side3) {
    document.getElementById("answer").innerHTML = "This is an equilateral triangle."
  } else if (side1 === side2 || side1 === side3 || side2 === side3) {
    document.getElementById("answer").innerHTML = "This is an isosceles triangle."
  } else {
    document.getElementById("answer").innerHTML = "This is a scalene triangle."
  }
}
