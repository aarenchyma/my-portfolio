
import { Tools } from "./tools";

interface Skill {
  title: string;
  image: string;
  category: string;
}

const Skills = () => {
  const languages = Tools.filter((s: Skill) => s.category === "Language");
  const frameworks = Tools.filter((s: Skill) => s.category === "Framework");
  const tools = Tools.filter((s: Skill) => s.category === "Tool");

  const renderSkillGrid = (skills: Skill[]) => (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 pt-6 place-items-center">
      {skills.map((skill, i) => (
        <div key={i} className="flex flex-col items-center">
          <img
            src={skill.image}
            alt={skill.title}
            className="h-20 w-20 object-contain"
          />
          <p className="mt-3 text-sm font-medium text-gray-700 text-center">
            {skill.title}
          </p>
        </div>
      ))}
    </div>
  );

  return (
    <section className="p-10 bg-gray-100 pt-8">
      <div className="flex flex-col items-center">
        <h1 className="font-semibold lg:text-3xl text-2xl capitalize text-center max-w-3xl mb-10">
          Here’s an overview of the{" "}
          <span className="text-blue-700">skills</span>,{" "}
          <span className="text-blue-700">tools</span> and{" "}
          <span className="text-blue-700">technologies</span> I work with
        </h1>

        {/* Top row: Languages + Frameworks side by side */}
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-10 w-full mb-10">
          <div className="p-6 lg:border-r lg:border-gray-400 ">
            <h2 className="text-lg font-semibold text-center mb-4">Languages</h2>
            {renderSkillGrid(languages)}
          </div>

          <div className="p-6 border-t border-gray-400 lg:border-none">
            <h2 className="text-lg font-semibold text-center mb-4">Frameworks</h2>
            {renderSkillGrid(frameworks)}
          </div>
        </div>

        {/* Bottom row: Tools full width */}
        <div className="p-6 w-full border-t border-gray-400">
          <h2 className="text-lg font-semibold text-center mb-4">Tools and Technologies</h2>
          {renderSkillGrid(tools)}
        </div>
      </div>
    </section>
  );
};

export default Skills;
