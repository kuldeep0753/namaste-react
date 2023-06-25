import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
//   const { title, description, isVisible, setIsVisible } = props;
  //   const [isVisible, setIsVisible] = useState(false);
  console.log(isVisible);
  console.log(setIsVisible);
  return (
    <div className="border border-black p-2 m-2">
      <h3 className="font-bold text-xl">{title}</h3>
      {isVisible ? (
        <button
          onClick={() => {
            setIsVisible(false);
          }}
        >
          Hide
        </button>
      ) : (
        <button
          onClick={() => {
            setIsVisible(true);
            console.log(setIsVisible);
          }}
        >
          Show
        </button>
      )}

      {isVisible && <p>{description}</p>}
    </div>
  );
};

const Insta = () => {
  const [sectionConfig, setSectionConfig] = useState({
    showAbout: false,
    showTeam: false,
    showCareers: false,
  });
  return (
    <div>
      <h1 className="text-3xl p-2 m-2 font-bold">InstaMart</h1>
      <Section
        title={"About Insta"}
        description={
          "To mitigate the disadvantages of prop drilling, alternative techniques such as using context, Redux, or other state management libraries can be considered. These approaches provide a more centralized and scalable way to share data and functions across components, reducing the need for prop drillin"
        }
        isVisible={sectionConfig.showAbout}
        setIsVisible={() =>
          setSectionConfig({
            showAbout: true,
            showTeam: false,
            showCareers: false,
          })
        }
      />

      <Section
        title={"Team Insta"}
        description={
          "To mitigate the disadvantages of prop drilling, alternative techniques such as using context, Redux, or other state management libraries can be considered. These approaches provide a more centralized and scalable way to share data and functions across components, reducing the need for prop drillin"
        }
        isVisible={sectionConfig.showTeam}
        setIsVisible={() =>
          setSectionConfig({
            showAbout: false,
            showTeam: true,
            showCareers: false,
          })
        }
      />
      <Section
        title={"Careers"}
        description={
          "To mitigate the disadvantages of prop drilling, alternative techniques such as using context, Redux, or other state management libraries can be considered. These approaches provide a more centralized and scalable way to share data and functions across components, reducing the need for prop drillin"
        }
        isVisible={sectionConfig.showCareers}
        setIsVisible={() =>
          setSectionConfig({
            showAbout: false,
            showTeam: false,
            showCareers: true,
          })
        }
      />
    </div>
  );
};

export default Insta;
