import About from "@/components/about/About";
// import Team from "@/components/team/Team";
import Values from "@/components/values/Values";

export const metadata = {
  title: "About"
};

const page = () => {
  return (
    <>
      <About />
      <Values />
      {/* <Team /> */}
    </>
  );
};

export default page;
