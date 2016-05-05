# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
User.delete_all
Sitch.delete_all

User.create!([
  {
    name:"Matt Jaikaran",
    email:"mattjaikaran@gmail.com"
  },
  {
    name:"Drew Wolfson",
    email:"drewwolfson1@gmail.com"
  },
  {
    name:"Ethan Friedman",
    email:"ethan@ga.co"
  },
  {
    name:"Syed",
    email:"syed@ga.co"
  }
])

Sitch.create!([
  {
    name: "Flatiron Lounge",
    venue_type: "Bar",
    neighborhood: "Flatiron",
    wait_time: 25,
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
    latitude: 40.7424418,
    longitude: -73.9964971,
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
    latitude: 40.7611354,
    longitude: -73.9786598,
    address: "11 W 53rd St, New York, NY 10019",
    website: "http://www.moma.org/",
    marker_symbol: "M"
  },
])
