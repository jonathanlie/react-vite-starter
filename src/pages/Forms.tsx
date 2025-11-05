import { motion } from 'framer-motion';
import { ContactForm } from '@/components/forms/ContactForm';
import { useAppStore } from '@/store/useAppStore';

/**
 * Forms Page Component
 *
 * Demonstrates:
 * - react-hook-form integration
 * - Form validation with Zod
 * - State management with Zustand
 */
export function Forms() {
  const { count, increment, decrement, reset } = useAppStore();

  const handleFormSubmit = async (data: {
    name: string;
    email: string;
    message: string;
  }) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log('Form submitted:', data);
    alert(`Form submitted successfully! Thank you, ${data.name}.`);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="page-container"
    >
      <h1>Forms & State Management</h1>

      <section className="section">
        <h2>React Hook Form Example</h2>
        <p>This form demonstrates react-hook-form with Zod validation:</p>
        <ContactForm onSubmit={handleFormSubmit} />
      </section>

      <section className="section">
        <h2>Zustand State Management</h2>
        <p>Counter example using Zustand store:</p>
        <div className="counter-demo">
          <div className="counter-value">Count: {count}</div>
          <div className="counter-buttons">
            <button onClick={decrement} type="button">
              Decrement
            </button>
            <button onClick={reset} type="button">
              Reset
            </button>
            <button onClick={increment} type="button">
              Increment
            </button>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
