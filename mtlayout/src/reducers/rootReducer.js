const initState = {
    sections: [
        
    ],
    albums: [
        {
            id:1,
            name: "Hell and silence",
            articleTitle: "Hell and Silence is an EP by Las Vegas rock group",
            date: new Date("2010", "07", "05").toISOString(),
            description: "Hell and silence is an EP by Las Vegas rock group, released in March 2010 in the United States. It was recorded at Battle Born Studios. All songs were written by Imagine Dragons and self-produced. The EP was in part mixed by Grammy nominated engineer Mark Needham. To promote the album the band performed five shows at SXSW 2010 including at the BMI Official Showcase. While at SXSW they were endorsed by Blue Microphones. They also toured the western United States with Nico Vega and Saint Motel. They also performed at Bite of Las Vegas Festival 2010. New Noise Music Festival, Neon Reverb Festival, and Fork Fest.",
            buttonColor: "dark",
        },
        {
            id:2,
            name: "Night Vision",
            articleTitle: "Night Vision is the debut studio album by American rock band",
            date: new Date("2012", "06", "15").toISOString(),
            description: "It was released on September 4, 2012 through interscope Records. The extended track was released on February 12, 2013, adding three more songs. Recorded between 2010 and 2012, the album was primarily produced by the band themselves, as well as English hip-hop producer Alex da Kid and Brandon Darner from the American indie rock group The Envy Corps. It was mastered by Joe LaPorta. According to frontman Dan Reynolds, the album took three years to finish.",
        },
        {
            id:3,
            name: "Smoke + mirrors",
            articleTitle: "The album was recorded during 2014 at the band's home stuido in Las Vegas, Nevada",
            date: new Date("2015-03-08").toISOString(),
            description: "Self-produced by members of the band along with English hip-hop producer Alexander Grant, known by his moniker Alex da Kid, the album was released by Interscope Records and Grant's KIDI-naKORNER label of February 17, 2015, in the United States.",
            buttonColor: "light"
        }
    ],
    tours: [
        {
            name:"Smoke + mirrors tour",
            date: new Date("2015-03-08").toISOString(),
            title:"2015-present",
            description:"At Lollapalooza is Sao Paulo, Brazil, the last date on the Into the Night Tour, the band announced a rest, and complemented saying."+`"`+"This is our last show for a  while, and had no better place to end this tour "+`"`+"[51] The conclusion of the Into the Night Tour signaled the end of the Night Visions album cycle. Lead singer Dan Reynolds joked about the end of the Night Visons cycle, saying that"+`"`+"We're always writing on the road, [so] that secound album will come, unless we die."
        }
    ],
    compositions:[
        {
            id:1,
            date: new Date("2015-04-03").toISOString(),
            compositionName:"Indian Summer",
            title:"Sam Feldt ft. Kimberly Anne - Show Me Love (EDX's Indian Summer Remix)",
            description:`"`+"Radioactive"+`"`+"is a song recorded by American rock band Imagine Dragons for their major-label debut EP Continued Silence and later on their debut studio album, Night Vision (2012), as the opening track."+` "`+"Radioactive"+`"`+" was",
            sound:182364,
            loves:10000,
            share:3000,
            comments:96,
            link:"https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
        },
        {
            id:2,
            date:new Date("2015-04-03").toISOString(),
            compositionName:"Indian Summer",
            title:"Sam Feldt ft. Kimberly Anne - Show Me Love (EDX's Indian Summer Remix)",
            description:`"`+"Radioactive"+`"`+"is a song recorded by American rock band Imagine Dragons for their major-label debut EP Continued Silence and later on their debut studio album, Night Vision (2012), as the opening track."+` "`+"Radioactive"+`"`+" was",
            sound:182364,
            loves:10000,
            share:3000,
            comments:96,
            link:"https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
        },
        {
            id:3,
            date:new Date("2015-04-03").toISOString(),
            compositionName:"Indian Summer",
            title:"Sam Feldt ft. Kimberly Anne - Show Me Love (EDX's Indian Summer Remix)",
            description:`"`+"Radioactive"+`"`+"is a song recorded by American rock band Imagine Dragons for their major-label debut EP Continued Silence and later on their debut studio album, Night Vision (2012), as the opening track."+` "`+"Radioactive"+`"`+" was",
            sound:182364,
            loves:10000,
            share:3000,
            comments:96,
            link:"https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
        }
    ]
}

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SET_SECTIONS': {
            return {
                ...state,
                sections: state.sections.concat(action.object)
            }
        }
        default:
            return state;
    }
}

export default rootReducer;