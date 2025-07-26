'use client';

import { UseRollingAnimation } from '../utils/rolling';

export default function AnimationProvider({ children }: { children: React.ReactNode }) {
  UseRollingAnimation();
  
  return <>{children}</>;
} 