# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Attempt.destroy_all

albania = Country.create(name: 'Albania', map_id: 30)
andorra = Country.create(name: 'Andorra', map_id: 45)
austria = Country.create(name: 'Austria', map_id: 20)
belarus = Country.create(name: 'Belarus', map_id: 4)
belgium = Country.create(name: 'Belgium', map_id: 33)
bosnia = Country.create(name: 'Bosnia', map_id: 28)
bulgaria = Country.create(name: 'Bulgaria', map_id: 16)
croatia = Country.create(name: 'Croatia', map_id: 27)
cyprus = Country.create(name: 'Cyprus', map_id: 18)
czechia = Country.create(name: 'Czechia', map_id: 13)
denmark = Country.create(name: 'Denmark', map_id: 11)
estonia = Country.create(name: 'Estonia', map_id: 3)
finland = Country.create(name: 'Finland', map_id: 2)
france = Country.create(name: 'France', map_id: 43)
germany = Country.create(name: 'Germany', map_id: 19)
greece = Country.create(name: 'Greece', map_id: 25)
hungary = Country.create(name: 'Hungary', map_id: 21)
iceland = Country.create(name: 'Iceland', map_id: 31)
ireland = Country.create(name: 'Ireland', map_id: 39)
italy = Country.create(name: 'Italy', map_id: 36)
kosovo = Country.create(name: 'Kosovo', map_id: 23)
latvia = Country.create(name: 'Latvia', map_id: 5)
liechtenstein = Country.create(name: 'Liechtenstein', map_id: 42)
lithuania = Country.create(name: 'lithuania', map_id: 6)
luxumbourg = Country.create(name: 'Luxembourg', map_id: 41)
malta = Country.create(name: 'Malta', map_id: 38)
moldova = Country.create(name: 'Moldova', map_id: 8)
monaco = Country.create(name: 'Monaco', map_id: 44)
montenegro = Country.create(name: 'Montenegro', map_id: 29)
netherlands = Country.create(name: 'Netherlands', map_id: 32)
north_macedonia = Country.create(name: 'North Macedonia', map_id: 24)
norway = Country.create(name: 'Norway', map_id: 9)
poland = Country.create(name: 'Poland', map_id: 12)
portugal = Country.create(name: 'Portugal', map_id: 46)
romania = Country.create(name: 'Romania', map_id: 15)
russia = Country.create(name: 'Russia', map_id: 1)
san_marino = Country.create(name: 'San Marino', map_id: 35)
serbia = Country.create(name: 'Serbia', map_id: 22)
slovakia = Country.create(name: 'Slovakia', map_id: 14)
slovenia = Country.create(name: 'Slovenia', map_id: 26)
spain = Country.create(name: 'Spain', map_id: 47)
sweden = Country.create(name: 'Sweden', map_id: 10)
switzerland = Country.create(name: 'Switzerland', map_id: 34)
turkey = Country.create(name: 'Turkey', map_id: 17)
ukraine = Country.create(name: 'Ukraine', map_id: 7)
united_kingdom = Country.create(name: 'United Kingdom', map_id: 40)
vatican_city = Country.create(name: 'Vatican City', map_id: 37)

demo_user = User.create(username: 'Demo User')

first_attempt = Attempt.create(total_score: 0, user_id: 1)

