// Apply only a user-selected preference before paint; otherwise follow the OS.
try {
  const preference = localStorage.getItem('skw-trading-theme');
  if (preference === 'light' || preference === 'dark') document.documentElement.dataset.theme = preference;
} catch { /* Browser storage is optional. */ }
