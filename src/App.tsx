import ChooseUs from "./components/ChooseUs";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Achievements from "./components/Achievements";

export default function App() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <Achievements />
                <ChooseUs />
            </main>
        </>
    )
}
