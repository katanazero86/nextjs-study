import Image from 'next/image';

interface CardImgProps {
  imgUrl: string;
  alt?: string;
}
export default function CardImg({ imgUrl, alt = '' }: CardImgProps) {
  return (
    <figure className="relative max-h-72">
      {/*<Image*/}
      {/*  src={imgUrl}*/}
      {/*  alt={alt}*/}
      {/*  fill*/}
      {/*  style={{*/}
      {/*    objectFit: 'cover',*/}
      {/*  }}*/}
      {/*/>*/}
      <img className="object-cover" src={imgUrl} alt={alt} />
    </figure>
  );
}
