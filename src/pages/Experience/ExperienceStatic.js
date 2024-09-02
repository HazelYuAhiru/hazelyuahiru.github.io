import writingImg from "../../assets/Experience/writingImg.png";
import fablixImg from "../../assets/Experience/fablixImg.png";
import rpslsImg from "../../assets/Experience/rpslsImg.png";
import qbImg from "../../assets/Experience/qbImg.png";
import srImg from "../../assets/Experience/srImg.png";
import zotImg from "../../assets/Experience/zotImg.png";

// TODO: move to db if possible
const experienceData = [
    { title: "Software Developer", 
      projects: [
      {
        title: "Bye Bye, Ducky",
        description: "A Twine game made with HTML/CSS/JavaScript that explores the theme of grief.",
        imgPath: writingImg, 
        demoLink: "https://hazel501115898.wordpress.com/124-2/",
        blogLink: "https://hazel501115898.wordpress.com/chapter-2-grief-in-expression-2/",
      },
      {
          title: "Fablix",
          description: "A full-stack e-commerce website using Java, HTML/CSS/Javascript, MySQL that enables the users to search, browse and purchase movies.",
          imgPath: fablixImg, 
          ghLink: "https://github.com/HazelYuAhiru/Fablix",
      },
      {
          title: "R-P-S-L-S",
          description: "A web-based Rock-Paper-Scissors-Lizard-Spock game using React.js/Tensorflow.js that allows users to play against the computer with AI gesture detection.",
          imgPath: rpslsImg, 
          demoLink: "https://hazelyuahiru.github.io/rpsls/",
          ghLink: "https://github.com/HazelYuAhiru/rpsls"
      },
      {
          title: "Zotistics",
          description: "A web-based grade distribution analysis tool for UCI student.",
          imgPath: zotImg, 
          demoLink: "https://beta.zotistics.com/",
          ghLink: "https://github.com/icssc/Zotistics-beta-23"
      }
    ], 
    positions: [
      {
        title: 'Help Desk Student Developer',
        description: 'UC Irvine Office of Information and Technology (OIT)',
        link: 'https://www.oit.uci.edu/org/',
        date: 'May 2023 - Present'
      },
      {
        title: 'Software Developer -- Zotistics Project Committee',
        description: 'UC Irvine Information and Computer Science Student Council (ICSSC)',
        link: 'https://studentcouncil.ics.uci.edu/',
        date: 'Sept 2023 - Present'
      },
    ] 
    },
    { title: "Researcher",
      projects: [
        {
          title: "QueryBooster",
          description: "A middleware-based query rewriting framework.",
          imgPath: qbImg, 
          demoLink: "https://querybooster.ics.uci.edu/readme",
          ghLink: "https://github.com/ISG-ICS/QueryBooster"
        },
        {
            title: "SQLRewriter",
            description: "This project aims to build a community website that allows anyone to learn and contribute SQL query rewriting knowledge from and to it.",
            imgPath: srImg, 
            demoLink: "https://sqlrewriter.ics.uci.edu/",
        }
      ], 
      positions: [
        {
          title: 'Undergraduate Researcher',
          description: 'UC Irvine Information Systems Group (ISG),',
          link: 'https://isg.ics.uci.edu/',
          date: 'July 2023 - Present'
        },
        {
          title: 'ICS Honors Program Researcher',
          description: 'UC Irvine Interactive Cognitive Systems Lab',
          date: 'Jan 2024 - Aug 2024'
        },
        {
          title: 'Research Assistant',
          description: 'UC Irvine Shi Lab',
          link: 'https://www.shilab.bio.uci.edu/',
          date: 'May 2023 - Dec 2023'
        }
      ]
    },
    { title: "Mentor", 
      projects: [],
      positions: [
        {
          title: 'ICS Tutoring Center Tutor',
          description: 'Donald Bren School of Information and Computer Sciences',
          date: 'Sept 2023 - June 2024'
        },
        {
          title: 'ICS 31(Intro to Python Programming) Learning Assistant',
          description: 'Donald Bren School of Information and Computer Sciences',
          date: 'March 2022 - Jan 2024'
        },
        {
          title: 'ICS 6B(Discrete Math and Boolean Algebra) Learning Assistant',
          description: 'Donald Bren School of Information and Computer Sciences',
          date: 'Sept 2022 - Dec 2022'
        },
      ]
     },
  ];

export { experienceData };