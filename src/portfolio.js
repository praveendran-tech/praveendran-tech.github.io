/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Pranav Raveendran",
  title: "Hi all, I'm Pranav",
  subTitle: emoji(
  "A motivated Software Engineering student at the University of Maryland, College Park, with a strong background in full-stack development. Proven success at leading tech companies such as PayPal, showcasing proficiency in Java, JavaScript, Python, and more. Experienced in cutting-edge frameworks and tools, with a focus on driving technical excellence and leading successful projects."  ),
  resumeLink:
    "https://drive.google.com/file/d/1kt30a9R4WYpwyujC_qybsQ9XrvP_HcpE/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/praveendran-tech",
  linkedin: "https://www.linkedin.com/in/pranav-raveendran/",
  gmail: "praveend@umd.edu",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Enthusiastic Full Stack Developer with a strong desire to explore and master diverse technology stacks.",
  skills: [
    emoji(
      "⚡ Develop scalable, secure applications using Java, React.js, and Spring Boot"
    ),
    emoji("⚡ Spearhead migration and optimization projects to enhance system performance"),
    emoji(
      "⚡ Drive impactful solutions by reducing customer friction and improving security")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "React.Js",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Node.Js",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Wordpress",
      fontAwesomeClassname: "fab fa-wordpress"
    },
    {
      skillName: "Angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "Jenkins",
      fontAwesomeClassname: "fab fa-jenkins"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Maryland",
      logo: require("./assets/images/umd.png"),
      subHeader: "Master of Engimeering in Software Engineering ",
      duration: "August 2024 - April 2026"
    },
    {
      schoolName: "SSN College of Engineering",
      logo: require("./assets/images/ssn.png"),
      subHeader: "Bachelor of Engineering in Computer Science and Engineering",
      duration: "August 2017 - April 2021",
      desc: "",
      descBullets: [
        "Achieved grand finalist status in both the 2019 and 2020 editions of the Smart India Hackathon, showcasing technical expertise and creativity through impactful project development and presentations.",
        "Awarded research grants totaling 25,000 INR on multiple occasions, enabling significant research projects and contributions to academic knowledge."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "100%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "100%"
    },
    {
      Stack: "Product Management",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "PayPal",
      companylogo: require("./assets/images/paypal.png"),
      date: "February 2021 – August 2024",
      desc: "Software Engineer 2 , Foundational Commons Platform",
      descBullets: [
        "Enhanced API security with OAuth 2.0, reducing security incidents by 30%.",
        "Spearheaded the development of a customer onboarding and notification tracking system using React.js for the frontend and Java Spring Boot for the backend, resulting in a 25% reduction in customer friction.",
        "Built an analytical pipeline for push notifications, boosting engagement by 20%.",
        "Modernized PayPal's notification preference system, migrating from a legacy C++ platform to a Java-based system, resulting in a 75% reduction in MTTR and MTTD during outages.",
        "Developed a migration pipeline to seamlessly transition customer onboarding data from a legacy database to Oracle MySQL, ensuring data integrity and improving system performance.",
        "Enhanced the reliability of the SMS infrastructure using observability tools like Splunk, leading to a 15% cost reduction and earning Spot Monetary Bonus Awards in September 2023 and July 2023 for outstanding contributions."
    ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};


// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Smart India Hackathon 2019 Finalist",
      subtitle:
        "Developed a secure web app for seed transactions with Solidity, Node.js, and React.js, which reduced fraudulent activities by 20% and led the team to the Grand Finals of Smart India Hackathon 2019.",
      image: require("./assets/images/sih.jpeg"),
      imageAlt: "SIH 2019",
      footerLink: [
      ]
    },
    {
      title: "Smart India Hackathon 2020 Finalist",
      subtitle:
        "Simulated energy-efficient drone paths using Unity, R, and Python, leading the team to the Grand Finals of Smart India Hackathon 2020 with a 15% reduction in energy usage.",
        image: require("./assets/images/sih.jpeg"),
        imageAlt: "SIH 2020",
      footerLink: [
      ]
    },

    {
      title: "Research Grants during Bachelor's",
      subtitle: "Published multiple research papers during my bachelors and received about 50,000 INR to perform research",
      image: require("./assets/images/ssn.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Research Paper 1", url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=bf6XtKAAAAAJ&citation_for_view=bf6XtKAAAAAJ:u-x6o8ySG0sC"},
        {
          name: "Research Paper 2",
          url: "https://link.springer.com/article/10.1007/s10924-019-01408-z"
        }
      ]
    },

    {
      title: "Awards at PayPal",
      subtitle: "Recieved Multiple Awards during my tenure at PayPal for active contributions.",
      image: require("./assets/images/paypal.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Awards", url: "https://drive.google.com/drive/folders/1wDHMm8UIxanNf1SDBjk2XOhvMTE-ESj5?usp=drive_link"}
      ]
    }


  ],
  display: true // Set false to hide this section, defaults to true
};





// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+12405652289",
  email_address: "praveend@umd.edu"
};



const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  achievementSection,
  contactInfo,
  isHireable,
  resumeSection
};
