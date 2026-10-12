
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from "next/link";

export default function Footer() {
    return (
     <div>
         <hr/>
         <footer className="flex justify-center items-center p-[15px] gap-7">
             <Link href="https://github.com/margofel3kkk/freestyle-frontend"><GitHubIcon/></Link>
         </footer>
     </div>
    );
}