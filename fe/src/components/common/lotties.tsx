import Lottie from "react-lottie-player";
import lottieCongratulationsJson from "../../../public/lotties/congratulations.json";
import lottieHiJson from "../../../public/lotties/hi.json";

type PropsForLottie = {
  width?: any;
  height?: any;
  loop?: boolean;
};

export function LottieCongratulations(params: PropsForLottie) {
  return (
    <Lottie
      loop={params.loop || false}
      animationData={lottieCongratulationsJson}
      play
      style={{ width: params.width, height: params.height }}
      //   onComplete={props.onComplete}
    />
  );
}

export function LottieHi(params: PropsForLottie) {
  return (
    <Lottie
      loop={params.loop || false}
      animationData={lottieHiJson}
      play
      style={{ width: params.width, height: params.height }}
      //   onComplete={props.onComplete}
    />
  );
}
