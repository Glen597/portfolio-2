export interface ProjectsCardData{
    imageSrc: string;
    Description:string;
    className:string;
    tools_1:string
     tools_2:string
      tools_3:string
      tools_4:string
}

export const ProjectsCardData: ProjectsCardData[]= [
    {
        imageSrc:"/userAPI.png",
        Description:"A RESTful API built with Express.js and PostgreSQL.",
        className:"  w-200  h-143 object-cover rounded-t-[30px]",
        tools_1:"Javacript",
     tools_2:"Node Js",
      tools_3:"PostgreSQL",
        tools_4:"VS-Code"


},
 {
        imageSrc:"/userService.png",
        Description:"A RESTful microservice built with Java, JAX-RS (Jersey), Grizzly, and Gradle.",
         className:"rounded-t-[30px]",
          tools_1:"Java",
     tools_2:"JAX-RS",
     tools_3:"Local Storage",
        tools_4:"VS-Code"


},
 {
        imageSrc:"/product-service.png",
        Description:"A clean and lightweight RESTful microservice built with Java, JAX-RS (Jersey), Grizzly, and Gradle.",
         className:" w-600  h-143 object-cover rounded-t-[30px]",
          tools_1:"Java",
     tools_2:"JAX-RS",
      tools_3:"Local Storage",
        tools_4:"VS-Code"


},
 {
        imageSrc:"/webPage.png",
        Description:"This project is a simple, elegant restaurant menu web page.",
         className:"rounded-t-[30px]",
          tools_1:"HTML",
     tools_2:"CSS",
      tools_3:"JAVASCRIPT",
        tools_4:"VS-Code"


}]