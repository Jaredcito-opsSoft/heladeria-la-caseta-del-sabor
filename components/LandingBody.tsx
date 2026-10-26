import Image from "next/image";

const PHONE = "529612298765";
const orderUrl = `https://wa.me/${PHONE}?text=${encodeURIComponent(
  "Hola, quiero pedir un raspado de La caseta del sabor. ¿Me comparten el menú, precios y disponibilidad?",
)}`;
const mapUrl =
  "https://www.google.com/maps/search/?api=1&query=Calle+Central+Norte+1036+Albania+Alta+Tuxtla+Gutierrez+Chiapas";

const gourmet = ["Leche quemada", "Pistache", "Nuez"];
const classics = ["Fresa", "Mango", "Maracuyá", "Coco", "Chamoyadas", "Gloria", "Vainilla", "Tamarindo"];

function ArrowIcon() {
  return <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 16 16 4M7 4h9v9" /></svg>;
}

function FlowerMark({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" aria-hidden="true">
      <g fill="currentColor">
        <ellipse cx="50" cy="19" rx="12" ry="19" /><ellipse cx="50" cy="81" rx="12" ry="19" />
        <ellipse cx="19" cy="50" rx="19" ry="12" /><ellipse cx="81" cy="50" rx="19" ry="12" />
        <ellipse cx="28" cy="28" rx="11" ry="18" transform="rotate(-45 28 28)" />
        <ellipse cx="72" cy="72" rx="11" ry="18" transform="rotate(-45 72 72)" />
        <ellipse cx="72" cy="28" rx="11" ry="18" transform="rotate(45 72 28)" />
        <ellipse cx="28" cy="72" rx="11" ry="18" transform="rotate(45 28 72)" />
      </g>
      <circle cx="50" cy="50" r="13" fill="var(--mango)" />
    </svg>
  );
}

