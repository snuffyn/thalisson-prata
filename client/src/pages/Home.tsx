import { useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Instagram,
  Menu,
  MessageCircle,
  Minus,
  Plus,
  ShieldCheck,
  Sparkles,
  Truck,
  X,
} from "lucide-react";

const heroImage = "/manus-storage/async-images/mILrnYpukza3jH9ZoUjhUP/image-1.webp";
const products = [
  {
    name: "Anel Órbita",
    category: "Prata 925 · assinatura",
    price: "R$ 189",
    image: "/manus-storage/async-images/sMV88vpD3hEPgb3GFvZh2g/image-1.webp",
    tone: "stone",
  },
  {
    name: "Corrente Norte",
    category: "Prata 925 · 55 cm",
    price: "R$ 249",
    image: "/manus-storage/async-images/sMV88vpD3hEPgb3GFvZh2g/image-2.webp",
    tone: "ink",
  },
  {
    name: "Pulseira Eixo",
    category: "Prata 925 · ajuste livre",
    price: "R$ 219",
    image: "/manus-storage/async-images/sMV88vpD3hEPgb3GFvZh2g/image-3.webp",
    tone: "mist",
  },
];

const faqs = [
  {
    question: "As peças são de prata de verdade?",
    answer:
      "Sim. Nossa curadoria é feita em prata 925, uma liga com 92,5% de prata pura, escolhida por sua resistência, brilho e capacidade de acompanhar o uso diário.",
  },
  {
    question: "Como funciona a compra pelo WhatsApp?",
    answer:
      "Você escolhe a peça, chama a gente pelo WhatsApp e recebe atendimento pessoal para confirmar disponibilidade, tamanho, pagamento e endereço de entrega. Sem carrinho escondido ou resposta automática.",
  },
  {
    question: "Como cuidar da minha joia?",
    answer:
      "Guarde sua peça em local seco, de preferência no saquinho individual. Evite contato direto com perfumes, cremes e água do mar. Quando quiser, fazemos uma orientação de limpeza para devolver o brilho original.",
  },
  {
    question: "Vocês entregam para todo o Brasil?",
    answer:
      "Sim. Enviamos para todo o Brasil com rastreio. O prazo varia conforme a cidade e é confirmado no atendimento, junto com as opções de frete disponíveis.",
  },
];

const whatsappLink =
  "https://wa.me/?text=Ol%C3%A1%2C%20Thalisson%20Prata.%20Quero%20conhecer%20a%20curadoria%20de%20pratas.";

