export default function ProjectCard({
  number,
  title,
  description,
  technologies,
  url,
}) {
  return (
    <article className="project-card">
      <div className="project-card__top">
        <span className="project-card__number">{number}</span>
        <span className="project-card__arrow" aria-hidden="true">
          ↗
        </span>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <ul className="tag-list" aria-label="Tehnologii folosite">
        {technologies.map((technology) => (
          <li className="tag" key={technology}>
            {technology}
          </li>
        ))}
      </ul>
      <a className="text-link" href={url}>
        Vezi codul <span aria-hidden="true">→</span>
      </a>
    </article>
  );
}
