import styles from './FormCommon.module.css';

interface Props {
    data: any;
    update: (data: any) => void;
}

export default function StepAnthropometry({ data, update }: Props) {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        update({ [e.target.name]: e.target.value });
    };

    return (
        <div>
            <h3 className={styles.sectionTitle}>2. Antropometría</h3>
            <p className="text-sm text-gray-500 mb-6">Datos básicos para calcular tus requerimientos.</p>

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
                <label className={styles.label}>Porcentaje de Grasa (estimado/opcional)</label>
                <input
                    type="text"
                    name="bodyFat"
                    className={styles.input}
                    placeholder="Ej: 15% o 'No lo sé'"
                    value={data.bodyFat}
                    onChange={handleChange}
                />
            </div>

            <div className={styles.formGroup}>
                <label className={styles.label}>¿Te has pesado en ayunas hoy?</label>
                <div className="flex gap-4 mt-2">
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input
                            type="radio"
                            name="fastingWeight"
                            value="yes"
                            checked={data.fastingWeight === 'yes'}
                            onChange={handleChange}
                            className="w-5 h-5"
                            style={{ accentColor: '#0056b3' }}
                        />
                        <span>Sí</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input
                            type="radio"
                            name="fastingWeight"
                            value="no"
                            checked={data.fastingWeight === 'no'}
                            onChange={handleChange}
                            className="w-5 h-5"
                            style={{ accentColor: '#0056b3' }}
                        />
                        <span>No</span>
                    </label>
                </div>
            </div>
        </div>
    );
}
