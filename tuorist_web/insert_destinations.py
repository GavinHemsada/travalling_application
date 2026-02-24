import json

destinations = [
    {
        "slug": "sigiriya-rock-fortress",
        "title": "Sigiriya Rock Fortress - Ancient Palace in the Sky",
        "description_1": "A UNESCO World Heritage site, Sigiriya is a massive column of rock nearly 200 meters high. Built by King Kasyapa in the 5th century, it served as both a palace and a fortress.",
        "description_2": "The site is renowned for its ancient frescoes of maidens, the mirror wall filled with ancient graffiti, and the monumental lion paws at the entrance to the final ascent.",
        "highlight_1": "Climb the 1200 steps to the summit for breathtaking panoramic views of the jungle.",
        "highlight_2": "Admire the ancient water gardens and intricate ancient plumbing systems.",
        "highlight_3": "View the world-famous Sigiriya Frescoes painted inside a sheer rock face.",
        "highlight_4": "Walk past the towering Lion Paws terrace before the final climb.",
        "best_time": "Early morning (7:00 AM) or late afternoon to avoid the intense heat and crowds.",
        "dress_code": "Light, comfortable clothing, sunscreen, and sturdy walking shoes or sneakers are highly recommended.",
        "why_choose": "Sigiriya is often referred to as the Eighth Wonder of the World and is universally considered a must-visit for anyone traveling to Sri Lanka."
    },
    {
        "slug": "ella",
        "title": "Ella - The Mist-Covered Mountain Paradise",
        "description_1": "Ella is a small, scenic town located in the highlands of Sri Lanka. Known for its laid-back atmosphere, cool climate, and stunning views of the Ella Gap.",
        "description_2": "The region is surrounded by rolling tea plantations, cloud forests, and waterfalls, making it one of the top destinations for hiking and nature lovers.",
        "highlight_1": "Hike the easy trail up Little Adam's Peak for incredible sunrise views.",
        "highlight_2": "Watch trains pass over the iconic Nine Arches Bridge built entirely without steel.",
        "highlight_3": "Take a refreshing dip at the base of the spectacular Ravana Falls.",
        "highlight_4": "Enjoy relaxed evenings at the vibrant cafes and restaurants in Ella town.",
        "best_time": "January to May when the weather is cool, dry, and offers the clearest views.",
        "dress_code": "Layers are important. Warm clothes for chilly evenings, and comfortable hiking gear for daytime exploring.",
        "why_choose": "Ella offers the perfect mix of adventure, relaxation, breath-taking natural scenery, and a vibrant traveler community."
    },
    {
        "slug": "kandy",
        "title": "Kandy - The Cultural Capital of Sri Lanka",
        "description_1": "Kandy is a large city in central Sri Lanka. It's set on a plateau surrounded by mountains, which are home to tea plantations and biodiverse rainforests.",
        "description_2": "The city's heart is scenic Kandy Lake (Bogambara Lake), which is popular for strolling. Kandy is famously known around the world as the home of the sacred Temple of the Tooth.",
        "highlight_1": "Visit the Temple of the Sacred Tooth Relic, housing a tooth of the Buddha.",
        "highlight_2": "Stroll around the beautiful man-made Kandy Lake at the center of the city.",
        "highlight_3": "Explore the Royal Botanical Gardens in Peradeniya, home to over 4000 species of plants.",
        "highlight_4": "Witness a vibrant traditional Kandyan cultural dance performance in the evening.",
        "best_time": "December to April when the climate is cool and dry. The Esala Perahera festival usually takes place in July or August.",
        "dress_code": "Modest clothing is required for temples (shoulders and knees must be covered), and white is the preferred color.",
        "why_choose": "Kandy is the cultural and spiritual heart of Sri Lanka, offering a deep dive into the island's rich heritage and traditions."
    },
    {
        "slug": "galle-fort",
        "title": "Galle Fort - A Walk Through Colonial History",
        "description_1": "Galle Fort, in the Bay of Galle on the southwest coast of Sri Lanka, was built first in 1588 by the Portuguese, and then extensively fortified by the Dutch during the 17th century.",
        "description_2": "It is a historical, archaeological, and architectural heritage monument, which even after more than 432 years maintains a polished appearance and a vibrant, artsy atmosphere.",
        "highlight_1": "Walk the ancient ramparts for spectacular views of the Indian Ocean, especially at sunset.",
        "highlight_2": "Photograph the iconic Galle Lighthouse, one of the oldest in the country.",
        "highlight_3": "Explore the narrow streets lined with Dutch-colonial buildings, boutique shops, and cafes.",
        "highlight_4": "Visit the Dutch Reformed Church and the Historical Mansion Museum.",
        "best_time": "December to April offers the best coastal weather, but the Fort is charming year-round.",
        "dress_code": "Casual, breathable clothing. Comfortable walking shoes are essential for the cobblestone streets.",
        "why_choose": "Galle Fort uniquely blends European architectural styles with South Asian traditions, offering a relaxed and historically rich atmosphere."
    },
    {
        "slug": "yala-national-park",
        "title": "Yala National Park - Into the Wild",
        "description_1": "Yala is Sri Lanka's most visited and second-largest national park. It consists of five blocks, though only two are open to the public.",
        "description_2": "The park is renowned for its variety of wild animals. It is important for the conservation of Sri Lankan elephants, Sri Lankan leopards, and aquatic birds.",
        "highlight_1": "Embark on an exciting 4x4 jeep safari to spot the elusive Sri Lankan leopard.",
        "highlight_2": "Observe large herds of wild elephants roaming freely through the scrub jungle.",
        "highlight_3": "Spot a vast array of bird species, including majestic peacocks and eagles.",
        "highlight_4": "Experience the diverse landscapes, varying from open parkland to dense jungle.",
        "best_time": "February to June offers the best wildlife viewing as animals congregate around water sources.",
        "dress_code": "Neutral-colored, comfortable clothing. Bring a hat, sunglasses, and dust protection.",
        "why_choose": "Yala offers one of the highest leopard densities in the world, making it a premier destination for wildlife enthusiasts and photographers."
    },
    {
        "slug": "nuwara-eliya",
        "title": "Nuwara Eliya - The 'Little England' of Sri Lanka",
        "description_1": "Nuwara Eliya is a city in the tea country hills of central Sri Lanka. It is known for its temperate, cool climate and colonial-era bungalows.",
        "description_2": "The naturally landscaped Hakgala Botanical Gardens display roses and tree ferns, while monkeys and blue magpies inhabit the nearby single-tree hill and Galway's Land National Park.",
        "highlight_1": "Visit a working tea factory to learn about the production of world-famous Ceylon tea.",
        "highlight_2": "Enjoy a scenic boat ride or peaceful walk around Lake Gregory.",
        "highlight_3": "Admire the colonial architecture of the Grand Hotel and the Hill Club.",
        "highlight_4": "Take a stroll through the vibrant Victoria Park in the center of town.",
        "best_time": "February to May, with April being the peak season for the Nuwara Eliya season festivals.",
        "dress_code": "Warm clothing is essential, especially in the evenings. Jackets and sweaters are recommended.",
        "why_choose": "Nuwara Eliya offers a unique, cool escape with stunning landscapes and a fascinating glimpse into Sri Lanka's colonial tea-growing history."
    },
    {
        "slug": "mirissa",
        "title": "Mirissa - Sun, Surf, and Majestic Whales",
        "description_1": "Mirissa is a small town on the south coast of Sri Lanka. Its beach and nightlife make it a popular tourist destination, but it's most famous for its marine life.",
        "description_2": "Mirissa is one of the best places in the world to reliably see blue whales, sperm whales, and dolphins in their natural habitat.",
        "highlight_1": "Embark on an early morning whale-watching cruise to see majestic blue whales.",
        "highlight_2": "Relax on the pristine, crescent-shaped sandy beach and enjoy fresh seafood.",
        "highlight_3": "Climb Coconut Tree Hill for a breathtaking sunset over the Indian Ocean.",
        "highlight_4": "Enjoy the vibrant yet laid-back beachside nightlife.",
        "best_time": "November to April offers the calmest seas for whale watching.",
        "dress_code": "Beachwear and light, casual clothing. Sunscreen and hats are must-haves for boat trips.",
        "why_choose": "Mirissa is the perfect destination for marine life enthusiasts and those seeking a picturesque, relaxed beach town vibe."
    },
    {
        "slug": "arugam-bay",
        "title": "Arugam Bay - Sri Lanka’s Surfing Capital",
        "description_1": "Located on the dry and isolated east coast, Arugam Bay is a moon-shaped curl of soft sand that's become a major destination for surfers worldwide.",
        "description_2": "Beyond the breaks, the area offers access to untouched national parks, ancient ruins, and a wonderfully relaxed, bohemian atmosphere.",
        "highlight_1": "Catch some of the best waves in the world at the famous Main Point break.",
        "highlight_2": "Take a lagoon safari in Pottuvil to spot crocodiles and abundant birdlife.",
        "highlight_3": "Visit the nearby Kumana National Park for exceptional bird watching.",
        "highlight_4": "Enjoy the laid-back cafes and reggae bars that line the main street.",
        "best_time": "May to September, when the southeast monsoon creates perfect surfing conditions.",
        "dress_code": "Casual beachwear, surf gear, and light clothing.",
        "why_choose": "Arugam Bay is the ultimate destination for surfers and backpackers looking for great waves and a vibrant, chilled-out community."
    },
    {
        "slug": "trincomalee",
        "title": "Trincomalee - Pristine Beaches and Deep History",
        "description_1": "Trincomalee, built on a peninsula on the east coast, boasts one of the world's finest natural deep-water harbors.",
        "description_2": "It is home to the stunning Nilaveli and Uppuveli beaches, historic forts, and significant Hindu and Buddhist temples, offering a mix of culture and absolute relaxation.",
        "highlight_1": "Relax on the powdery white sands of Nilaveli Beach.",
        "highlight_2": "Snorkel or dive at Pigeon Island National Park, teeming with coral and marine life.",
        "highlight_3": "Visit the historic Koneswaram Temple perched high above the ocean.",
        "highlight_4": "Explore Fort Frederick, a Portuguese-built fort still in use today.",
        "best_time": "May to October is ideal for beach activities and diving on the east coast.",
        "dress_code": "Light beachwear. Modest dress required when visiting temples.",
        "why_choose": "Trincomalee offers some of Sri Lanka's most beautiful, unspoiled beaches combined with profound historical and religious significance."
    },
    {
        "slug": "anuradhapura",
        "title": "Anuradhapura - The Ancient Sacred City",
        "description_1": "Anuradhapura is one of the ancient capitals of Sri Lanka, famous for its well-preserved ruins of ancient Lankan civilization.",
        "description_2": "It is an unmissable destination for those interested in history and Buddhism, housing sprawling ancient dagobas, monasteries, and palaces.",
        "highlight_1": "Pay respects at the Jaya Sri Maha Bodhi, the oldest historically authenticated tree in the world.",
        "highlight_2": "Marvel at the massive Ruwanwelisaya stupa, an architectural marvel.",
        "highlight_3": "Explore the expansive ruins of the Abhayagiri Monastery complex.",
        "highlight_4": "Rent a bicycle to leisurely navigate the extensive archaeological park.",
        "best_time": "May to September. Avoid full moon poya days if you want to avoid massive crowds of pilgrims.",
        "dress_code": "Strictly modest clothing (covering shoulders and knees) preferably white, and easy-to-remove footwear for temple visits.",
        "why_choose": "Anuradhapura provides a profound look into Sri Lanka's glorious ancient past and its deep-rooted Buddhist heritage."
    },
    {
        "slug": "polonnaruwa",
        "title": "Polonnaruwa - The Medieval Capital",
        "description_1": "The second most ancient of Sri Lanka's kingdoms, Polonnaruwa was first declared the capital city by King Vijayabahu I.",
        "description_2": "Today, it is a UNESCO World Heritage site known for its extensive, remarkably preserved ruins of palaces, bathing pools, and magnificent Buddha statues.",
        "highlight_1": "Witness the breathtaking rock-cut Buddha statues at the Gal Vihara.",
        "highlight_2": "Explore the ruins of the Royal Palace and the Audience Hall.",
        "highlight_3": "Visit the Quadrangle, the most concentrated collection of ancient buildings.",
        "highlight_4": "Cycle around the massive Parakrama Samudra, a vast ancient reservoir.",
        "best_time": "May to October. Early morning or late afternoon visits are best to avoid the midday sun.",
        "dress_code": "Modest clothing for religious sites. Comfortable walking shoes and sun protection are necessary.",
        "why_choose": "Polonnaruwa offers a more compact and arguably better-preserved ancient city experience compared to Anuradhapura."
    },
    {
        "slug": "dambulla-cave-temple",
        "title": "Dambulla Cave Temple - The Golden Rock Shrine",
        "description_1": "A sacred pilgrimage site for 22 centuries, this cave monastery is the largest, best-preserved cave-temple complex in Sri Lanka.",
        "description_2": "The Buddhist mural paintings (covering an area of 2,100 square meters) are of particular importance, as are the 157 statues.",
        "highlight_1": "Admire the intricate ceiling murals tracing the life of Buddha.",
        "highlight_2": "See the massive 14-meter reclining Buddha carved out of rock.",
        "highlight_3": "Enjoy the panoramic views of the surrounding countryside from the rock summit.",
        "highlight_4": "Visit the Golden Temple and the Buddhist Museum at the base.",
        "best_time": "Early morning or late afternoon to avoid the heat during the climb.",
        "dress_code": "Shoulders and knees must be covered. Hats must be removed, and shoes left at the entrance.",
        "why_choose": "Dambulla offers an awe-inspiring display of ancient religious art and devotion in a visually stunning setting."
    },
    {
        "slug": "bentota",
        "title": "Bentota - The Water Sports Capital",
        "description_1": "Bentota is a coastal town in Sri Lanka, located 65 kilometers south of Colombo. It offers a unique setting where a lagoon meets the Indian Ocean.",
        "description_2": "It is the prime destination on the island for water sports enthusiasts, while also offering luxury resorts and beautiful, palm-fringed beaches.",
        "highlight_1": "Engage in thrilling water sports like jet skiing, windsurfing, and wakeboarding.",
        "highlight_2": "Take a tranquil boat safari through the mangroves of the Madu River.",
        "highlight_3": "Visit the brief garden, the beautiful former home of landscape architect Bevis Bawa.",
        "highlight_4": "Relax at high-end spas and luxury Ayurvedic retreats.",
        "best_time": "November to April for the best beach and ocean conditions.",
        "dress_code": "Beachwear and casual clothing. Active wear if participating in water sports.",
        "why_choose": "Bentota is the perfect blend of high-adrenaline water sports and luxurious beachside relaxation."
    },
    {
        "slug": "hikkaduwa",
        "title": "Hikkaduwa - Corals, Turtles, and Nightlife",
        "description_1": "Hikkaduwa is a small town on the south coast of Sri Lanka. It was the country's first beach resort and remains extremely popular.",
        "description_2": "It is famous for its coral sanctuary, consistent surfing waves, and a lively atmosphere with numerous beach bars and seafood restaurants.",
        "highlight_1": "Snorkel in the shallow waters of the Hikkaduwa Coral Sanctuary.",
        "highlight_2": "Interact with giant sea turtles that frequently visit the shoreline.",
        "highlight_3": "Catch good, consistent waves perfect for beginner and intermediate surfers.",
        "highlight_4": "Enjoy the vibrant beachside restaurant and nightlife scene.",
        "best_time": "November to April provides the best snorkeling visibility and surfing conditions.",
        "dress_code": "Casual beachwear. Snorkel gear is useful (though easily rentable locally).",
        "why_choose": "Hikkaduwa offers a lively, classic beach holiday experience with easy access to incredible marine life."
    },
    {
        "slug": "udawalawe",
        "title": "Udawalawe - The Elephant Sanctuary",
        "description_1": "Udawalawe National Park lies on the boundary of Sri Lanka's wet and dry zones. The park was created to provide a sanctuary for wild animals displaced by the construction of the Udawalawe Reservoir.",
        "description_2": "It is arguably the best place in Sri Lanka to see wild elephants year-round, thanks to the vast reservoir that constantly attracts them.",
        "highlight_1": "Take a jeep safari for guaranteed sightings of wild elephants.",
        "highlight_2": "Visit the Udawalawe Elephant Transit Home, which rehabilitates orphaned elephant calves.",
        "highlight_3": "Spot a rich variety of birdlife, including birds of prey and water birds.",
        "highlight_4": "Enjoy the beautiful, open landscape surrounding the massive reservoir.",
        "best_time": "Year-round, but May to September is particularly good for elephant sightings.",
        "dress_code": "Neutral-colored clothing, hats, and sunscreen for the safari.",
        "why_choose": "If seeing wild elephants up close in their natural habitat is your priority, Udawalawe is unmatched."
    },
    {
        "slug": "jaffna",
        "title": "Jaffna - The Vibrant Northern Capital",
        "description_1": "Jaffna, the capital city of the Northern Province, offers a distinctively different experience from the rest of Sri Lanka, deeply influenced by Tamil culture.",
        "description_2": "After years of isolation, it's opening up, revealing gorgeous colonial architecture, fascinating temples, and incredible, spicy cuisine.",
        "highlight_1": "Explore the impressive star-shaped Jaffna Fort built by the Dutch.",
        "highlight_2": "Visit the vibrant and incredibly detailed Nallur Kandaswamy Hindu Temple.",
        "highlight_3": "Take a boat trip to the remote islands of Delft and Nainativu.",
        "highlight_4": "Sample unique, fiery Jaffna cuisine, known for its incredible seafood dishes.",
        "best_time": "January to May provides dry weather, though the region is accessible year-round.",
        "dress_code": "Modest clothing. Men must remove shirts to enter certain Hindu temple sanctums.",
        "why_choose": "Jaffna offers an authentic, off-the-beaten-path cultural experience and cuisine quite different from the southern regions."
    },
    {
        "slug": "horton-plains",
        "title": "Horton Plains - The High-Altitude Wilderness",
        "description_1": "Horton Plains is a protected national park located in the central highlands. This plateau at an altitude of 2,100–2,300 meters is rich in biodiversity.",
        "description_2": "The landscape consists of wild grasslands interspersed with patches of thick montane cloud forests. It is a highly popular destination for trekkers.",
        "highlight_1": "Hike to the dramatic 'World’s End', a sheer drop of over 800 meters.",
        "highlight_2": "Trek to the beautiful Baker's Falls.",
        "highlight_3": "Spot herds of Sambar deer grazing in the plains.",
        "highlight_4": "Enjoy the unique, surreal atmosphere of the misty cloud forests.",
        "best_time": "January to March, arriving before 9 AM to avoid the mist obscuring World's End.",
        "dress_code": "Sturdy walking shoes, leeches socks, and very warm clothing (it can be freezing early morning).",
        "why_choose": "Horton Plains offers one of Sri Lanka's most iconic and otherworldly hikes."
    },
    {
        "slug": "kataragama",
        "title": "Kataragama - The Sacred Pilgrimage Town",
        "description_1": "Kataragama is a pilgrimage town sacred to Buddhist, Hindu, and indigenous Vedda people of Sri Lanka. People from South India also go there to worship.",
        "description_2": "The town comes alive with devotion, particularly during the evening poojas (offerings) and the grand July festival, focusing on the deity Skanda-Murukan.",
        "highlight_1": "Experience the intense devotion and vibrant energy of the evening pooja.",
        "highlight_2": "Visit the ancient Kiri Vehera stupa located near the main temple.",
        "highlight_3": "Observe the daily rituals of pilgrims bathing in the Menik Ganga (river).",
        "highlight_4": "Witness the spectacular Esala Perahera festival if visiting in July/August.",
        "best_time": "July and August for the vibrant festivals, or year-round for an authentic spiritual experience.",
        "dress_code": "Strictly modest clothing, predominantly white, required for all temple visits.",
        "why_choose": "Kataragama offers a rare and powerful glimpse into the unifying spiritual practices of Sri Lanka's different faiths."
    },
    {
        "slug": "negombo",
        "title": "Negombo - The Coastal Gateway",
        "description_1": "Located just a short drive from the international airport, Negombo is often the first or last stop for travelers.",
        "description_2": "It is a bustling coastal city known for its centuries-old fishing industry, wide sandy beaches, and significant Catholic heritage, earning it the nickname 'Little Rome'.",
        "highlight_1": "Visit the bustling early morning fish market (Lellama).",
        "highlight_2": "Take a boat ride along the historic Dutch Canal.",
        "highlight_3": "Relax on the broad, sandy stretches of Negombo Beach.",
        "highlight_4": "Admire the ornate Catholic churches dotting the city.",
        "best_time": "December to April for the best beach weather.",
        "dress_code": "Casual daywear and beachwear. Modest dress when entering churches.",
        "why_choose": "Negombo is a convenient, culturally interesting, and relaxing beachstop close to the airport."
    },
    {
        "slug": "colombo",
        "title": "Colombo - The Vibrant Commercial Capital",
        "description_1": "Colombo is the commercial capital and largest city of Sri Lanka. It is a bustling, cosmopolitan metropolis that blends its colonial past with rapid modern development.",
        "description_2": "The city offers an array of experiences from exploring historic forts and vibrant street markets to enjoying high-end dining and shopping.",
        "highlight_1": "Stroll down Galle Face Green at sunset and sample local street food.",
        "highlight_2": "Explore the historic colonial architecture in the Fort district.",
        "highlight_3": "Visit the striking Gangaramaya Temple and Seema Malaka on Beira Lake.",
        "highlight_4": "Shop and dine at the beautifully restored Dutch Hospital Precinct.",
        "best_time": "January to March for dry weather, though it's a bustling destination year-round.",
        "dress_code": "Smart-casual for dining and shopping. Modest clothing for temple visits.",
        "why_choose": "Colombo provides a modern, energetic counterpoint to Sri Lanka's ancient sites and beaches, offering excellent dining, shopping, and urban exploring."
    }
]

def update_files():
    # Update en.json
    with open('messages/en.json', 'r', encoding='utf-8') as f:
        data_en = json.load(f)
        
    for dest in destinations:
        data_en["DestinationDetails"][dest["slug"]] = dest
        
    with open('messages/en.json', 'w', encoding='utf-8') as f:
        json.dump(data_en, f, indent=2, ensure_ascii=False)
        
    # Update si.json
    with open('messages/si.json', 'r', encoding='utf-8') as f:
        data_si = json.load(f)
        
    for dest in destinations:
        data_si["DestinationDetails"][dest["slug"]] = dest
        
    with open('messages/si.json', 'w', encoding='utf-8') as f:
        json.dump(data_si, f, indent=2, ensure_ascii=False)
        
    print("All JSON files updated successfully!")

update_files()
