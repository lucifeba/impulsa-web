"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './FormContainer.module.css';

import StepPersonalData from './StepPersonalData';
import StepAnthropometry from './StepAnthropometry';
import StepNutritional from './StepNutritional';
import StepSports from './StepSports';
import StepExpectations from './StepExpectations';

interface FormData {
    [key: string]: string;
}

const initialData: FormData = {
    // Step 1
    fullName: '', email: '', phone: '', age: '', gender: '', location: '', profession: '', workSchedule: '',
    // Step 2
    weight: '', height: '', usualWeight: '', fastingWeight: '', bodyFat: '', waist: '', hip: '',
    pathologies: '', medications: '', allergies: '', recentAnalysis: '', menstrualCycle: '',
    // Step 3
    goals: '', otherGoal: '', motivation: '', dietType: '', otherDiet: '', digestiveSymptoms: '',
    foodRelationship: '', mealsPerDay: '', mealTimes: '', sleep: '', sleepQuality: '',
    coffee: '', coffeeDetails: '', cookingSkill: '', cookingTime: '',
    // Step 4
    sport: '', trainingFrequency: '', trainingTypes: '', otherTraining: '', experienceLevel: '',
    trainingLocation: '', hasTrainer: '', injuries: '', recovery: '', otherActivities: '', sittingTime: '',
    // Step 5
    previousExperience: '', experienceDetails: '', expectations: '', followUpPreference: '',
    difficulties: '', otherDifficulty: '', wantsStressManagement: '', foodRestrictions: '', additionalComments: ''
};

