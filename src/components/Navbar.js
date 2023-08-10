import { BsMusicNoteList } from "react-icons/bs";
// import { RxHome } from "react-icons/rx";

const Navbar = () => {
  return (
    <nav className=" bg-violet-100 p-6 text-center font-bold text-xl">
      <div className="flex justify-center align-center">
        <span>
          <BsMusicNoteList className="mt-1 mr-3 text-xl"/>
        </span>
        <span> SongFinder </span>
      </div>
    </nav>
  );
};

export default Navbar;
