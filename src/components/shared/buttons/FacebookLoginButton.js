// components/shared/buttons/FacebookLoginButton.js
import { useEffect } from 'react';
import useFacebookSDK from '../../../hooks/useFacebookSDK';
import useFacebookLoginStatus from '../../../hooks/useFacebookLoginStatus';

const FacebookLoginButton = ({appId, apiVersion, onLogin}) => {

    const FB = useFacebookSDK(appId, apiVersion);
    const loginStatus = useFacebookLoginStatus(appId, apiVersion);

    useEffect(() => {
        if (loginStatus.status === "connected") {
             if (onLogin) {
              onLogin(loginStatus.authResponse)
            }
          }
    }, [loginStatus, onLogin])

   const handleLoginClick = () => {
        if (FB) {
            FB.login(function(response){
                if (response.authResponse) {
                    if(onLogin) {
                         onLogin(response.authResponse)
                    }
                 }
            }, {scope: 'public_profile,email'});
        }
   }

    return (
        <button 
     onClick={handleLoginClick} 
     className="bg-blue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-200 ease-in-out z-10"
    >
      Iniciar sesión con Facebook
  </button>
    );
};

export default FacebookLoginButton;