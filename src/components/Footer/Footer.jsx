import github from "@/assets/github.svg";

export default function Footer() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-5 bg-gradient-to-br from-[#1CB5E0] to-[#000851]">
      <a href="https://github.com/Andrgoit/react-template" target="_blank">
        footer
        <img src={github} alt="github icon" />
      </a>
    </div>
  );
}
