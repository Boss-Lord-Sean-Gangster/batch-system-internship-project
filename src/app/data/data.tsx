interface Review {
    id: number;
    name: string;
    heading:string;
    image: string;
    review: string;
    rating: number;
  }
  
  const reviews: Review[] = [
    {
      id: 1,
      name: "John Doe",
      heading:"Financial Expert",
      image: "../Images/User (1).png",
      review: "Ureka has completely changed how I manage my finances. The budgeting features are incredibly useful and have helped me save more than ever before.",
      rating: 5,
    },
    {
      id: 2,
      name: "Jane Smith",
      heading: "Financial Planner",
      image: "../Images/User (2).png",
      review: "I love using Ureka! It's user-friendly and the clever notifications ensure I never miss an important financial decision.",
      rating: 4,
    },
    {
      id: 3,
      name: "Michael Johnson",
      heading: "Best Budgeting App",
      image: "../Images/User (3).png",
      review: "Ureka's premium features are worth every penny. It's like having a personal financial advisor in my pocket.",
      rating: 5,
    },
    {
      id: 4,
      name: "Emily Davis",
      heading: "Budgeting Expert",
      image: "../Images/User (4).png",
      review: "The app's design is clean and easy to navigate. It makes financial planning less daunting and more approachable.",
      rating: 4,
    },
    {
      id: 5,
      name: "David Martinez",
      heading: "Budgeting App",
      image: "../Images/User (5).png",
      review: "I appreciate how customizable Ureka is. It allows me to tailor the app to fit my unique financial goals and needs.",
      rating: 5,
    },
  ];
  
  export default reviews;
  