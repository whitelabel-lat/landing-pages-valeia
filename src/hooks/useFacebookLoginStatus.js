import { useState, useEffect } from 'react';
import useFacebookSDK from './useFacebookSDK';

const useFacebookLoginStatus = (appId, apiVersion) => {
  const [loginStatus, setLoginStatus] = useState({
    status: 'unknown',
    authResponse: null,
  });
  const FB = useFacebookSDK(appId, apiVersion);

  useEffect(() => {
    if (FB) {
      FB.getLoginStatus((response) => {
        setLoginStatus({
          status: response.status,
          authResponse: response.authResponse,
        });
      });
    }
  }, [FB]);

  return loginStatus;
};

export default useFacebookLoginStatus;
