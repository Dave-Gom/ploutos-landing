import Image from "next/image";

interface PhoneFrameProps {
  src: string;
  alt: string;
  width?: number;
  className?: string;
  priority?: boolean;
}

const PhoneFrame = ({ src, alt, width = 320, className = "", priority = false }: PhoneFrameProps) => {
  return (
    <div className={`phone-frame ${className}`} style={{ width }}>
      <div className="phone-inner">
        <Image
          src={src}
          alt={alt}
          fill
          sizes={`${width}px`}
          priority={priority}
          style={{ objectFit: "cover", objectPosition: "top" }}
        />
      </div>
    </div>
  );
};

export default PhoneFrame;
