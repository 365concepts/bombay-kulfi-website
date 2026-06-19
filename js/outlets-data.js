/* ==========================================================================
   Bombay Kulfi Ice Creams — Outlet Directory
   Source: Store Locator Google Sheet (updated June 2025)
   Zones: south | north | east | west
   ========================================================================== */

const BK_OUTLETS = [
  {
    name: 'R.S. Puram', city: 'Coimbatore', state: 'Tamil Nadu', zone: 'south',
    address: '67, Located in Canteen Coimbatore, Venkatasamy Rd W, Near Green Trends, R.S. Puram, Coimbatore, Tamil Nadu 641002',
    maps: 'https://maps.app.goo.gl/Pkfz1EhDSDTMZ3NDA', status: 'Open Now',
    lat: 11.02, lng: 76.96
  },
  {
    name: 'Saibaba Colony', city: 'Coimbatore', state: 'Tamil Nadu', zone: 'south',
    address: 'Shop No. 37/54, Ground floor, Bharathi Park, 7th Cross Road, Saibaba Colony, 641043',
    maps: 'https://maps.app.goo.gl/c3PKf7pB1y8U2TTt7', status: 'Open Now',
    lat: 11.0082, lng: 76.9708
  },
  {
    name: 'Tiruppur', city: 'Tiruppur', state: 'Tamil Nadu', zone: 'south',
    address: 'Shop No.337, Avinashi - Tiruppur Road, Near Federal Bank, Bungalow stop, Ganga Nagar, Ramaiya Colony, Tiruppur, 641603',
    maps: 'https://maps.app.goo.gl/s9Prr2SMhWhBFibu8', status: 'Open Now',
    lat: 11.11, lng: 77.34
  },
  {
    name: 'Kathalbari', city: 'Darbhanga', state: 'Bihar', zone: 'east',
    address: 'Shop No.78, Near IT chowk, Rajkumarganj, Kathalbari, Darbhangar, 846004',
    maps: 'https://maps.app.goo.gl/wruQRXs56rmP76nX8', status: 'Open Now',
    lat: 26.15, lng: 85.9
  },
  {
    name: 'Aghauli', city: 'Mirzapur', state: 'Uttar Pradesh', zone: 'north',
    address: 'Shop No.90, Police Line Rd, Opposite Calcutta steel, Aghauli, Mirzapur, Uttar Pradesh, 231001',
    maps: 'https://maps.app.goo.gl/MtNZ7GhHaM5zFC1i8', status: 'Open Now',
    lat: 25.15, lng: 82.57
  },
  {
    name: 'Saraidhela', city: 'Dhanbad', state: 'Jharkhand', zone: 'east',
    address: 'LG-01, Beside Goods \'n FoodsThe Hub, Saraidhela, Dhanbad, Jharkhand 828127',
    maps: 'https://maps.app.goo.gl/nUUHTgE9A6pF2LLN7', status: 'Open Now',
    lat: 23.8, lng: 86.43
  },
  {
    name: 'NRT Nagar', city: 'Theni', state: 'Tamil Nadu', zone: 'south',
    address: 'Shop No.44, Old Government Hospital Road, NRT Nagar, Theni, Tamil Nadu 625531',
    maps: 'https://maps.app.goo.gl/3ymrxd1uZkN2Rtd37', status: 'Open Now',
    lat: 10.01, lng: 77.48
  },
  {
    name: 'Bikaner', city: 'Bikaner', state: 'Rajasthan', zone: 'north',
    address: 'Shop No.90, Kothari Hospital Road, Outside Jassusar Gate. Vaidya Mangaram Colony, Bikaner, Rajasthan 334001',
    maps: 'https://maps.app.goo.gl/pt2B5KcyM4F59w9g9', status: 'Open Now',
    lat: 28.02, lng: 73.31
  },
  {
    name: 'Lulu Mall', city: 'Bengaluru', state: 'Karnataka', zone: 'south',
    address: 'Lulu Mall, Second Floor, Old Mysore Road, Magadi Road Area, Bengaluru, Karnataka 560023',
    maps: 'https://maps.app.goo.gl/E7gMFQ63KpEi9nEQ8', status: 'Open Now',
    lat: 12.97, lng: 77.59
  },
  {
    name: 'Teacher\'s Colony', city: 'Vijayawada', state: 'Andhra Pradesh', zone: 'south',
    address: 'Manikanta Towers, Fun Time Road Club,D.No. 59A-8-15, Plot no.111, Teacher\'s Colony, Vijayawada, Andhra Pradesh 520008',
    maps: 'https://maps.app.goo.gl/gZABaeqbC3xjSVwn9', status: 'Open Now',
    lat: 16.51, lng: 80.65
  },
  {
    name: 'Kidwaipuri', city: 'Patna', state: 'Bihar', zone: 'east',
    address: 'SHOP NO.8, YOGENDRA COMPLEX34, Shri Brij Bihari Prasad Path, Kidwaipuri, Patna, Bihar 800001',
    maps: 'https://maps.app.goo.gl/2FBVyaqk5yuwPbXFA', status: 'Open Now',
    lat: 25.61, lng: 85.14
  },
  {
    name: 'Danapur', city: 'Patna', state: 'Bihar', zone: 'east',
    address: 'Aashray Vihar Colony, Bailey Road, Near Capital Suzuki Bike Showroom, Saguna More, Danapur, Patna, Bihar 801503',
    maps: 'https://maps.app.goo.gl/KhxuT6YsAsbwS8TK6', status: 'Open Now',
    lat: 25.5982, lng: 85.1508
  },
  {
    name: 'Satsang Gate', city: 'Deoghar', state: 'Jharkhand', zone: 'east',
    address: 'Satsang Gate, Main Road, Deoghar, Jharkhand 814112',
    maps: 'https://maps.app.goo.gl/trXaaKrJJ7b1N5g98', status: 'Open Now',
    lat: 24.48, lng: 86.7
  },
  {
    name: 'Golden Temple Road', city: 'Amritsar', state: 'Punjab', zone: 'north',
    address: 'Dharam Singh Market 8, Golden Temple Road, Town Hall, Katra Ahluwalia, Amritsar, Punjab 143001',
    maps: 'https://maps.app.goo.gl/DuLzhkgf3mWvm26U8', status: 'Open Now',
    lat: 31.63, lng: 74.87
  },
  {
    name: 'Bhowanipore', city: 'Kolkata', state: 'West Bengal', zone: 'east',
    address: '40a, Chakraberia Road NorthMadan Mohan Malaviya Sarani, Jadubabur Bazar, Bhowanipore, Kolkata, West Bengal700020',
    maps: 'https://maps.app.goo.gl/Ym9MpaoBAAaeaFpQ6', status: 'Open Now',
    lat: 22.57, lng: 88.36
  },
  {
    name: 'Anna Nagar', city: 'Chennai', state: 'Tamil Nadu', zone: 'south',
    address: 'Ac-5, Ground Floor, Second Avenue, Anna Nagar, Chennai, Tamil Nadu 600040',
    maps: 'https://maps.app.goo.gl/Nd6fHut9SCptsKNW9', status: 'Open Now',
    lat: 13.08, lng: 80.27
  },
  {
    name: 'Indira Nagar', city: 'Chennai', state: 'Tamil Nadu', zone: 'south',
    address: '4/2, 10th Cross Street, Indira Nagar, Chennai, Tamil Nadu 600020',
    maps: 'https://maps.app.goo.gl/9LHW5Wg834tyUvFa7', status: 'Open Now',
    lat: 13.0682, lng: 80.2808
  },
  {
    name: 'Vepery', city: 'Chennai', state: 'Tamil Nadu', zone: 'south',
    address: '36/1 Mahaveer Colony EVK, Sampath Road, Vepery, Chennai, Tamil Nadu 600007',
    maps: 'https://maps.app.goo.gl/bDgXAw9hVGXp2Abg9', status: 'Open Now',
    lat: 13.0817, lng: 80.2501
  },
  {
    name: 'Temple Alwal Road', city: 'Hyderabad', state: 'Telangana', zone: 'south',
    address: 'Temple Alwal Road, Old AlwalBeside True Value, Near Ambedkar Statue, Secunderabad, Telangana 500010',
    maps: 'https://maps.app.goo.gl/f626poy1zU2CSFAj9', status: 'Open Now',
    lat: 17.38, lng: 78.49
  },
  {
    name: 'Vallabh Vidyanagar', city: 'Anand', state: 'Gujarat', zone: 'west',
    address: 'Shop No.14, Sardar Patel Rd, Ketivadi, Vallabh Vidyanagar, Anand, Gujarat 388120',
    maps: 'https://maps.app.goo.gl/jGqgZEN7HeDJWHx9A', status: 'Open Now',
    lat: 22.56, lng: 72.95
  },
  {
    name: 'Lake Gardens', city: 'Kolkata', state: 'West Bengal', zone: 'east',
    address: '367, Lake Gardens, Ground Floor, Near Radharam Balaram Mullick, Prince Anwar Shah Road, Kolkata, West Bengal 700045',
    maps: 'https://maps.app.goo.gl/btv3M3ydkbBsS8VN9', status: 'Open Now',
    lat: 22.5582, lng: 88.3708
  },
  {
    name: 'Dharampeth', city: 'Nagpur', state: 'Maharashtra', zone: 'west',
    address: '76 buty plots, Dharampeth, Nagpur, Maharashtra 440010',
    maps: 'https://maps.app.goo.gl/SBjCKg6jhif7ptbb8', status: 'Open Now',
    lat: 21.15, lng: 79.09
  },
  {
    name: 'Sector 120', city: 'Noida', state: 'Uttar Pradesh', zone: 'north',
    address: 'Kiosk No.7, Ground Floor, Central Market, Sector 120, Noida, Uttar Pradesh 201301',
    maps: 'https://maps.app.goo.gl/zGFuqCc1JMWyN3Zy5', status: 'Open Now',
    lat: 28.57, lng: 77.33
  },
  {
    name: 'Sardarpura', city: 'Jodhpur', state: 'Rajasthan', zone: 'north',
    address: 'Plot no 399, Shop No 2, first C Road, Sardarpura, Jodhpur, Rajasthan 342003',
    maps: 'https://maps.app.goo.gl/LjEo1CHk4PYo9Dgj8', status: 'Open Now',
    lat: 26.28, lng: 73.02
  },
  {
    name: 'Bangur Avenue', city: 'Kolkata', state: 'West Bengal', zone: 'east',
    address: 'Shop no. 2, 135 Block A, Bangur Avenue, Opposite Reliance Fresh, Kolkata, West Bengal 700055',
    maps: 'https://maps.app.goo.gl/PtGiwav7BgBhhsaG7', status: 'Open Now',
    lat: 22.5717, lng: 88.3401
  },
  {
    name: 'Surampatti Nall Road', city: 'Erode', state: 'Tamil Nadu', zone: 'south',
    address: '310 A, EVN Road, Surampatti Nall Road, Near Vallampuri Selva VinayagarTemple, Erode, Tamil Nadu638009',
    maps: 'https://maps.app.goo.gl/Tyk7GxsqT91yZnd79', status: 'Open Now',
    lat: 11.34, lng: 77.72
  },
  {
    name: 'Uchakkada', city: 'Uchakkada', state: 'Kerala', zone: 'south',
    address: 'Shop No.16-215/1, Pozhiyoor Roadopposite Gopus Fuels, Uchakkada, Thiruvananthapuram, Kerala 695506',
    maps: 'https://maps.app.goo.gl/sDuna8sTRQDyQLY18', status: 'Open Now',
    lat: 8.4, lng: 77.01
  },
  {
    name: 'Hanumangarh', city: 'Hanumangarh', state: 'Rajasthan', zone: 'north',
    address: 'Shop No.20, Abohar - Hanumangarh Rd, Satipura Bypass Rd, Opposite Model Town Enclave, Hanumangarh, Rajasthan 335512',
    maps: 'https://maps.app.goo.gl/U3VR37DZv4UhSNiM7', status: 'Open Now',
    lat: 29.58, lng: 74.32
  },
  {
    name: 'Vadavalli', city: 'Coimbatore', state: 'Tamil Nadu', zone: 'south',
    address: 'Shop no: 8, Devasthana Building, Maruthamalai Main road, Near Sree Daksha\'s Atulaniya Apartment, Vadavalli, Coimbatore, Tamil Nadu 641041',
    maps: 'https://maps.app.goo.gl/bmogzw9kCV4LNVgW6', status: 'Open Now',
    lat: 11.0217, lng: 76.9401
  },
  {
    name: 'Whitefield', city: 'Bengaluru', state: 'Karnataka', zone: 'south',
    address: 'Pebble No. 3, Essensai 067, Whitefield - Hoskote Road, Kanamangala, Bengaluru, Karnataka 560067',
    maps: 'https://maps.app.goo.gl/sqzrCsVmgfSRsknW8', status: 'Open Now',
    lat: 12.9582, lng: 77.6008
  },
  {
    name: 'Churchgate', city: 'Mumbai', state: 'Maharashtra', zone: 'west',
    address: 'Shop no 18, Eros Theater Bldg, J.T.Road, Located in-La Glace Creamery, Churchgate, Mumbai, Maharashtra 400020',
    maps: 'https://maps.app.goo.gl/hsopjEkVCP6zxrf36', status: 'Open Now',
    lat: 19.08, lng: 72.88
  },
  {
    name: 'Wakad', city: 'Pune', state: 'Maharashtra', zone: 'west',
    address: 'Shop no 6, Snehangan A +B Residency, Green Dr Road, Shankar Kalat Nagar ,Near Euro School, Wakad, Pimpri Chinchwad, Pune, Maharashtra 411057',
    maps: 'https://maps.app.goo.gl/jhQ9RdnTcU78CZQm8', status: 'Open Now',
    lat: 18.52, lng: 73.86
  },
  {
    name: 'Kharadi', city: 'Pune', state: 'Maharashtra', zone: 'west',
    address: 'Shop No. 15, Clover Galleria, Survey No. 59 & Hissa No. 3, Fountain Road, Eon Free Zone. Kharadi, Pune, Maharashtra 411014',
    maps: 'https://maps.app.goo.gl/ufSYbVhZaHrvKMe86', status: 'Open Now',
    lat: 18.5082, lng: 73.8708
  },
  {
    name: 'Ujjain', city: 'Ujjain', state: 'Madhya Pradesh', zone: 'west',
    address: 'Shop No. 26/1-26/2, Ground Floor, Madanlal Sharma Marg, Kharakua Colony, Ujjain, Madhya Pradesh 456006',
    maps: 'https://maps.app.goo.gl/DUNZVU4XjpbUt9QL9', status: 'Coming Soon',
    lat: 23.18, lng: 75.78
  },
  {
    name: 'Pathankot', city: 'Pathankot', state: 'Punjab', zone: 'north',
    address: 'Shop No.90, Ground Floor, NH 44, Opposite to Rudransh Fuels Indian Oil, Pathankot, Punjab145001',
    maps: 'https://maps.app.goo.gl/2qu2Yrazri67zES48', status: 'Coming Soon',
    lat: 32.27, lng: 75.65
  },
  {
    name: 'Ulkanagari', city: 'Chhatrapati Sambhajinagar', state: 'Maharashtra', zone: 'west',
    address: 'Adinath Presidio, Shop no 2, Golvalkar Guruji MargOpposite Renuka Gas Agency, Shivaji Nagar, Garkheda Area, Ulkanagari Chhatrapati Sambhajinagar, Maharashtra 431009',
    maps: 'https://maps.app.goo.gl/mRtGfDKU2ehrje8i9', status: 'Open Now',
    lat: 19.88, lng: 75.34
  },
  {
    name: 'New City Light Road', city: 'Surat', state: 'Gujarat', zone: 'west',
    address: 'Shop No. 5, Ground Floor, Oberon Business Complex, New City Light Road, Surat, Gujarat395017',
    maps: 'https://maps.app.goo.gl/DrxfGHLVYPPvaiBX7', status: 'Open Now',
    lat: 21.17, lng: 72.83
  },
  {
    name: 'Elan Epic Mall', city: 'Gurugram', state: 'Haryana', zone: 'north',
    address: 'Shop No. TF-K05 and TG-K06, Elan Epic MallFood Court, 3rd Floor, Sector 70, Gurugram, Haryana 122101',
    maps: 'https://maps.app.goo.gl/5yprYqPXd4nwSWRL7', status: 'Open Now',
    lat: 28.46, lng: 77.03
  },
  {
    name: 'DevGn Cinex (Epic Mall)', city: 'Gurugram', state: 'Haryana', zone: 'north',
    address: 'Kiosk No 4,Outside Audi No: 2 of Devgn CineX, 3rd floorElan Epic Mall, Sector 70, GurugramHaryana122101',
    maps: 'https://maps.app.goo.gl/5ZguZSnKwfmxbRaD7', status: 'Open Now',
    lat: 28.4482, lng: 77.0408
  },
  {
    name: 'Bhilai', city: 'Bhilai', state: 'Chhattisgarh', zone: 'east',
    address: 'Unit No.76-A, Baba Barfani Complex, Junwani Rd, Opposite Crossroads, Kohka Housing Board, Kohka, Bhilai, Chhattisgarh 490023',
    maps: 'https://maps.app.goo.gl/Zxn9hQq6i42RV5kW6', status: 'Open Now',
    lat: 21.21, lng: 81.38
  },
  {
    name: 'Kapali Mall', city: 'Bengaluru', state: 'Karnataka', zone: 'south',
    address: 'Kapali Mall, 2nd Floor, Nataka Rathana, Gubbi Veeranna Road, Near Priyadarshini Restaurant, Gandhi Nagar, Bengaluru, Karnataka 560064',
    maps: 'https://maps.app.goo.gl/c37zSKMp4ydWo2sm9', status: 'Open Now',
    lat: 12.9717, lng: 77.5701
  },
  {
    name: 'Phursungi', city: 'Pune', state: 'Maharashtra', zone: 'west',
    address: 'Shop No. 07, NH 965, Sr.No. 181, Vishnu Greens, opp. to Power House Phursungi, Suresh Nagar, Hadapsar, Pune, Maharashtra 412308',
    maps: 'Bombay Kulfi Ice Creams - Phursungi', status: 'Open Now',
    lat: 18.5217, lng: 73.8401
  },
  {
    name: 'Ravet', city: 'Pune', state: 'Maharashtra', zone: 'west',
    address: 'S.B. Patil Road, Survey Number 93, Part 3/3, Near Irani Cafe, Opposite Yashada Windsong Building, Ravet, Pune, Maharashtra 412101',
    maps: 'https://maps.app.goo.gl/fBdf5RuNYBYDzhv3A', status: 'Open Now',
    lat: 18.5347, lng: 73.879
  },
  {
    name: 'Vidhyanagar Road', city: 'Anand', state: 'Gujarat', zone: 'west',
    address: 'Shop No-1, A.K Foodies, Anand Vidhyanagar Road, Opp. Town Hall, Beside: The Tazza Pizza, Anand, Gujarat 388001',
    maps: 'https://maps.app.goo.gl/ttZNky6r6uwVPzxYA', status: 'Open Now',
    lat: 22.5482, lng: 72.9608
  },
  {
    name: 'Moshi', city: 'Pune', state: 'Maharashtra', zone: 'west',
    address: 'Shop no. 2, A Wing, Ground floor, Shankeshwar Pride CHS, Borhade Wadi, Shiv Road, Below Star Speciality hospital, Moshi, Pune, Maharashtra 411070',
    maps: 'https://maps.app.goo.gl/SpHCpxsdnDq7ps2e8', status: 'Open Now',
    lat: 18.4924, lng: 73.8552
  },
  {
    name: 'Ahilyanagar', city: 'Ahilyanagar', state: 'Maharashtra', zone: 'west',
    address: 'Shop no. 3, Shivtej Apartment, Gulmohar Road, Near amrapali garden, Savedi Ahilyanagar, Maharashtra 414003',
    maps: 'https://maps.app.goo.gl/fvm7NHZQDsDrr6WH8', status: 'Open Now',
    lat: 19.09, lng: 74.74
  },
  {
    name: 'Indrayani Nagar', city: 'Pune', state: 'Maharashtra', zone: 'west',
    address: 'Shop No. 2, Glorious Park, Sector No. 3, Vaishno Mata Marg, Near Farmer\'s Kitchen, Indrayani Nagar, Bhosari, Pimpri-Chinchwad, Pune, Maharashtra 411039',
    maps: 'https://maps.app.goo.gl/swD3P6wMrWJsSgWAA', status: 'Open Now',
    lat: 18.5469, lng: 73.8427
  },
  {
    name: 'Howrah', city: 'Howrah', state: 'West Bengal', zone: 'east',
    address: '24/25, Dobson Road, Near Howrah AC marketBabudanga, Mali Panchghara, Howrah, West Bengal 711101',
    maps: 'https://maps.app.goo.gl/cT4kMpRkGCwAFikHA', status: 'Open Now',
    lat: 22.59, lng: 88.31
  },
  {
    name: 'Pimple Saudagar', city: 'Pune', state: 'Maharashtra', zone: 'west',
    address: 'Shop no: 3, Sai Angan Building, Kunal Icon Road, Pimple Saudagar, Pune, Maharastra 411027',
    maps: 'https://maps.app.goo.gl/RmHxY5M3srrVd6B68', status: 'Open Now',
    lat: 18.5109, lng: 73.8948
  },
  {
    name: 'Jabli', city: 'Solan', state: 'Himachal Pradesh', zone: 'north',
    address: 'Shop Number 1, Near HPMC Bus Stop, Jabli, Solan, Himachal Pradesh 173209',
    maps: 'https://maps.app.goo.gl/oGJgcEeq5ykR7X7s8', status: 'Open Now',
    lat: 30.91, lng: 77.1
  },
  {
    name: 'Rangoli Plaza', city: 'Jaipur', state: 'Rajasthan', zone: 'north',
    address: 'Shop no - 28, Rangoli Plaza, Maharana Pratap Road, Shree Ram Nagar, Next to: Rangoli Gardens, Jaipur, Rajasthan 302034',
    maps: 'https://maps.app.goo.gl/4U3as4WhDMUR5MYc7', status: 'Open Now',
    lat: 26.91, lng: 75.79
  },
  {
    name: 'Solapur', city: 'Solapur', state: 'Maharashtra', zone: 'west',
    address: 'Shop No. 41, Indira Gandhi Stadium, Park Chowk, Sidheshwar Temple Area, Solapur, Maharashtra 413001',
    maps: 'https://maps.app.goo.gl/791pSN7jJm8U5peu7', status: 'Open Now',
    lat: 17.66, lng: 75.91
  },
  {
    name: 'Safina Plaza', city: 'Bengaluru', state: 'Karnataka', zone: 'south',
    address: '84/85, Safina Plaza, Infantry Road, Tasker Town, Shivaji Nagar, Bengaluru, Karnataka 560001',
    maps: 'https://share.google/9srkhIMHXXO4sv8xY', status: 'Open Now',
    lat: 12.9847, lng: 77.609
  },
  {
    name: 'Porur', city: 'Chennai', state: 'Tamil Nadu', zone: 'south',
    address: 'Old No: 30, New No: 21, 1st Floor, Madras Food Walk, Arcot Road, Thirumurugan Nagar, Pour, Chennai, Tamil Nadu 600116',
    maps: 'https://maps.app.goo.gl/6ydpkrH1XCU5KPJY6', status: 'Open Now',
    lat: 13.0947, lng: 80.289
  },
  {
    name: 'Kothrud', city: 'Pune', state: 'Maharashtra', zone: 'west',
    address: 'Shop no 5, Deepashri Apartment, Dahanukar Colony, Beside Sagar Sweets,Kothrud, Pune, Maharashtra 411038',
    maps: 'https://share.google/LYgam4VRUxddrkXUI', status: 'Open Now',
    lat: 18.5013, lng: 73.8246
  },
  {
    name: 'Vapi', city: 'Vapi', state: 'Gujarat', zone: 'west',
    address: 'G16, Shopper\'s Gate, Opp. Lapinoz Pizza, Daman Road, Chala, Vapi, Gujarat 396191',
    maps: 'https://share.google/TL53WOGVDw5juPGfp', status: 'Open Now',
    lat: 20.37, lng: 72.9
  },
  {
    name: 'Ajmer', city: 'Ajmer', state: 'Rajasthan', zone: 'north',
    address: 'Ground Floor, Shop no 11, Plot no. G-16-A-B, Opposite Value & Variety, Makarwali Road, Ajmer, Rajasthan 305001',
    maps: 'https://share.google/YeQ8AGWq2Pj8kRdav', status: 'Open Now',
    lat: 26.45, lng: 74.64
  },
  {
    name: 'Santoshpur Station Road', city: 'Kolkata', state: 'West Bengal', zone: 'east',
    address: 'CW 42, Rabindra Nagar, Santoshpur Station Road, Kolkata, West Bengal 700018',
    maps: 'https://maps.app.goo.gl/sHQHqhP12cnbdkwRA', status: 'Open Now',
    lat: 22.5847, lng: 88.379
  },
  {
    name: 'Foreshore Road', city: 'Howrah', state: 'West Bengal', zone: 'east',
    address: '103/23, Foreshore Road, Choura Bustee, Shibpur, Near Pratap Petrol pump, Howrah, West Bengal 711102',
    maps: 'https://maps.app.goo.gl/SiH2pY6VZX4S25zX6', status: 'Coming Soon',
    lat: 22.5782, lng: 88.3208
  },
  {
    name: 'Madgaon', city: 'Goa', state: 'Goa', zone: 'west',
    address: 'Shop No 3, Glorious Plaza, Block 1, Opposite Multipurpose Higher Secondary School, Borda, Madgaon, Goa 403601',
    maps: 'https://maps.app.goo.gl/Wv291WgUGSXp9gKn9', status: 'Open Now',
    lat: 15.27, lng: 73.96
  },
  {
    name: 'Vidya Nagar', city: 'Hubballi', state: 'Karnataka', zone: 'south',
    address: 'Shop No. 2, Ground Floor, Siddhi Sai Plaza, Shirur Park Road, Besides Wellness Forever, Vidya Nagar, Hubballi, Karnataka 580021',
    maps: 'https://share.google/rf0ZVpiEguk2a6f3f', status: 'Open Now',
    lat: 15.36, lng: 75.12
  },
  {
    name: 'Ameerpet', city: 'Hyderabad', state: 'Telangana', zone: 'south',
    address: 'Shop no 1, Pancom Business Centre, Ameerpet Road, Yella Reddy Guda, Hyderabad, Telangana 500073',
    maps: 'https://maps.app.goo.gl/WkpVE981asGjP8iBA', status: 'Coming Soon',
    lat: 17.3682, lng: 78.5008
  },
  {
    name: 'Royapettah', city: 'Chennai', state: 'Tamil Nadu', zone: 'south',
    address: '281, Lloyds Road, Avvai Shanmugam Salai, Next to AIADMK Office, Royapettah, Chennai, Tamil Nadu 600014',
    maps: 'https://share.google/OFH1MbNO6X53bAu89', status: 'Open Now',
    lat: 13.0524, lng: 80.2652
  },
  {
    name: 'Nigdi', city: 'Pune', state: 'Maharashtra', zone: 'west',
    address: 'Shop No. 2 Poona Royale Building, Hutatma Chowk, Beside Ganesh Wadewala, Nigdi, Pune, Maharashtra 411044',
    maps: 'https://maps.app.goo.gl/WGt77swKQez5kCCe6', status: 'Open Now',
    lat: 18.5614, lng: 73.8748
  },
  {
    name: 'Pashan', city: 'Pune', state: 'Maharashtra', zone: 'west',
    address: 'Shop no. 2, Mont Vert Finesse, Baner-Pashan Link Road, Pashan, Pune, Maharashtra 411021',
    maps: 'https://maps.app.goo.gl/gcqTuRwjzSoR4JEd9', status: 'Open Now',
    lat: 18.4758, lng: 73.8787
  },
  {
    name: 'Nerul', city: 'Mumbai', state: 'Maharashtra', zone: 'west',
    address: 'Shop no. 12, Sai Sangh Co-operative Housing Society (CHS), Sector 28, Nerul, Navi Mumbai, Maharashtra 400706',
    maps: 'https://maps.app.goo.gl/brCQZpBfjg1RHinC6', status: 'Coming Soon',
    lat: 19.0682, lng: 72.8908
  },
  {
    name: 'Vadapalani', city: 'Chennai', state: 'Tamil Nadu', zone: 'south',
    address: 'New No. 334, Old No. 242, Arcot Road, Near Vadapalani Post Office, Vadapalani, Chennai, Tamil Nadu 600026',
    maps: 'https://maps.app.goo.gl/k2M2jHQjCM3FigHHA', status: 'Coming Soon',
    lat: 13.1069, lng: 80.2527
  },
  {
    name: 'Raja Park', city: 'Jaipur', state: 'Rajasthan', zone: 'north',
    address: '5, Holy Family Plaza, Vyas Marg, Below Third Space Gym, Raja Park, Jaipur, Rajasthan 302004',
    maps: 'https://maps.app.goo.gl/DG7fR83RBuWknTj2A', status: 'Open Now',
    lat: 26.8982, lng: 75.8008
  },
  {
    name: 'Tathawade', city: 'Pune', state: 'Maharashtra', zone: 'west',
    address: 'Shop No. 04, Merlin Elementa 2.0, Elementa Road, Near Azure Society, Tathawade, Pune, Maharashtra 411033',
    maps: 'https://maps.app.goo.gl/D7D8m6utRdyxa49D7', status: 'Coming Soon',
    lat: 18.5416, lng: 73.8127
  },
  {
    name: 'Yavatmal', city: 'Pune', state: 'Maharashtra', zone: 'west',
    address: 'Shop No G3, Nagar Parishad Complex, Opposite Nagar Bhawan, Panch Kandil Chauk, Yavatmal, Pune, Maharashtra 445001',
    maps: 'https://maps.app.goo.gl/TUFf8LeJ66ZAisdK8', status: 'Coming Soon',
    lat: 18.5373, lng: 73.9133
  },
  {
    name: 'Gachibowli', city: 'Hyderabad', state: 'Telangana', zone: 'south',
    address: 'Shop No. 2, Mani Nagar, TNGOS Colony, Near Vihanga Back Gate, Gachibowli, Serilingampally, Hyderabad, Telangana 500032',
    maps: 'https://maps.app.goo.gl/GiLxt2hp2GW7MADP7', status: 'Coming Soon',
    lat: 17.3817, lng: 78.4701
  },
  {
    name: 'Nacharam', city: 'Secunderabad', state: 'Telangana', zone: 'south',
    address: '4-7-27/A, Value Zone Hyper Mart, Raghavendra Nagar, Nacharam Main Road, Nacharam, Secunderabad, Telangana 500076',
    maps: 'https://maps.app.goo.gl/zypFDT4eLrRKufvp7', status: 'Coming Soon',
    lat: 17.44, lng: 78.5
  },
  /* ── Singapore ──────────────────────────────────────────────── */
  {
    name: 'Singapore', city: 'Singapore', state: 'Singapore', zone: 'int',
    address: 'For Direct WhatsApp Orders: +65 9169 9081\nFor Instant Delivery: Grab Mart, Food Panda\nFor Online Marketplaces: Lazada, Amazon',
    maps: 'https://maps.app.goo.gl/fi6akouk94RyKQCA8', status: 'Open Now',
    lat: 1.352, lng: 103.820
  }
];
