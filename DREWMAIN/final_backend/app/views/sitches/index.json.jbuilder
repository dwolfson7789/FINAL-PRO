json.sitches @sitches do |sitch|
  json.name          sitch.name
  json.id            sitch.id
  json.venue_type    sitch.venue_type
  json.neighborhood  sitch.neighborhood
  json.wait_time     sitch.wait_time
  json.description   sitch.description
  json.latitude      sitch.latitude
  json.longitude     sitch.longitude
  json.address       sitch.address
  json.website       sitch.website
  json.marker_symbol sitch.marker_symbol
end
