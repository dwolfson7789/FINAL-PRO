Name,
type("rest", museum, bars")
neighborhood,
geo location:x /y
coords,
address,
website
----

table1-user
name:string
email:string

terminal - 'rails g model User name email'

seeds file copy/paste table1-account:

Account.create!([
  {
    name:"Matt Jaikaran",
    email:"mattjaikaran@gmail.com"
}
  ])



table 2-sitch

name:string
venue_type:string
neighborhood:string
wait_time:integer
description:string
latitude:decimal
longitude:decimal
address:string
website:string
marker_symbol:string

terminal -
rails g model Sitch name venue_type neighborhood wait_time:integer description latitude:decimal longitude:decimal address website marker_symbol

--

paste into Seeds.rb -

User.delete_all
Sitch.delete_all


User.create!([
  {
    name:"Matt Jaikaran",
    email:"mattjaikaran@gmail.com"
  }
])

  Sitch.create!([
    {
      name: "Flatiron Lounge",
      venue_type: "Bar",
      neighborhood: "Flatiron",
      wait_time: "25",
      description: "Hopping but not too packed. Lots of girls",
      latitude: 40.7400378,
      longitude:-73.9953862,
      address:"37 W 19th St, New York, NY 10011",
      website:"http://flatironlounge.com/",
      marker_symbol:"B"
    },
    {
      name: "Chipotle",
      venue_type: "Restaurant",
      neighborhood: "Flatiron",
      wait_time: 15,
      description: "Chipotle too lit. Go to Tres Carnes.",
      latitude: "40.7424418",
      longitude: "-73.9964971",
      address:"680 Ave of the Americas, New York, NY 10010",
      website:"http://chipotle.com/",
      marker_symbol: "R"
    },
    {
      name: "Museum of Modern Art",
      venue_type: "Museum",
      neighborhood: "Midtown",
      wait_time: 45,
      description: "Thursday nights is where it's at. Mondays free from 6-8 too.",
      latitude: "40.7611354",
      longitude: "-73.9786598",
      address: "11 W 53rd St, New York, NY 10019",
      website: "http://www.moma.org/",
      marker_symbol: "M"
    },
  ])

then db:migrate


now making controllers.

rails g controller users index
rails g controller sitches index

-edited routes.rb
removed the get(s) and replaced with:   
  resources :sitches
  resources :users















look at julios rails api cheat sheet in desktop/GA/cheatsheets folder
done
