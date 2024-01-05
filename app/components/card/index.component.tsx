import { ComponentProps } from "./index.prop";

const Component = (props: ComponentProps) => {
    const { style, className, children, onClick, handleMouseEnter, handleMouseLeave } = props;
    return (
        <div
          id="card"
          className={`rounded-lg bg-white shadow-md p-6 border border-gray-200 ${className}`}
          style={style}
          onClick={onClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {children}
        </div>
      );
};

export default Component;
