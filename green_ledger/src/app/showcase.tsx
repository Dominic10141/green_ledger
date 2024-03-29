import Image from "next/image";
import {Report} from "../components/component/report";
import {Emission} from "../components/component/emission";
import { Button } from "@/components/ui/button"
/*import { BrowserRouter as Router,Switch, Route,Link } from "react-router-dom";
*/
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Emission />
      <Link href="/Report">
      <Button>View All Projects</Button>
    </Link>
    <Report/>

    
    </div>

  );
}
