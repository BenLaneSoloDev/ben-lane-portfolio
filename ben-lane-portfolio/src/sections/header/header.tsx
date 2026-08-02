export default function Header({ title, tagline} : { title: string, tagline: string}) {
  return (
    <div>
      <div>
        <h1>{title + "Portfolio"}</h1>
        <p>{tagline}</p>
      </div>
    </div>
  );
}