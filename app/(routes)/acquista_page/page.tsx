"use client";
import { useRouter } from "next/navigation";
/* import style from "@/app/(routes)/acquista_page/acquista.module.scss"; */
import Button from "@/app/components/Atom/BigButton/BigButton";
import style from "./acquista.module.scss";

function Acquista() {
  const router = useRouter();
  return (
    <>
      <div className={style.container}>
        <h1>Acquista</h1>
        <div className={style.mainButtons}>
          <Button
            text="BIGLIETTO D'INGRESSO"
            onClick={() => router.push("/acquista_page/calendario")}
          />
          <Button
            text="AUDIOGUIDE"
            onClick={() => router.push("/audioguide")}
          />
          <Button
            text="TEATRI DI PIETRA"
            onClick={() => router.push("/teatri_pietra")}
          />
        </div>
      </div>
    </>
  );
}

export default Acquista;
