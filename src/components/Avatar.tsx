import developer from '../assets/images/developer.webp'

const Avatar = ({ isHomeVisible }: { isHomeVisible: boolean }) => {
  return (
    <div
      className={`ease-[ease] relative max-w-[35%] content-center opacity-0 transition-opacity delay-[200ms] duration-500 max-md:hidden ${isHomeVisible ? "opacity-100" : ""}`}
    >
      <img
        src={developer}
        alt="avatar"
        className=" w-full"
      />
    </div>
  );
};

export default Avatar;
