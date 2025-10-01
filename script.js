const CONFIG = {
  appName: "VidhyaSetu",
  tagline: "Advanced School Management System - Download APK",
  apkUrl: "https://github.com/termux/termux-app/releases/download/v0.118.0/termux-app_v0.118.0+github-debug_universal.apk", // Sample safe APK for demo
  version: "",
  lastUpdated: "",
  sha256: "",
  contactEmail: "hanokalure@gmail.com",
  primaryColor: "#2563eb",
  privacyUrl: "privacy.html",
  termsUrl: ""
};

document.addEventListener('DOMContentLoaded', () => {
  const setText = (selector, text) => {
    const el = document.querySelector(selector);
    if (el && text) el.textContent = text;
  };

  document.documentElement.style.setProperty('--brand', CONFIG.primaryColor);
  document.title = `${CONFIG.appName} - Official APK Download`;
  document.querySelectorAll('[data-app-name]').forEach(el => el.textContent = CONFIG.appName);
  setText('#tagline', CONFIG.tagline);
  if (CONFIG.version) {
    setText('#version', CONFIG.version);
    document.getElementById('versionMeta').style.display = '';
  }
  if (CONFIG.lastUpdated) {
    setText('#updated', CONFIG.lastUpdated);
    document.getElementById('updatedMeta').style.display = '';
  }

  const dl = document.getElementById('downloadButton');
  if (CONFIG.apkUrl) {
    dl.href = CONFIG.apkUrl;
    dl.removeAttribute('aria-disabled');
    dl.setAttribute('rel', 'noopener');
    
    // Add ripple animation and download feedback
    dl.addEventListener('click', function(e) {
      e.preventDefault();
      const btn = this;
      const originalText = btn.textContent;
      const rect = btn.getBoundingClientRect();

      // Create ripple effect (center fallback if coordinates missing)
      const cx = e.clientX || (rect.left + rect.width / 2);
      const cy = e.clientY || (rect.top + rect.height / 2);
      const ripple = document.createElement('span');
      ripple.className = 'btn-ripple';
      const size = Math.max(rect.width, rect.height) * 1.5;
      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = (cx - rect.left - size / 2) + 'px';
      ripple.style.top = (cy - rect.top - size / 2) + 'px';
      btn.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);

      // Visual feedback
      btn.style.transform = 'scale(0.97)';
      btn.textContent = 'Starting Download...';

      // Start download after a short delay so animations are visible
      setTimeout(() => {
        btn.style.transform = '';
        btn.textContent = 'Download Started! ✓';
        btn.style.background = 'linear-gradient(135deg, #1d4ed8, #2563eb)';
        // Trigger the download
        const a = document.createElement('a');
        a.href = CONFIG.apkUrl;
        a.rel = 'noopener';
        // Some browsers ignore download for cross-origin, but click still initiates download
        a.download = '';
        document.body.appendChild(a);
        a.click();
        setTimeout(() => document.body.removeChild(a), 0);
      }, 300);

      // Reset visuals after a while (if user stayed on page)
      setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
      }, 3000);
    });
  } else {
    dl.addEventListener('click', (e) => e.preventDefault());
  }

  if (CONFIG.sha256) {
    document.getElementById('checksum').textContent = CONFIG.sha256;
    document.getElementById('checksumMeta').style.display = '';
  }

  const y = new Date().getFullYear();
  setText('#year', String(y));

  if (CONFIG.privacyUrl) document.getElementById('privacyLink').href = CONFIG.privacyUrl;
  if (CONFIG.contactEmail) {
    const link = document.getElementById('contactLink');
    link.href = `mailto:${CONFIG.contactEmail}`;
  }
});
