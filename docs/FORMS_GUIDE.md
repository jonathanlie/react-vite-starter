# Forms Guide - React Hook Form

This guide covers form handling using `react-hook-form` with Zod validation.

## Installation

Already installed:

- `react-hook-form` - Form state management
- `zod` - Schema validation
- `@hookform/resolvers` - Zod resolver for react-hook-form

## Basic Usage

### 1. Define Schema

```typescript
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;
```

### 2. Setup Form Hook

```typescript
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const {
  register,
  handleSubmit,
  formState: { errors, isSubmitting },
  reset,
} = useForm<ContactFormData>({
  resolver: zodResolver(contactSchema),
});
```

### 3. Create Form Component

```typescript
<form onSubmit={handleSubmit(onSubmit)}>
  <div>
    <label htmlFor="name">Name</label>
    <input
      id="name"
      {...register('name')}
      aria-invalid={errors.name ? 'true' : 'false'}
    />
    {errors.name && (
      <span role="alert">{errors.name.message}</span>
    )}
  </div>

  <button type="submit" disabled={isSubmitting}>
    Submit
  </button>
</form>
```

## Example Component

See `src/components/forms/ContactForm.tsx` for a complete example with:

- Form validation
- Error handling
- Accessibility features
- TypeScript types

## Features

### Validation

- Zod schemas for type-safe validation
- Automatic error messages
- Real-time validation

### Accessibility

- ARIA labels and attributes
- Error announcements for screen readers
- Proper form labeling

### Type Safety

- TypeScript types from Zod schemas
- Type-safe form data
- Compile-time error checking

## Best Practices

1. **Always use Zod schemas** for validation
2. **Include ARIA attributes** for accessibility
3. **Show error messages** clearly to users
4. **Disable submit button** during submission
5. **Reset form** after successful submission

## Common Patterns

### Async Submission

```typescript
const onSubmit = async (data: FormData) => {
  try {
    await fetch('/api/submit', {
      method: 'POST',
      body: JSON.stringify(data),
    });
    reset();
  } catch (error) {
    // Handle error
  }
};
```

### Custom Validation

```typescript
const schema = z
  .object({
    password: z.string().min(8),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });
```

### Conditional Fields

```typescript
const schema = z
  .object({
    hasAccount: z.boolean(),
    email: z.string().optional(),
  })
  .refine((data) => {
    if (data.hasAccount) {
      return data.email !== undefined;
    }
    return true;
  });
```

## Testing Forms

Test forms using React Testing Library:

```typescript
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ContactForm } from '@/components/forms/ContactForm';

it('validates required fields', async () => {
  const user = userEvent.setup();
  render(<ContactForm />);

  await user.click(screen.getByRole('button', { name: /submit/i }));

  expect(screen.getByText(/name must be/i)).toBeInTheDocument();
});
```
