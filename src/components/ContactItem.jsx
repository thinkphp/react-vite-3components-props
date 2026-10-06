export default function ContactItem({ icon, label, value, href }) {
  return (
    <a className="contact-item" href={href}>
      <span className="contact-item__icon" aria-hidden="true">
        {icon}
      </span>
      <span className="contact-item__text">
        <span className="contact-item__label">{label}</span>
        <span className="contact-item__value">{value}</span>
      </span>
      <span className="contact-item__arrow" aria-hidden="true">
        ↗
      </span>
    </a>
  );
}
