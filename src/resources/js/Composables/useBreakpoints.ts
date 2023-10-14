import {
    UseBreakpointsReturn,
    breakpointsTailwind,
    useBreakpoints as vueUseUseBreakpoints,
} from "@vueuse/core";
import { Ref } from "vue";

export default function useBreakpoints() {
    const breakpoints = vueUseUseBreakpoints(breakpointsTailwind);

    const largerThanSm: Ref<boolean> = breakpoints.greater("sm");
    const largerThanMd: Ref<boolean> = breakpoints.greater("md");
    const largerThanLg: Ref<boolean> = breakpoints.greater("lg");
    const largerThanXl: Ref<boolean> = breakpoints.greater("xl");

    return {
        largerThanSm,
        largerThanMd,
        largerThanLg,
        largerThanXl,
        breakpoints,
    };
}
