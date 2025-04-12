import bg1 from "../assets/background1.png"
import bg2 from "../assets/background2.png"
import bg3 from "../assets/background3.png"
import bg4 from "../assets/background4.png"

 const BG_IMAGE = [
    {
        src: bg4,
        alt: "background img4",
        firstTitle: 'Welcome to bugs ',
        title: 'COFFEE',
        description: 'Visit us today let’s brew something special togather!',
        buttonText: 'Order now',
        overlayClass: 'overlay-left',
    },
    {
        src: bg2,
        alt: "background img2",
        firstTitle: 'Good Day Starts with ',
        title: 'COFFEE',
        description: 'Visit us today let’s brew something special togather!',
        buttonText: 'Contact us',
        overlayClass: 'overlay-right',
    },
    {
        src: bg3,
        alt: "background img3",
        firstTitle: null,
        title: 'At bugs COFFEE',
        description: 'we believe that great coffee isn’t just about taste—it’s about the experience. Our café is more than just a place to grab your daily brew;',
        buttonText: 'Learn more', 
        overlayClass: 'overlay-dark',
    },
    {
        src: bg1,
        alt: "background img1",
        firstTitle: null,
        title: '|Sustainably Sourced | |Bold Flavors | |Warm Atmosphere|',
        description: null,
        buttonText: null,// No button
        overlayClass: 'overlay-center',
    },
];

export default BG_IMAGE;