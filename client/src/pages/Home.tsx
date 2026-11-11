import { useState } from "react";
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  Instagram,
  Mail,
  Menu,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Truck,
  X,
} from "lucide-react";

const asset = (file: string) => `${import.meta.env.BASE_URL}assets/${file}`;
const whatsappLink = "https://wa.me/5562991127950?text=Ol%C3%A1%2C%20D%26TH%20J%C3%B3ias!%20Quero%20conhecer%20as%20pe%C3%A7as%20em%20Prata%20925.";
const instagramLink = "https://www.instagram.com/dethjoias.pratas925";

const products = [
  { name: "Brincos em Prata 925", detail: "Delicados, clássicos e modernos", image: asset("deth-earrings.jpeg") },
  { name: "Colares e correntes", detail: "Elegância para todos os momentos", image: asset("deth-necklace.jpeg") },
  { name: "Peças que contam histórias", detail: "Conjuntos e presentes especiais", image: asset("deth-clover.jpeg") },
];

const faqs = [
  { question: "As peças são em Prata 925?", answer: "Sim. A D&TH Jóias trabalha com peças em Prata 925, escolhidas com carinho para unir beleza, qualidade e durabilidade." },
  { question: "Como faço meu pedido?", answer: "Escolha suas peças na curadoria e fale conosco pelo WhatsApp. Nosso atendimento confirma disponibilidade, valores, pagamento e entrega." },
  { question: "Vocês entregam em Goiânia?", answer: "Sim. A entrega é grátis em Goiânia para compras acima de R$ 150,00. Também orientamos sobre as opções de envio para outras localidades." },
  { question: "As joias têm garantia?", answer: "Nossas peças contam com garantia vitalícia, além de atendimento personalizado para orientar você sobre o cuidado com sua joia." },
];

