export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Skills", link: "#skills" },
  // { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "I value continuous learning and collaboration, ensuring innovative ideas and meaningful contributions in every opportunity.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-center",
    // img: "/grid1image.png",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start z-10",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My skills",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Aspiring developer with a passion for innovation and learning.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    // spareImg: "/b4.svg",
  },

  {
    id: 5,
    title:
      "Exploring Computer Vision, AI, Game Development, and / Next.js with AI integration.",
    description: "Exploring New Horizons",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Are you interested in collaborating on a project?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Table Tennis using Hand Gesture",
    des: "Gesture-controlled virtual Table Tennis game.",
    img: "https://i.postimg.cc/WzHz7Hjx/Table-Tennis.jpg",
    iconLists: [
      "/python.svg",
      "/opencv.svg",
      "/mediapipe.svg",
      "/pygame.svg"
    ],
    link: "https://github.com/Dharshan049/Table-Tennis-Using-Hand-Gesture",
  },
  {
    id: 2,
    title: "PMCGD",
    des: "Motion capture system for realistic game avatars, enabling real-time tracking of human movements and converting them into interactive digital avatars for enhanced gameplay and realism.",
    img: "https://i.postimg.cc/pLCjhx6L/mediapipe-google-s-ar-library.png",
    iconLists: [
      "/python.svg",
      "/opencv.svg",
      "/mediapipe.svg",
      "/nodejs.svg",
      "/electron.svg",
    ],
    link: "https://github.com/Dharshan049/Portable-Motion-Capturing-for-Game-Development",
  },
  {
    id: 3,
    title: "IntelliStudy Hub",
    des: "IntelliStudy Hub is an AI-powered educational platform offering personalized study plans, adaptive quizzes, and real-time progress tracking. It enhances learning with collaborative tools and resource recommendations tailored to individual needs.",
    img: "https://i.postimg.cc/63qwxxv1/1-9h-N-74-Nc-RKa-Khb-F-YRVi8g.png",
    iconLists: [
      "/re.svg",
      "/next.svg",
      "/tail.svg",
      "/ts.svg",
      "/cloudinary-color.svg",
      "/js.svg",
      "/ps.svg",
    ],
    link: "https://github.com/Dharshan049/IntelliStudy-Hub",
  },
  {
    id: 4,
    title: "Map-Quest",
    des: "Map-Quest is a 2D adventure game developed using the Godot Engine. In this game, players navigate through various maps, overcoming obstacles and challenges to progress. The project includes custom scripts, assets, and levels, showcasing the developer's proficiency in game development with Godot.",
    img: "https://i.postimg.cc/XNLkXMtY/5442958-0f68-3.webp",
    iconLists: ["/godot-svgrepo-com.svg", "/gdscript.svg", "/map.svg"],
    link: "https://github.com/Dharshan049/Map-Quest",
  },
  {
    id: 5,
    title: "Sign Language Interpretation",
    des: "Sign Language Interpretation is an AI-driven project designed to bridge communication gaps by translating sign language gestures into text or speech in real time. It leverages computer vision and machine learning to recognize hand movements and gestures, enabling seamless interaction for the hearing and speech-impaired.",
    img: "https://i.postimg.cc/bvtz3qqp/computer-vision.png",
    iconLists: ["/python.svg", "/keras.svg", "/tensorflow.svg", "/opencv.svg", "/mediapipe.svg"],
    link: "https://github.com/Dharshan049/Design-Project-2",
  },
  {
    id: 6,
    title: "Electric Vehicle Maintenance Scheduling",
    des: "Electric Vehicle Maintenance Scheduler is a smart system that uses data analytics to optimize EV servicing schedules. It enhances performance and longevity by analyzing usage patterns and battery health.",
    img: "https://i.postimg.cc/kgFxpPw3/iot-in-vehicles.jpg",
    iconLists: ["/re.svg", "/next.svg", "/tail.svg", "/ts.svg"],
    link: "https://github.com/Dharshan049/Electric-Vehicle-Maintanence-Scheduler",
  },
  {
    id: 7,
    title: "Contactless Doorbell System using IoT",
    des: "Contactless Doorbell System using IoT is a smart solution enabling visitors to ring the bell without physical contact. It utilizes sensors and IoT connectivity for hygiene, safety, and real-time alerts via connected devices.",
    img: "https://i.postimg.cc/rsk4JhWF/IOT-KEY-ADVANTAGES-FOR-A-SMARTER-FUTURE-01.webp",
    iconLists: ["/ec.svg", "/blynk.svg",, "/da.svg", "/cloud.svg"],
    link: "https://github.com/Dharshan049/Design-Project-using-IOT",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
    profile: "/profile.svg",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
    profile: "/profile.svg",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
    profile: "/profile.svg",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
    profile: "/profile.svg",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
    profile: "/profile.svg",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "AI Intern",
    desc: "Implement and train Mask R-CNN models for object detection and segmentation tasks.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Data Science Intern",
    desc: "Worked as a Data Science intern, extracting data for American Sign Language detection using Python and Computer Vision techniques.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp4.svg",
  }
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/Dharshan049",
  },
  {
    id: 2,
    img: "/x.svg",
    link: "https://x.com/DHARSHANRAJA1",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/dharshan-r-e-student-cse-309537262/",
  },
];

export const SkillsIcons = [
  { name: "Python", img: "/python.svg" },
  { name: "Computer Vision", img: "/opencv.svg" },
  { name: "PostgreSQL", img: "/ps.svg" },
  { name: "Vercel", img: "/vercel.svg" },
  { name: "Neon", img: "/neon.svg" },
  { name: "React", img: "/react-color.svg" },
  { name: "Next.js", img: "/nextdotjs.svg" },
  { name: "Node.js", img: "/nodedotjs-color.svg" },
  { name: "Tailwind CSS", img: "/tailwindcss-color.svg" },
  { name: "JavaScript", img: "/javascript-color.svg" },
  { name: "CSS 3", img: "css3-color.svg" },
  { name: "Stripe", img: "/stripe-color.svg" },
];
