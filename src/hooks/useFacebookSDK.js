// hooks/useFacebookSDK.js
import { useEffect, useState } from 'react';

const useFacebookSDK = (appId, apiVersion) => {
  const [fbInstance, setFbInstance] = useState(null);

  useEffect(() => {
    if (!appId || !apiVersion) {
      console.error("Por favor, proporciona un appId y apiVersion validos para el SDK de Facebook");
      return;
    }

    window.fbAsyncInit = function () {
      FB.init({
        appId: appId,
        cookie: true,
        xfbml: true,
        version: apiVersion,
      });
      FB.AppEvents.logPageView();
      setFbInstance(FB); // Guarda la instancia de FB
    };

    (function (d, s, id) {
      let js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  }, [appId, apiVersion]);

    return fbInstance; // Retorna la instancia de FB
};

export default useFacebookSDK;