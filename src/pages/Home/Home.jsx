import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";
import logements from "../../data/logements.json";
import "./Home.scss";

export default function Home() {
  return (
    <div>
      <Banner
        image="/images/banner-home.jpg"
        title="Chez vous, partout et ailleurs"
        opacity={0.6}
      />

      <div className="gallery">
        {logements.map((log) => (
          <Card key={log.id} cover={log.cover} title={log.title} />
        ))}
      </div>
    </div>
  );
}
