"use client";

import { icons } from "../app/icons";
import { researchPapers } from "./researchData";

export default function Home() {

  const cvData = [
    { years: "2002 : 2010", title: "Elementary", place: "Guayaquil" },
    { years: "2010 : 2016", title: "Middle School", place: "Ecuador" },
    { years: "2016 : 2020", title: "High School", place: "IAA" },
    { years: "2020 : 2024", title: "University", place: "Wageningen" },
  ];

  return (
    <>
      <main>
        <section id="home" className="home container">
          <h1>Home</h1>
          <p>
            Intro Paragraph <br />
            TO DO: FONT, COLOR SCHEME. Images. Links. Info. Etc. Bla bla. <br />
            This is random text.
            Hi, my name is Pods. My name is Sebastian Wehlburg.
            I edit videos.
            I am dutch. 
            I am from Ecuador.
            My mathematical research interests are probability theory (in particular random matrices), 
            statistical physics, and statistical learning theory.
          </p>
          <div className="icons">
            {icons.map(({title, url, icon: Icon}) => (
              <a
                key={title}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={title}
              >
                <Icon size={32} />
              </a>
            ))}
          </div>
        </section>
        
        <section className="cv-section container">
          <h1>CV</h1>
          <ul className="timeline">
            {cvData.map((entry, idx) => (
              <li className="timeline-item" key={idx}>
                <span className="timeline-date">{entry.years}</span>
                <div className="timeline-title">{entry.title}</div>
                <div className="timeline-place">{entry.place}</div>
              </li>
            ))}
          </ul>
        </section>
        
        <section id="research" className="research container">
          <h1>
            Research
          </h1>
          <p>
            My research focuses on random matrices, free probability and statistical learning theory. 
            For a list of all publications, see the publication list, the arXiv, or my Google Scholar profile. 
            Below are some recent or selected publications.
          </p>

          {researchPapers.map((paper, index) => (
            <div key={index} className="research-entry">
              <div className={`research-content ${index % 2 === 1 ? "reverse" : ""}`}>
                {paper.image && (
                  <img src={paper.image} alt={paper.title} className="research-image" />
                )}
                <div className="research-text">
                  <h2 className="research-title">{paper.title}</h2>
                  <p className="research-author">{paper.authors}</p>
                  <p className="research-type">{paper.type}</p>
                  <div className="research-description">{paper.description}</div>
                  <div className="research-tag">
                    {paper.tags.map((tag, i) => (
                    <span key={i} className="research-tag">#{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>
    </>
  );
}