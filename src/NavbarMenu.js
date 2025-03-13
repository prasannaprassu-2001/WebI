export const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    path: "/"
  },
  {
    id: 2,
    title: "Services",
    path: "#",
    submenu: [
      {
        id: 6,
        title: "Web Development",
        path: "#",
        submenu: [
          { id: 9, title: "Frontend Development", path: "#" },
          { id: 10, title: "Backend Development", path: "#" },
          { id: 11, title: "Full Stack", path: "#" }
        ]
      },
      { id: 7, title: "App Development", path: "#" },
      { id: 8, title: "SEO Optimization", path: "#" }
    ]
  },
  {
    id: 3,
    title: "Tutorials",
    path: "#",
    submenu: [
      {
        id: 12,
        title: "Programming",
        path: "#",
        submenu: [
          {
            id: 13,
            title: "JavaScript",
            path: "#",
            submenu: [
              { id: 14, title: "ES6 Features", path: "#" },
              { id: 15, title: "Async/Await", path: "#" },
              { id: 16, title: "React Basics", path: "#" }
            ]
          },
          {
            id: 17,
            title: "Python",
            path: "#",
            submenu: [
              { id: 18, title: "Data Structures", path: "#" },
              { id: 19, title: "Machine Learning", path: "#" },
              { id: 20, title: "Django Basics", path: "#" }
            ]
          }
        ]
      },
      {
        id: 21,
        title: "Design",
        path: "#",
        submenu: [
          { id: 22, title: "UI/UX Design", path: "#" },
          { id: 23, title: "Graphic Design", path: "#" }
        ]
      }
    ]
  },
  {
    id: 4,
    title: "About Us",
    path: "#"
  },
  {
    id: 5,
    title: "Our Team",
    path: "#"
  },
  {
    id: 6,
    title: "Contact Us",
    path: "#"
  }
];