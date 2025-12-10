import logo from "./logo.svg";

function App() {
  const services = [
    { title: "Web Development", desc: "We build scalable, high-performance websites, dashboards, portals & enterprise systems." },
    { title: "Mobile App Development", desc: "End-to-end Android & iOS app development with smooth, modern UI & strong security." },
    { title: "Digital Marketing", desc: "We grow your brand through SEO, social media marketing, Google Ads & lead generation." },
    { title: "UI/UX Design", desc: "Premium UI/UX designs that elevate customer experience & maximize engagement." },
    { title: "Cloud & DevOps", desc: "Cloud hosting, AWS deployment, CI/CD pipelines & automated infrastructure solutions." },
    { title: "Business Automation", desc: "Automate repetitive tasks, reduce errors & scale operations using custom automation tools." }
  ];

  const pricingPlans = [
    {
      title: "Starter",
      price: "₹4,999",
      features: ["5-Page Website", "Basic SEO Setup", "1 Year Hosting", "Email Support"]
    },
    {
      title: "Professional",
      price: "₹12,999",
      features: ["Dynamic Website + Admin Panel", "Full SEO Optimization", "Analytics Setup", "Priority Support"]
    },
    {
      title: "Enterprise",
      price: "₹24,999",
      features: ["Custom Web App / Mobile App", "Branding Solutions", "Dedicated Developer", "24/7 Support"]
    }
  ];

  return (
    <div style={styles.app}>

      {/* HEADER */}
      <header style={styles.header}>
        <div style={styles.logoBox}>
          <img src={logo} style={styles.logo} alt="logo" />
          <h2 style={styles.brand}>TechVerse</h2>
        </div>

        <nav style={styles.nav}>
          <span>Home</span>
          <span>Services</span>
          <span>Pricing</span>
          <span>About</span>
          <span>Contact</span>
        </nav>
      </header>

      {/* HERO BANNER */}
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>Premium Digital Solutions for Modern Businesses</h1>
          <p style={styles.heroSubtitle}>
            We design, develop & scale world-class digital experiences with speed, reliability & precision.
          </p>
          <button style={styles.heroBtn}>Explore Our Services</button>
        </div>
      </section>

      {/* SERVICES – 6 CARDS */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Our Premium Services</h2>

        <div style={styles.cardGrid}>
          {services.map((srv, i) => (
            <div key={i} style={styles.serviceCard}>
              <h3 style={styles.cardTitle}>{srv.title}</h3>
              <p style={styles.cardDesc}>{srv.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHO WE ARE */}
      <section style={styles.aboutSection}>
        <h2 style={styles.sectionTitle}>Who We Are</h2>
        <p style={styles.aboutText}>
          TechVerse is a modern technology partner empowering businesses through innovation, automation & digital excellence.
          With a passionate team of engineers, designers & strategists, we deliver scalable solutions that accelerate growth.
          <br /><br />
          Our mission is to help businesses transition into the digital era with enterprise-level platforms, cloud systems,
          mobile apps & high-end marketing strategies — ensuring long-term success & competitive advantage.
        </p>
      </section>

      {/* WHY CHOOSE US */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Why Choose Us?</h2>

        <div style={styles.featuresGrid}>
          <div style={styles.featureBox}>⚡ Fast & Reliable Delivery</div>
          <div style={styles.featureBox}>🎨 Premium UI/UX Design</div>
          <div style={styles.featureBox}>💼 Corporate-Grade Development</div>
          <div style={styles.featureBox}>🛡️ Secure & Scalable Solutions</div>
          <div style={styles.featureBox}>📞 Dedicated Customer Support</div>
          <div style={styles.featureBox}>💰 Value-Driven Pricing</div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section style={styles.pricingSection}>
        <h2 style={styles.whiteTitle}>Pricing Plans</h2>

        <div style={styles.pricingGrid}>
          {pricingPlans.map((plan, idx) => (
            <div key={idx} style={styles.pricingCard}>
              <h3 style={styles.pricingTitle}>{plan.title}</h3>
              <h2 style={styles.pricingAmount}>{plan.price}</h2>

              <ul style={styles.featureList}>
                {plan.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>

              <button style={styles.pricingBtn}>Choose Plan</button>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT FORM */}
      <section style={styles.contactSection}>
        <h2 style={styles.sectionTitle}>Get In Touch</h2>

        <div style={styles.contactBox}>
          <input placeholder="Your Name" style={styles.input} />
          <input placeholder="Your Email" style={styles.input} />
          <textarea placeholder="Your Message" style={styles.textarea}></textarea>
          <button style={styles.contactBtn}>Send Message</button>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        <p>© 2025 TechVerse — All Rights Reserved</p>
      </footer>
    </div>
  );
}

/* ============================
   PREMIUM INTERNAL CSS
=============================== */
const styles = {
  app: {
    fontFamily: "Poppins, sans-serif",
    background: "#FAFAFA",
    color: "#0A1A2A",
  },

  /* HEADER */
  header: {
    display: "flex",
    justifyContent: "space-between",
    padding: "18px 50px",
    alignItems: "center",
    background: "#0A1A2A",
    color: "#fff",
    position: "sticky",
    top: 0,
    zIndex: 10,
    boxShadow: "0 4px 14px rgba(0,0,0,0.4)",
  },

  logoBox: { display: "flex", alignItems: "center", gap: "10px" },
  logo: { width: "40px" },
  brand: { fontSize: "22px", fontWeight: 600 },

  nav: {
    display: "flex",
    gap: "30px",
    fontSize: "15px",
    cursor: "pointer",
  },

  /* HERO */
  hero: {
    background: "linear-gradient(to right, #0A1A2A, #162A4A, #1E3A6E)",
    padding: "140px 20px",
    textAlign: "left",
    color: "white",
    display: "flex",
    justifyContent: "center",
  },

  heroContent: { maxWidth: "800px" },
  heroTitle: { fontSize: "46px", fontWeight: 700, marginBottom: "10px" },
  heroSubtitle: { fontSize: "18px", opacity: 0.9 },
  heroBtn: {
    marginTop: "25px",
    padding: "12px 30px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "none",
    background: "#FF8C32",
    color: "#fff",
    cursor: "pointer",
    fontWeight: 600,
  },

  /* GENERAL SECTION */
  section: { padding: "80px 30px", textAlign: "center" },
  sectionTitle: { fontSize: "32px", marginBottom: "35px", fontWeight: 600 },

  /* SERVICES */
  cardGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "25px",
    maxWidth: "1100px",
    margin: "auto",
  },

  serviceCard: {
    background: "#fff",
    padding: "30px",
    borderRadius: "16px",
    boxShadow: "0 5px 20px rgba(0,0,0,0.15)",
    transition: "0.3s",
  },

  cardTitle: { fontSize: "20px", fontWeight: 600, color: "#0A1A2A" },
  cardDesc: { marginTop: "10px", fontSize: "15px", color: "#444" },

  /* ABOUT */
  aboutSection: {
    padding: "80px 40px",
    textAlign: "center",
    background: "#F1F5F9",
  },
  aboutText: {
    maxWidth: "850px",
    margin: "auto",
    fontSize: "17px",
    lineHeight: "1.75",
  },

  /* WHY CHOOSE US */
  featuresGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px",
    maxWidth: "1000px",
    margin: "auto",
  },

  featureBox: {
    background: "#0A1A2A",
    padding: "18px",
    borderRadius: "10px",
    color: "white",
    fontWeight: 600,
    boxShadow: "0px 4px 12px rgba(0,0,0,0.2)",
  },

  /* PRICING */
  pricingSection: {
    padding: "80px 40px",
    background: "#162A4A",
    color: "white",
  },

  whiteTitle: {
    fontSize: "32px",
    marginBottom: "35px",
    fontWeight: 600,
    textAlign: "center",
  },

  pricingGrid: {
    display: "flex",
    justifyContent: "center",
    gap: "25px",
    flexWrap: "wrap",
  },

  pricingCard: {
    width: "300px",
    background: "#fff",
    color: "#0A1A2A",
    padding: "25px",
    borderRadius: "14px",
    boxShadow: "0 5px 20px rgba(0,0,0,0.3)",
  },

  pricingTitle: { fontSize: "22px", fontWeight: 600 },
  pricingAmount: { fontSize: "34px", margin: "10px 0", fontWeight: 700, color: "#FF8C32" },

  featureList: {
    textAlign: "left",
    marginTop: "15px",
    color: "#444",
    listStyle: "circle inside",
    lineHeight: "1.7",
  },

  pricingBtn: {
    marginTop: "20px",
    padding: "10px 28px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    background: "#0A1A2A",
    color: "#fff",
    fontWeight: 600,
  },

  /* CONTACT */
  contactSection: {
    padding: "80px 30px",
    background: "#F9FAFB",
    textAlign: "center",
  },

  contactBox: {
    maxWidth: "450px",
    margin: "20px auto",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },

  input: {
    padding: "12px",
    borderRadius: "6px",
    border: "1px solid #CCC",
  },

  textarea: {
    padding: "12px",
    borderRadius: "6px",
    border: "1px solid #CCC",
    height: "120px",
  },

  contactBtn: {
    background: "#FF8C32",
    border: "none",
    padding: "12px",
    borderRadius: "8px",
    color: "#fff",
    fontWeight: 600,
    cursor: "pointer",
  },

  /* FOOTER */
  footer: {
    background: "#0A1A2A",
    color: "#aaa",
    textAlign: "center",
    padding: "20px",
    marginTop: "30px",
  },
};

export default App;
