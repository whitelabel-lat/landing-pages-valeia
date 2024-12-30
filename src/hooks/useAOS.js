"use client";
import { useEffect } from 'react';

export function useAOS() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const AOS = require('aos');
      AOS.init({
        once: true,
        duration: 1000,
        offset: 100,
        easing: 'ease-in-out'
      });
    }
  }, []);
}