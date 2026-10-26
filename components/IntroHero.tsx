"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type CSSProperties } from "react";

const PHONE = "529612298765";
const orderUrl = `https://wa.me/${PHONE}?text=${encodeURIComponent("Hola, quiero pedir un raspado de La caseta del sabor. ¿Me comparten el menú y los precios?")}`;

const flavors = {
  gourmet: ["Leche quemada", "Pistache", "Nuez"],
  clasicos: ["Fresa", "Mango", "Maracuyá", "Coco", "Chamoyadas", "Gloria", "Vainilla", "Tamarindo"],
};

type IngredientKind = "strawberry" | "lime" | "mango" | "flower" | "ice" | "heart";

const particles: { kind: IngredientKind; style: CSSProperties }[] = [
  { kind: "strawberry", style: { "--from-x": "-57vw", "--from-y": "-34vh", "--mid-x": "-5vw", "--mid-y": "-17vh", "--end-x": "-30vw", "--end-y": "-28vh", "--turn": "-24deg" } as CSSProperties },
  { kind: "lime", style: { "--from-x": "55vw", "--from-y": "-29vh", "--mid-x": "7vw", "--mid-y": "-15vh", "--end-x": "27vw", "--end-y": "-27vh", "--turn": "38deg" } as CSSProperties },
  { kind: "mango", style: { "--from-x": "-50vw", "--from-y": "27vh", "--mid-x": "-11vw", "--mid-y": "6vh", "--end-x": "-36vw", "--end-y": "19vh", "--turn": "24deg" } as CSSProperties },
  { kind: "ice", style: { "--from-x": "38vw", "--from-y": "31vh", "--mid-x": "13vw", "--mid-y": "10vh", "--end-x": "32vw", "--end-y": "21vh", "--turn": "-19deg" } as CSSProperties },
  { kind: "flower", style: { "--from-x": "-33vw", "--from-y": "-37vh", "--mid-x": "-4vw", "--mid-y": "-4vh", "--end-x": "-19vw", "--end-y": "-36vh", "--turn": "80deg" } as CSSProperties },
  { kind: "heart", style: { "--from-x": "27vw", "--from-y": "-42vh", "--mid-x": "5vw", "--mid-y": "-3vh", "--end-x": "18vw", "--end-y": "-38vh", "--turn": "-32deg" } as CSSProperties },
  { kind: "strawberry", style: { "--from-x": "-31vw", "--from-y": "35vh", "--mid-x": "-7vw", "--mid-y": "11vh", "--end-x": "-17vw", "--end-y": "33vh", "--turn": "37deg" } as CSSProperties },
  { kind: "lime", style: { "--from-x": "48vw", "--from-y": "20vh", "--mid-x": "9vw", "--mid-y": "5vh", "--end-x": "36vw", "--end-y": "3vh", "--turn": "-45deg" } as CSSProperties },
];

