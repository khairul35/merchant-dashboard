import { ComponentProps } from "./index.prop";

const Component = (props: ComponentProps) => {
    const { padding, style, className, children, onClick, handleMouseEnter, handleMouseLeave } = props;
    
    // Generate padding classes dynamically based on the `padding` prop
    const paddingClasses = padding !== undefined ? `p-${padding}` : 'p-6';
    return (
        <div
          id="card"
          className={`
            rounded-lg
            bg-white
            shadow-md
            border
            border-gray-200
            ${className}
            ${paddingClasses}
          `}
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
