import github from "@/assets/github.svg";

export default function Footer() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-5 bg-gradient-to-br from-[#1CB5E0] to-[#000851]">
      <a href="https://github.com/Andrgoit/react-todo-list" target="_blank">
        <img src={github} alt="github icon" className="mb-3 mt-3 h-6 w-6" />
      </a>
    </div>
  );
}
