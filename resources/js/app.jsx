import './bootstrap';
import '../css/app.css';
import { createInertiaApp, router } from '@inertiajs/react';
import { createRoot } from 'react-dom/client';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

// ✅ Wrapper component
function MainApp({ App, props }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });

    // 🔥 Important for Inertia page changes
    router.on('navigate', () => {
      AOS.refresh();
    });

  }, []);

  return <App {...props} />;
}

createInertiaApp({
  resolve: name => {
    const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true });
    return pages[`./Pages/${name}.jsx`];
  },
  setup({ el, App, props }) {
    createRoot(el).render(<MainApp App={App} props={props} />);
  },
});