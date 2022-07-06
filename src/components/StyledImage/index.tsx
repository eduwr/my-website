import Image from "next/image";

interface Props {
  src: string;
  alt?: string;
  rounded?: boolean;
}

export const StyledImage = ({src, alt, rounded}: Props) => (
  <>
    <div
      style={{
        background: "radial-gradient(#2b2b2b22, #2b2b2b)"
      }}
      className={`absolute top-0 bottom-0 left-0 right-0 z-20 overflow-hidden ${rounded && 'rounded-2xl'}`}
    />
    <div className={`absolute top-0 bottom-0 left-0 right-0 overflow-hidden ${rounded && 'rounded-2xl'}`}>
      <Image
        src={src}
        layout="fill"
        objectFit="cover"
        alt={alt}
      />
    </div>
  </>
)