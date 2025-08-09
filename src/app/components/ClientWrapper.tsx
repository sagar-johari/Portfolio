'use client';
import { usePathname } from 'next/navigation';
import { CustomGSAP } from '@/app/utils/custom-gsap';

export default function CustomGSAPWrapper() {
  const pathname = usePathname();
  return <CustomGSAP key={pathname} />;
}
