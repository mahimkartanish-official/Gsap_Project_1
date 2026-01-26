import drink1 from '../assets/drink1.png'
import drink2 from '../assets/drink2.png'
import drink3 from '../assets/drink3.png'
import drink4 from '../assets/drink4.png'

import 'lenis/dist/lenis.css'

const navLinks = [
 {
	id: "Hero",
	title: "Hero",
	links:"#hero"
 },
 {
	id: "about",
	title: "About Us",
	links:"#about"
 },
 {
	id: "work",
	title: "The Art",
	links:"#art"
 },
 {
	id: "Highlights",
	title: "Highlights",
	links:"#menu"
 },
 {
	id: "contact",
	title: "Contact",
	links:"#contact"
 },
];

const cocktailLists = [
 {
	name: "AI research and Python",
	country: "",
	detail: "",
	price: "",
 },
 {
	name: "Devloping AI based Agents",
	country: "",
	detail: "",
	price: "",
 },
 {
	name: "Web Dev and UI design",
	country: "",
	detail: "",
	price: "",
 },
 {
	name: "User research and collaboration",
	country: "",
	detail: "",
	price: "",
 },
];

const mockTailLists = [
 {
	name: "Database Management",
	country: "",
	detail: "",
	price: "",
 },
 {
	name: "Project Management ans responsive design",
	country: "",
	detail: "",
	price: "",
 },
 {
	name: "Front-end framework",
	country: "",
	detail: "",
	price: "",
 },
 {
	name: "Proficiency in Figma,Spline,etc",
	country: "",
	detail: "",
	price: "",
 },
];

const profileLists = [
 {
	imgPath: "/images/profile1.png",
 },
 {
	imgPath: "/images/profile2.png",
 },
 {
	imgPath: "/images/profile3.png",
 },
 {
	imgPath: "/images/profile4.png",
 },
];

const featureLists = [
 "",
//  "Perfectly balanced blends",
//  "Garnished to perfection",
//  "Ice-cold every time",
//  "Expertly shaken & stirred",
];

const goodLists = [
	"",
//  "Handpicked ingredients",
//  "Signature techniques",
//  "Bartending artistry in action",
//  "Freshly muddled flavors",
];

const storeInfo = {
 heading: "Where to Find Us",
 address: "456, Raq Blvd. #404, Los Angeles, CA 90210",
 contact: {
	phone: "(555) 987-6543",
	email: "hello@jsmcocktail.com",
 },
};

const openingHours = [
 { day: "Mon–Thu", time: "11:00am – 12am" },
 { day: "Fri", time: "11:00am – 2am" },
 { day: "Sat", time: "9:00am – 2am" },
 { day: "Sun", time: "9:00am – 1am" },
];

const socials = [
 {
	name: "Instagram",
	icon: "/images/insta.png",
	url: "#",
 },
 {
	name: "X (Twitter)",
	icon: "/images/x.png",
	url: "#",
 },
 {
	name: "Facebook",
	icon: "/images/fb.png",
	url: "#",
 },
];

const sliderLists = [
 {
	id: 1,
	name: "Adaptive",
	image: drink1,
	title: "Simple Ingredients, Bold Flavor",
	description:"I  someone who can flexibly adjust their behavior, ideas, and skills to changing circumstances, environments, and challenges, remaining calm and resourceful rather than rigid or overwhelmed. I embrace new information, learn quickly, making them valuable in dynamic situations. "
	//  "Made with tequila, lime juice, and orange liqueur, the Margarita is easy to make and full of character. Add a salted rim for the perfect drink on summer nights.",
 },
 {
	id: 2,
	name: "Creative",
	image: drink2,
	title: "A Zesty Classic That Never Fails",
	description:
	"I use imagination to generate novel, useful ideas, often characterized by curiosity, a willingness to explore, tolerance for ambiguity, and a habit of asking questions and challenging norms to find innovative solutions, not just for art but in science and life, often working with passionate focus and embracing mistakes as learning opportunities. "
	//  "The Margarita is a classic that balances tangy lime, smooth tequila, and a touch of sweetness. Shaken, frozen, or on the rocks—it’s always crisp & refreshing.",
 },
 {
	id: 3,
	name: "Interest",
	image: drink3,
	title: "Simple Ingredients, Bold Flavor",
	description:
	"I am a person having a perspective that's different from the usual. Having something to say and contribute that adds to the conversation, whether that's broadening or deepening it."
	//  "Made with tequila, lime juice, and orange liqueur, the Margarita is easy to make and full of character. Add a salted rim for the perfect drink on summer nights.",
 },
 {
	id: 4,
	name: "Fast Learner",
	image: drink4,
	title: "Crafted With Care, Poured With Love",
	description:
	" I am someone who quickly absorbs, understands, and applies new information with minimal guidance, possessing traits like strong listening, analytical skills, curiosity, and adaptability, making them valuable for quickly mastering tasks and solving problems efficiently"
	//  "Each cocktail is made with fresh ingredients and a passion for perfecting every pour, whether you're celebrating or simply relaxing.",
 },
];

export {
 navLinks,
 cocktailLists,
 mockTailLists,
 profileLists,
 featureLists,
 goodLists,
 openingHours,
 storeInfo,
 socials,
 sliderLists,
};