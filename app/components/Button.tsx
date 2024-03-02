interface Props {
  title: string;
  onClick: any;
  style: any
}

export const Button: React.FC<Props> = ({ onClick, title, style }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={style}
    > 
      {title}
    </button>
  );
};
