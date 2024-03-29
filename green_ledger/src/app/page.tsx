'use client'
import Image from "next/image";
import {Report} from "../components/component/report";
import {Emission} from "../components/component/emission";
import { Button } from "@/components/ui/button"
import { BrowserRouter as Router,Routes, Route} from "react-router-dom";

import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/Emission" element={<Emission/>}/>
          <Route path="/" element={<Report />} />
      

        </Routes>

      </Router>


<Emission/>
   
</div>
  );
}

