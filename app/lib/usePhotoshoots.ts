"use client";

import { useState, useEffect } from "react";
import { ENVIRONMENTS } from "./data";

export interface Photoshoot {
  id: string;
  name: string;
  venue: string;
  date: string;
  checkedEnvs: string[];
}

export function usePhotoshoots() {
  const [photoshoots, setPhotoshoots] = useState<Photoshoot[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("photoshoots");
      if (stored) {
        setPhotoshoots(JSON.parse(stored));
      }
    } catch (e) {
      console.error("Failed to load photoshoots", e);
    }
    setIsLoaded(true);
  }, []);

  const savePhotoshoots = (newPhotoshoots: Photoshoot[]) => {
    setPhotoshoots(newPhotoshoots);
    try {
      localStorage.setItem("photoshoots", JSON.stringify(newPhotoshoots));
    } catch (e) {
      console.error("Failed to save photoshoots", e);
    }
  };

  const createPhotoshoot = (name: string, venue: string, date: string) => {
    const newPhotoshoot: Photoshoot = {
      id: Date.now().toString(),
      name,
      venue,
      date,
      checkedEnvs: [],
    };
    savePhotoshoots([...photoshoots, newPhotoshoot]);
    return newPhotoshoot;
  };

  const toggleEnv = (photoshootId: string, envId: string) => {
    const newPhotoshoots = photoshoots.map((p) => {
      if (p.id === photoshootId) {
        const checkedEnvs = p.checkedEnvs.includes(envId)
          ? p.checkedEnvs.filter((id) => id !== envId)
          : [...p.checkedEnvs, envId];
        return { ...p, checkedEnvs };
      }
      return p;
    });
    savePhotoshoots(newPhotoshoots);
  };

  return {
    photoshoots,
    isLoaded,
    createPhotoshoot,
    toggleEnv,
    coreTotal: ENVIRONMENTS.filter((e) => e.priority.includes("P1")).length,
  };
}
