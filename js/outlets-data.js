/* ==========================================================================
   Bombay Kulfi Ice Creams — Outlet Directory
   Source: Store Locator Google Sheet (updated June 2025)
   Zones: south | north | east | west
   ========================================================================== */

const BK_OUTLETS = [

  /* ── Tamil Nadu ─────────────────────────────────────────────── */
  {
    name: 'R.S. Puram', city: 'Coimbatore', state: 'Tamil Nadu', zone: 'south',
    address: '48, Sir Shanmugam Road, Near Samsung Showroom, R.S. Puram, Coimbatore, Tamil Nadu 641002',
    maps: 'https://share.google/7ngYYWBUyHLvz6TbM', status: 'Open Now',
    lat: 11.020, lng: 76.960
  },
  {
    name: 'Saibaba Colony', city: 'Coimbatore', state: 'Tamil Nadu', zone: 'south',
    address: 'No.37/54, Ground Floor, Bharathi Park, 7th Cross Road, Saibaba Colony, Coimbatore, Tamil Nadu 641011',
    maps: 'https://share.google/legbfwb6OOs4hDisi', status: 'Open Now',
    lat: 11.010, lng: 76.971
  },
  {
    name: 'Vadavalli', city: 'Coimbatore', state: 'Tamil Nadu', zone: 'south',
    address: '8, Devasthana Building, Maruthamalai Main Road, Near Sree Daksha\'s Atulaniya Apartment, Vadavalli, Coimbatore, Tamil Nadu 641041',
    maps: 'https://share.google/1ATWNpQMG2WycqqjS', status: 'Open Now',
    lat: 10.980, lng: 76.890
  },
  {
    name: 'Theni', city: 'Theni', state: 'Tamil Nadu', zone: 'south',
    address: '44, White House Street, Opposite To Kamarajar Park, NRT Nagar, Theni, Tamil Nadu 625531',
    maps: 'https://share.google/oI4qkMg4W7wNOs3qJ', status: 'Open Now',
    lat: 10.000, lng: 77.480
  },
  {
    name: 'Tiruppur', city: 'Tiruppur', state: 'Tamil Nadu', zone: 'south',
    address: '337, Avinashi Road, Bungalow Stop, Opposite to CSI Church, Tiruppur, Tamil Nadu 641603',
    maps: 'https://share.google/MkzWR3CiLcGdNJ2RU', status: 'Open Now',
    lat: 11.110, lng: 77.340
  },
  {
    name: 'Adyar', city: 'Chennai', state: 'Tamil Nadu', zone: 'south',
    address: '4/2, 10th Cross Street, Indira Nagar, Adyar, Chennai, Tamil Nadu 600020',
    maps: 'https://share.google/aepVlcGxd9abPbUWu', status: 'Open Now',
    lat: 13.000, lng: 80.257
  },
  {
    name: 'Maduravoyal', city: 'Chennai', state: 'Tamil Nadu', zone: 'south',
    address: 'No.33, Janaki Nagar, 1st Street, Maduravoyal, Chennai, Tamil Nadu 600095',
    maps: 'https://share.google/ySbMiQS1odkdKKqG5', status: 'Open Now',
    lat: 13.070, lng: 80.170
  },
  {
    name: 'Anna Nagar', city: 'Chennai', state: 'Tamil Nadu', zone: 'south',
    address: 'Ac-5, Ground Floor, 2nd Avenue, Anna Nagar, Chennai, Tamil Nadu 600040',
    maps: 'https://share.google/fjhKCgSkaATZb2eYL', status: 'Open Now',
    lat: 13.085, lng: 80.210
  },
  {
    name: 'Vepery', city: 'Chennai', state: 'Tamil Nadu', zone: 'south',
    address: '36/1, Mahaveer Colony, EVK Sampath Road, Vepery, Chennai, Tamil Nadu 600007',
    maps: 'https://share.google/EeF9mKUs4sIIHuPd7', status: 'Open Now',
    lat: 13.093, lng: 80.263
  },
  {
    name: 'Erode', city: 'Erode', state: 'Tamil Nadu', zone: 'south',
    address: '310 A, EVN Road, Surampatti Nall Road, Near Vallampuri Selva Vinayagar Temple, Erode 638009',
    maps: 'https://share.google/7sMx6oocDPey2ZTys', status: 'Open Now',
    lat: 11.340, lng: 77.728
  },

  /* ── Karnataka ──────────────────────────────────────────────── */
  {
    name: 'Bengaluru (Lulu Mall)', city: 'Bengaluru', state: 'Karnataka', zone: 'south',
    address: 'Lulu Mall, Second Floor, Old Mysore Road, Magadi Road Area, Bengaluru, Karnataka 560023',
    maps: '', status: 'Open Now',
    lat: 12.930, lng: 77.500
  },
  {
    name: 'Bengaluru (Whitefield)', city: 'Bengaluru', state: 'Karnataka', zone: 'south',
    address: 'Pebble No. 3, Essensai067, Kanamangala, Whitefield Hoskote Road, Bengaluru, Karnataka 560067',
    maps: 'https://share.google/csEJLZRhU0GPCasSs', status: 'Open Now',
    lat: 13.020, lng: 77.720
  },
  {
    name: 'Mysore', city: 'Mysore', state: 'Karnataka', zone: 'south',
    address: 'Panchamantra Road, Next to Rolligion, Kuvempu Nagara, Mysuru, Karnataka 570023',
    maps: 'https://share.google/fyFJ0FYZC5m4ZZEH2', status: 'Open Now',
    lat: 12.310, lng: 76.640
  },

  /* ── Andhra Pradesh ─────────────────────────────────────────── */
  {
    name: 'Vijayawada', city: 'Vijayawada', state: 'Andhra Pradesh', zone: 'south',
    address: 'Door No 59A-8-15, Beside Indian Bank, State Bank Colony, Guru Nanak Colony, Vijayawada, Andhra Pradesh 520008',
    maps: 'https://share.google/pYAeoBqlWTHZJUMRN', status: 'Open Now',
    lat: 16.510, lng: 80.620
  },

  /* ── Telangana ──────────────────────────────────────────────── */
  {
    name: 'Secunderabad', city: 'Secunderabad', state: 'Telangana', zone: 'south',
    address: 'Temple Alwal Road, Old Alwal, Beside True Value, Near Ambedkar Statue, Tirumalagiri, Secunderabad, Telangana 500010',
    maps: 'https://share.google/GmKYyWFm6KslDqZvY', status: 'Open Now',
    lat: 17.440, lng: 78.500
  },

  /* ── Kerala ─────────────────────────────────────────────────── */
  {
    name: 'Uchakkada', city: 'Trivandrum', state: 'Kerala', zone: 'south',
    address: '16-215/1, Kanakkulam, Opp. Gopus Fuels, Uchakkada, Trivandrum, Kerala 695506',
    maps: 'https://share.google/PcENSJkfSSpdNQaUJ', status: 'Open Now',
    lat: 8.570, lng: 76.930
  },

  /* ── West Bengal ────────────────────────────────────────────── */
  {
    name: 'Bangur Avenue', city: 'Kolkata', state: 'West Bengal', zone: 'east',
    address: 'Shop no. 2, 135 Block A, Bangur Avenue, Opposite Reliance Fresh, Kolkata, West Bengal 700055',
    maps: 'https://share.google/oEVBOzgvPXNuzn4um', status: 'Open Now',
    lat: 22.620, lng: 88.390
  },
  {
    name: 'Bhowanipore', city: 'Kolkata', state: 'West Bengal', zone: 'east',
    address: '40A, Ground Floor, Binayak Apartments, Chakraberia Road N, Madan Mohan Malaviya Sarani, Bhowanipore, Kolkata, West Bengal 700020',
    maps: 'https://share.google/mvrE4tYmB6mM2C236', status: 'Open Now',
    lat: 22.530, lng: 88.340
  },
  {
    name: 'Lake Gardens', city: 'Kolkata', state: 'West Bengal', zone: 'east',
    address: '367, Ground Floor, Prince Anwar Shah Road, Near Radharam Balaram Mullick, Lake Gardens, Kolkata, West Bengal 700045',
    maps: 'https://share.google/1em1UGxqEj9DEL6G5', status: 'Open Now',
    lat: 22.510, lng: 88.360
  },

  /* ── Bihar ──────────────────────────────────────────────────── */
  {
    name: 'Bhagalpur', city: 'Bhagalpur', state: 'Bihar', zone: 'east',
    address: 'Dr. R.P. Road, Near Brahman Mandal Gali, Bhagalpur, Bihar 812002',
    maps: 'https://share.google/LUk4aapAHxCdTdTE2', status: 'Open Now',
    lat: 25.250, lng: 86.970
  },
  {
    name: 'Darbhanga', city: 'Darbhanga', state: 'Bihar', zone: 'east',
    address: 'Opposite to Dr. U.K. Biswas, Rajkumar Ganj, Darbhanga, Bihar 846004',
    maps: 'https://share.google/NqkBNAYXYTDplGBFr', status: 'Open Now',
    lat: 26.150, lng: 85.900
  },
  {
    name: 'Danapur', city: 'Patna', state: 'Bihar', zone: 'east',
    address: 'Ashray Vihar Colony, Saguna More, Shri Krishna Puram, Danapur, Near Capital Suzuki Bike Showroom, Patna, Bihar 801503',
    maps: 'https://share.google/XtruywUg13UBSpQWq', status: 'Open Now',
    lat: 25.620, lng: 85.040
  },
  {
    name: 'Kidwaipuri', city: 'Patna', state: 'Bihar', zone: 'east',
    address: 'No. 34, Shop No. 8, Ground Floor, Shri Prasad Yogendra Complex, Income Tax Road, Kidwaipuri, Patna, Bihar 800001',
    maps: 'https://share.google/J7qwUKY4WGyP5TZrM', status: 'Open Now',
    lat: 25.610, lng: 85.090
  },

  /* ── Jharkhand ──────────────────────────────────────────────── */
  {
    name: 'Dhanbad', city: 'Dhanbad', state: 'Jharkhand', zone: 'east',
    address: 'LG-01, Beside Goods \'n Foods, The Hub, Below Burger King, Saraidhela, Dhanbad, Jharkhand 828127',
    maps: 'https://share.google/tAwUPJ4n6IdRPARtL', status: 'Open Now',
    lat: 23.800, lng: 86.440
  },
  {
    name: 'Jamshedpur', city: 'Jamshedpur', state: 'Jharkhand', zone: 'east',
    address: 'Shop No-6, Hotel Line, Near SBI, Golmuri Market, Jamshedpur, Jharkhand 831003',
    maps: '', status: 'Open Now',
    lat: 22.810, lng: 86.190
  },
  {
    name: 'Deoghar Airport', city: 'Deoghar', state: 'Jharkhand', zone: 'east',
    address: '1st Floor, Elevate Lounge, Deoghar Airport, Deoghar, Jharkhand 814112',
    maps: '', status: 'Open Now',
    lat: 24.492, lng: 86.712
  },
  {
    name: 'Deoghar (Satsang Gate)', city: 'Deoghar', state: 'Jharkhand', zone: 'east',
    address: 'Satsang Gate, Hotel Manorama Campus, Beside Dominos Pizza, Deoghar, Jharkhand 814112',
    maps: 'https://share.google/nEWTILqiwaXT3jMDB', status: 'Open Now',
    lat: 24.480, lng: 86.700
  },
  {
    name: 'Deoghar (Tower Chowk)', city: 'Deoghar', state: 'Jharkhand', zone: 'east',
    address: 'Tower Chowk, Beside Hotel Yatrik, Station Road, Deoghar, Jharkhand 814112',
    maps: '', status: 'Open Now',
    lat: 24.471, lng: 86.692
  },

  /* ── Assam ──────────────────────────────────────────────────── */
  {
    name: 'Guwahati', city: 'Guwahati', state: 'Assam', zone: 'east',
    address: 'Kamrup Chamber of Commerce Road, Near Gopal Maharaj Restaurant, Fancy Bazaar, Guwahati, Assam 781001',
    maps: '', status: 'Open Now',
    lat: 26.140, lng: 91.740
  },

  /* ── Rajasthan ──────────────────────────────────────────────── */
  {
    name: 'Bikaner', city: 'Bikaner', state: 'Rajasthan', zone: 'north',
    address: 'Outside Jassusar Gate, Kothari Hospital Road, Near Bharat Gas Agency, Bikaner, Rajasthan 334001',
    maps: 'https://share.google/nfr5ZiHx9Eok8nqD5', status: 'Open Now',
    lat: 28.020, lng: 73.320
  },
  {
    name: 'Jodhpur', city: 'Jodhpur', state: 'Rajasthan', zone: 'north',
    address: 'Plot no. 399, Shop no. 2, First C Road, Near Crocs Showroom, Sardarpura, Jodhpur, Rajasthan 342003',
    maps: 'https://share.google/TeAc1D88rrQRxifXt', status: 'Open Now',
    lat: 26.290, lng: 73.020
  },
  {
    name: 'Hanumangarh', city: 'Hanumangarh', state: 'Rajasthan', zone: 'north',
    address: 'Shop no. 20, Opposite Model Town Enclave, Near Radha Swami Dera, Satipura Bypass road, Hanumangarh, Rajasthan 335512',
    maps: '', status: 'Open Now',
    lat: 29.580, lng: 74.330
  },

  /* ── Punjab ─────────────────────────────────────────────────── */
  {
    name: 'Amritsar', city: 'Amritsar', state: 'Punjab', zone: 'north',
    address: '8, Dharam Singh Market, Golden Temple Road, Town Hall, Katra Ahluwalia, Amritsar, Punjab 143001',
    maps: 'https://share.google/mWv6ouaKkrKOhU1Q4', status: 'Open Now',
    lat: 31.620, lng: 74.870
  },

  /* ── Uttar Pradesh / Delhi NCR ──────────────────────────────── */
  {
    name: 'Mirzapur', city: 'Mirzapur', state: 'Uttar Pradesh', zone: 'north',
    address: 'Police Line Road, in front of Calcutta Steel, Mirzapur, Uttar Pradesh 231001',
    maps: '', status: 'Open Now',
    lat: 25.140, lng: 82.580
  },
  {
    name: 'Noida', city: 'Noida', state: 'Delhi NCR', zone: 'north',
    address: 'Kiosk no. 07, Ground Floor, Central Market, Sector 120, Noida, Uttar Pradesh 201301',
    maps: 'https://share.google/ccI87THlV5XYmHOsW', status: 'Open Now',
    lat: 28.550, lng: 77.390
  },

  /* ── Maharashtra ────────────────────────────────────────────── */
  {
    name: 'Nagpur', city: 'Nagpur', state: 'Maharashtra', zone: 'west',
    address: '76, Buty plots, Besides Gokul Vrindavan Restaurant, Dharampeth, Nagpur, Maharashtra 440010',
    maps: 'https://share.google/QVwefCCrA20WYK9IK', status: 'Open Now',
    lat: 21.150, lng: 79.080
  },
  {
    name: 'Navi Mumbai (Airoli)', city: 'Navi Mumbai', state: 'Maharashtra', zone: 'west',
    address: 'No.2, Balaji C.H.S., Sector-05, Besides Bharat Petrol Pump, Airoli, Navi Mumbai, Maharashtra 400708',
    maps: 'https://share.google/QOS2PxXtj1cEhPHV2', status: 'Open Now',
    lat: 19.150, lng: 72.990
  },

  /* ── Gujarat ────────────────────────────────────────────────── */
  {
    name: 'Anand', city: 'Anand', state: 'Gujarat', zone: 'west',
    address: 'No. 14, Vraj Prime, Opp. NCC office, Iskon Temple Road, Vallabh Vidhyanagar, Anand, Gujarat 388001',
    maps: '', status: 'Open Now',
    lat: 22.560, lng: 72.950
  }

];
