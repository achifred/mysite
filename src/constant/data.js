import bakery from '../static/baked-berry-cake-1055272.jpg';
import laughter from '../static/laughter.jpg'
import folio from '../static/porfolio.jpeg'
import pot from '../static/pot.jpg'
export const tech = [
  {
    title: 'javascript'
  },
  {
    title: 'Nodejs'
  },
  {
    title: 'jQuery'
  },

  {
    title: 'react js'
  },
  {
    title: 'react-native'
  },
  {
    title: 'Php '
  },

  {
    title: 'sql'
  },
  {
    title: 'mysql'
  },
  {
    title: 'postgresql'
  }
];

export const about = [
  {
    title: 'Hi my name is Fred Achi.',
    slug: "I build things for the web.",
    description:
      ' I am web Developer based in Ghana. I develop websites, web applications  and mobile application. I believe nothing is impossible to achieve if you put in your all. '
  }
];
export const education = [
  {
    name: ' Kwame Nkrumah University of Science and Technology',
    programe: 'BSc Computer Engineering',
    year: 'June, 2018'
  }
];

export const project = [
  {
    title: 'Developer jokeroom',
    description: 'A live chart web application built with nodejs, express, socket.io and react ',
    link: 'https://github.com/achifred/jokeroomserver',
    site: 'https://jokeroom.netlify.com/',

    picture: laughter
  },
  {
    title: 'Sample  Business Landing page',
    description: 'a sample Business landing page built with php, HTML5, CSS3 and javascript. Use https://amenuve.000webhostapp.com/admin username:admin password:admin to access the dashboard',
    link: 'https://github.com/achifred/amenuveve',
    site:'https://amenuve.000webhostapp.com/',
    picture: pot
  },
  {
    title: 'Sample Html Landing Page',
    description: ' A landing page built with HTML5 & CSS3 ',
    link: 'https://github.com/achifred/bakery',
    site: 'https://bake.netlify.com/',
    picture: bakery
  },

  {
    title: 'Portfolio',
    description: 'A personal webiste built with react.js ',
    link: 'https://github.com/achifred/mysite',
    picture: folio
  }
];

export const skills = [
  {
    title: 'Front-end Development',
    techstack: 'JavaScript, React.js ,  HTML5, CSS3 '
  },
  {
    title: 'Backend Development',
    techstack: ' NodeJs, Php, SQL, MySQL, PostgreSQL'
  },
  {
    title: 'Mobile Application Development ',
    techstack: 'React-native'
  },
  {
    title: 'CMS',
    techstack: 'Wordpress'
  }
];

export const workexp = [
  {
    company: 'Kofi Annan Center of Excellence in ICT, Accra',
    role: 'Web Application Developer',
    date: ' september 2018 - August 2019',
    project: [
      {
        role:
          'Develop an advertisement website for advertising center courses using PHP'
      },
      {
        role:
          "Developed the frontend for a ledger system. An application to manage center's financial transactions."
      }
    ]
  },
  {
    company: 'Appatech Research Ghana, Kumasi',
    role: 'Web and Mobile Application Developer(intern)',
    date: ' June 2017- August 2017',
    project: [
      {
        role:
          'Design and develop a mobile application version of an existing Enterprise Resource Planning '
      }
    ]
  }
];

export const contact = [
  {
    name: 'Fred Achi',

    country: 'Accra, Ghana',
    email: 'achifred123@gmail.com',
    Phone: '+233548480707'
  }
];
