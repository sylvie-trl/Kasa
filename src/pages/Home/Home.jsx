import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";
import logements from "../../data/logements.json";
import "./Home.scss";

export default function Home() {
  return (
    <>
      <Banner
        image="/images/banner-home.jpg"
        title={"Chez vous, \npartout et ailleurs"}
        opacity={0.6}
      />

      <div className="gallery">
        <div className="gallery__wrapper">
          <div className="gallery__list">
            {logements.map((log) => (
              <Card
                key={log.id}
                id={log.id}
                cover={log.cover}
                title={log.title}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
