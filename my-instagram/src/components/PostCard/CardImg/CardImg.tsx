interface CardImgProps {
  imgUrl: string;
  alt?: string;
  onClick?: () => void;
}
export default function CardImg({ imgUrl, alt = '', onClick }: CardImgProps) {
  return (
    <figure className="relative max-h-72 cursor-pointer" onClick={onClick}>
      <img className="object-cover" src={imgUrl} alt={alt} />
    </figure>
  );
}
