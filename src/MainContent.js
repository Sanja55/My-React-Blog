import "./MainContent.css"
export const MainContent = () => {

  const contentItems = [

    {
      title: "Atlas Air by Massive Attack",
      lyrics: "Yes, shall we take a spin again in business? This time is fixed lets, sweeten our facilities. It took all the man in me to be the dog you wanted me to be..."
    },

    {
      title: "Rockicide by Millenia Nova feat Iggy Pop",
      lyrics: "Hollywood blow, fly like crows, Shit's gonna rock anywhere you go, take it to the bank, The Battleship sank, Shit's gonna rock, Man I don't mock! Over the Stars, in the ugly cars. Over Police - Rabbis And Priests. Over Berlin - let it begin. Shit's Gonna Rock, I do not mock!"
    },

    {
      title: "Green Machine by Kyuss",
      lyrics: "I'm a-loading, loading my war machine, I'm contributing to the system - the break-down scheme, I'm a-shutting down, I'm shutting down your greed for green, I am here to gun it down, I gotta do..."
    },

    {
      title: "Night Flight to Kabul by Mark Lanegan",
      lyrics: "Is there gold, is there gold in Kabul? I've been there in a nest of snakes. I've been there as a blackout artist, everyone trying to take my place. Is there gold? Is there gold? I was there as a midnight watchman, I was there for a masquerade. I was there as a makeup artist, everyone trying to point the blame..."
    },

    {
      title: "Wasted Years by Deine Lakaien",
      lyrics: "Walking down this well known street, turning 'round for ladies feet, like you did so many years ago. Sitting in that street cafe, where you had your cup of tea, Come on boy don't get sentimental now. Everything changed but you didn't move on and the only fact is that you're fifteen years older now. No use to turn out the lights, You feel so depressed inside, when you think of your wasted years at night..."
    },

    {
      title: "Ritual Noise by Covenant",
      lyrics: "We make ritual noise. We weave the fabric of dreams. We build cities of sound. We feel the rhythm of time. We make ritual noise, wired to the world under our fingertips. We take special care, listen to the words spoken in confidence. We make ritual noise, shouting to be heard, cooling our burning lips. We break down the gates, open up our wounds, bleeding for innocence..."
    }
  ];


  return (
    
    <div className="main-content">
        
        {contentItems.map((item) => (
            
            <div className="item">
                <h2>{item.title}</h2>
                <p>{item.lyrics}</p>
            </div>
        
        ))}
    
    </div>
)

}



