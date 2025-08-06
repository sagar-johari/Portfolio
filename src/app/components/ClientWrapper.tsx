'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { CustomGSAP } from '@/app/utils/custom-gsap';

export default function CustomGSAPWrapper() {
  const pathname = usePathname();

  useEffect(() => {
    // Could trigger reinitialization if needed
    // You can use a state key or other trick if required
    console.log('Route changed to', pathname);
  }, [pathname]);

  return <CustomGSAP  key={pathname}  />;
}
