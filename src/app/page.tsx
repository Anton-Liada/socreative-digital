"use client";

import Link from "next/link";
import Projects from "@/components/projects";
import "./page.scss";

export default function Home() {
  return (
    <main className="main">
      <section className="hero-section">
        <nav>
          <ul className="navList">
            <li className="navItem">
              <Link href={"#about"} className="navLink">
                About
              </Link>
            </li>

            <li className="navItem">
              <Link href={"#team"} className="navLink">
                Team
              </Link>
            </li>

            <li className="navItem">
              <Link href={"#projects"} className="navLink">
                Projects
              </Link>
            </li>

            <li className="navItem">
              <Link href={"#contact"} className="navLink">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </section>

      <section className="about-section" id="about">
        About
      </section>

      <section className="team-section" id="team">
        Team
      </section>

      <Projects />

      <section className="contact-section" id="contact">
        Contact
      </section>
    </main>
  );
}
