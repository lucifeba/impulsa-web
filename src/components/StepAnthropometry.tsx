import styles from './FormCommon.module.css';

interface Props {
    data: any;
    update: (data: any) => void;
}

export default function StepAnthropometry({ data, update }: Props) {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        update({ [e.target.name]: e.target.value });
    };

    return (
        <div>
            <h3 className={styles.sectionTitle}>2. Parámetros Antropométricos y Salud</h3>

            <div className="grid grid-cols-2 gap-4">
                <div className={styles.formGroup}>
                    <label className={styles.label}>Peso Actual (kg)</label>
                    <input
                        type="number"
                        name="weight"
                        className={styles.input}
                        placeholder="Ej: 75.5"
                        step="0.1"
                        value={data.weight}
                        onChange={handleChange}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Altura (cm)</label>
                    <input
                        type="number"
                        name="height"
                        className={styles.input}
                        placeholder="Ej: 175"
                        value={data.height}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <div className={styles.formGroup}>
                <label className={styles.label}>Peso Habitual (si lo conoces)</label>
                <input
                    type="number"
                    name="usualWeight"
                    className={styles.input}
                    placeholder="Ej: 78"
                    step="0.1"
                    value={data.usualWeight}
                    onChange={handleChange}
                />
            </div>

            <div className={styles.formGroup}>
                <label className={styles.label}>Peso en Ayunas</label>
                <div className="flex gap-4 mt-2">
                    {['yes', 'no'].map((val) => (
                        <label key={val} className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="radio"
                                name="fastingWeight"
                                value={val}
                                checked={data.fastingWeight === val}
                                onChange={handleChange}
                                className="w-5 h-5"
                                style={{ accentColor: '#0056b3' }}
                            />
                            <span>{val === 'yes' ? 'Sí' : 'No'}</span>
                        </label>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className={styles.formGroup}>
                    <label className={styles.label}>% Grasa (si lo conoces)</label>
                    <input
                        type="text"
                        name="bodyFat"
                        className={styles.input}
                        placeholder="Ej: 15%"
                        value={data.bodyFat}
                        onChange={handleChange}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Cintura (cm)</label>
                    <input
                        type="number"
                        name="waist"
                        className={styles.input}
                        placeholder="Ej: 80"
                        value={data.waist}
                        onChange={handleChange}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Cadera (cm)</label>
                    <input
                        type="number"
                        name="hip"
                        className={styles.input}
                        placeholder="Ej: 95"
                        value={data.hip}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <div className={styles.formGroup}>
                <label className={styles.label}>¿Tienes alguna patología diagnosticada?</label>
                <textarea
                    name="pathologies"
                    className={styles.textarea}
                    placeholder="Ej: Hipotiroidismo, SII, celiaquía..."
                    value={data.pathologies}
                    onChange={handleChange}
                />
            </div>

            <div className={styles.formGroup}>
                <label className={styles.label}>¿Tomas medicación o suplementos?</label>
                <textarea
                    name="medications"
                    className={styles.textarea}
                    placeholder="Especificar nombre y dosis si es posible"
                    value={data.medications}
                    onChange={handleChange}
                />
            </div>

            <div className={styles.formGroup}>
                <label className={styles.label}>Alergias o intolerancias conocidas</label>
                <input
                    type="text"
                    name="allergies"
                    className={styles.input}
                    placeholder="Ej: Lactosa, frutos secos..."
                    value={data.allergies}
                    onChange={handleChange}
                />
            </div>

            <div className={styles.formGroup}>
                <label className={styles.label}>¿Has realizado análisis recientes?</label>
                <div className="flex gap-4 mt-2">
                    {['yes', 'no'].map((val) => (
                        <label key={val} className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="radio"
                                name="recentAnalysis"
                                value={val}
                                checked={data.recentAnalysis === val}
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
                <label className={styles.label}>Ciclo Menstrual (si aplica)</label>
                <div className="flex flex-col gap-2 mt-2">
                    {['regular', 'irregular', 'not_applicable'].map((val) => (
                        <label key={val} className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-blue-50 transition-colors bg-white">
                            <input
                                type="radio"
                                name="menstrualCycle"
                                value={val}
                                checked={data.menstrualCycle === val}
                                onChange={handleChange}
                                className="w-5 h-5"
                                style={{ accentColor: '#0056b3' }}
                            />
                            <span className="text-gray-700 font-medium">
                                {val === 'regular' ? 'Regular' : val === 'irregular' ? 'Irregular' : 'No aplica'}
                            </span>
                        </label>
                    ))}
                </div>
            </div>
        </div>
    );
}
