import FormContainer from '@/components/FormContainer';

export default function Home() {
  return (
    <div style={{ backgroundColor: 'white', borderRadius: '1.5rem', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)', overflow: 'hidden', border: '1px solid #e0eefd' }}>
      <div style={{ padding: '2.5rem' }}>
        <div className="text-center mb-8">
          <h2 style={{ fontSize: '1.875rem', fontWeight: 700, color: '#1f2937', marginBottom: '0.5rem' }}>
            Bienvenido a tu Transformación
          </h2>
          <p style={{ fontSize: '1.125rem', color: '#4b5563', maxWidth: '42rem', marginLeft: 'auto', marginRight: 'auto' }}>
            Como tu equipo de <strong>Nutrición y Alto Rendimiento</strong>, necesitamos conocerte a fondo para diseñar tu estrategia 1:1.
          </p>
        </div>
        <FormContainer />
      </div>
    </div>
  );
}
