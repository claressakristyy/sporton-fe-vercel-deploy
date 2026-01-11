type TButtonProps= {
    children: React.ReactNode;
    className?: string;
    variant?: "primary" | "dark" | "ghost";
    size?: "normal" | "small";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({children, className, variant = "primary", size = "normal", ...props}: TButtonProps) => {
    const baseStyles = "inline-flex gap-2 duration-300 justify-center items-center cursor-pointer hover:scale-105";

    const variants = {
        primary: 'bg-orange-500 text-white hover:bg-primary/85',
        dark: 'bg-black text-white hover:bg-black/85',
        ghost: 'bg-transparent hover:bg-gray-100 text-black',
    };

    const sizes = {
        normal: "py-4 px-9", 
        small: "py-[10px] px-7"
    };

    return (
        <button 
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`} 
        {...props}>
        {children}
        </button>
    );
};

export default Button;