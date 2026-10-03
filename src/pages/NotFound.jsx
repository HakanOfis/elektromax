import { Link } from "react-router-dom";
import { motion } from "motion/react";

import Layout from "@/components/Layout";
import { LogoMark } from "@/components/Logo";
import { cta } from "@/components/cta";
import { useI18n } from "@/lib/i18n";

export default function NotFound() {
  const { ui } = useI18n();
  return (
    <Layout title={ui.meta.notFoundTitle} description={ui.meta.notFoundDescription}>
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="blueprint absolute inset-0" aria-hidden="true" />
        <div className="container-x relative flex flex-col items-center py-28 text-center">
          <motion.div className="animate-flicker">
            <LogoMark className="h-24" boltClassName="fill-volt" />
          </motion.div>
          <h1 className="mt-8 font-heading text-6xl font-black text-volt">404</h1>
          <p className="mt-4 text-2xl font-bold">{ui.notFound.title}</p>
          <p className="mt-2 text-white/65">{ui.notFound.lead}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to="/" className={cta({ size: "lg" })}>{ui.notFound.homeCta}</Link>
            <Link to={ui.routes.services} className={cta({ variant: "ghostDark", size: "lg" })}>{ui.notFound.servicesCta}</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
