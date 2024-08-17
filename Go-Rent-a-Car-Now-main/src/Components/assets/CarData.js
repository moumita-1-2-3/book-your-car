import img1 from '../assets/CarData-img/car-img-celerio.webp';
import img2 from '../assets/CarData-img/car-img-tiago.jpg';
import img3 from '../assets/CarData-img/car-img-3.jpg';
import img4 from '../assets/CarData-img/car-img-4.webp';
import img5 from '../assets/CarData-img/car-img-5.jpg';
import img6 from '../assets/CarData-img/car-img-6.jpeg';
import img7 from '../assets/CarData-img/car-img-7.webp';
import img8 from '../assets/CarData-img/car-img-8.webp';
import img9 from '../assets/CarData-img/car-img-9.jpeg';
import img10 from '../assets/CarData-img/car-img-10.jpeg';
import img11 from '../assets/CarData-img/car-img-11.jpeg';
import img12 from '../assets/CarData-img/car-img-12.webp';




const carData = [
    {
      id: 1,
      brand: "Maruti Suzuki i",
      rating: 112,
      carName: "Maruti Suzuki Celerio",
      imgUrl: img1,
      model: "ZXi",
      price: 2000,
      speed: "60kmpl",
      gps: "GPS Navigation",
      seatType: "Heated seats",
      SeatingCapacity: 'Driver + 4',
      automatic: "Automatic",
      description:
        " The Celerio features a 3D Organic Sculpted Design that is refreshing to the senses. Be it the Radiant Front Grille with Sharp Chrome Accents, Droplet-Styled Taillamps or the 15-inch Black Alloy Wheels, the Celerio seems renewed from every angle. The Energetic and Spacious Cabin with a Contemporary Dashboard design livens up the drives.",
    },
    {
      id: 2,
      brand: "Mahindra Bolero",
      rating: 119,
      carName: "Mahindra Bolero Neo",
      imgUrl: img10,
      model: "Model-2022",
      price: 3000,
      speed: "80kmpl",
      gps: "GPS Navigation",
      seatType: "Heated seats",
      SeatingCapacity: 'Driver + 7',
      automatic: "Automatic",
      description:
        " Stance - Has that rugged, no-nonsense stance that's appealing to a large audienceDrivetrain performance - There's adequate torque for most utilitarian/lugging chores Robust - The Bolero feels exceedingly sturdy enough to withstand the test of time Proven name-plate - Extremely popular in rural areas to ferry folks/stuff around Mahindra service - Wide dealership/service network, affordable ownership experience",
    },
  
    {
      id: 3,
      brand: "Tata Motors",
      rating: 117,
      carName: "Tata Tiago",
      imgUrl: img2,
      model: "Model-2022",
      price: 2200,
      speed: "60kmpl",
      gps: "GPS Navigation",
      seatType: "Heated seats",
      SeatingCapacity: 'Driver + 4',
      automatic: "Automatic",
      description:
        " The Tata Tiago has 1 Petrol Engine and 1 CNG Engine on offer. The Petrol engine is 1199 cc while the CNG engine is 1199 cc . It is available with Manual & Automatic transmission.Depending upon the variant and fuel type the Tiago has a mileage of 19.0 kmpl to 26.49 km/kg & Ground clearance of Tiago is 168. The Tiago is a 5 seater 3 cylinder car and has length of 3765mm, width of 1677 and a wheelbase of 2400.",
    },

    {
      id: 4,
      brand: "Maruti Ertiga",
      rating: 90,
      carName: "Maruti Ertiga",
      imgUrl: img8,
      model: "Model - 2019",
      price: 3000,
      speed: "80kmpl",
      gps: "GPS Navigation",
      seatType: "Heated seats",
      SeatingCapacity: 'Driver + 4',
      automatic: "Automatic",
      description: "Large and comfortable seats that offer good support. Sufficient boot space of 550-litres when third row is folded. The light controls, drivability and visibility make it easy to pilot. The overall flat ride quality lends it great mile-munching capabilities.Being lightweight has positive effects on performance/fuel efficiency. "   
     },
  
    {
      id: 5,
      brand: "Maurti Suzuki",
      rating: 132,
      carName: "Maruti Ciaz",
      imgUrl: img3,
      model: " Delta Model-2022",
      price: 2400,
      speed: "70kmpl",
      gps: "GPS Navigation",
      seatType: "Heated seats",
      SeatingCapacity: 'Driver + 4',
      automatic: "Automatic",
      description:
        " The Maruti Ciaz has 1 Petrol Engine on offer. The Petrol engine is 1462 cc . It is available with Manual & Automatic transmission.Depending upon the variant and fuel type the Ciaz has a mileage of 20.04 to 20.65 kmpl . The Ciaz is a 5 seater 4 cylinder car and has length of 4490, width of 1730 and a wheelbase of 2650.",
    },

    {
      id: 6,
      brand: "Chevrolet Enjoy ",
      rating: 94,
      carName: "Chevrolet Enjoy ",
      imgUrl: img9,
      model: "Model-20217",
      price: 3100,
      speed: "80kmpl",
      gps: "GPS Navigation",
      seatType: "Heated seats",
      SeatingCapacity: 'Driver + 7',
      automatic: "Automatic",
      description:
        " The Chevrolet Enjoy has 1 Diesel Engine and 1 Petrol Engine on offer. The Diesel engine is 1248 cc while the Petrol engine is 1399 cc . It is available with Manual transmission.Depending upon the variant and fuel type the Enjoy has a mileage of 13.7 to 18.2 kmpl & Ground clearance of Enjoy is 165mm. The Enjoy is a 7 seater 4 cylinder car and has length of 4305mm, width of 1680mm and a wheelbase of 2720mm.",
    },

    {
      id: 7,
      brand: "Hyundai Aura",
      rating: 94,
      carName: "Hyundai Aura",
      imgUrl: img4,
      model: "Model-2022",
      price: 2500,
      speed: "80kmpl",
      gps: "GPS Navigation",
      seatType: "Heated seats",
      SeatingCapacity: 'Driver + 4',
      automatic: "Automatic",
      description:
        " The Aura is offered in 7 variants namely E, S, S CNG, SX Option, SX Plus AMT, SX CNG, SX. The cheapest Hyundai Aura variant is the E which has a price tag of Rs. 6.44 Lakh while the most expensive variant is the Hyundai Aura SX CNG which commands a price of Rs. 9 Lakh.",
    },
    {
      id: 8,
      brand: "Mahindra Scorpio",
      rating: 82,
      carName: "Mahindra Scorpio",
      imgUrl: img11,
      model: "Model 3",
      price: 3300,
      speed: "80kmpl",
      gps: "GPS Navigation",
      seatType: "Heated seats",
      SeatingCapacity: 'Driver + 4',
      automatic: "Automatic",
      description:
        " Visibility - Tall seating position, unintrusive pillars and large unhindered glass area Tough build quality - Sturdy/robust, built like it will stand the test of time Engine - The Thar's mHawk 130 diesel motor offers solid drivability/frugality  Rugged nature - The ladder on frame chassis can take on any terrain effortlessly       Mahindra service - Owners get a nationwide extensive sales, spares and service network",
    },
  
    {
      id: 9,
      brand: "Honda",
      rating: 102,
      carName: "Honda Amaze",
      imgUrl: img5,
      model: "Model-2022",
      price: 2500,
      speed: "80kmpl",
      gps: "GPS Navigation",
      seatType: "Heated seats",
      SeatingCapacity: 'Driver + 4',
      automatic: "Automatic",
      description:
        " The Honda Amaze has 1 Petrol Engine on offer. The Petrol engine is 1199 cc . It is available with Automatic & Manual transmission.Depending upon the variant and fuel type the Amaze has a mileage of 18.3 to 18.6 kmpl . The Amaze is a 5 seater 4 cylinder car and has length of 3995mm, width of 1695 and a wheelbase of 2470.",
    },

    {
      id: 10,
      brand: "Maruti Suzuki ",
      rating: 119,
      carName: "Maruti Suzuki Wagon R",
      imgUrl: img6,
      model: "Model-2022",
      price: 2600,
      speed: "50kmpl",
      gps: "GPS Navigation",
      seatType: "Heated seats",
      SeatingCapacity: 'Driver + 4',
      automatic: "Automatic",
      description:
        "  Maruti Suzuki added dual variable valve timing for higher fuel efficiency as well as better real-world performance. The 1.2-litre, four-cylinder engine is refined and it also delivers a good amount of power for everyday use. The Suzuki Wagon R has always been known for its fuel efficiency, and even this automatic version delivers impressive real-world mileage. ",
    },
  
    {
      id: 11,
      brand: "Toyota Innova",
      rating: 82,
      carName: "Toyota Innova Crysta",
      imgUrl: img7,
      model: "2021",
      price: 2900,
      speed: "80kmpl",
      gps: "GPS Navigation",
      seatType: "Heated seats",
      SeatingCapacity: 'Driver + 7',
      automatic: "Automatic",
      description:
        " Toyota Innova Crysta price starts at Rs. 19.99 Lakh and top model price goes upto Rs. 26.05 Lakh. Innova Crysta is offered in 5 variants - the base model of Innova Crysta is 2.4 GX 7 STR and the top model Toyota Innova Crysta 2.4 Zx 7 STR.",
    },
  
    {
      id: 12,
      brand: "Renault Duster BS6",
      rating: 52,
      carName: "Renault Duster BS6",
      imgUrl: img12,
      model: "Model 3",
      price: 3500,
      speed: "80kmpl",
      gps: "GPS Navigation",
      seatType: "Heated seats",
      SeatingCapacity: 'Driver + 7',
      automatic: "Automatic",
      description:
        " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
    },
  ];
  
  export default carData;