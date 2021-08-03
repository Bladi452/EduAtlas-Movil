import { InterstitialAd, TestIds, AdEventType} from '@react-native-firebase/admob';



export const showInterstitialAd = () => {
    // Create a new instance
    const interstitialAd = InterstitialAd.createForAdRequest(TestIds.INTERSTITIAL);

    // Add event handlers
    interstitialAd.onAdEvent((type, error) => {
        if (type === AdEventType.LOADED) {
            interstitialAd.show();
        }
    });

    // Load a new advert
    interstitialAd.load();
}