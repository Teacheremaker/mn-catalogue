import { createClient } from '@supabase/supabase-js';
import { supabase } from '/home/user/mn-catalogue/manche-numerique-portal/utils/supabaseClient';

async function AchatsCataloguePage() {
  const { data: products, error } = await supabase.from('products').select('*');

  return (
    <div>
      <h1>Catalogue de la Centrale d'Achats</h1>
      {error ? (
        <p>Erreur lors du chargement du catalogue : {error.message}</p>
      ) : (
        <>
          <h2>Liste des Produits/Prestations</h2>
          <ul>
            {products && products.map(product => (
              <li key={product.id}>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <p>Fournisseur: {product.supplier}</p>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
