"use client";

import NavLink from "./navLinks/navLinks";
import styles from "./links.module.css";
import { useState } from "react";
import Image from "next/image";

const Links = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { title: "Home", path: "/" },
    { title: "About Us", path: "/about" },
    { title: "Contact Us", path: "/contact" },
    { title: "Blogs", path: "/blog" },
  ];

  const session = true; 
  const isAdmin = true;

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link, i) => (
          <NavLink item={link} key={link.title} />
        ))}
        {session ? (
          <>
            {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
            <button className={styles.logout}>Logout</button>
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }} />
        )}
      </div>
        <Image src="/menu-bar.png" alt=""  height={30} width={30} className={styles.menu} onClick={() => setOpen((prev) => !prev)}/>
      {open && (
        <div className={styles.mobLinks}>
          {links.map((link, i) => (
            <NavLink item={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;