export default function FormContainer() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState<FormData>(initialData);
    const [isSuccess, setIsSuccess] = useState(false);

    const totalSteps = 5;

    const updateData = (newData: Partial<FormData>) => {
        setFormData(prev => ({ ...prev, ...newData } as FormData));
    };

    const nextStep = () => {
        if (step < totalSteps) setStep(step + 1);
    };

    const prevStep = () => {
        if (step > 1) setStep(step - 1);
    };

    const submitForm = () => {
        setIsSuccess(true);
    };

    const formatField = (value: string) => {
        if (!value) return 'No especificado';
        // Convert comma-separated values to readable list
        if (value.includes(',')) {
            return value.split(',').filter(v => v).join(', ');
        }
        return value;
    };

    const generateMailto = () => {
        const subject = `Nueva Encuesta IMPULSA 1:1 - ${formData.fullName}`;
        const body = `FORMULARIO DE ACCESO – PROGRAMA 1:1 ENTRENAMIENTO Y NUTRICIÓN

═══════════════════════════════════════════════════
1. DATOS PERSONALES
═══════════════════════════════════════════════════
Nombre completo: ${formData.fullName}
Email: ${formData.email}
Teléfono: ${formData.phone}
Edad: ${formData.age}
Género: ${formatField(formData.gender)}
País y ciudad: ${formatField(formData.location)}
Profesión: ${formatField(formData.profession)}
Horarios laborales: ${formatField(formData.workSchedule)}

═══════════════════════════════════════════════════
2. PARÁMETROS ANTROPOMÉTRICOS Y SALUD
═══════════════════════════════════════════════════
Peso actual: ${formData.weight} kg
Altura: ${formData.height} cm
Peso habitual: ${formatField(formData.usualWeight)} kg
Peso en ayunas: ${formatField(formData.fastingWeight)}
% Grasa: ${formatField(formData.bodyFat)}
Cintura: ${formatField(formData.waist)} cm
Cadera: ${formatField(formData.hip)} cm
Patologías: ${formatField(formData.pathologies)}
Medicación/Suplementos: ${formatField(formData.medications)}
Alergias: ${formatField(formData.allergies)}
Análisis recientes: ${formatField(formData.recentAnalysis)}
Ciclo menstrual: ${formatField(formData.menstrualCycle)}

═══════════════════════════════════════════════════
3. ENCUESTA NUTRICIONAL Y DIGESTIVA
═══════════════════════════════════════════════════
Objetivos: ${formatField(formData.goals)}
Otro objetivo: ${formatField(formData.otherGoal)}
Motivación: ${formatField(formData.motivation)}
Tipo alimentación: ${formatField(formData.dietType)}
Otro tipo dieta: ${formatField(formData.otherDiet)}
Síntomas digestivos: ${formatField(formData.digestiveSymptoms)}
Relación con comida: ${formatField(formData.foodRelationship)}
Comidas/día: ${formatField(formData.mealsPerDay)}
Horarios comidas: ${formatField(formData.mealTimes)}
Horas sueño: ${formatField(formData.sleep)}
Calidad sueño: ${formatField(formData.sleepQuality)}
Café: ${formatField(formData.coffee)} - ${formatField(formData.coffeeDetails)}
Facilidad cocinar: ${formatField(formData.cookingSkill)}
Tiempo cocina: ${formatField(formData.cookingTime)}

═══════════════════════════════════════════════════
4. ACTIVIDAD FÍSICA Y ESTILO DE VIDA
═══════════════════════════════════════════════════
Deporte principal: ${formatField(formData.sport)}
Frecuencia: ${formatField(formData.trainingFrequency)}
Tipos entrenamiento: ${formatField(formData.trainingTypes)}
Otro entrenamiento: ${formatField(formData.otherTraining)}
Nivel: ${formatField(formData.experienceLevel)}
Ubicación: ${formatField(formData.trainingLocation)}
Tiene entrenador: ${formatField(formData.hasTrainer)}
Lesiones: ${formatField(formData.injuries)}
Recuperación: ${formatField(formData.recovery)}
Otras actividades: ${formatField(formData.otherActivities)}
Tiempo sentado: ${formatField(formData.sittingTime)}

═══════════════════════════════════════════════════
5. EXPECTATIVAS, LOGÍSTICA Y MOTIVACIÓN
═══════════════════════════════════════════════════
Experiencia previa: ${formatField(formData.previousExperience)}
Detalles experiencia: ${formatField(formData.experienceDetails)}
Expectativas: ${formatField(formData.expectations)}
Preferencia seguimiento: ${formatField(formData.followUpPreference)}
Dificultades: ${formatField(formData.difficulties)}
Otra dificultad: ${formatField(formData.otherDifficulty)}
Recomendaciones estrés: ${formatField(formData.wantsStressManagement)}
Alimentos excluir: ${formatField(formData.foodRestrictions)}
Comentarios adicionales: ${formatField(formData.additionalComments)}
`;

        return `mailto:info@apdsport.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    const openWhatsApp = () => {
        const phone = "34676002647";
        const text = `Hola APD SPORT, soy ${formData.fullName}. 

He completado el formulario IMPULSA 1:1 y os he enviado toda la información por correo electrónico.

¡Muchas gracias! Quedo a la espera de vuestra respuesta.`;

        const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
        window.open(url, '_blank');
    };

    const progress = (step / totalSteps) * 100;

    if (isSuccess) {
        return (
            <div className="text-center" style={{ padding: '2.5rem 0' }}>
                <div style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>🎉</div>
                <h2 className="text-3xl font-bold text-blue-900 mb-6">¡Casi hemos terminado!</h2>
                <p className="text-gray-600 mb-8 max-w-lg mx-auto">
                    Para finalizar, necesitamos que realices estos 2 pasos sencillos:
                </p>

                <div className="flex flex-col gap-4 max-w-md mx-auto">
                    <div className="p-6 bg-gray-50 rounded-xl border">
                        <span className="block text-sm font-bold text-gray-400 mb-2" style={{ textTransform: 'uppercase', letterSpacing: '0.1em' }}>PASO 1</span>
                        <h3 className="text-lg font-bold text-gray-800 mb-2">Enviar Datos</h3>
                        <p className="text-sm text-gray-500 mb-4">Esto abrirá tu correo para enviarnos tu ficha completa.</p>
                        <a
                            href={generateMailto()}
                            className="block w-full bg-gray-800 text-white font-bold rounded-lg hover:bg-black transition-colors"
                            style={{ padding: '0.75rem 1.5rem' }}
                        >
                            📧 Crear Correo con Datos
                        </a>
                    </div>

                    <div className="p-6 bg-green-50 rounded-xl border" style={{ borderColor: '#d1fae5' }}>
                        <span className="block text-sm font-bold mb-2" style={{ color: '#059669', textTransform: 'uppercase', letterSpacing: '0.1em' }}>PASO 2</span>
                        <h3 className="text-lg font-bold text-gray-800 mb-2">Confirmar por WhatsApp</h3>
                        <p className="text-sm text-gray-500 mb-4">Avísanos para que revisemos tu caso.</p>
                        <button
                            onClick={openWhatsApp}
                            className="block w-full text-white font-bold rounded-lg transition-colors"
                            style={{ padding: '0.75rem 1.5rem', backgroundColor: '#25D366' }}
                            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#128C7E'}
                            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#25D366'}
                        >
                            📱 Enviar WhatsApp
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <div className={styles.progressBarContainer}>
                <div
                    className={styles.progressBarFill}
                    style={{ width: `${progress}%` }}
                ></div>
            </div>

            <div className="mb-6 text-center">
                {step === 1 && <h2 className="text-xl font-bold text-blue-900">Datos Personales</h2>}
                {step === 2 && <h2 className="text-xl font-bold text-blue-900">Parámetros Antropométricos y Salud</h2>}
                {step === 3 && <h2 className="text-xl font-bold text-blue-900">Encuesta Nutricional y Digestiva</h2>}
                {step === 4 && <h2 className="text-xl font-bold text-blue-900">Actividad Física y Estilo de Vida</h2>}
                {step === 5 && <h2 className="text-xl font-bold text-blue-900">Expectativas, Logística y Motivación</h2>}
            </div>

            <div className={styles.stepContainer}>
                <AnimatePresence mode="wait">
                    {step === 1 && (
                        <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                            <StepPersonalData data={formData} update={updateData} />
                        </motion.div>
                    )}
                    {step === 2 && (
                        <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                            <StepAnthropometry data={formData} update={updateData} />
                        </motion.div>
                    )}
                    {step === 3 && (
                        <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                            <StepNutritional data={formData} update={updateData} />
                        </motion.div>
                    )}
                    {step === 4 && (
                        <motion.div key="step4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                            <StepSports data={formData} update={updateData} />
                        </motion.div>
                    )}
                    {step === 5 && (
                        <motion.div key="step5" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                            <StepExpectations data={formData} update={updateData} />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <div className={styles.navigationButtons}>
                <button
                    className={`${styles.btn} ${styles.btnSecondary}`}
                    onClick={prevStep}
                    disabled={step === 1}
                    style={{ visibility: step === 1 ? 'hidden' : 'visible' }}
                >
                    Atrás
                </button>

                {step < totalSteps ? (
                    <button className={`${styles.btn} ${styles.btnPrimary}`} onClick={nextStep}>
                        Siguiente
                    </button>
                ) : (
                    <button className={`${styles.btn} ${styles.btnPrimary}`} onClick={submitForm}>
                        FINALIZAR
                    </button>
                )}
            </div>
        </div>
    );
}
