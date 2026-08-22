'use server';

export async function handleContactSubmit(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;

  if (!name || !email || !message) {
    return { success: false, error: 'All fields are required.' };
  }

  try {
    console.log('New Message Received:', { name, email, message });

    // Simulate database operation delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    return { success: true, message: 'Thank you. Your message has been sent.' };
  } catch (error) {
    console.error('Error handling submission:', error);
    return { success: false, error: 'An error occurred. Please try again later.' };
  }
}