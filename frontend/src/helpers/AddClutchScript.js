import { useEffect } from 'react';

const addClutchScript = () => {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = 'https://widget.clutch.co/static/js/widget.js';
    script.onload = (e) => {
      if (e.target.readyState !== 'loading' && window.CLUTCHCO.loaded === false) {
        window.CLUTCHCO.Init();
      }
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
};

export default addClutchScript;
