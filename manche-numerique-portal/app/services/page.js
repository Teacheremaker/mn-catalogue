'use client';

import supabase from '../../utils/supabaseClient';
import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

function ServicesCataloguePage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedPole = searchParams.get('pole') || 'all'; // Get the current 'pole' from the URL

  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchServices() {
      setLoading(true);
      setError(null);
      let query = supabase.from('services').select('*');

      if (selectedPole && selectedPole !== 'all') {
        // Assuming 'pole' is a column in your services table
        // You might need to adjust the filtering logic based on your actual data structure
        query = query.eq('pole', selectedPole);
      }

      const { data, error } = await query;

      if (error) {
        setError(error);
        setServices([]);
      } else {
        setServices(data);
      }
      setLoading(false);
    }

    fetchServices();
  }, [selectedPole]); // Refetch when selectedPole changes

  return (
    <div>
      <h1>Catalogue des Services Numériques Mutualisés</h1>

      {/* Basic Filter UI */}
      <div>
        <strong>Filter by Pôle:</strong>
        <button onClick={() => router.push('/services?pole=all')} style={{ marginRight: '10px' }}>All</button>
        <button onClick={() => router.push('/services?pole=Infrastructures')} style={{ marginRight: '10px' }}>Infrastructures</button>
        <button onClick={() => router.push('/services?pole=Cybersécurité')} style={{ marginRight: '10px' }}>Cybersécurité</button>
        <button onClick={() => router.push('/services?pole=Applications Métiers')} style={{ marginRight: '10px' }}>Applications Métiers</button>
        {/* Add more poles as needed */}
      </div>

      {error && <p>Error loading services: {error.message}</p>}
      {loading && <p>Loading services...</p>}
      {!error && services && services.length === 0 && <p>No services found.</p>}

      {/* Placeholder for filters */}
      {/* Placeholder for service listings */}
      {!error && services && services.length > 0 && (
        <ul>
          {services.map(service => (
            <li key={service.id} style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px' }}>
              <h2>{service.title}</h2>
              <p>{service.summary}</p>
              {service.benefits && service.benefits.length > 0 && (
                <div>
                  <strong>Bénéfices clés:</strong>
                  <ul>
                    {service.benefits.map((benefit, index) => (
                      <li key={index}>- {benefit}</li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ServicesCataloguePage;