export default function LandingBody() {
  const year = new Date().getFullYear();

  return (
    <>
      <div className="flavor-ribbon" aria-label="Sabores disponibles">
        <div className="flavor-ribbon__track">
          <span>Fresa</span><i /><span>Maracuyá</span><i /><span>Leche quemada</span><i />
          <span>Tamarindo</span><i /><span>Pistache</span><i /><span>Mango</span><i />
          <span aria-hidden="true">Fresa</span><i aria-hidden="true" />
          <span aria-hidden="true">Maracuyá</span><i aria-hidden="true" />
          <span aria-hidden="true">Leche quemada</span><i aria-hidden="true" />
          <span aria-hidden="true">Tamarindo</span><i aria-hidden="true" />
          <span aria-hidden="true">Pistache</span><i aria-hidden="true" />
          <span aria-hidden="true">Mango</span><i aria-hidden="true" />
        </div>
      </div>

      <section className="flavors-section" id="sabores" aria-labelledby="flavors-heading">
        <div className="section-shell flavors-intro">
          <div className="flavors-title-wrap">
            <FlowerMark className="flavors-flower" />
            <h2 id="flavors-heading">Sabores que<br />se sienten<br /><em>de aquí.</em></h2>
          </div>
          <div className="flavors-lede">
            <p>De los clásicos frutales a los sabores más cremosos. Escoge con calma o pregunta cuál va mejor con tu antojo de hoy.</p>
            <a className="text-link" href={orderUrl} target="_blank" rel="noreferrer">Consultar disponibilidad <ArrowIcon /></a>
          </div>
        </div>

        <div className="section-shell flavor-ledger">
          <div className="flavor-family flavor-family--gourmet">
            <div className="family-heading"><span>Más cremosos</span><h3>Gourmet</h3></div>
            <ol>
              {gourmet.map((flavor, index) => (
                <li key={flavor}><span>{String(index + 1).padStart(2, "0")}</span><strong>{flavor}</strong></li>
              ))}
            </ol>
          </div>
          <div className="flavor-family flavor-family--classics">
            <div className="family-heading"><span>Los de siempre</span><h3>Clásicos</h3></div>
            <ul>{classics.map((flavor) => <li key={flavor}>{flavor}</li>)}</ul>
          </div>
        </div>
      </section>

      <section className="gourmet-feature" aria-labelledby="gourmet-heading">
        <div className="gourmet-visual">
          <div className="sun-stamp" aria-hidden="true"><span>Bien<br />frío</span></div>
          <Image src="/images/raspado-hero.webp" alt="Vaso de raspado con fruta, imagen conceptual de presentación" width={1024} height={1536} sizes="(max-width: 760px) 100vw, 52vw" />
          <p>Imagen conceptual de presentación</p>
        </div>
        <div className="gourmet-copy">
          <FlowerMark className="gourmet-flower" />
          <p className="hand-note">Para empezar por algo especial</p>
          <h2 id="gourmet-heading">Tres sabores.<br /><em>Cero prisa.</em></h2>
          <p className="gourmet-description">Leche quemada, pistache y nuez: una terna más cremosa para cuando quieres probar la otra cara del raspado.</p>
          <div className="gourmet-flavors" aria-label="Sabores gourmet">{gourmet.map((flavor) => <span key={flavor}>{flavor}</span>)}</div>
          <a className="round-link round-link--cream" href={orderUrl} target="_blank" rel="noreferrer">Pedir por WhatsApp <ArrowIcon /></a>
        </div>
      </section>

      <section className="essence-section" id="historia" aria-labelledby="essence-heading">
        <div className="essence-orbit" aria-hidden="true"><span>ANTOJO</span><i>•</i><span>COLOR</span><i>•</i><span>FRESCURA</span></div>
        <div className="section-shell essence-grid">
          <h2 id="essence-heading">Aquí el<br />antojo<br /><em>manda.</em></h2>
          <div className="essence-statement">
            <p>La caseta del sabor celebra esa pausa sencilla que sabe a fruta, hielo y tarde en Tuxtla. Una raspadería mexicana, cercana y sin complicaciones.</p>
            <p>Ven por tu clásico, prueba algo cremoso y arma tu siguiente favorito.</p>
          </div>
          <div className="essence-seal" aria-hidden="true"><FlowerMark /><span>El raspado<br />es primero</span></div>
        </div>
        <div className="paper-cut" aria-hidden="true">{Array.from({ length: 12 }, (_, index) => <i key={index} />)}</div>
      </section>

      <section className="visit-section" id="visitanos" aria-labelledby="visit-heading">
        <div className="section-shell visit-grid">
          <div className="visit-heading-wrap"><p>Tuxtla Gutiérrez, Chiapas</p><h2 id="visit-heading">Ven por<br />el tuyo.</h2></div>
          <div className="visit-details">
            <div>
              <span>Encuéntranos</span>
              <address>Calle Central Norte #1036<br />Col. Albania Alta<br />entre Av. 20 de Noviembre y Monte Cristo</address>
              <a className="text-link text-link--light" href={mapUrl} target="_blank" rel="noreferrer">Abrir en Maps <ArrowIcon /></a>
            </div>
            <div>
              <span>Haz tu pedido</span>
              <a className="visit-phone" href="tel:+529612298765">961 229 87 65</a>
              <p>Escríbenos para conocer presentaciones, precios y disponibilidad.</p>
              <a className="round-link round-link--light" href={orderUrl} target="_blank" rel="noreferrer">Abrir WhatsApp <ArrowIcon /></a>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-top section-shell">
          <a className="footer-brand" href="#" aria-label="La caseta del sabor, volver al inicio"><span>la caseta</span><strong>del sabor</strong></a>
          <p>El raspado es primero.</p>
        </div>
        <div className="footer-bottom section-shell">
          <nav aria-label="Navegación del pie"><a href="#sabores">Sabores</a><a href="#historia">Nuestra esencia</a><a href="#visitanos">Visítanos</a></nav>
          <div className="footer-contact"><a href={orderUrl} target="_blank" rel="noreferrer">WhatsApp</a><a href="tel:+529612298765">Llamar</a></div>
          <p className="footer-legal">© {year} La caseta del sabor</p>
        </div>
        <div className="footer-stripe" aria-hidden="true"><span /><span /><span /><span /><span /><span /></div>
      </footer>
    </>
  );
}
