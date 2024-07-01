import image1 from "../assets/images/acoustic-guitar-2-removebg-preview.png";
import image2 from "../assets/images/acoustic-guitar-1.jpg";
import image3 from "../assets/images/elguit1.jpg";
import image4 from "../assets/images/elguit2.jpg";
import image5 from "../assets/images/bass2.jpg";
import image6 from "../assets/images/bass1.jpg";
import image7 from "../assets/images/drum1.jpg";
import image8 from "../assets/images/drum2.jpg";
import image9 from "../assets/images/synth1.png";
import image10 from "../assets/images/synth2.jpg";
import image11 from "../assets/images/synth3.jpg";

export const musicItems = [
  {
    name: "Acoustic Guitar",
    price: 199.99,
    images: [image1, image2],
    alt: "Acoustic Guitar",
    description: "Perfect for beginners and experts alike.",
    source:
      'Image by <a href="https://pixabay.com/users/couleur-1195798/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2276181">Couleur</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2276181">Pixabay</a>',
    available: true,
    itemsLeft: 5,
    restockDate: null,
    numReviews: 25,
    rating: 4.5
  },
  {
    name: "Electric Guitar",
    price: 299.99,
    images: [image3, image4],
    alt: "Electric Guitar",
    description: "Experience the best in electric sound.",
    available: false,
    itemsLeft: 0,
    restockDate: "2024-07-15",
    numReviews: 40,
    rating: 4.7
  },
  {
    name: "Bass Guitar",
    price: 249.99,
    images: [image5, image6],
    alt: "Bass Guitar",
    description: "Deep, rich tones for any music style.",
    available: true,
    itemsLeft: 10,
    restockDate: null,
    numReviews: 30,
    rating: 4.3
  },
  {
    name: "Drum Set",
    price: 499.99,
    images: [image7, image8],
    alt: "Drum Set",
    description: "Complete set for aspiring drummers.",
    available: false,
    itemsLeft: 0,
    restockDate: "2024-06-20",
    numReviews: 18,
    rating: 4.8
  },
  {
    name: "Synthesizer",
    price: 399.99,
    images: [image9, image10, image11],
    alt: "Synthesizer",
    description: "Electronic sounds for modern music.",
    available: true,
    itemsLeft: 3,
    restockDate: null,
    numReviews: 22,
    rating: 4.6
  },
  {
    name: "Keyboard",
    price: 349.99,
    images: [image1, image2],
    alt: "Keyboard",
    description: "Versatile keyboard for various genres.",
    available: true,
    itemsLeft: 7,
    restockDate: null,
    numReviews: 35,
    rating: 4.4
  },
  {
    name: "Violin",
    price: 179.99,
    images: [image1, image2],
    alt: "Violin",
    description: "Classic instrument with a rich sound.",
    available: true,
    itemsLeft: 4,
    restockDate: null,
    numReviews: 20,
    rating: 4.5
  },
  {
    name: "Saxophone",
    price: 399.99,
    images: [image1, image2],
    alt: "Saxophone",
    description: "Smooth, mellow tones for jazz lovers.",
    available: true,
    itemsLeft: 6,
    restockDate: null,
    numReviews: 27,
    rating: 4.7
  },
  {
    name: "Trumpet",
    price: 229.99,
    images: [image1, image2],
    alt: "Trumpet",
    description: "Bright, powerful sound for any band.",
    available: false,
    itemsLeft: 0,
    restockDate: "2024-08-01",
    numReviews: 15,
    rating: 4.2
  },
  {
    name: "Flute",
    price: 149.99,
    images: [image1, image2],
    alt: "Flute",
    description: "Lightweight and easy to play.",
    available: true,
    itemsLeft: 8,
    restockDate: null,
    numReviews: 12,
    rating: 4.0
  },
  {
    name: "Cello",
    price: 499.99,
    images: [image1, image2],
    alt: "Cello",
    description: "Rich, deep tones for orchestral music.",
    available: false,
    itemsLeft: 0,
    restockDate: "2024-07-10",
    numReviews: 10,
    rating: 4.8
  },
  {
    name: "Harmonica",
    price: 29.99,
    images: [image1, image2],
    alt: "Harmonica",
    description: "Pocket-sized instrument for blues and folk.",
    available: true,
    itemsLeft: 15,
    restockDate: null,
    numReviews: 45,
    rating: 4.1
  },
  {
    name: "Banjo",
    price: 199.99,
    images: [image1, image2],
    alt: "Banjo",
    description: "Bright, twangy sound for bluegrass.",
    available: true,
    itemsLeft: 9,
    restockDate: null,
    numReviews: 28,
    rating: 4.3
  },
  {
    name: "Mandolin",
    price: 249.99,
    images: [image1, image2],
    alt: "Mandolin",
    description: "Compact instrument with a bright tone.",
    available: true,
    itemsLeft: 2,
    restockDate: null,
    numReviews: 19,
    rating: 4.4
  },
  {
    name: "Ukulele",
    price: 69.99,
    images: [image1, image2],
    alt: "Ukulele",
    description: "Fun, easy-to-learn instrument for all ages.",
    available: true,
    itemsLeft: 20,
    restockDate: null,
    numReviews: 55,
    rating: 4.6
  },
  {
    name: "Congas",
    price: 299.99,
    images: [image1, image2],
    alt: "Congas",
    description: "Rhythmic drums for Latin music.",
    available: false,
    itemsLeft: 0,
    restockDate: "2024-06-25",
    numReviews: 10,
    rating: 4.5
  },
  {
    name: "Cajón",
    price: 129.99,
    images: [image1, image2],
    alt: "Cajón",
    description: "Percussion instrument for acoustic sets.",
    available: true,
    itemsLeft: 12,
    restockDate: null,
    numReviews: 23,
    rating: 4.7
  },
  {
    name: "Microphone",
    price: 89.99,
    images: [image1, image2],
    alt: "Microphone",
    description: "Clear sound for vocal and instrumental recording.",
    available: true,
    itemsLeft: 25,
    restockDate: null,
    numReviews: 65,
    rating: 4.8
  },
  {
    name: "Headphones",
    price: 99.99,
    images: [image1, image2],
    alt: "Headphones",
    description: "High-quality sound for music production.",
    available: true,
    itemsLeft: 30,
    restockDate: null,
    numReviews: 70,
    rating: 4.9
  },
  {
    name: "Music Stand",
    price: 39.99,
    images: [image1, image2],
    alt: "Music Stand",
    description: "Stable and adjustable for any musician.",
    available: true,
    itemsLeft: 40,
    restockDate: null,
    numReviews: 20,
    rating: 4.2
  },
];
