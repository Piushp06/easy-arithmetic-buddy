
import React, { useEffect } from 'react';

declare global {
  interface Window {
    startAppSDK?: any;
  }
}

const StartIoAd = () => {
  useEffect(() => {
    // Load the Start.io SDK script
    const script = document.createElement('script');
    script.src = 'https://sdk.start.io/start-sdk.js';
    script.async = true;
    script.onload = () => {
      if (window.startAppSDK) {
        // Initialize the SDK with account ID and app ID
        window.startAppSDK.init({
          accountId: '186140332',
          appId: '203906093',
          adType: 'banner', // or 'interstitial', 'rewarded', etc.
          bannerSize: 'BANNER', // or 'MREC', 'LEADERBOARD', etc.
        });
        
        // Load the ad into the container
        window.startAppSDK.loadBanner('start-io-ad-container');
      }
    };
    document.body.appendChild(script);

    return () => {
      // Clean up the script when component unmounts
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="ad-container my-4 flex justify-center">
      <div id="start-io-ad-container" className="min-h-[50px] min-w-[320px]"></div>
    </div>
  );
};

export default StartIoAd;
