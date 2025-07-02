import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Portail des Solutions Numériques de Manche Numérique</h1>

      <div className="flex flex-col md:flex-row gap-8 mb-8">
        {/* Services Numériques Block */}
        <Link href="/services" className="flex-1 border p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 cursor-pointer">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Découvrez nos Services Numériques</h2>
            <p className="mb-4">
              Mutualisation, Hébergement, Cybersécurité... Explorez notre catalogue complet de services numériques adaptés aux besoins des collectivités.
        </p>
        {/* The button will be inside the Link */}
        <span className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-auto">
          Explorer les Services
            </p>
      </span>
    </Link>

    {/* Centrale d'Achats Block - Corrected structure */}
    <Link href="/achats" className="flex-1 border p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 cursor-pointer flex flex-col justify-between">
            <h2 className="text-2xl font-semibold mb-4">Accédez à notre Centrale d'Achats</h2>
            <p className="mb-4">
            Matériel, Logiciels, Prestations... Simplifiez vos achats grâce à nos marchés publics négociés.
          </p>
          <Link href="/achats">
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
              Explorer la Centrale d'Achats
      </button>
    </Link>

      {/* Placeholders for other sections */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Recherche Globale</h3>
        {/* Placeholder for Search Bar Component */}
        <div className="border p-4 rounded-lg bg-gray-100">
          <p className="text-gray-600">Placeholder for a global search bar component.</p>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Actualités</h3>
        {/* Placeholder for News Section Component */}
        <div className="border p-4 rounded-lg bg-gray-100">
          <p className="text-gray-600">Placeholder for a news section component.</p>
        </div>
      </div>

      <div className="text-center">
        <Link href="/adhesion" className="text-blue-600 hover:underline">Comprendre les modalités d'adhésion</Link>
      </div>
    </div>
  );
}