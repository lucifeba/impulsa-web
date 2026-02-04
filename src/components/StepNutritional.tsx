import styles from './FormCommon.module.css';

interface Props {
    data: any;
    update: (data: any) => void;
}

export default function StepNutritional({ data, update }: Props) {
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
            <h3 className={styles.sectionTitle}>3. Encuesta Nutricional y Digestiva</h3>

            <CheckboxGroup
                label="Objetivo Principal (puedes seleccionar varios)"
                field="goals"
                options={[
                    { val: 'fat_loss', label: 'Pérdida de grasa' },
                    { val: 'muscle_gain', label: 'Ganancia muscular' },
                    { val: 'digestive', label: 'Mejora digestiva' },
                    { val: 'performance', label: 'Rendimiento deportivo' },
                    { val: 'healthy_habits', label: 'Hábitos saludables' },
                ]}
            />

            <div className={styles.formGroup}>
                <label className={styles.label}>Otro objetivo</label>
                <input
                    type="text"
                    name="otherGoal"
                    className={styles.input}
                    placeholder="Especifica otro objetivo si lo hay"
                    value={data.otherGoal}
                    onChange={handleChange}
                />
            </div>

            <div className={styles.formGroup}>
                <label className={styles.label}>¿Cuál es tu motivación personal para empezar este proceso?</label>
                <textarea
                    name="motivation"
                    className={styles.textarea}
                    placeholder="Explica qué te impulsa y qué quieres conseguir..."
                    value={data.motivation}
                    onChange={handleChange}
                />
            </div>

            <RadioGroup
                label="Tipo de alimentación habitual"
                name="dietType"
                options={[
                    { val: 'omnivore', label: 'Omnívora' },
                    { val: 'vegetarian', label: 'Vegetariana' },
                    { val: 'vegan', label: 'Vegana' },
                    { val: 'pescatarian', label: 'Pescetariana' },
                ]}
            />

            <div className={styles.formGroup}>
                <label className={styles.label}>Otro tipo de alimentación</label>
                <input
                    type="text"
                    name="otherDiet"
                    className={styles.input}
                    placeholder="Ej: Cetogénica, Paleo..."
                    value={data.otherDiet}
                    onChange={handleChange}
                />
            </div>

            <CheckboxGroup
                label="¿Sufres de alguno de los siguientes síntomas digestivos con frecuencia?"
                field="digestiveSymptoms"
                options={[
                    { val: 'bloating', label: 'Hinchazón' },
                    { val: 'gas', label: 'Gases' },
                    { val: 'burping', label: 'Eructos' },
                    { val: 'reflux', label: 'Reflujo' },
                    { val: 'diarrhea', label: 'Diarrea' },
                    { val: 'constipation', label: 'Estreñimiento' },
                    { val: 'nausea', label: 'Náuseas' },
                    { val: 'abdominal_pain', label: 'Dolor abdominal' },
                    { val: 'slow_digestion', label: 'Digestión lenta' },
                ]}
            />

            <RadioGroup
                label="Relación con la comida"
                name="foodRelationship"
                options={[
                    { val: 'neutral', label: 'Neutra' },
                    { val: 'anxiety', label: 'Ansiedad por comer' },
                    { val: 'emotional', label: 'Comer emocional' },
                    { val: 'binge', label: 'Episodios de atracón' },
                ]}
            />

            <div className="grid grid-cols-2 gap-4">
                <div className={styles.formGroup}>
                    <label className={styles.label}>Número de comidas diarias</label>
                    <input
                        type="number"
                        name="mealsPerDay"
                        className={styles.input}
                        placeholder="Ej: 4"
                        value={data.mealsPerDay}
                        onChange={handleChange}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Horas de sueño nocturno</label>
                    <input
                        type="text"
                        name="sleep"
                        className={styles.input}
                        placeholder="Ej: 7-8h"
                        value={data.sleep}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <div className={styles.formGroup}>
                <label className={styles.label}>Horarios aproximados de comidas</label>
                <input
                    type="text"
                    name="mealTimes"
                    className={styles.input}
                    placeholder="Ej: 8:00, 13:00, 16:00, 21:00"
                    value={data.mealTimes}
                    onChange={handleChange}
                />
            </div>

            <RadioGroup
                label="Calidad del sueño"
                name="sleepQuality"
                options={[
                    { val: 'good', label: 'Buena' },
                    { val: 'regular', label: 'Regular' },
                    { val: 'bad', label: 'Mala' },
                ]}
            />

            <div className={styles.formGroup}>
                <label className={styles.label}>¿Tomas café o estimulantes?</label>
                <div className="flex gap-4 mt-2 mb-2">
                    {['yes', 'no'].map((val) => (
                        <label key={val} className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="radio"
                                name="coffee"
                                value={val}
                                checked={data.coffee === val}
                                onChange={handleChange}
                                className="w-5 h-5"
                                style={{ accentColor: '#0056b3' }}
                            />
                            <span>{val === 'yes' ? 'Sí' : 'No'}</span>
                        </label>
                    ))}
                </div>
                <input
                    type="text"
                    name="coffeeDetails"
                    className={styles.input}
                    placeholder="Cuánto y a qué hora"
                    value={data.coffeeDetails}
                    onChange={handleChange}
                />
            </div>

            <RadioGroup
                label="¿Tienes facilidad para cocinar?"
                name="cookingSkill"
                options={[
                    { val: 'yes', label: 'Sí' },
                    { val: 'no', label: 'No' },
                    { val: 'depends', label: 'Depende del día' },
                ]}
            />

            <RadioGroup
                label="¿Cuánto tiempo puedes dedicar a preparar tus comidas?"
                name="cookingTime"
                options={[
                    { val: 'less_15', label: '< 15 min' },
                    { val: '15_30', label: '15-30 min' },
                    { val: 'more_30', label: '> 30 min' },
                ]}
            />
        </div>
    );
}
