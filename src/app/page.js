import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>  
        <div className="column">
          <h1>Elige el producto</h1>
          <a href="/sauna">
            Sauna
          </a>
          <a href="/vapor">
            Vapor
          </a>
        </div>
    </>
  );
}
