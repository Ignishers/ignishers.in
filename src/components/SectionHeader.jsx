export default function SectionHeader({ title, text, as: H = 'h2' }) {
  return <div className="sh"><H>{title}</H>{text && <p className="lead">{text}</p>}</div>
}
