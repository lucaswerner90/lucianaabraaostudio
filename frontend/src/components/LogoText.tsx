import LogoText from '../assets/svg/text.svg';
 
interface ILogoProps{
    width:number | string,
    height: numbe | string
};

export default ({width, height}:ILogoProps) => (
  <LogoText width={width} height={height} />
);