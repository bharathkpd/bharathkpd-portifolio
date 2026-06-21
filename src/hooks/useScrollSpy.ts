import { useState, useEffect } from 'react';

export function useScrollSpy(ids: string[], offset: number = 80) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;

      // Special case: if we are at the very bottom of the page, activate the last section
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 10) {
        setActiveId(ids[ids.length - 1]);
        return;
      }

      // Check sections in reverse order
      for (let i = ids.length - 1; i >= 0; i--) {
        const id = ids[i];
        const el = document.getElementById(id);
        if (el) {
          if (el.offsetTop <= scrollPosition) {
            setActiveId(id);
            return;
          }
        }
      }

      // Default to first section if nothing matches
      if (ids.length > 0) {
        setActiveId(ids[0]);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial call
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [ids, offset]);

  return activeId;
}
