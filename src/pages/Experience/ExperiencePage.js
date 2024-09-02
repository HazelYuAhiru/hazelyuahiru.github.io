import { Box } from '@mui/material';
import DisplaySection from "./DisplaySection";
import writingImg from "../../assets/Experience/writingImg.png";

function ExperiencePage() {
  // TODO: add projects
  const data = [
    { title: "Software Developer", 
      projects: [
      {
        title: "Writing Journey",
        description: "An e-portfolio for writing with a memoir created in the form of a twine game.",
        imgPath: writingImg, 
        demoLink: "https://hazel501115898.wordpress.com/",
        isBlog: false
      },
      {
          title: "Writing Journey",
          description: "An e-portfolio for writing with a memoir created in the form of a twine game.",
          imgPath: writingImg, 
          demoLink: "https://hazel501115898.wordpress.com/",
          isBlog: false
      },
      {
          title: "Writing Journey",
          description: "An e-portfolio for writing with a memoir created in the form of a twine game.",
          imgPath: writingImg, 
          demoLink: "https://hazel501115898.wordpress.com/",
          isBlog: false
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
          title: "Writing Journey",
          description: "An e-portfolio for writing with a memoir created in the form of a twine game.",
          imgPath: writingImg, 
          demoLink: "https://hazel501115898.wordpress.com/",
          isBlog: false
        },
        {
            title: "Writing Journey",
            description: "An e-portfolio for writing with a memoir created in the form of a twine game.",
            imgPath: writingImg, 
            demoLink: "https://hazel501115898.wordpress.com/",
            isBlog: false
        },
        {
            title: "Writing Journey",
            description: "An e-portfolio for writing with a memoir created in the form of a twine game.",
            imgPath: writingImg, 
            demoLink: "https://hazel501115898.wordpress.com/",
            isBlog: false
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

  return (
    <Box
      sx={{
        padding: "2rem",
        marginTop: "64px",
      }}
    >
      { data.map((section, index) => (
        <Box key={index} sx={{ marginBottom: "2rem" }} >
         <DisplaySection 
          title={section.title} 
          projects={section.projects} 
          positions={section.positions}
         />
        </Box>
      ))}
    </Box>
  );
}

export default ExperiencePage;