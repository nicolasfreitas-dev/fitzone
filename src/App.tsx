import Header from "./components/Header";
import Hero from "./components/Hero";
import Achievements from "./components/Achievements";
import About from "./components/About";
import Modalities from "./components/Modalities";
import Plans from "./components/Plans";


export default function App() {
    return (
        <div id="home">
            <Header />
            <main>
                <Hero />
                <Achievements />
                <About />
                <Modalities />
                <Plans />
            </main>
        </div>
    )
}
