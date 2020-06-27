import LogoText from '../assets/svg/text.svg';
 
interface ILogoProps{
    width:number,
    height: number
};

export default ({width, height}:ILogoProps) => (
  <LogoText width={width} height={height} />
);