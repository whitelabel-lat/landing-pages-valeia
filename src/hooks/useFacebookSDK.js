import { useEffect, useState } from "react";

const useFacebookSDK = (appId, apiVersion) => {
  const [fbInstance, setFbInstance] = useState(null);

  useEffect(() => {
    // Evita cargar el script si ya existe
    if (window.FB) {
      setFbInstance(window.FB);
      return;
    }

    // Agrega el script dinámicamente
    const script = document.createElement("script");
    script.async = true;
    script.defer = true;
    script.crossOrigin = "anonymous";
    script.src = "https://connect.facebook.net/en_US/sdk.js";
    script.onload = () => {
      // Inicializa el SDK después de cargarlo
      window.fbAsyncInit = function () {
        FB.init({
          appId: appId,
          autoLogAppEvents: true,
          xfbml: true,
          version: apiVersion,
        });
        setFbInstance(window.FB);
      };
    };

    document.body.appendChild(script);
  }, [appId, apiVersion]);

  return fbInstance;
};

export default useFacebookSDK;
