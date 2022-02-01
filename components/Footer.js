import styles from "../styles/Home.module.css";
import Image from "next/image";
import React from "react";

const Footer = (props) => {
    return (
        <>
            <footer className={styles.footer + ' bg-dark m-0'}>
                <a
                    href="https://jake-ngatchu.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Designed By Jake Ngatchu
                    <span className={styles.logo + ' px-2'}>
                            <Image src="/jnlogo.jpg" alt="Vercel Logo" width={30} height={30}/>
                        </span>
                </a>
            </footer>
        </>
    )
}

export default Footer
