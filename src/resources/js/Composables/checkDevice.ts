import { computed } from "vue";

export function useCheckDevice() {
    // Detects if device is on iOS
    const isIos = computed<boolean>(() => {
        const userAgent = window.navigator.userAgent.toLowerCase();
        return /iphone|ipad|ipod|macintosh/.test(userAgent);
    });

    const isAndroid = computed<boolean>(() => {
        return !isIos.value;
    });

    // Detects if device is in standalone mode
    const isInStandaloneMode = computed<boolean>(() => {
        if (isIos.value) {
            if ("standalone" in window.navigator) {
                if (typeof window.navigator.standalone === "boolean") {
                    return window.navigator.standalone;
                }
            }
        }

        if (!isAndroid.value) {
            return window.matchMedia("(display-mode: standalone)").matches;
        }

        return false;
    });

    return {
        isIos,
        isAndroid,
        isInStandaloneMode,
    };
}
