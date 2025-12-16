'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface FooterEasterEggProps {
  children: React.ReactNode;
}

export default function FooterEasterEgg({ children }: FooterEasterEggProps) {
  const [clickCount, setClickCount] = useState(0);
  const router = useRouter();

  const handleFooterClick = () => {
    setClickCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    if (clickCount >= 5) {
      router.push('/analise');
      setClickCount(0); // Reset count after redirection
    }
  }, [clickCount, router]);

  return <div onClick={handleFooterClick} style={{ cursor: 'pointer' }}>{children}</div>;
}
