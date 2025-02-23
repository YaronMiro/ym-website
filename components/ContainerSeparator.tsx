import React from "react";

interface ContainerSeparatorProps {
    className?: string
}

const ContainerSeparator: React.FC<ContainerSeparatorProps> = ( {className}) => {
    return (
        <div className={`h-[1px] bg-secondary/10 xl:w-[110%] xl:-mx-[5%] ${className}`}></div>
    );
}

export default ContainerSeparator;