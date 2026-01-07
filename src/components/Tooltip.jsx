import React from 'react';

const Tooltip = ({
  position = 'bottom',
  colors = ['bg-red-700', 'bg-green-700', 'bg-blue-700'],
}) => {
  const positionClasses = {
    bottom: {
      tooltip: 'bottom-full left-1/2 transform -translate-x-1/2 mb-2',
      arrow: 'left-1/2 transform -translate-x-1/2 -bottom-2 border-t',
    },
  };

  return (
    <div className="relative  group">
      <button className="relative p-4 bg-white/25 rounded-full border border-white/33">
        <div
          className={`hidden absolute  p-2 rounded-lg bg-white/25 shadow-md group-hover:flex space-x-1 ${positionClasses[position].tooltip}`}
        >
          {colors.map((color, index) => (
            <div
              key={index}
              className={`size-6 ${color} border-white rounded-full cursor-pointer`}
            ></div>
          ))}
          {/* arrow */}
          <div
            className={`absolute  w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white/33 ${positionClasses[position].arrow}`}
          ></div>
        </div>
      </button>
    </div>
  );
};

export default Tooltip;
