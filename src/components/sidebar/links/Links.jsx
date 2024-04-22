const Links = () => {
  const items = ["Homepage", "Services", "Portfolio", "Contact", "About"];

  return <div className="links">
    {items.map(item => (
    <a key={item} href={`#${item}`}>
        {item}
        </a>
        ))}
  </div>;
};

export default Links;
