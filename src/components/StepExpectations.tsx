import styles from './FormCommon.module.css';

interface Props {
    data: any;
    update: (data: any) => void;
}

export default function StepExpectations({ data, update }: Props) {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        update({ [e.target.name]: e.target.value });
    };

    const handleCheckboxChange = (field: string, value: string) => {
        const current = data[field] ? data[field].split(',').filter((v: string) => v) : [];
        const index = current.indexOf(value);

        if (index > -1) {
            current.splice(index, 1);
        } else {
            current.push(value);
        }

        update({ [field]: current.join(',') });
    };

    const isChecked = (field: string, value: string) => {
        if (!data[field]) return false;
        return data[field].split(',').includes(value);
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

    const CheckboxGroup = ({ label, field, options }: { label: string, field: string, options: { val: string, label: string }[] }) => (
        <div className={styles.formGroup}>
            <label className={styles.label}>{label}</label>
            <div className="grid grid-cols-2 gap-2 mt-2">
                {options.map((opt) => (
                    <label key={opt.val} className="flex items-center gap-2 p-2 border rounded cursor-pointer hover:bg-blue-50 transition-colors bg-white">
                        <input
                            type="checkbox"
                            checked={isChecked(field, opt.val)}
                            onChange={() => handleCheckboxChange(field, opt.val)}
                            className="w-4 h-4"
                            style={{ accentColor: '#0056b3' }}
                        />
                        <span className="text-sm text-gray-700">{opt.label}</span>
                    </label>
                ))}
            </div>
        </div>
    );

    return (
        <div>
            <h3 className={styles.sectionTitle}>5. Expectativas, Logística y Motivación</h3>

            <div className={styles.formGroup}>
                <label className={styles.label}>¿Tienes experiencia previa con planes de nutrición o entrenamiento estructurado?</label>
                <div className="flex gap-4 mt-2 mb-2">
                    {['yes', 'no'].map((val) => (
                        <label key={val} className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="radio"
                                name="previousExperience"
                                value={val}
                                checked={data.previousExperience === val}
                                onChange={handleChange}
                                className="w-5 h-5"
                                style={{ accentColor: '#0056b3' }}
                            />
                            <span>{val === 'yes' ? 'Sí' : 'No'}</span>
                        </label>
                    ))}
                </div>
                <textarea
                    name="experienceDetails"
                    className={styles.textarea}
                    placeholder="¿Cuál fue tu experiencia?"
                    value={data.experienceDetails}
                    onChange={handleChange}
                />
            </div>

            <div className={styles.formGroup}>
                <label className={styles.label}>¿Qué esperas obtener de este programa 1:1?</label>
                <textarea
                    name="expectations"
                    className={styles.textarea}
                    placeholder="Explica tus expectativas y metas específicas..."
                    value={data.expectations}
                    onChange={handleChange}
                />
            </div>

            <RadioGroup
                label="¿Cómo te gustaría que fuera tu seguimiento?"
                name="followUpPreference"
                options={[
                    { val: 'strict_daily', label: 'Rigurosamente diario' },
                    { val: 'flexible_constant', label: 'Flexible pero constante' },
                    { val: 'key_milestones', label: 'Solo hitos clave' },
                ]}
            />

            <CheckboxGroup
                label="¿Cuál consideras que es tu mayor dificultad a la hora de cuidarte? (puedes seleccionar varios)"
                field="difficulties"
                options={[
                    { val: 'organization', label: 'Organización' },
                    { val: 'lack_time', label: 'Falta de tiempo' },
                    { val: 'anxiety', label: 'Ansiedad o hambre emocional' },
                    { val: 'demotivation', label: 'Desmotivación' },
                    { val: 'lack_knowledge', label: 'Falta de conocimientos' },
                ]}
            />

            <div className={styles.formGroup}>
                <label className={styles.label}>Otra dificultad</label>
                <input
                    type="text"
                    name="otherDifficulty"
                    className={styles.input}
                    placeholder="Especifica si hay otra dificultad"
                    value={data.otherDifficulty}
                    onChange={handleChange}
                />
            </div>

            <div className={styles.formGroup}>
                <label className={styles.label}>¿Te gustaría incluir recomendaciones para mejorar descanso, concentración o gestión del estrés?</label>
                <div className="flex gap-4 mt-2">
                    {['yes', 'no'].map((val) => (
                        <label key={val} className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="radio"
                                name="wantsStressManagement"
                                value={val}
                                checked={data.wantsStressManagement === val}
                                onChange={handleChange}
                                className="w-5 h-5"
                                style={{ accentColor: '#0056b3' }}
                            />
                            <span>{val === 'yes' ? 'Sí' : 'No'}</span>
                        </label>
                    ))}
                </div>
            </div>

            <div className={styles.formGroup}>
                <label className={styles.label}>¿Hay algún alimento o grupo que no quieras incluir bajo ningún concepto?</label>
                <input
                    type="text"
                    name="foodRestrictions"
                    className={styles.input}
                    placeholder="Ej: Carne, lácteos, legumbres..."
                    value={data.foodRestrictions}
                    onChange={handleChange}
                />
            </div>

            <div className={styles.formGroup}>
                <label className={styles.label}>¿Algún comentario, observación o necesidad que quieras que tenga en cuenta?</label>
                <textarea
                    name="additionalComments"
                    className={styles.textarea}
                    placeholder="Cualquier información adicional que consideres importante..."
                    value={data.additionalComments}
                    onChange={handleChange}
                />
            </div>
        </div>
    );
}
