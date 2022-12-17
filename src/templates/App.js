// import global styles
import '../styles/App.scss';

// import components
import HeroBanner from "../components/hero-banner/hero-banner";
import SplitCallout from "../components/split-callout/split-callout";

function App() {
    return (
        <div className="App">
            <HeroBanner
                styleName='home-banner'
                heading="Legends dont change. They adapt."
                copy="A revolutionary start to a new way forward. Meticulously remastered
          with innovative technologies, premium materials and incomparable craftsmanship,
          these enduring icons are crafted to face the future boldly. What's next is up to you."
            />

            <SplitCallout
                styleName='split-callout'
                label="Remastered"
                heading="Nuptse Jacket"
                copy="You've seen this jacket. What you haven't seen is the innovation: new
                technology, elevated bonded baffle construction, premium materials. This is not the
                Nuptse you know. It's the Nuptse like never before."
            />
        </div>
    );
}

export default App;
