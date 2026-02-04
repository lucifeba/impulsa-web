import styles from './FormCommon.module.css';

interface Props {
    data: any;
    update: (data: any) => void;
}

export default function StepPersonalData({ data, update }: Props) {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        update({ [e.target.name]: e.target.value });
    };

    return (
        <div>
            <h3 className={styles.sectionTitle}>1. Datos Personales</h3>

            <div className={styles.formGroup}>
                <label className={styles.label}>Nombre Completo</label>
                <input
                    type="text"
                    name="fullName"
                    className={styles.input}
                    placeholder="Ej: Juan Pérez"
                    value={data.fullName}
                    onChange={handleChange}
                />
            </div>

            <div className={styles.formGroup}>
                <label className={styles.label}>Email</label>
                <input
                    type="email"
                    name="email"
                    className={styles.input}
                    placeholder="juan@ejemplo.com"
                    value={data.email}
                    onChange={handleChange}
                />
            </div>

            <div className={styles.formGroup}>
                <label className={styles.label}>Teléfono</label>
                <input
                    type="tel"
                    name="phone"
                    className={styles.input}
                    placeholder="+34 600 000 000"
                    value={data.phone}
                    onChange={handleChange}
                />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Edad</label>
                    <input
                        type="number"
                        name="age"
                        className={styles.input}
                        value={data.age}
                        onChange={handleChange}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Género</label>
                    <div className="flex flex-col gap-2 mt-2">
                        {['male', 'female', 'other', 'prefer_not'].map((val) => (
                            <label key={val} className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-blue-50 transition-colors bg-white">
                                <input
                                    type="radio"
                                    name="gender"
                                    value={val}
                                    checked={data.gender === val}
                                    onChange={handleChange}
                                    className="w-5 h-5"
                                    style={{ accentColor: '#0056b3' }}
                                />
                                <span className="text-gray-700 font-medium">
                                    {val === 'male' ? 'Hombre' : val === 'female' ? 'Mujer' : val === 'other' ? 'Otro' : 'Prefiero no decirlo'}
                                </span>
                            </label>
                        ))}
                    </div>
                </div>
            </div>

            <div className={styles.formGroup}>
                <label className={styles.label}>País y Ciudad de Residencia</label>
                <input
                    type="text"
                    name="location"
                    className={styles.input}
                    placeholder="Ej: España, Madrid"
                    value={data.location}
                    onChange={handleChange}
                />
            </div>

            <div className={styles.formGroup}>
                <label className={styles.label}>Profesión</label>
                <input
                    type="text"
                    name="profession"
                    className={styles.input}
                    placeholder="Ej: Ingeniero, Profesor, etc."
                    value={data.profession}
                    onChange={handleChange}
                />
            </div>

            <div className={styles.formGroup}>
                <label className={styles.label}>Horarios Laborales Habituales</label>
                <input
                    type="text"
                    name="workSchedule"
                    className={styles.input}
                    placeholder="Ej: 9:00 - 18:00, turnos rotativos, etc."
                    value={data.workSchedule}
                    onChange={handleChange}
                />
            </div>
        </div>
    );
}
