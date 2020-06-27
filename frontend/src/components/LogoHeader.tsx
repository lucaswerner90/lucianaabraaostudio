import LogoHeader from '../assets/svg/logo_header.svg';
 
interface ILogoProps{
    width:number,
    height: number
};

export default ({width, height}:ILogoProps) => (
  <LogoHeader width={width} height={height} />
);