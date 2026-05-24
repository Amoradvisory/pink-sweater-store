import { useState } from "react";
import { ShoppingCart, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

/**
 * Tiny one‑page store for the “Sweater Rose Quartz” product.
 * Tailwind + shadcn/ui for quick styling.
 */
export default function PinkSweaterStore() {
  const [inCart, setInCart] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-stone-800">
      {/* ---------- NAVBAR ---------- */}
      <header className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
        <h1 className="text-2xl font-bold tracking-tight">Rose Quartz Sweater</h1>
        <Button
          variant="outline"
          className="gap-2"
          onClick={() => setInCart(!inCart)}
        >
          {inCart ? <CheckCircle size={18} /> : <ShoppingCart size={18} />} 
          {inCart ? "In Cart" : "Add to Cart"}
        </Button>
      </header>

      {/* ---------- HERO / PRODUCT ---------- */}
      <main className="flex-grow grid md:grid-cols-2 gap-10 p-8 md:p-16 items-center">
        {/* product image */}
        <div className="w-full">
          <img
            src="/images/pink-sweater.jpg" // 👉 replace with your final product shot
            alt="Rose Quartz Sweater on model"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>

        {/* product details */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
            Confort. Couleur. Caractère.
          </h2>
          <p className="text-lg leading-relaxed">
            Tricoté dans un coton peigné premium, le <strong>Rose Quartz Sweater</strong> offre
            une douceur nuageuse et une coupe moderne. Ni trop chaud, ni trop léger : le
            parfait allié de vos journées créatives.
          </p>

          {/* price & CTA */}
          <div className="flex items-center gap-6">
            <span className="text-4xl font-bold">49 €</span>
            <Button
              size="lg"
              className="px-8 text-lg"
              onClick={() => setInCart(true)}
            >
              {inCart ? "Voir le Panier" : "Ajouter au Panier"}
            </Button>
          </div>

          {/* features */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            {[
              "100 % coton peigné 420 g/m²",
              "Coupe droite, col rond",
              "Lavable en machine 30 °C",
              "Fabriqué en Europe",
            ].map((feat) => (
              <li key={feat} className="flex items-start gap-2">
                <CheckCircle className="shrink-0" size={18} />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>
      </main>

      {/* ---------- TESTIMONIAL ---------- */}
      <section className="bg-white py-12 px-8 md:px-16">
        <Card className="max-w-3xl mx-auto">
          <CardContent className="p-8 text-center space-y-4">
            <p className="text-xl italic leading-relaxed">
              « Je n’ai jamais reçu autant de compliments pour un vêtement aussi simple.
              Ce rose met instantanément de bonne humeur. »
            </p>
            <span className="font-semibold">— Léa, Paris</span>
          </CardContent>
        </Card>
      </section>

      {/* ---------- FOOTER ---------- */}
      <footer className="bg-stone-800 text-stone-200 text-sm py-6 px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <span>© {new Date().getFullYear()} Rose Quartz Sweater</span>
        <nav className="flex gap-6">
          <a href="#" className="hover:underline">Mentions légales</a>
          <a href="#" className="hover:underline">CGV</a>
          <a href="#" className="hover:underline">Contact</a>
        </nav>
      </footer>
    </div>
  );
}
