import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Gift a Wish',
        description: "WishIt is a revolutionary social networking and e-commerce platform dedicated to facilitating the seamless exchange of gifts among loved ones.",
        tools: ['Express', 'MongoDB', 'Node JS', 'JWT', 'cloudinary', 'Node Mailer', 'Veriff',],
        role: 'Backend Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Bayasel',
        description: `BayaSel, derived from 'Buy And Sell', embodies an E-commerce model empowering farmers to directly connect with consumers, eliminating intermediaries and their associated costs.`,
        tools: ['JWT', 'Prisma', "Google Maps", "NestJS", "TypeScript", "MySQL", "AWS S3", "Cloudinary"],
        role: 'Backend Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'AI Powered Real Estate',
        description: 'My team built an AI-based real estate app using Replicate API and OpenAI. We used Express, Typescript, OpenAI, Replicate, Stripe, and Mongoose to develop the API. We utilized NextJS, Formik, TailwindCSS, and other npm libraries for the UI. We have trained multiple AI assistants using the latest GPT model and integrated Replicate API for image processing. We added role-based auth, subscription plans, Cron job scheduling, and payment integration with Stripe.',
        tools: ['React', 'Bootstrap', 'SCSS', 'Stripe', 'Express', 'TypeScript', 'MongoDB', 'Azure Blob', 'OpenAI API', 'Replicate AI', 'Cronjob', 'JWT'],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Loklok Clone',
        description: "I developed the complete API for the clone of my favorite movie website/app",
        tools: ['NodeJS', 'ExpressJs', 'MongoDB', 'Nodemailer', 'JWT'],
        code: '',
        demo: '',
        image: ayla,
        role: 'Backend Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },