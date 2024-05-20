const Resume = () => {
  const clickBtnHandler = () => {
    fetch("logo192.png").then((res) => {
      res.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Resume-Nooshin-Ghorbani.pdf";
        alink.click();
      });
    });
  };
  return (
    <button
      className="relative mt-4 h-[68px] w-[164px] rounded-md  bg-pale-dogwood text-xl font-normal text-space-cadet 
    after:absolute after:left-[-5px] after:top-[-5px] after:block after:h-[68px] after:w-[164px] after:rounded-md after:border-2 after:border-space-cadet after:content-['']"
      onClick={clickBtnHandler}
    >
      رزومه
    </button>
  );
};

export default Resume;
