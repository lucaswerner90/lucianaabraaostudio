import Logo from '../assets/svg/logo.svg';
 
interface ILogoProps{
    width:number,
    height: number
};

export default ({width, height}:ILogoProps) => (
  <Logo width={width} height={height} />
);