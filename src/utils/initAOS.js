"use client";

export const initAOS = () => {
  if (typeof window !== 'undefined') {
    const AOS = require('aos');
    AOS.init({
      once: true,
      duration: 1000,
      disable: 'mobile'
    });
  }
};