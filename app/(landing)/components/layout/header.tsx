import Image from "next/image";
import Link from "next/link";
import { FiSearch, FiShoppingBag } from "react-icons/fi";

const Header = () => {
    return ( 
    <header>
        <div className="flex justify-between gap-10 container mx-auto py-7">
        <Image 
        src="/images/logo.svg" 
        alt="sporton logo" 
        width={127} 
        height={30}
     />
     <nav className="flex gap-44 font-medium">
        <Link href="#" className="relative after:conten-[''] after:block after:bg-orange-500 after:rounded-full after:h-[3px] after:w-2/3 after:absolute after:left-1/2 after:-translate-x-1/2"
        >Home</Link>
        <Link href="#">Category</Link>
        <Link href="#">Explore Products</Link>
     </nav>
     <div className="flex gap-10">
        <FiSearch size={24}/>
        <div className="relative">
         <FiShoppingBag size={24}/>
         <div className="bg-orange-500 rounded-full w-3.5 h-3.5 absolute -top-1 -right-1 text-[10px] text-white text-center">
            3
         </div>
        </div>
     </div>
     </div>
    </header>
        );
}

export default Header;