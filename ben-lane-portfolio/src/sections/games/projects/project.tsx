import type { ProjectObj } from "./projectObj";

export default function Project(props: ProjectObj) {

  const { title } = props;

  return (
    <div className="w-full p-4 h-20 bg-amber-300">
      {title}
    </div>
  );
}