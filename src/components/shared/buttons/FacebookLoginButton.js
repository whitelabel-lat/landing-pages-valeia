import { useEffect } from 'react';
import useFacebookSDK from '../../../hooks/useFacebookSDK';

const FacebookLoginButton = ({ appId, apiVersion, configurationId }) => {
  const FB = useFacebookSDK(appId, apiVersion);

  useEffect(() => {
    if (!FB) return;

    const handleMessageEvent = (event) => {
      if (
        event.origin !== "https://www.facebook.com" &&
        event.origin !== "https://web.facebook.com"
      )
        return;

      try {
        const data = JSON.parse(event.data);
        if (data.type === "WA_EMBEDDED_SIGNUP") {
          console.log("Message Event:", data); // Aquí manejas los datos recibidos
        }
      } catch {
        console.log("Message Event Error:", event.data);
      }
    };

    window.addEventListener("message", handleMessageEvent);
    return () => {
      window.removeEventListener("message", handleMessageEvent);
    };
  }, [FB]);

  const launchWhatsAppSignup = () => {
    if (!FB) return;

    FB.login(
      (response) => {
        if (response.authResponse) {
          const code = response.authResponse.code;
          console.log("Auth Response Code:", code); // Aquí manejas el código
        } else {
          console.log("Login Response Error:", response);
        }
      },
      {
        config_id: configurationId,
        response_type: "code",
        override_default_response_type: true,
        extras: {
          setup: {},
          featureType: "",
          sessionInfoVersion: "3",
        },
      }
    );
  };

  return (
    <button
      onClick={launchWhatsAppSignup}
      style={{
        backgroundColor: "#1877f2",
        border: 0,
        borderRadius: "4px",
        color: "#fff",
        cursor: "pointer",
        fontFamily: "Helvetica, Arial, sans-serif",
        fontSize: "16px",
        fontWeight: "bold",
        height: "40px",
        padding: "0 24px",
      }}
    >
      Login with Facebook
    </button>
  );
};

export default FacebookLoginButton;