function Logo({ compact = false }: { compact?: boolean }) {
  return <img className={compact ? "logo-image logo-compact" : "logo-image"} src={asset("deth-logo-transparent.png")} alt="D&TH Jóias" />;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="deth-site">
      <header className="deth-header">
        <a href="#inicio" aria-label="D&TH Jóias, início"><Logo compact /></a>
        <nav className={menuOpen ? "deth-nav is-open" : "deth-nav"}>
          <a href="#sobre" onClick={closeMenu}>Nossa história</a>
          <a href="#colecao" onClick={closeMenu}>Coleção</a>
          <a href="#diferenciais" onClick={closeMenu}>Por que D&TH</a>
          <a href="#contato" onClick={closeMenu}>Contato</a>
          <a className="deth-nav-button" href={whatsappLink} target="_blank" rel="noreferrer" onClick={closeMenu}><MessageCircle size={15} /> Comprar pelo WhatsApp</a>
        </nav>
        <button className="deth-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menu" aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button>
      </header>

      <section className="deth-hero" id="inicio">
        <div className="deth-hero-copy">
          <p className="deth-eyebrow"><Sparkles size={15} /> Prata 925 · Goiânia e região</p>
          <h1>Sua essência,<br /><em>nosso brilho.</em></h1>
          <p className="deth-hero-text">Joias escolhidas com carinho para valorizar sua beleza, celebrar seus momentos e acompanhar tudo o que faz você ser única.</p>
          <div className="deth-actions">
            <a className="deth-button deth-button-pink" href={whatsappLink} target="_blank" rel="noreferrer">Conhecer a coleção <ArrowUpRight size={17} /></a>
            <a className="deth-text-link" href="#sobre">Conheça a D&TH <ChevronDown size={16} /></a>
          </div>
          <div className="deth-hero-note"><span /> Peças à pronta entrega · garantia vitalícia</div>
        </div>
        <div className="deth-hero-image"><img src={asset("deth-necklace.jpeg")} alt="Colar em prata 925 da D&TH Jóias" /><div className="deth-hero-badge">D&TH<br /><small>JÓIAS</small></div></div>
      </section>

      <section className="deth-trust" aria-label="Diferenciais"><div><ShieldCheck /><span>Prata 925</span></div><div><Sparkles /><span>Qualidade e carinho</span></div><div><Truck /><span>Entrega grátis em Goiânia<br />acima de R$ 150</span></div><div><MessageCircle /><span>Atendimento personalizado</span></div></section>

      <section className="deth-section deth-about" id="sobre">
        <div className="deth-kicker">Nossa história <span>01 — 04</span></div>
        <div className="deth-about-grid"><div><p className="deth-overline">Duas pessoas.<br />Um sonho compartilhado.</p><h2>Mais do que<br /><em>uma joia.</em></h2></div><div className="deth-copy"><p className="deth-lead">A D&TH Jóias nasceu de um sonho compartilhado por duas pessoas apaixonadas por beleza, elegância e detalhes que fazem a diferença.</p><p>Somos uma loja apaixonada por prata 925, por peças que encantam e por joias que valorizam a sua essência. Cada detalhe é escolhido por nós com muito carinho, pensando em você e em cada momento especial que uma joia pode representar.</p><a className="deth-text-link dark" href={whatsappLink} target="_blank" rel="noreferrer">Falar com a D&TH <ArrowUpRight size={16} /></a></div></div>
        <div className="deth-signature"><span>D&TH</span><span>Sua essência, nosso brilho.</span><span>Goiânia · Brasil</span></div>
      </section>

      <section className="deth-section deth-collection" id="colecao">
        <div className="deth-heading-row"><div><div className="deth-kicker">Nossa curadoria <span>02 — 04</span></div><h2>Peças para<br /><em>se apaixonar.</em></h2></div><p>Trabalhamos com joias em Prata 925 para valorizar a beleza e a essência de cada cliente. Os valores variam conforme o modelo e são informados no catálogo ou pelo atendimento.</p></div>
        <div className="deth-product-grid">{products.map((product, index) => <article className="deth-product" key={product.name}><a href={whatsappLink} target="_blank" rel="noreferrer"><img src={product.image} alt={product.name} /><span className="deth-product-number">0{index + 1}</span><span className="deth-product-cta"><ArrowUpRight size={18} /></span></a><div className="deth-product-info"><div><h3>{product.name}</h3><p>{product.detail}</p></div><strong>Consultar</strong></div><a className="deth-product-link" href={whatsappLink} target="_blank" rel="noreferrer">Consultar disponibilidade <ArrowUpRight size={14} /></a></article>)}</div>
      </section>

      <section className="deth-promise" id="diferenciais"><div className="deth-promise-number">03<span>/</span>04</div><div><p className="deth-overline">O cuidado D&TH</p><h2>Escolha com calma.<br /><em>Use por muito tempo.</em></h2></div><div className="deth-promise-copy"><p>Mais do que vender joias, queremos proporcionar uma experiência especial — desde a escolha da peça até o momento em que você se olha no espelho e se sente ainda mais linda.</p><a className="deth-button deth-button-outline" href={whatsappLink} target="_blank" rel="noreferrer">Falar com uma consultora <MessageCircle size={16} /></a></div></section>

      <section className="deth-section deth-benefits"><div className="deth-kicker">Feito para você <span>04 — 04</span></div><div className="deth-benefits-grid"><div><h2>O brilho<br /><em>é seu.</em></h2><p>Uma escolha feita com carinho, para um momento especial ou para todos os dias.</p></div><div className="deth-benefit-card"><Check /><h3>Pronta entrega</h3><p>Peças disponíveis para você receber e começar a usar sem esperar.</p></div><div className="deth-benefit-card pink"><Check /><h3>Garantia vitalícia</h3><p>Mais segurança para aproveitar sua joia por muito, muito tempo.</p></div></div></section>

      <section className="deth-section deth-faq"><div className="deth-heading-row"><div><div className="deth-kicker">Dúvidas? <span>Respostas</span></div><h2>Antes de<br /><em>decidir.</em></h2></div><p>Estamos aqui para deixar sua experiência leve, clara e especial.</p></div><div className="deth-faq-list">{faqs.map((faq, index) => { const isOpen = openFaq === index; return <div className={isOpen ? "deth-faq-item open" : "deth-faq-item"} key={faq.question}><button onClick={() => setOpenFaq(isOpen ? -1 : index)} aria-expanded={isOpen}><span><small>0{index + 1}</small>{faq.question}</span><ChevronDown size={19} /></button>{isOpen && <p>{faq.answer}</p>}</div>; })}</div></section>

      <section className="deth-final" id="contato"><Logo /><p>O próximo detalhe da sua história começa aqui.</p><h2>Encontre a joia que<br /><em>fala por você.</em></h2><a className="deth-button deth-button-white" href={whatsappLink} target="_blank" rel="noreferrer">Chamar no WhatsApp <MessageCircle size={17} /></a></section>

      <footer className="deth-footer"><div><Logo compact /><p>D&TH Jóias — sua essência, nosso brilho.</p></div><div className="deth-footer-links"><a href="#sobre">Nossa história</a><a href="#colecao">Coleção</a><a href={instagramLink} target="_blank" rel="noreferrer"><Instagram size={15} /> Instagram</a></div><div className="deth-footer-contact"><a href={whatsappLink} target="_blank" rel="noreferrer"><MessageCircle size={15} /> (62) 99112-7950</a><a href="mailto:dzsantos971@gmail.com"><Mail size={15} /> dzsantos971@gmail.com</a></div><div className="deth-footer-bottom"><span>© 2026 D&TH Jóias</span><span>Prata 925 · Goiânia</span></div></footer>
    </main>
  );
}