function Ingredient({ kind, style }: { kind: IngredientKind; style: CSSProperties }) {
  return (
    <svg className={`ingredient ingredient--${kind}`} style={style} viewBox="0 0 100 100" aria-hidden="true">
      {kind === "strawberry" && <>
        <path d="M50 20C35 10 16 24 18 45c2 21 24 44 32 48 8-4 30-27 32-48 2-21-17-35-32-25Z" fill="var(--strawberry)" stroke="var(--cinnamon)" strokeWidth="3" />
        <path d="M30 23c10 0 15 1 20 8 5-7 10-8 20-8-5 6-12 9-20 10-8-1-15-4-20-10Z" fill="var(--lime)" />
        <path d="M50 28c-3-9-2-17 3-21" fill="none" stroke="var(--cinnamon)" strokeWidth="3" strokeLinecap="round" />
        <g fill="var(--cream)"><ellipse cx="36" cy="44" rx="2" ry="3"/><ellipse cx="58" cy="43" rx="2" ry="3"/><ellipse cx="48" cy="58" rx="2" ry="3"/><ellipse cx="64" cy="65" rx="2" ry="3"/><ellipse cx="37" cy="72" rx="2" ry="3"/></g>
      </>}
      {kind === "lime" && <>
        <circle cx="50" cy="50" r="43" fill="var(--lime)" stroke="var(--cinnamon)" strokeWidth="3" />
        <circle cx="50" cy="50" r="35" fill="var(--cream)" />
        <circle cx="50" cy="50" r="29" fill="var(--lime-light)" />
        <g stroke="var(--cream)" strokeWidth="3"><path d="M50 50V21"/><path d="M50 50 70 28"/><path d="M50 50 79 54"/><path d="M50 50 65 74"/><path d="M50 50 29 72"/><path d="M50 50 22 43"/><path d="M50 50 37 25"/></g>
      </>}
      {kind === "mango" && <>
        <path d="M24 68c-9-21 4-51 28-54 24-2 38 20 30 43-9 27-45 39-58 11Z" fill="var(--mango)" stroke="var(--cinnamon)" strokeWidth="3" />
        <path d="M54 18c-1-11 5-15 13-16" fill="none" stroke="var(--cinnamon)" strokeWidth="3" strokeLinecap="round" />
        <path d="M58 19C68 7 82 10 87 14c-7 9-19 13-29 5Z" fill="var(--lime)" />
      </>}
      {kind === "flower" && <>
        <g fill="var(--pink)" stroke="var(--cinnamon)" strokeWidth="2"><ellipse cx="50" cy="24" rx="13" ry="23"/><ellipse cx="50" cy="76" rx="13" ry="23"/><ellipse cx="24" cy="50" rx="23" ry="13"/><ellipse cx="76" cy="50" rx="23" ry="13"/><ellipse cx="31" cy="31" rx="13" ry="19" transform="rotate(-45 31 31)"/><ellipse cx="69" cy="69" rx="13" ry="19" transform="rotate(-45 69 69)"/><ellipse cx="69" cy="31" rx="13" ry="19" transform="rotate(45 69 31)"/><ellipse cx="31" cy="69" rx="13" ry="19" transform="rotate(45 31 69)"/></g>
        <circle cx="50" cy="50" r="17" fill="var(--mango)" stroke="var(--cinnamon)" strokeWidth="2" />
      </>}
      {kind === "ice" && <>
        <path d="M26 22 68 13 87 35 78 77 35 87 13 64Z" fill="var(--ice)" stroke="var(--turquoise-dark)" strokeWidth="3" />
        <path d="M26 22 47 43 87 35M47 43 35 87M47 43 78 77" fill="none" stroke="var(--turquoise-dark)" strokeOpacity=".5" strokeWidth="2" />
      </>}
      {kind === "heart" && <path d="M50 88 16 54C-4 32 22 8 43 28l7 7 7-7C78 8 104 32 84 54Z" fill="var(--pink)" stroke="var(--cinnamon)" strokeWidth="3" />}
    </svg>
  );
}

