import Modalities from "./components/Modalities";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Achievements from "./components/Achievements";

export default function App() {
    return (
        <div id="home">
            <Header />
            <main>
                <Hero />
                <Achievements />
                <Modalities />
            </main>
        </div>
    )
}
