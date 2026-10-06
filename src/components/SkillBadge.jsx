export default function SkillBadge({ name, level, index }) {
  return (
    <article
      className="skill-card"
      style={{ "--skill-index": index }}
      aria-label={`${name}: ${level}`}
    >
      <span className="skill-card__dot" aria-hidden="true" />
      <div>
        <h3>{name}</h3>
        <p>{level}</p>
      </div>
    </article>
  );
}
