import "./App.css";
import Header from "./components/Header";
import Entry from "./components/Entry";
import Contact from "./components/Contact";
import JokesData from "./JokesData";
import Joke from "./components/Joke";
import TravelDatas from "./TravelPlaces";

function App() {

  // const jokeElement = JokesData.map(joke => {
  //   return <Joke 
  //     line={joke.setup}
  //     punchline={joke.punchline}
  //   />
  // })

  const travelElement = TravelDatas.map(TravelData => {
    return <Entry
      key={TravelData.id}//This line prevents the warning of console log about every chiild should have a unique "key" prop
      // img={TravelData.img}
      // title={TravelData.title}
      // country={TravelData.country}
      // googleMapsUrl={TravelData.googleMapsLink}
      // dates={TravelData.dates}
      // description={TravelData.text}
      // object={TravelData}
      {...TravelData}
    />
  })
  return (
    // <div className="contacts">
    //   <Contact 
    //     img="https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=300&q=80"
    //     name="Mr. Whiskerson"
    //     phone={2125551234}
    //     email={"mr.whiskaz@catnap.meow"}
    //   />
    //   <Contact 
    //     img="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=300&q=80"
    //     phone={2125555678}
    //     email="ms.furrypaws@catnap.meow"
    //     isActive={true}
    //   />
    //   <Contact 
    //     img="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=300&q=80"
    //     name="Mr. Fluffykins"
    //     phone={2125559012}
    //     email="mr.fluffykins@catnap.meow"
    //     comment={[
    //       {user: "mr.fluffykins", text: "Hello!"},
    //       {user: "me", text: "Hi mr.fluffykins!"}
    //     ]}
    //   />
    //   <Contact 
    //     img="https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=300&q=80"
    //     name="Ms. Meowington"
    //     phone={2125553456}
    //     email="ms.meowington@catnap.meow"
    //   />
    // </div>







    <>
      <Header />
      <main className="container">
        {/* <Entry 
          img={{
              url: "https://scrimba.com/links/travel-journal-japan-image-url",
              alt: "mount fuji"
            }}
          title="Mount Fuji"
          country="Japan"
          googleMapsUrl={"https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu"}
          startDate="12 Jan, 2021"
          endDate="24 Jan, 2021"
          description="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
        /> */}
        {travelElement}
      </main>
    </>





    // <main>
    //   {jokeElement}
    // </main>
  );
}

export default App;
