


export interface DetailsItem {
  date: string;
  University: string;
  Degree: string;
}

export interface InfoCardData {
  imageSrc: string;
  className?: string;
  title: string;
  details: DetailsItem[];
}



export const cardsData: InfoCardData []=[ {
    imageSrc:"/education.svg",
    className:"",
    title:"Education",
   details: [
         {
             date:"October 2023-Present",
               University:"Otto-Friedrich Universität bamberg",
               Degree:"Bachelor of Science",
        },
        {
             date:"October 2020-October 2023",
               University:"Technische Hochschule Nürnberg",
               Degree:"Bachelor of Science",
        },
        {
              date:"October 2019-Septembre 2020",
               University:"Sprachschule Aktiv",
               Degree:"German Course",
        }
    ]

},
{
    imageSrc:"/work.svg",
    className:"",
    title:"Work Experience",
    details: [
         {
             date:"July 2024 – Present",
               University:"Remondis Gmbh",
               Degree:"Working Student Sotware-Developer",
        },
        {
             date:"Januar 2023-March 2024",
               University:"DATEV",
               Degree:"Working Student Software-Developer",
        },
        {
              date:"October 2020-December 2020",
               University:"Strohm und söhne",
               Degree:"Working Student Software-Developer",
        }
    ]

}

]

