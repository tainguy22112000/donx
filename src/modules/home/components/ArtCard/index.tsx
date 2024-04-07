import "./ArtCard.css";

import Image from "next/image";

type Props = {
  image: string;
  thumb: string;
  label: string;
  title: string;
  description: string;
  linkTitle: string;
  sub: string;
};

export const ArtCard = ({ description, title, image, label, thumb, linkTitle, sub }: Props) => {
  return (
    <div className="card-item">
      <div className="image-container" onClick={() => {}} id="card-image">
        <Image
          src={image}
          alt="lock-items"
          loading="lazy"
          className="card-image"
          width={500}
          height={500}
        />
        <div className="image-overlay"></div>
        <div className="card-text">
          <div className="card-text-header">{label}</div>
          <h1 className="card-text-title text-white">{title}</h1>
          <h6 className="text-gray-1 card-text-sub">{description}</h6>
        </div>
      </div>

      <div className="card-info flex flex-row justify-start items-center card-active">
        <Image src={thumb} alt="private event" width={50} height={50} />
        <div className="card-content flex flex-col">
          <h6 className="text-gray-2">{sub}</h6>
          <button className="card-btn" type="button">
            {linkTitle}
          </button>
        </div>
      </div>
    </div>
  );
};
