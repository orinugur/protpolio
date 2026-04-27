'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '홈', path: '/' },
    { name: '소개', path: '/about' },
    { name: '프로젝트', path: '/projects' },
    { name: '연락처', path: '/contact' },
  ];

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 100,
      transition: 'all 0.3s ease',
      padding: scrolled ? '15px 0' : '25px 0',
      background: scrolled ? 'var(--glass-bg)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--glass-border)' : 'none',
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link href="/" style={{ fontSize: '1.5rem', fontWeight: 800, fontFamily: 'Outfit, sans-serif' }}>
          김<span className="text-gradient">민석</span>
        </Link>
        <div style={{ display: 'flex', gap: '30px' }}>
          {navLinks.map((link) => {
            const isActive = pathname === link.path || (link.path !== '/' && pathname.startsWith(link.path));
            return (
              <Link 
                key={link.name} 
                href={link.path}
                style={{
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  color: isActive ? 'var(--accent-color)' : 'var(--text-primary)',
                  position: 'relative',
                }}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
