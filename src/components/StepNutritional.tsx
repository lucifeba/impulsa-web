import styles from './FormCommon.module.css';

interface Props {
    data: any;
    update: (data: any) => void;
}

export default function StepNutritional({ data, update }: Props) {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        update({ [e.target.name]: e.target.value });
    };

    const RadioGroup = ({ label, name, options }: { label: string, name: string, options: { val: string, label: string }[] }) => (
        <div className={styles.formGroup}>
            <label className={styles.label}>{label}</label>
            <div className="flex flex-col gap-2 mt-2">
                {options.map((opt) => (
                    <label key={opt.val} className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-blue-50 transition-colors bg-white">
                        <input
                            type="radio"
                            name={name}
                            value={opt.val}
                            checked={data[name] === opt.val}
                            onChange={handleChange}
                            className="w-5 h-5"
                            style={{ accentColor: '#0056b3' }}
                        />
                        <span className="text-gray-700 font-medium">{opt.label}</span>
                    </label>
                ))}
            </div>
        </div>
    );

    return (
        <div>
            <h3 className={styles.sectionTitle}>3. Encuesta Nutricional</h3>

            <RadioGroup
                label="🎯 Objetivo Principal"
                name="goal"
                options={[
                    { val: 'weight_loss', label: 'Pérdida de Grasa / Definición' },
                    { val: 'muscle_gain', label: 'Ganancia de Masa Muscular' },
                    { val: 'performance', label: 'Rendimiento Deportivo' },
                    { val: 'health', label: 'Salud y Bienestar' }
                ]}
            />

            <div className={styles.formGroup}>
                <label className={styles.label}>Motivación Principal</label>
                <textarea
                    name="motivation"
                    className={styles.textarea}
                    placeholder="¿Qué te impulsa a empezar?"
                    value={data.motivation}
                    onChange={handleChange}
                />
            </div>

            <h4 className="font-bold text-gray-800 mt-6 mb-4 border-b pb-2">Salud Digestiva</h4>

            <RadioGroup
                label="¿Cómo son tus digestiones?"
                name="digestion"
                options={[
                    { val: 'good', label: 'Buenas, sin molestias' },
                    { val: 'gas', label: 'Hinchazón o Gases frecuentes' },
                    { val: 'heavy', label: 'Pesadas / Lentas' }
                ]}
            />

            <div className={styles.formGroup}>
                <label className={styles.label}>Patologías o Alergias</label>
                <textarea
                    name="pathologies"
                    className={styles.textarea}
                    placeholder="Diabetes, Lactosa, Gluten..."
                    value={data.pathologies}
                    onChange={handleChange}
                />
            </div>

            <h4 className="font-bold text-gray-800 mt-6 mb-4 border-b pb-2">Hábitos</h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className={styles.formGroup}>
                    <label className={styles.label}>Comidas diarias</label>
                    <input
                        type="number"
                        name="mealsPerDay"
                        className={styles.input}
                        placeholder="3, 4, 5..."
                        value={data.mealsPerDay}
                        onChange={handleChange}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Horas de sueño</label>
                    <input
                        type="text"
                        name="sleep"
                        className={styles.input}
                        placeholder="Ej: 7 horas"
                        value={data.sleep}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <RadioGroup
                label="¿Tienes tiempo para cocinar?"
                name="cookingTime"
                options={[
                    { val: 'high', label: 'Sí, cocino a diario' },
                    { val: 'medium', label: 'Tengo poco tiempo (Meal Prep)' },
                    { val: 'low', label: 'Casi nada (Compro hecho/Tupper)' }
                ]}
            />
        </div>
    );
}
