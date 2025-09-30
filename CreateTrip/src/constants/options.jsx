export const SelectTravelList=[
    {
        id : 1,
        title : 'Just Me',
        desc : 'A sole Travels in exploration',
        icon : '✈️',
        people: '1'
    },
    {
        id : 2,
        title : 'A couple',
        desc : 'Two travel in tandem',
        icon : '🥂',
        people: '2'
    },
    {
        id : 3,
        title : 'Family',
        desc : 'A group of fun loving adventure',
        icon : '🏡',
        people: '3 to 5'
    },
    {
        id : 4,
        title : 'Friends',
        desc : 'A bunch of thrill seekers',
        icon : '⛵',
        people: '2'
    }
]

export const SelectBudgetOptions=[
    {
        id : 1,
        title : 'Cheap',
        desc : 'Stay conscious of cost',
        icon : '💵'
    },
    {
        id : 2,
        title : 'Moderate',
        desc : 'Keep cost on the average site',
        icon : '💰'
    },
    {
        id : 3,
        title : 'Luxury',
        desc : 'Dont worry about cost',
        icon : '💸'
    }
]
export const AI_PROMPT='Generate Travel Plan for Location : {location} for {totalDays} Days for {travelCompanion} with a {budget}, give me hotel options list with HotelName, Hotel address, Price,hotel image url,geo coordinates, rating, descriptions and suggest itenary with placeName,Place Details, Place Image Url, Geo Coordinates ,ticket Pricing, Time travel each of the location for {totalDays} days with each day plan with best time to visit in JSON format.'