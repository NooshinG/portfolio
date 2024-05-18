// import { PropsWithChildren } from "react";
import { useElementOnScreen } from "../hooks/useElementOnScreen";

interface InViewProps {
  children: React.ReactNode;
  delay: number;
  // id?:string
}

const InView: React.FC<InViewProps> = ({ children, delay }) => {
  const { ref, isVisible } = useElementOnScreen();
  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? `active delay-[${delay}ms]` : ""}`}
      // id={`123-${id}`}
    >
      {children}
    </div>
  );
};

export default InView;