function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <span>TP</span>
    </span>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="site-shell">
      <header className="site-header">
        <div className="header-inner">
          <a href="#top" className="brand" onClick={closeMenu} aria-label="Thalisson Prata, início">
            <BrandMark />
            <span className="brand-copy">
              <strong>Thalisson</strong>
              <small>prata</small>
            </span>
          </a>

          <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Navegação principal">
            <a href="#curadoria" onClick={closeMenu}>Curadoria</a>
            <a href="#essencia" onClick={closeMenu}>Nossa essência</a>
            <a href="#duvidas" onClick={closeMenu}>Dúvidas</a>
            <a className="nav-cta" href={whatsappLink} target="_blank" rel="noreferrer" onClick={closeMenu}>
              <MessageCircle size={15} />
              Falar com a gente
            </a>
          </nav>

          <button className="menu-trigger" onClick={() => setMenuOpen((value) => !value)} aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={menuOpen}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-dot" /> Joias de prata · edição 01</p>
          <h1>Prata que<br /><em>fala por você.</em></h1>
          <p className="hero-lede">Peças autorais para quem não precisa exagerar para ser notado. Design, matéria e presença em cada detalhe.</p>
          <div className="hero-actions">
            <a className="button button-light" href={whatsappLink} target="_blank" rel="noreferrer">
              Descobrir a curadoria <ArrowUpRight size={17} />
            </a>
            <a className="text-link light-link" href="#essencia">Conhecer a marca <ArrowDownRight size={16} /></a>
          </div>
          <div className="hero-note">
            <span className="note-line" />
            <span>Prata 925 · feita para permanecer</span>
          </div>
        </div>

        <div className="hero-visual">
          <img src={heroImage} alt="Joias de prata sobre pedra escura" />
          <div className="hero-visual-caption">
            <span>Objeto 01 / 03</span>
            <span>Brilho sem esforço</span>
          </div>
          <div className="hero-stamp" aria-hidden="true">
            <span>925</span>
            <small>STG</small>
          </div>
        </div>
        <a className="scroll-cue" href="#curadoria" aria-label="Rolar para a curadoria">
          <span>Scroll para explorar</span>
          <ArrowDownRight size={18} />
        </a>
      </section>

      <section className="trust-strip" aria-label="Diferenciais da marca">
        <div className="trust-item"><Sparkles size={19} /><span>Design autoral</span></div>
        <div className="trust-item"><ShieldCheck size={19} /><span>Prata 925 certificada</span></div>
        <div className="trust-item"><Truck size={19} /><span>Envio para todo Brasil</span></div>
        <div className="trust-item"><MessageCircle size={19} /><span>Atendimento próximo</span></div>
      </section>

      <section className="manifesto section-pad" id="essencia">
        <div className="section-kicker">A essência <span>01 — 04</span></div>
        <div className="manifesto-grid">
          <div className="manifesto-heading">
            <p className="overline">Menos ruído.<br />Mais presença.</p>
            <h2>Uma joia boa<br />não pede licença.</h2>
          </div>
          <div className="manifesto-body">
            <p className="lead-copy">A Thalisson Prata nasceu do desejo de transformar o essencial em assinatura. A gente escolhe peças com linhas precisas, toque real e personalidade — para vestir sua rotina, não uma ocasião.</p>
            <p>Do primeiro olhar ao último brilho, tudo passa pelo mesmo filtro: <strong>autenticidade sem esforço.</strong> Porque seu estilo já diz muito. A prata só encontra as palavras.</p>
            <a className="text-link dark-link" href={whatsappLink} target="_blank" rel="noreferrer">Conversar sobre uma peça <ArrowUpRight size={16} /></a>
          </div>
        </div>
        <div className="manifesto-detail" aria-hidden="true"><span>TP</span><span>EST. 2024</span><span>BRASIL</span></div>
      </section>

      <section className="curation section-pad" id="curadoria">
        <div className="section-heading-row">
          <div>
            <div className="section-kicker">Curadoria <span>02 — 04</span></div>
            <h2>Escolhas que<br /><em>ficam.</em></h2>
          </div>
          <p className="section-intro">Uma seleção enxuta de peças para começar sua coleção — e continuar usando muito depois da primeira conversa.</p>
        </div>

        <div className="product-grid">
          {products.map((product, index) => (
            <article className={`product-card product-${product.tone}`} key={product.name}>
              <a href={whatsappLink} target="_blank" rel="noreferrer" className="product-image-wrap" aria-label={`Consultar ${product.name} no WhatsApp`}>
                <img src={product.image} alt={`${product.name}, joia de prata`} loading={index === 0 ? "eager" : "lazy"} />
                <span className="product-index">0{index + 1}</span>
                <span className="product-arrow"><ArrowUpRight size={17} /></span>
              </a>
              <div className="product-info">
                <div>
                  <h3>{product.name}</h3>
                  <p>{product.category}</p>
                </div>
                <strong>{product.price}</strong>
              </div>
              <a className="product-link" href={whatsappLink} target="_blank" rel="noreferrer">Consultar disponibilidade <ArrowUpRight size={15} /></a>
            </article>
          ))}
        </div>
        <div className="curation-footer">
          <span>Novas peças entram em pequenos lotes.</span>
          <a className="text-link dark-link" href={whatsappLink} target="_blank" rel="noreferrer">Ver a coleção completa <ArrowUpRight size={16} /></a>
        </div>
      </section>

      <section className="experience-band">
        <div className="experience-number">02<span>/</span>25</div>
        <div className="experience-copy">
          <p className="overline">A experiência Thalisson</p>
          <h2>Escolha com calma.<br /><em>Use por muito tempo.</em></h2>
        </div>
        <div className="experience-aside">
          <p>Cada pedido começa com uma conversa. A gente entende o que você busca, orienta sem pressa e envia sua peça pronta para fazer parte da sua história.</p>
          <a className="button button-outline" href={whatsappLink} target="_blank" rel="noreferrer">Começar uma conversa <MessageCircle size={16} /></a>
        </div>
      </section>

      <section className="social-proof section-pad">
        <div className="section-kicker">Quem já usa <span>03 — 04</span></div>
        <div className="proof-grid">
          <div className="proof-heading">
            <h2>O brilho<br /><em>é seu.</em></h2>
            <div className="rating"><span>★★★★★</span><small>4.9 / 5 · clientes reais</small></div>
          </div>
          <div className="quote-card">
            <span className="quote-mark">“</span>
            <blockquote>O anel chegou e parece que sempre foi meu. Tem presença, mas continua delicado. É exatamente o tipo de peça que eu estava procurando.</blockquote>
            <div className="quote-person"><span className="avatar">MS</span><span><strong>Marina S.</strong><small>São Paulo, SP</small></span></div>
          </div>
          <div className="quote-card quote-card-offset">
            <span className="quote-mark">“</span>
            <blockquote>Atendimento muito cuidadoso. Me ajudaram a escolher o tamanho e ainda mandaram dicas para manter a prata bonita. Virei cliente.</blockquote>
            <div className="quote-person"><span className="avatar">RL</span><span><strong>Rafael L.</strong><small>Curitiba, PR</small></span></div>
          </div>
        </div>
      </section>

      <section className="faq-section section-pad" id="duvidas">
        <div className="section-heading-row faq-heading-row">
          <div>
            <div className="section-kicker">Sem mistério <span>04 — 04</span></div>
            <h2>Antes de<br /><em>decidir.</em></h2>
          </div>
          <p className="section-intro">Tudo o que você precisa saber para escolher sua próxima peça com tranquilidade.</p>
        </div>
        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div className={isOpen ? "faq-item is-open" : "faq-item"} key={faq.question}>
                <button className="faq-question" onClick={() => setOpenFaq(isOpen ? -1 : index)} aria-expanded={isOpen}>
                  <span><small>0{index + 1}</small>{faq.question}</span>
                  <span className="faq-icon">{isOpen ? <Minus size={18} /> : <Plus size={18} />}</span>
                </button>
                {isOpen && <div className="faq-answer"><p>{faq.answer}</p></div>}
              </div>
            );
          })}
        </div>
      </section>

      <section className="final-cta">
        <div className="final-cta-inner">
          <div className="final-cta-symbol"><BrandMark /><span>Prata que permanece.</span></div>
          <h2>Seu próximo<br /><em>detalhe começa aqui.</em></h2>
          <p>Fale com a gente e descubra qual peça combina com a sua história.</p>
          <a className="button button-light" href={whatsappLink} target="_blank" rel="noreferrer">Chamar no WhatsApp <MessageCircle size={17} /></a>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-brand"><a href="#top" className="brand"><BrandMark /><span className="brand-copy"><strong>Thalisson</strong><small>prata</small></span></a><p>Prata autoral para todos os dias.</p></div>
        <div className="footer-links"><a href="#curadoria">Curadoria</a><a href="#essencia">Nossa essência</a><a href="#duvidas">Dúvidas</a><a href={whatsappLink} target="_blank" rel="noreferrer">WhatsApp</a></div>
        <div className="footer-contact"><a href="https://instagram.com" target="_blank" rel="noreferrer"><Instagram size={17} /> @thalissonprata</a><span>Feito com intenção · Brasil</span></div>
        <div className="footer-bottom"><span>© 2025 Thalisson Prata</span><span>Prata 925 · cuidado · presença</span></div>
      </footer>
    </main>
  );
}
