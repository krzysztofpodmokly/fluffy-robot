'use client'

import { useState, useEffect } from 'react';
import canUseDOM from '@/helpers/canUseDom'

const ToggleMode = () => {
  const localTheme = canUseDOM && localStorage.getItem('theme')
  const [theme, setTheme] = useState<string>(localTheme ? localTheme : 'light');

  useEffect(() => {
    if (!canUseDOM) return;

    localStorage.setItem('theme', theme);
    const localTheme = localStorage.getItem('theme')
    document.querySelector('html')?.setAttribute('data-theme', localTheme as string);

    () => document.querySelector('html')?.removeAttribute('data-theme');
  }, [theme]);

  const handleTheme = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    if (isChecked) {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  return <label className="swap px-4">
    <input type="checkbox" onChange={handleTheme} checked={theme === 'light' ? false : true} />
    <div className="swap-on">ON</div>
    <div className="swap-off">OFF</div>
  </label>
}

export default ToggleMode;