export default function ArticleCard({ title, content, img: image }) {
  return (
    <div className="article">
      <img src={image} alt="" />
      <div>
        <h3 className="title">{title}</h3>
        <p className="body">{content}</p>
      </div>
    </div>
  );
}
