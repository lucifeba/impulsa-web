import styles from './FormCommon.module.css';

interface Props {
    data: any;
    update: (data: any) => void;
}

export default function StepSports({ data, update }: Props) {
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
            <h3 className={styles.sectionTitle}>4. Encuesta Deportiva</h3>

            <div className={styles.formGroup}>
                <label className={styles.label}>Deporte Principal</label>
                <input
                    type="text"
                    name="sport"
                    className={styles.input}
                    placeholder="Ej: CrossFit, Running, Gimnasio..."
                    value={data.sport}
                    onChange={handleChange}
                />
            </div>

            <RadioGroup
                label="Frecuencia de Entrenamiento"
                name="trainingFrequency"
                options={[
                    { val: '1-2', label: '1-2 días/semana' },
                    { val: '3-4', label: '3-4 días/semana' },
                    { val: '5-6', label: '5-6 días/semana' },
                    { val: 'everyday', label: 'Todos los días' }
                ]}
            />

            <RadioGroup
                label="Nivel de Experiencia"
                name="experienceLevel"
                options={[
                    { val: 'beginner', label: 'Principiante (menos de 1 año)' },
                    { val: 'intermediate', label: 'Intermedio (1-3 años)' },
                    { val: 'advanced', label: 'Avanzado (más de 3 años)' }
                ]}
            />

            <div className={styles.formGroup}>
                <label className={styles.label}>Lesiones Actuales</label>
                <textarea
                    name="injuries"
                    className={styles.textarea}
                    placeholder="¿Tienes alguna molestia que te limite?"
                    value={data.injuries}
                    onChange={handleChange}
                />
            </div>
        </div>
    );
}
