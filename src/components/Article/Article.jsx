const Article = ({ title, text, tags, image, alt }) => {
  return (
    <div className="p-5 bg-gray-200 dark:bg-dark-200 sm:rounded-lg sm:shadow-md flex flex-col items-center gap-2">
      <h3 className="text-xl text-alura-200 dark:text-gray-200 font-bold">
        {title}
      </h3>
      <div className="w-full hidden justify-end gap-2 pr-5 sm:flex" >
        {tags.map((tag) => (
          <span key={tag} className="bg-alura-100 dark:bg-dark-100 px-4 py-1 rounded-full text-gray-200 font-bold text-xs uppercase">{tag}</span>
        ))}
      </div>
      <div className="grid gap-1">
        {text.map((content, index) => (
          <p key={index} className="text-alura-200 dark:text-gray-400">
            {content}
          </p>
        ))}
        {image && <img className="sm:p-4" src={image} />}
        {/* o tailwind fornece uma ferramenta exclusivo para leitores de tela */}
        {image && alt && <span className="sr-only">{alt}</span>}
      </div>
    </div>
  );
};

export default Article;
