/**
 * Blog page — grid of 6 placeholder article cards.
 */
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/sections/HeroSection";

const articles = [
  { title: "Titre de l'article 1 à compléter", category: "Conseils", date: "01/01/2025", image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&fm=webp&q=75" },
  { title: "Titre de l'article 2 à compléter", category: "Guides", date: "15/01/2025", image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=600&fm=webp&q=75" },
  { title: "Titre de l'article 3 à compléter", category: "Actualités", date: "01/02/2025", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&fm=webp&q=75" },
  { title: "Titre de l'article 4 à compléter", category: "Conseils", date: "15/02/2025", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&fm=webp&q=75" },
  { title: "Titre de l'article 5 à compléter", category: "Guides", date: "01/03/2025", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&fm=webp&q=75" },
  { title: "Titre de l'article 6 à compléter", category: "Actualités", date: "15/03/2025", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&fm=webp&q=75" },
];

export default function Blog() {
  return (
    <>
      <HeroSection
        title="Blog"
        subtitle="Conseils, guides et actualités sur le nettoyage professionnel."
        image="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&fm=webp&q=75"
      />

      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, i) => (
              <Card key={i} className="overflow-hidden hover:shadow-md transition-shadow">
                <div
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${article.image})` }}
                />
                <CardContent className="pt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary">{article.category}</Badge>
                    <span className="text-xs text-muted-foreground">{article.date}</span>
                  </div>
                  <h3 className="font-semibold text-primary mb-3">{article.title}</h3>
                  <Button variant="link" className="p-0 h-auto text-accent">
                    Lire la suite →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