export default function IntroHero() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const active = document.documentElement.dataset.intro === "playing";
    setPlaying(active);
    if (!active) return;
    const finish = () => {
      document.documentElement.dataset.intro = "done";
      setPlaying(false);
      try { localStorage.setItem("caseta-intro-seen", "1"); } catch { /* Storage is optional. */ }
    };
    const timer = window.setTimeout(finish, 5500);
    const onScroll = () => { if (window.scrollY > 32) finish(); };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.clearTimeout(timer); window.removeEventListener("scroll", onScroll); };
  }, [playing]);

  const endIntro = () => {
    document.documentElement.dataset.intro = "done";
    setPlaying(false);
    try { localStorage.setItem("caseta-intro-seen", "1"); } catch { /* Storage is optional. */ }
  };

  const replayIntro = () => {
    dialogRef.current?.close();
    document.documentElement.dataset.intro = "playing";
    setPlaying(true);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  const openFlavors = () => {
    endIntro();
    dialogRef.current?.showModal();
  };

  return (
    <main>
      <section className="hero" aria-labelledby="hero-title" onFocusCapture={() => { if (playing) endIntro(); }}>
        <div className="hero-field hero-field--cream" aria-hidden="true" />
        <div className="hero-field hero-field--turquoise" aria-hidden="true" />
        <div className="paper-bunting" aria-hidden="true">
          {Array.from({ length: 11 }, (_, index) => <span key={index} />)}
        </div>

        <div className="cinematic" aria-hidden="true">
          <div className="cinematic-color" />
          <div className="cinematic-cup"><Image src="/images/raspado-hero.webp" alt="" width={1024} height={1536} priority /></div>
          <div className="cinematic-build" />
          <div className="cinematic-peak" />
          <div className="cinematic-flash" />
        </div>

        <header className="hero-header">
          <div className="wordmark" aria-label="La caseta del sabor">
            <span>la caseta</span><strong>del sabor</strong>
          </div>
          <div className="header-actions">
            <button className="skip-intro" type="button" onClick={endIntro}>Saltar intro <span aria-hidden="true">↗</span></button>
            <button className="header-menu" type="button" onClick={openFlavors}>Sabores <span aria-hidden="true">↗</span></button>
          </div>
        </header>

        <div className="product-stage" aria-hidden="true">
          <div className="product-full"><Image src="/images/raspado-hero.webp" alt="" width={1024} height={1536} priority /></div>
        </div>

        <div className="ingredient-field" aria-hidden="true">
          {particles.map((particle, index) => <Ingredient key={index} kind={particle.kind} style={particle.style} />)}
          <i className="confetti confetti--1"/><i className="confetti confetti--2"/><i className="confetti confetti--3"/><i className="confetti confetti--4"/><i className="confetti confetti--5"/>
        </div>

        <div className="intro-lockup" aria-hidden="true">
          <span>la caseta</span>
          <strong>del sabor</strong>
          <small>El raspado es primero</small>
        </div>

        <div className="hero-copy">
          <h1 id="hero-title">El raspado<br/><em>es primero.</em></h1>
          <p>Frescura, color y sabor mexicano en cada cucharada.</p>
          <div className="hero-actions">
            <button className="button button--primary" type="button" onClick={openFlavors}>Ver sabores <span aria-hidden="true">↗</span></button>
            <a className="button button--secondary" href={orderUrl} target="_blank" rel="noreferrer">Pedir por WhatsApp <span aria-hidden="true">↗</span></a>
          </div>
          <span className="hero-location">Tuxtla Gutiérrez, Chiapas</span>
        </div>

        <div className="hero-footnote">
          <span>Raspados clásicos y gourmet</span>
          <button type="button" onClick={replayIntro}>Repetir intro <span aria-hidden="true">↺</span></button>
        </div>
      </section>

      <dialog className="flavors-dialog" ref={dialogRef} aria-labelledby="flavors-title">
        <div className="dialog-head">
          <h2 id="flavors-title">Nuestros sabores</h2>
          <button type="button" onClick={() => dialogRef.current?.close()} aria-label="Cerrar sabores">×</button>
        </div>
        <p>Elige tu antojo. Pregunta por presentaciones y precios al hacer tu pedido.</p>
        <div className="flavor-groups">
          <div><h3>Gourmet</h3><ul>{flavors.gourmet.map(flavor => <li key={flavor}>{flavor}</li>)}</ul></div>
          <div><h3>Clásicos</h3><ul>{flavors.clasicos.map(flavor => <li key={flavor}>{flavor}</li>)}</ul></div>
        </div>
        <a className="button button--primary dialog-order" href={orderUrl} target="_blank" rel="noreferrer">Pedir por WhatsApp <span aria-hidden="true">↗</span></a>
      </dialog>
    </main>
  );
}
