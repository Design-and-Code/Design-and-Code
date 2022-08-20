import { BackgroundBlurWrapper } from "./styles";

const BackgroundBlur = () => {
  return (
    <BackgroundBlurWrapper>
      <div className={'blurredCircle1'}></div>
      <div className={'blurredCircle2'}></div>
    </BackgroundBlurWrapper>
  )
}

export default BackgroundBlur;