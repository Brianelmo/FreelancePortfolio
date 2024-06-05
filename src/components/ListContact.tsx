interface Props {
  title: string;
  style: string;
  icon: string;
  link: string;
}

function ListContact({ style, title, icon, link }: Props) {
  return (
    <div className="cursor-pointer">
      <a target="_blank" className={style} href={link}>
        {""}
        <i className={icon}></i>
        {title}
      </a>
    </div>
  );
}

export default ListContact;
