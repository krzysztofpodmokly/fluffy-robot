import { NextResponse } from "next/server"

const result = {
  "personal_info": {
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "123-456-7890",
    "location": "New York, NY"
  },
  "summary": "Passionate frontend developer with 5+ years of experience...",
  "skills": [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React",
    "Redux",
    "Webpack",
    "Responsive Design",
    "UI/UX Design",
    "Version Control (Git)"
  ],
  "experience": [
    {
      "title": "Frontend Developer",
      "company": "Tech Solutions Inc.",
      "location": "San Francisco, CA",
      "dates": "2018 - Present",
      "description": "Developed and maintained responsive and user-friendly...",
      "highlights": [
        "Led a team of 3 developers to successfully redesign...",
        "Implemented performance optimizations that improved...",
        "Collaborated with backend developers to integrate..."
      ]
    },
    {
      "title": "Junior Frontend Developer",
      "company": "WebDesign Co.",
      "location": "Los Angeles, CA",
      "dates": "2016 - 2018",
      "description": "Assisted senior developers in building and testing...",
      "highlights": [
        "Contributed to the development of a new customer..."
      ]
    }
  ],
  "education": [
    {
      "degree": "Bachelor of Science in Computer Science",
      "university": "University of Example",
      "location": "City, State",
      "dates": "2012 - 2016"
    }
  ],
  "projects": [
    {
      "title": "E-Commerce Website",
      "description": "Developed a fully functional e-commerce website...",
      "highlights": [
        "Implemented user authentication and authorization...",
        "Integrated third-party payment gateway for seamless...",
        "Utilized React and Redux for dynamic user interfaces..."
      ]
    },
    {
      "title": "Portfolio Website",
      "description": "Designed and built a personal portfolio website...",
      "highlights": [
        "Implemented responsive design for optimal viewing...",
        "Utilized CSS animations to enhance user experience..."
      ]
    }
  ]
}

export async function GET() {
  return NextResponse.json(result);
}