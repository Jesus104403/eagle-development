import dynamic from "next/dynamic";
import About from "../src/components/About";
import Blog from "../src/components/Blog";
import Contact from "../src/components/Contact";
import Copyright from "../src/components/Copyright";
import CounterSection from "../src/components/CounterSection";
import Features from "../src/components/Features";
import Home from "../src/components/Home";
import Partners from "../src/components/Partners";
import Portfolio from "../src/components/Portfolio";
import Process from "../src/components/Process";
import Service from "../src/components/Service";
import Skills from "../src/components/Skills";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";

// import Testimonials from "../src/components/Testimonials";
import Head from "next/head";
import Header from "../src/layouts/Header";
import Layout from "../src/layouts/Layout";
import MobileHeader from "../src/layouts/MobileHeader";
import Mouse from "../src/layouts/Mouse";
import ScrollTop from "../src/layouts/ScrollTop";
const Testimonials = dynamic(() => import("../src/components/Testimonials"), {
  ssr: false,
});

import global_es from "../src/translations/es/global.json";
import global_en from "../src/translations/en/global.json";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    es:{
      global: global_es
    },
    en:{
      global: global_en
    }
  }
})

const Index = () => {
  return (
    <Layout>
      <I18nextProvider i18n={i18next}>
      <Head>
        <title>Eagle | Development </title>
      </Head>
      <MobileHeader />
      <Header />
      <Home />
      <Features />
      <About />
      <CounterSection />
      <Portfolio />
      <Skills />
      <Service />
      <Process />
      <Testimonials />
      <Partners />
      <Contact />
      <Blog />
      <Copyright />
      <Mouse />
      <ScrollTop />
      </I18nextProvider>
    </Layout>
  );
};
export default Index;
