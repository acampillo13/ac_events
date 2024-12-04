import Button from "./components/Button";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div>
      <Hero
        title="Bienvenido a AC Events"
        subtitle="Encuentra tu próximo evento inolvidable"
        imgBackground="/assets/img/bg_hero_home.jpeg"
      />
    </div>
  );
}
