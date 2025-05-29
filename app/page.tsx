
import DesignCategories from "@/component/design-section";
import Header from "@/component/header";
import ServicesPage from "@/component/services";
import AboutMe from "@/component/aboutme";
import Tools from "@/component/tools";
import Education from "@/component/education";
import Projects from "@/component/projects";
import ContactMe from "@/component/contact-me";

export default function Home() {
  return (
    <div className="overflow-x-hidden  h-screen">
      <section className="min-h-[720px] w-full">
        <Header />
      </section>
      <section>
        <DesignCategories />
      </section>
      <section className="min-h-[720px] w-full">
        <ServicesPage />
      </section>
      <section>
        <DesignCategories />
      </section>
      <section className="min-h-[600px] w-full bg-green-900">
        <AboutMe />
      </section>
      <section>
        <DesignCategories />
      </section>
      <section className="min-h-[1000px] w-full bg-[#FFFFFF]">
        <Tools/>
      </section>
      <section>
        <DesignCategories />
      </section>
      <section className="min-h-[1100px]">
        <Projects/>
      </section>
      <section>
        <DesignCategories />
      </section>
      <section className="min-h-[1200px] w-full bg-[#FFFFFF]">
    <Education/>
      </section>
      <section>
        <DesignCategories />
      </section>
      <section className="min-h-[1000px] bg-[#FFFFFF]">
      <ContactMe/>
      </section>
      <section>
        <DesignCategories />
      </section>
    </div>
  );
}
