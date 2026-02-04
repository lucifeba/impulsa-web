"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './FormContainer.module.css';

import StepPersonalData from './StepPersonalData';
import StepAnthropometry from './StepAnthropometry';
import StepNutritional from './StepNutritional';
import StepSports from './StepSports';

interface FormData {
    // Personal
    fullName: string;
    email: string;
    phone: string;
    age: string;
    gender: string;

    // Anthropometry
    weight: string;
    height: string;
    bodyFat: string;
    fastingWeight: string;

    // Nutritional
    goal: string;
    motivation: string;
    pathologies: string;
    digestion: string;
    sleep: string;
    mealsPerDay: string;
    cookingTime: string;

    // Sports
    sport: string;
    trainingFrequency: string;
    injuries: string;
    experienceLevel: string;
}

const initialData: FormData = {
    fullName: '', email: '', phone: '', age: '', gender: '',
    weight: '', height: '', bodyFat: '', fastingWeight: '',
    goal: '', motivation: '', pathologies: '', digestion: '',
    sleep: '', mealsPerDay: '', cookingTime: '',
    sport: '', trainingFrequency: '', injuries: '', experienceLevel: ''
};

export default function FormContainer() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState<FormData>(initialData);
    const [isSuccess, setIsSuccess] = useState(false);

    const totalSteps = 4;

    const updateData = (newData: Partial<FormData>) => {
        setFormData(prev => ({ ...prev, ...newData }));
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

    const generateMailto = () => {
        const subject = `Nueva Encuesta IMPULSA - ${formData.fullName}`;
        const body = `DATOS PERSONALES
────────────────
Nombre: ${formData.fullName}
Email: ${formData.email}
Teléfono: ${formData.phone}
Edad: ${formData.age}
Género: ${formData.gender}

ANTROPOMETRÍA
─────────────
Peso: ${formData.weight} kg
Altura: ${formData.height} cm
% Grasa: ${formData.bodyFat || 'No especificado'}
Peso en ayunas: ${formData.fastingWeight}

NUTRICIÓN
─────────
Objetivo: ${formData.goal}
Motivación: ${formData.motivation}
Digestión: ${formData.digestion}
Patologías: ${formData.pathologies || 'Ninguna'}
Comidas/día: ${formData.mealsPerDay}
Disponibilidad cocina: ${formData.cookingTime}
Sueño: ${formData.sleep}

DEPORTE
───────
Deporte: ${formData.sport}
Frecuencia: ${formData.trainingFrequency}
Nivel: ${formData.experienceLevel}
Lesiones: ${formData.injuries || 'Ninguna'}
`;

        return `mailto:info@apdsport.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    const openWhatsApp = () => {
        const phone = "34676002647";
        const text = `Hola APD SPORT, soy ${formData.fullName}. 

He completado el formulario IMPULSA y os he enviado toda la información por correo electrónico.

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
                        <p className="text-sm text-gray-500 mb-4">Esto abrirá tu correo para enviarnos tu ficha.</p>
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
                {step === 2 && <h2 className="text-xl font-bold text-blue-900">Antropometría</h2>}
                {step === 3 && <h2 className="text-xl font-bold text-blue-900">Encuesta Nutricional</h2>}
                {step === 4 && <h2 className="text-xl font-bold text-blue-900">Encuesta Deportiva</h2>}
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
