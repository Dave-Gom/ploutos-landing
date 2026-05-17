interface PhoneFrameProps {
  src: string;
  alt: string;
  width?: number;
  className?: string;
}

const PhoneFrame = ({ src, alt, width = 320, className = "" }: PhoneFrameProps) => {
  return (
    <div className={`phone-frame ${className}`} style={{ width }}>
      <div className="phone-inner">
        <img src={src} alt={alt} loading="lazy" />
      </div>
    </div>
  );
};

export default PhoneFrame;
