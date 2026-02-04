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
                <label className={styles.label} htmlFor="fullName">Nombre Completo</label>
                <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    className={styles.input}
                    placeholder="Ej: Juan Pérez"
                    value={data.fullName}
                    onChange={handleChange}
                />
            </div>

            <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="email">Correo Electrónico</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    className={styles.input}
                    placeholder="juan@ejemplo.com"
                    value={data.email}
                    onChange={handleChange}
                />
            </div>

            <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="phone">Teléfono / WhatsApp</label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className={styles.input}
                    placeholder="+34 600 000 000"
                    value={data.phone}
                    onChange={handleChange}
                />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="age">Edad</label>
                    <input
                        type="number"
                        id="age"
                        name="age"
                        className={styles.input}
                        value={data.age}
                        onChange={handleChange}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Género</label>
                    <div className="flex flex-col gap-2 mt-2">
                        <label className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-blue-50 transition-colors bg-white">
                            <input
                                type="radio"
                                name="gender"
                                value="male"
                                checked={data.gender === 'male'}
                                onChange={handleChange}
                                className="w-5 h-5"
                                style={{ accentColor: '#0056b3' }}
                            />
                            <span className="text-gray-700 font-medium">Masculino</span>
                        </label>
                        <label className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-blue-50 transition-colors bg-white">
                            <input
                                type="radio"
                                name="gender"
                                value="female"
                                checked={data.gender === 'female'}
                                onChange={handleChange}
                                className="w-5 h-5"
                                style={{ accentColor: '#0056b3' }}
                            />
                            <span className="text-gray-700 font-medium">Femenino</span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
}
