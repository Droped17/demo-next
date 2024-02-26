import Image from "next/image";

type CardProps = {
  name: string;
};

const Card: React.FC<CardProps> = ({ name }) => {
  return (
    <div className="card shadow-sm max-w-[300px]">
      <div style={{ width: "100%", maxWidth: "500px" }}>
        <Image
          alt="Description of image"
          src="/images/michael-sum-LEpfefQf4rU-unsplash.webp"
          layout="responsive"
          width={500}
          height={300}
          loading="lazy"
        />
      </div>
      <p>{name}</p>
    </div>
  );
};

export default Card;
