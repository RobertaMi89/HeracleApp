"use client";
import { Link } from "@/i18n/routing";
import React from "react";
import styles from "./ListEl.module.scss";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

export interface IElement {
  id: string;
  label: string;
  url: string;
  icon?: string;
  iconActive?: string;
}
function ListEl({ el }: { el: IElement }) {
  const pathname = usePathname();
  const t = useTranslations("Footer");

  const isActive = pathname.includes(el.url);
  return (
    <li className={`${styles.listEl} ${isActive ? styles.active : ""}`}>
      <Link href={el.url}>
        {el.icon && (
          <Image
            src={el.iconActive && isActive ? el.iconActive : el.icon}
            alt={t(el.label)}
            className={styles.iconTest}
            width={35}
            height={35}
          />
        )}

        <p>{t(el.label)}</p>
      </Link>
    </li>
  );
}

export default ListEl;
