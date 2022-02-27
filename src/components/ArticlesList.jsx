import ArticleCard from "./ArticleCard";

const data = [
  {
    id: 1,
    title: "First Article",
    img: "/header.jpeg",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel harum
            ea adipisci voluptatum nam nemo corporis laudantium hic eius
            cupiditate? Exercitationem illum nobis, iste illo quasi officiis
            eius est corporis minus iusto id esse, pariatur soluta sequi quos
            deserunt. Aliquid!`,
  },
  {
    id: 2,
    title: "Article Title 2",
    img: "/header.jpeg",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel harum
            ea adipisci voluptatum nam nemo corporis laudantium hic eius
            cupiditate? Exercitationem illum nobis, iste illo quasi officiis
            eius est corporis minus iusto id esse, pariatur soluta sequi quos
            deserunt. Aliquid!`,
  },
  {
    id: 3,
    title: "Article Title 3",
    img: "/header.jpeg",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel harum
            ea adipisci voluptatum nam nemo corporis laudantium hic eius
            cupiditate? Exercitationem illum nobis, iste illo quasi officiis
            eius est corporis minus iusto id esse, pariatur soluta sequi quos
            deserunt. Aliquid!`,
  },
];

export default function ArticlesList() {
  return (
    <div className="articles-list">
      {/* Article Card */}
      {data.map((item) => (
        <ArticleCard
          key={item.id}
          title={item.title}
          img={item.img}
          content={item.content}
        />
      ))}
    </div>
  );
}
